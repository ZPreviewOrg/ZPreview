# PR Management Action

Manages pull requests for grant application content changes.

## Inputs

| Name | Description | Required |
|------|-------------|----------|
| github-token | GitHub token for API access | Yes |
| branch-name | Branch name for the PR | Yes |
| issue-number | Issue number related to the PR | Yes |
| issue-title | Title of the related issue | Yes |

## Outputs

| Name | Description |
|------|-------------|
| pr_number | Number of the created/updated PR |

## Features

- Creates or updates branches for grant applications
- Manages pull requests for content changes
- Automatically commits changes to grant files
- Updates existing PRs instead of creating duplicates

## Example Usage

```yaml
- name: Manage PR
  uses: ./.github/actions/pr-management
  with:
    github-token: ${{ secrets.GITHUB_TOKEN }}
    branch-name: "grant-123"
    issue-number: 123
    issue-title: "My Grant Application"
```
