#!/bin/bash

# Function to get total count of variables
get_total_count() {
    gh api repos/ZPreviewOrg/ZPreview/actions/variables -X GET --jq '.total_count'
}

# Function to process one page
process_page() {
    local page=$1
    gh api repos/ZPreviewOrg/ZPreview/actions/variables \
        -X GET \
        -f page="$page" \
        -f per_page="30" \
        --jq '.variables' | \
    jq 'map({(.name): .value}) | add | to_entries | map("\(.key): |\n" + (.value | split("\n") | map("  " + .) | join("\n")))| join("\n")' | \
    sed 's/\\r//g' | \
    sed 's/\\n/\n/g' | \
    grep -v '^[0-9]\+: |$'
}

# Get total count and calculate pages
total_count=$(get_total_count)
per_page=30  # GitHub's default per_page value
pages=$(( (total_count + per_page - 1) / per_page ))  # Ceiling division

# Process each page silently
for (( page=1; page<=pages; page++ )); do
    process_page $page
done