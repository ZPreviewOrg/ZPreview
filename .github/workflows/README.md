# GitHub-based Grant Management System Workflow

An automated workflow system for managing grant applications and payments through GitHub, utilizing issues, pull requests, labels, and assignments. The system handles two main processes:

1. Grant Applications: Manages submissions through KYC, forum posting, review, and milestone tracking
2. Payment Requests: Handles fund disbursement for startup and milestone-based payments

Each table row shows the workflow Type, triggering Event, Options, resulting Action, Label changes (+added, -removed, ?conditional), Assignment changes, and additional Notes.

## Grant Application and Payment Request Workflows

### Grant Application Workflows

| Event | Options | Labels Applied/Removed | Assignment Changes | Pull Request Actions | Assignments | Notes |
|------|-------|------------------------|----------------------|-----------------------|-------------|-------|
| "Ready For ZCG Review" | "KYC Required" | +Under Review; +KYC Required; -Pending Review | Assigns to ZCG Review Team | Create PR and merge changes | KYC pathway |
| "Ready For ZCG Review" | "KYC Not Required" | +Under Review; -Pending Review | Assigns to ZCG Review Team | Create PR and merge changes | Non-KYC pathway |
| "Grant Approved" | - | +Approved; -Under Review | No change | Comment | Final approval |
| "Grant Declined" | - | +Declined; -Under Review | No change | Comment | Rejection notification |
| "KYC Verified" | "KYC Required" | -KYC Required; +KYC Verified | No change | Label, Create PR and merge changes | KYC completion processing |
| "KYC Verified" | !"KYC Required" | No changes | No change | PR and merge changes | Invalid state handling |
| "Forum Post Missing" | - | +Pending Forum Post | No change | Comment | Forum requirement notification |
| "Forum Posted" | - | -Pending Forum Post; +Forum Verified | No change | PR and merge changes | Forum verification |
| "Does Not Meet Criteria" | - | +Invalid; -Pending Review | No change | PR and merge changes | Requirement failure handling |
| "Update Request" | - | +Updates Required; -Under Review | Assigns back to Author | Comment | Request for changes |
| "Milestone X Complete" | - | +Milestone X Complete | No change | PR and merge changes | Milestone tracking |
| "Milestones Past Due" | - | +Past Due | No change | PR and merge changes | Deadline tracking |
| Payment Request   | "Startup Payment Request" | - | +Startup Payment | No change | Comment | Initial funding process |
| Payment Request   | "Milestone Payment Request" | - | +Milestone Payment | No change | Comment | Progress payment process |
| Payment Request   | "Author Verified" | - | +Author Verified; -Pending Review | No change | Comment | Identity confirmation |
| Payment Request   | "Author Denied" | - | +Author Denied; -Pending Review | No change | Comment | Identity rejection |
| Payment Request   | "Payment Completed" | - | +Completed; -Payment Request | No change | Comment | Payment confirmation |

### Workflows Triggered by Other Events

| Type             | Event            | Options              | Action                | Labels Applied/Removed   | Assignments          | Notes                                       |
|------------------|------------------|----------------------|-----------------------|--------------------------|----------------------|---------------------------------------------|
| Grant Application | Push to main | main | Label | - | No change | Validates all open Grant Application issue labels |
| Grant Application | Issue Opened | "Grant Application" | Assign | +Grant Application | Assigns to ZCG Admin | Automatic processing of new applications |
| Grant Application | Issue Edited | "Grant Application" | Assign | +Grant Edited | Assigns to: Original Authors, ZCG Admin | Create PR and track changes |
| Grant Application | PR Approved | "Grant Application" | Assign | +Grant Edited | Assigns to: Original Authors, ZCG Admin | Merge PR and update grant issue |
| Grant Application | Issue Reopened | main | Label | ?* | No change | Ensure proper label state |
| Grant Application | Issue Commented | - | No change | Comment | No change | General communication |
### Payment Request Workflows

| Event | Options | Labels Applied/Removed | Assignment Changes | Pull Request Actions | Assignments | Notes |
|-------|---------|------------------------|---------------------|----------------------|-------------|-------|
| "Startup Payment Request" | - | +Startup Payment | No change | Comment | Initial funding process |
| "Milestone Payment Request" | - | +Milestone Payment | No change | Comment | Progress payment process |
| "Author Verified" | - | +Author Verified; -Pending Review | No change | Comment | Identity confirmation |
| "Author Denied" | - | +Author Denied; -Pending Review | No change | Comment | Identity rejection |
| "Payment Completed" | - | +Completed; -Payment Request | No change | Comment | Payment confirmation |
