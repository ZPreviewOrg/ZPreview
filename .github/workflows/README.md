# GitHub Workflows

This directory contains GitHub Actions workflows that automate the grant application and review process. These workflows ensure consistent handling of grant submissions and maintain security throughout the review process.

## Available Workflows

### [validate-milestones.yml](./validate-milestones.yml)
Validates grant milestones against GitHub Project:
- Triggered when new files are added to _grants
- Parses milestone data from grant markdown
- Verifies milestone entries in GitHub Project
- Creates missing milestone items
- Flags mismatched values with "Out of Sync" status
- Comments results on associated issues

### [validate-project-fields.yml](./validate-project-fields.yml)
Validates GitHub Project fields configuration:
- Triggered when "Validate Project Fields" label is added
- Runs project field validation checks
- Comments results on the triggering issue
- Helps ensure project setup is correct

### [grant-review.yml](./grant-review.yml)
Handles the automated parts of the grant review process:

#### Triggers
- Issue labeled with "Ready for ZCG Review"
- Issue content edited after review starts
- Manual workflow dispatch for testing/recovery

#### Actions
- Validates grant application format
- Creates/updates grant application files
- Manages pull requests for content changes
- Applies protection labels and notices
- Monitors for unauthorized changes
- Auto-merges approved submissions

#### Error Handling
- Provides detailed error messages
- Comments on issues when problems occur
- Allows manual intervention when needed

## Required Secrets and Permissions

### Secrets
- `GITHUB_TOKEN`: Automatically provided by GitHub Actions

### Permissions
- `contents: write`: For repository changes
- `pull-requests: write`: For PR management
- `issues: write`: For issue comments

## Process Flow

1. Issue is labeled "Ready for ZCG Review"
2. Content validation occurs
3. Grant content is saved to `_grants` directory
4. PR is created/updated with changes
5. Protection labels and notices are applied
6. Changes are monitored throughout review
7. Approved grants are auto-merged

## Development

When modifying workflows:
1. Test changes in a feature branch
2. Update documentation when changing triggers or adding new steps
3. Verify error handling for all failure scenarios
4. Test concurrency controls with simultaneous submissions

### Best Practices
- Keep workflows focused and single-purpose
- Use concurrency controls to prevent conflicts
- Include detailed comments for complex logic
- Maintain comprehensive error handling
