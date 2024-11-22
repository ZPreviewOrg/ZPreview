# Protection Labels and Notice Action

Applies protection labels and creates notices for protected content.

## Inputs

| Name | Description | Required |
|------|-------------|----------|
| token | GitHub token | Yes |
| issue-number | Issue number | Yes |
| repo-owner | Repository owner | Yes |
| repo-name | Repository name | Yes |
| pr-number | Pull request number | Yes |

## Features

- Applies content protection labels
- Creates protection notices on issues
- Adds change notifications when content is edited
- Links to related pull requests

## Example Usage

```yaml
- name: Apply Protection Labels and Notice
  uses: ./.github/actions/protection-labels-notice
  with:
    token: ${{ secrets.GITHUB_TOKEN }}
    issue-number: 123
    repo-owner: "owner"
    repo-name: "repo"
    pr-number: 456
```
