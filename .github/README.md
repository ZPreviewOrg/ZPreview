# Zcash Community Grants GitHub Configuration

This directory contains GitHub configurations, actions, and workflows that automate the ZCG grant application and review process.

## Directory Structure

- [`actions/`](./actions/): Specialized GitHub Actions for grant processing
- [`workflows/`](./workflows/): Automated workflows for the review process

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
1. Go to [Repository Settings > Actions > Variables](../../settings/variables/actions)
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

## Support

For issues or questions:
- Create an issue in this repository
- Contact grants@financialprivacyfoundation.org
- Check existing documentation first
