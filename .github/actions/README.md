# Zcash Community Grants GitHub Actions

This directory contains specialized GitHub Actions that automate the ZCG grant application and review process. These actions streamline workflow management and ensure consistent handling of grant submissions.

## Core Actions

### [zcg-grant-notice](./zcg-grant-notice)
Primary action for new grant applications that:
- Posts standardized application instructions
- Provides forum posting requirements and links
- Sets clear timeline expectations (2-4 weeks review)
- Includes contact information for support
- Ensures compliance with community guidelines

### [save-content](./save-content)
Handles grant application content management:
- Converts issue content to markdown format
- Validates required application fields
- Generates unique grant identifiers
- Manages file storage in `_grants` directory
- Maintains proper metadata structure

### [protection-labels-notice](./protection-labels-notice)
Manages content protection through:
- Automated label application
- Protection notices on issues/PRs
- Policy compliance enforcement
- Access control management

## Setup Requirements

### Repository Configuration
- Issues must be enabled
- Proper GitHub Actions permissions
- Required labels configured:
  - `Ready for ZCG Review`
  - `Grant Application`
  - `Under Review`
  - `Approved`
  - `Needs Revision`

### Authentication
- GitHub token with appropriate permissions
- Repository secrets properly configured
- Action permissions validated

## Error Handling & Logging

Each action implements robust error management:
- Detailed error logging
- Issue/PR status updates
- Graceful failure handling
- Admin notifications for critical errors

## Development Guidelines

### Action Modifications
1. Update `action.yml` configurations
2. Maintain action-specific documentation
3. Follow semantic versioning
4. Test in isolation before integration
5. Document all breaking changes

### Quality Assurance
- Test with sample applications
- Verify error scenarios
- Check permission boundaries
- Validate workflow integration

### Best Practices
- Keep actions focused and single-purpose
- Maintain comprehensive logging
- Handle edge cases gracefully
- Follow GitHub Actions security guidelines

## GitHub Project Integration

The repository includes a GitHub Project that tracks milestones for all grants. Each milestone is represented as a project item with the following fields:

### Milestone Fields
- **Grant Title**: Official title of the grant
- **Original Title**: Initial proposed title if different
- **Grant Summary**: Brief description of the grant
- **Grant Application Issue**: Link to the original GitHub issue
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
