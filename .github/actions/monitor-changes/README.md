# Monitor Changes Action

Monitors and reports changes to protected content.

## Inputs

| Name | Description | Required |
|------|-------------|----------|
| issue-number | The issue number being monitored | Yes |
| repository-owner | The owner of the repository | Yes |
| token | GitHub token for API access | Yes |

## Features

- Detects changes to protected content
- Creates notification comments
- Tags repository owner for review
- Links to updated snapshots

## Example Usage

```yaml
- name: Monitor Changes
  uses: ./.github/actions/monitor-changes
  with:
    issue-number: 123
    repository-owner: "owner"
    token: ${{ secrets.GITHUB_TOKEN }}
```
