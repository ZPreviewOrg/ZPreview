# GitHub Workflows

This directory contains GitHub Actions workflows that automate the grant application and review process.

## Available Workflows

### [grant-review.yml](./grant-review.yml)
Handles the automated parts of the grant review process:
- Triggers on issue labeling with "Ready for ZCG Review"
- Creates/updates grant application files
- Manages pull requests for content changes
- Applies protection labels
- Monitors for subsequent changes

## Required Secrets

- `GITHUB_TOKEN`: Automatically provided by GitHub Actions

## Process Flow

1. Issue is labeled "Ready for ZCG Review"
2. Content is saved to `_grants` directory
3. PR is created/updated with changes
4. Protection labels and notices are applied
5. Changes are monitored for review

## Development

When modifying workflows:
1. Test changes in a feature branch
2. Use [act](https://github.com/nektos/act) for local testing if possible
3. Update documentation when changing triggers or adding new steps
