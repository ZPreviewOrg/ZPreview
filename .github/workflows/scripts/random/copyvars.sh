#!/bin/bash

if ! command -v gh &> /dev/null; then
    echo "Error: GitHub CLI (gh) is not installed"
    exit 1
fi

if ! gh auth status &> /dev/null; then
    echo "Error: Not authenticated. Run 'gh auth login'"
    exit 1
fi

if [ "$#" -ne 2 ]; then
    echo "Usage: $0 source-repo target-repo"
    echo "Example: $0 owner/source-repo owner/target-repo"
    exit 1
fi

SOURCE_REPO="$1"
TARGET_REPO="$2"

echo "Copying variables from $SOURCE_REPO to $TARGET_REPO"

export MSYS2_ARG_CONV_EXCL="*"

PAGE=1
while true; do
    VARS=$(gh api "repos/${SOURCE_REPO}/actions/variables?per_page=100&page=${PAGE}" --jq '.variables[]')
    
    if [ -z "$VARS" ]; then
        break
    fi

    echo "$VARS" | while read -r var; do
        NAME=$(echo "$var" | jq -r '.name')
        VALUE=$(echo "$var" | jq -r '.value')
        
        echo "Copying: $NAME"
        echo -n "$VALUE" | gh variable set "$NAME" --repo "$TARGET_REPO"
        
        if [ $? -eq 0 ]; then
            echo "✓ Copied: $NAME"
        else
            echo "✗ Failed: $NAME"
        fi
    done
    
    ((PAGE++))
done

echo "Complete!"