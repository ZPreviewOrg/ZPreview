# Custom GitHub Actions

This directory contains custom actions used in the grant application and review process.

## Available Actions

### [pr-management](./pr-management)
Manages pull requests for grant application content changes, including creation and updates.

### [save-content](./save-content)
Saves issue content to properly formatted markdown files in the `_grants` directory.

### [protection-labels-notice](./protection-labels-notice)
Applies protection labels and creates notices for protected content.

### [monitor-changes](./monitor-changes)
Monitors and reports changes to protected grant application content.

## Usage

These actions are primarily used by the grant review workflow. See [workflows documentation](../workflows) for more details.

## Development

When modifying these actions:
1. Update the action.yml file with any new inputs/outputs
2. Update the corresponding README.md in the action's directory
3. Test changes in a feature branch before merging to main
