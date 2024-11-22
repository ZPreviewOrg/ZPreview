# ZCG Grant Notice Action

Posts standardized notice for ZCG grant applications with instructions and requirements.

## Inputs

| Name | Description | Required |
|------|-------------|----------|
| token | GitHub token | Yes |
| issue-number | Issue number | Yes |
| repo-owner | Repository owner | Yes |
| repo-name | Repository name | Yes |

## Features

- Posts grant application instructions
- Includes forum posting requirements
- Provides timeline expectations
- Lists contact information

## Example Usage

```yaml
- name: Post ZCG Grant Notice
  uses: ./.github/actions/zcg-grant-notice
  with:
    token: ${{ secrets.GITHUB_TOKEN }}
    issue-number: ${{ github.event.issue.number }}
    repo-owner: ${{ github.repository_owner }}
    repo-name: ${{ github.event.repository.name }}
```
