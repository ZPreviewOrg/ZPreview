# GitHub-based Grant Management System Workflow

An automated workflow system for managing grant applications and payments through GitHub, utilizing issues, pull requests, labels, and assignments. The system handles two main processes:

1. Grant Applications: Manages submissions through KYC, forum posting, review, and milestone tracking
2. Payment Requests: Handles fund disbursement for startup and milestone-based payments

Each table row shows the workflow Type, triggering Event, Options, resulting Action, Label changes (+added, -removed, ?conditional), Assignment changes, and additional Notes.

## Workflow Table

### Workflows Triggered by Label Events

| Type | Event | Options | Labels Applied/Removed | Assign | PR | Assignments | Notes |
|------|-------|---------|------------------------|--------|----|-------------|-------|
| Grant Application | "Ready For ZCG Review" | "KYC Required" | +Under Review; +KYC Required; -Pending Review | Assigns to ZCG Review Team | Create PR and merge changes | KYC pathway |
| Grant Application | "Ready For ZCG Review" | "KYC Not Required" | +Under Review; -Pending Review | Assigns to ZCG Review Team | Create PR and merge changes | Non-KYC pathway |
| Grant Application | "Grant Approved" | - | +Approved; -Under Review | No change | Comment | Final approval |
| Grant Application | "Grant Declined" | - | +Declined; -Under Review | No change | Comment | Rejection notification |
| Grant Application | "KYC Verified" | "KYC Required" | -KYC Required; +KYC Verified | No change | Label, Create PR and merge changes | KYC completion processing |
| Grant Application | "KYC Verified" | !"KYC Required" | No changes | No change | PR and merge changes | Invalid state handling |
| Grant Application | "Forum Post Missing" | - | +Pending Forum Post | No change | Comment | Forum requirement notification |
| Grant Application | "Forum Posted" | - | -Pending Forum Post; +Forum Verified | No change | PR and merge changes | Forum verification |
| Grant Application | "Does Not Meet Criteria" | - | +Invalid; -Pending Review | No change | PR and merge changes | Requirement failure handling |
| Grant Application | "Update Request" | - | +Updates Required; -Under Review | Assigns back to Author | Comment | Request for changes |
| Grant Application | "Milestone X Complete" | - | +Milestone X Complete | No change | PR and merge changes | Milestone tracking |
| Grant Application | "Milestones Past Due" | - | +Past Due | No change | PR and merge changes | Deadline tracking |
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
| Grant Application | Issue Commented | - | No changes | No change | Comment | General communication |
