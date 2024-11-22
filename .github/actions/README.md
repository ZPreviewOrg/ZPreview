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

## Support

For issues or questions:
- Create an issue in this repository
- Contact grants@financialprivacyfoundation.org
- Check existing documentation first
