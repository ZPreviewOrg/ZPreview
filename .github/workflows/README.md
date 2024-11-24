# GitHub Workflows & Configuration

This directory contains GitHub Actions workflows and configuration that automate the grant application and review process. These workflows ensure consistent handling of grant submissions and maintain security throughout the review process.

## Repository Configuration Requirements

### Required Features
- Issues must be enabled
- Proper GitHub Actions permissions
- Required labels configured:
  - `Ready for ZCG Review`
  - `Grant Application`
  - `Under Review`
  - `Approved`
  - `Needs Revision`

### Required Variables
The following GitHub Actions variables must be configured in the repository settings:

- `GRANT_PROJECT_NUMBER`: The GitHub Project number used for tracking grant milestones
- `GRANT_NOTICE_MESSAGE`: Custom notice message displayed during grant review process

To configure these:
1. Go to Repository Settings > Actions > Variables
2. Select the "Variables" tab 
3. Add each variable with its corresponding value

### Authentication
- GitHub token with appropriate permissions
- Repository secrets properly configured
- Action permissions validated

## GitHub Project Integration

The repository includes a GitHub Project that tracks milestones for all grants. Each milestone is represented as a project item with the following fields:

### Milestone Fields
- **Grant Title**: Official title of the grant
- **Original Title**: Initial proposed title if different
- **Grant Summary**: Brief description of the grant
- **Grant Application Issue**: Link to the original GitHub issue
- **Grant File**: Link to the grant markdown file
- **Grantee**: Organization/individual receiving the grant
- **Author**: Primary contact/submitter
- **Milestone Number**: Sequential number within the grant
- **Deliverables**: Specific outputs expected
- **Amount**: Funding allocated for milestone
- **Expected Completion**: Target completion date
- **Status**: Current state of the milestone
  - New
  - Under Review
  - Approved
  - In Progress
  - Reject
  - Complete
  - Cancelled
- **Category**: Grant classification
  - Infrastructure
  - Community
  - Education
  - Non-Wallet Applications
  - Integration
  - Wallets
  - Research & Development
  - Media
  - Zcash Protocol Extension
  - Dedicated Resource
  - Event Sponsorships
- **Amount USD**: Dollar value of grant
- **Estimated Completion**: Projected completion date
- **Paid Out**: Date of payment
- **ZEC Disbursed**: Amount paid in ZEC
- **USD Disbursed**: Amount paid in USD

### Automation
The GitHub Actions automatically create draft items in the project for each milestone when:
- New grant applications are submitted
- Existing grants are updated
- Milestones are added or modified

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
