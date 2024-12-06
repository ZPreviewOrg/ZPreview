#!/bin/bash

# Check prerequisites
if ! command -v gh &> /dev/null; then
    echo "Error: GitHub CLI (gh) is not installed" >&2
    exit 1
fi

if ! gh auth status &> /dev/null; then
    echo "Error: Not authenticated. Run 'gh auth login'" >&2
    exit 1
fi

# Validate arguments
if [ $# -ne 3 ]; then
    echo "Usage: $0 <project-id> <variable-prefix> <owner/repo>" >&2
    echo "Example: $0 PVT_123 MY_PROJECT octocat/hello-world" >&2
    exit 1
fi

# GraphQL query to get all fields and their details
query='
query($projectId: ID!) {
    node(id: $projectId) {
        ... on ProjectV2 {
            fields(first: 100) {
                nodes {
                    ... on ProjectV2Field {
                        id
                        name
                        dataType
                    }
                    ... on ProjectV2SingleSelectField {
                        id
                        name
                        dataType
                        options {
                            id
                            name
                        }
                    }
                    ... on ProjectV2IterationField {
                        id
                        name
                        dataType
                        configuration {
                            iterations {
                                id
                                title
                            }
                        }
                    }
                }
            }
        }
    }
}'

# Fetch fields data
response=$(gh api graphql -f query="$query" -f projectId="$1")

if [ $? -ne 0 ] || [ -z "$response" ]; then
    echo "Error: Failed to fetch fields data" >&2
    exit 1
fi

# Function to create valid variable name
create_variable_name() {
    local prefix="$1"
    local field_name="$2"
    local suffix="$3"
    
    # Convert to uppercase and replace spaces/special chars with underscore
    clean_name=$(echo "${field_name}_${suffix}" | tr '[:lower:]' '[:upper:]' | sed 's/[^A-Z0-9]/_/g' | sed 's/__*/_/g' | sed 's/^_//g' | sed 's/_$//g')
    echo "${prefix}_${clean_name}_ID"
}

# Process each field
echo "$response" | jq -c '.data.node.fields.nodes[]' | while read -r field; do
    field_name=$(echo "$field" | jq -r '.name')
    field_id=$(echo "$field" | jq -r '.id')
    field_type=$(echo "$field" | jq -r '.dataType')
    
    # Set field ID variable
    field_variable_name=$(create_variable_name "$2" "$field_name" "FIELD")
    echo "Setting $field_variable_name=$field_id"
    gh variable set "$field_variable_name" --body "$field_id" --repo "$3" || echo "Warning: Failed to set $field_variable_name" >&2

    # Process field options if they exist (for single select fields)
    if echo "$field" | jq -e '.options' > /dev/null; then
        echo "$field" | jq -c '.options[]' | while read -r option; do
            option_name=$(echo "$option" | jq -r '.name')
            option_id=$(echo "$option" | jq -r '.id')
            option_variable_name=$(create_variable_name "$2" "$field_name" "${option_name}")
            echo "Setting $option_variable_name=$option_id"
            gh variable set "$option_variable_name" --body "$option_id" --repo "$3" || echo "Warning: Failed to set $option_variable_name" >&2
        done
    fi

    # Process iterations if they exist (for iteration fields)
    if echo "$field" | jq -e '.configuration.iterations' > /dev/null; then
        echo "$field" | jq -c '.configuration.iterations[]' | while read -r iteration; do
            iteration_title=$(echo "$iteration" | jq -r '.title')
            iteration_id=$(echo "$iteration" | jq -r '.id')
            iteration_variable_name=$(create_variable_name "$2" "$field_name" "_${iteration_title}")
            echo "Setting $iteration_variable_name=$iteration_id"
            gh variable set "$iteration_variable_name" --body "$iteration_id" --repo "$3" || echo "Warning: Failed to set $iteration_variable_name" >&2
        done
    fi
done

echo "All fields and their values have been set as GitHub Actions variables in $3"