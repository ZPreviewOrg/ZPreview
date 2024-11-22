# GitHub Workflows

This directory contains GitHub Actions workflows that automate the grant application and review process. These workflows ensure consistent handling of grant submissions and maintain security throughout the review process.

## Available Workflows

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
2. Use [act](https://github.com/nektos/act) for local testing if possible
3. Update documentation when changing triggers or adding new steps
4. Verify error handling for all failure scenarios
5. Test concurrency controls with simultaneous submissions

### Best Practices
- Keep workflows focused and single-purpose
- Use concurrency controls to prevent conflicts
- Include detailed comments for complex logic
- Maintain comprehensive error handling
