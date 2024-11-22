# Custom GitHub Actions

This directory contains custom actions used in the grant application and review process. These actions work together to automate the grant submission, review, and management workflow.

## Available Actions

### [pr-management](./pr-management)
- Creates and updates pull requests for grant applications
- Handles branch management and PR synchronization
- Ensures proper PR titles and descriptions
- Manages PR labels and reviewers

### [save-content](./save-content)
- Converts issue content to properly formatted markdown files
- Validates grant application format and required fields
- Generates unique grant IDs and filenames
- Saves files to the `_grants` directory with correct metadata

### [protection-labels-notice](./protection-labels-notice)
- Applies standardized protection labels to issues and PRs
- Creates automated notices about content protection
- Ensures compliance with grant review policies
- Manages access control labels

### [monitor-changes](./monitor-changes)
- Tracks modifications to protected grant content
- Reports unauthorized changes to administrators
- Maintains audit trail of content modifications
- Triggers notifications for review team

## Usage

These actions are primarily used by the grant review workflow. See [workflows documentation](../workflows) for more details.

### Prerequisites
- GitHub repository with issues enabled
- Proper permissions configured for GitHub Actions
- Labels created for grant workflow (`Ready for ZCG Review`, etc.)

### Error Handling
Each action includes built-in error handling and will:
- Provide detailed error messages in action logs
- Comment on relevant issues when problems occur
- Fail gracefully without breaking the workflow

## Development

When modifying these actions:
1. Update the `action.yml` file with any new inputs/outputs
2. Update the corresponding README.md in the action's directory
3. Test changes in a feature branch before merging to main
4. Follow semantic versioning for action releases
5. Document any breaking changes clearly

### Testing
- Create test issues/PRs in a development environment
- Verify all error conditions are handled properly
