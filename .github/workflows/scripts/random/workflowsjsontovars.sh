#!/bin/bash

# Function to check if a command exists
check_command() {
    if ! command -v "$1" &> /dev/null; then
        echo "Error: $1 is not installed. Please install it first."
        exit 1
    fi
}

# Function to check GitHub CLI authentication
check_gh_auth() {
    if ! gh auth status &> /dev/null; then
        echo "Error: GitHub CLI is not authenticated. Please run 'gh auth login' first."
        exit 1
    fi
}

# Function to display usage
show_usage() {
    echo "Usage: $0 <repository>"
    echo "Example: $0 owner/repository"
    exit 1
}

# Check if repository argument is provided
if [ $# -ne 1 ]; then
    show_usage
fi

REPO="$1"

# Validate repository format
if [[ ! "$REPO" =~ ^[A-Za-z0-9_.-]+/[A-Za-z0-9_.-]+$ ]]; then
    echo "Error: Invalid repository format. Please use the format: owner/repository"
    show_usage
fi

# Check for required commands
check_command "jq"
check_command "gh"

# Check GitHub CLI authentication
check_gh_auth

# Verify repository exists and is accessible
if ! gh repo view "$REPO" &> /dev/null; then
    echo "Error: Repository '$REPO' does not exist or is not accessible"
    exit 1
fi

# Read from stdin and process each workflow
jq -c '.[] | .workflows[]' | while read -r workflow; do
    # Extract the workflow key and rules
    key=$(echo "$workflow" | jq -r '.key')
    rules=$(echo "$workflow" | jq -r '.rules')
    
    # Set the GitHub variable using gh cli with repository
    echo "Setting variable for workflow: $key in $REPO"
    gh variable set "$key" --body "$rules" --repo "$REPO"
    
    # Optional: Add error checking
    if [ $? -eq 0 ]; then
        echo "✓ Successfully set variable for $key in $REPO"
    else
        echo "✗ Failed to set variable for $key in $REPO"
    fi
done