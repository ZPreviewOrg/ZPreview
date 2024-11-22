# Project Fields Validator Action

This action validates that a GitHub Project has all the required custom fields configured correctly for grant milestone tracking.

## Usage

```yaml
- uses: ./.github/actions/project-fields-validator
  with:
    project-number: 123 # Your project number
    issue-number: ${{ github.event.issue.number }} # Issue to comment on
```

## Validation Checks

The action verifies:

1. All required fields exist
2. Fields have correct data types
3. Select fields have all required options

### Required Fields

| Field Name | Type | Description |
|------------|------|-------------|
| Grant Title | text | Official title of the grant |
| Original Title | text | Initial proposed title if different |
| Grant Summary | text | Brief description of the grant |
| Grant Application Issue | text | Link to the original GitHub issue |
| Grantee | text | Organization/individual receiving the grant |
| Author | text | Primary contact/submitter |
| Milestone Number | number | Sequential number within the grant |
| Deliverables | text | Specific outputs expected |
| Amount | number | Funding allocated for milestone |
| Expected Completion | date | Target completion date |
| Status | single_select | Current state of the milestone |
| Category | single_select | Grant classification |
| Amount USD | number | Dollar value of grant |
| Estimated Completion | date | Projected completion date |
| Paid Out | date | Date of payment |
| ZEC Disbursed | number | Amount paid in ZEC |
| USD Disbursed | number | Amount paid in USD |

### Select Field Options

Status options:
- New
- Under Review
- Approved
- In Progress
- Reject
- Complete
- Cancelled

Category options:
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

## Error Handling

If validation fails, the action will:
1. Add a comment to the issue detailing what needs to be fixed
2. Fail the workflow with an error message
