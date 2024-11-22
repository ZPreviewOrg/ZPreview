# Save Content Action

Saves issue content to properly formatted markdown files in the `_grants` directory.

## Inputs

| Name | Description | Required |
|------|-------------|----------|
| issue-body | Content of the issue | Yes |
| issue-title | Title of the issue | Yes |
| issue-number | Issue number | Yes |
| author | Issue author | Yes |

## Features

- Creates markdown files with proper frontmatter
- Automatically formats filenames
- Preserves issue content and metadata
- Creates `_grants` directory if needed

## Example Usage

```yaml
- name: Save Content
  uses: ./.github/actions/save-content
  with:
    issue-body: ${{ github.event.issue.body }}
    issue-title: ${{ github.event.issue.title }}
    issue-number: ${{ github.event.issue.number }}
    author: ${{ github.event.issue.user.login }}
```
