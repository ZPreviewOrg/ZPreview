# GitHub-based Grant Management System Workflow

An automated workflow system for managing grant applications and payments through GitHub, utilizing issues, pull requests, labels, and assignments. The system handles two main processes:

1. Grant Applications: Manages submissions through KYC, forum posting, review, and milestone tracking
2. Payment Requests: Handles fund disbursement for startup and milestone-based payments

Each table row shows the workflow Type, triggering Event, Options, resulting Action, Label changes (+added, -removed, ?conditional), Assignment changes, and additional Notes.

## Workflow Table

| Type | Event | Options | Action | Labels Applied/Removed | Assignments | Notes |
|------|-------|---------|--------|-----------------------|-------------|-------|
| Grant Application | Push to main | main | Label | - | No change | Validates all open Grant Application issue labels |
| Grant Application | Issue Opened | "Grant Application" | Assign, Label | +Grant Application | Assigns to ZCG Admin | Automatic processing of new applications |
| Grant Application | Issue Edited | "Grant Application" | Comment, Assign, Label, PR | +Grant Edited | Assigns to: Original Authors, ZCG Admin | Creates PR to track changes |
| Grant Application | PR Approved | "Grant Application" | Assign, Label, Merge | +Grant Edited | Assigns to: Original Authors, ZCG Admin | Merges PR and updates grant issue |
| Grant Application | Issue Reopened | main | Label | ?* | No change | Ensures proper label state |
| Grant Application | "Ready For ZCG Review" | "KYC Required" | Comment, Assign, PR, Merge | +Under Review; +KYC Required; -Pending Review | Assigns to ZCG Review Team | KYC pathway |
| Grant Application | "Ready For ZCG Review" | "KYC Not Required" | Comment, Assign, PR, Merge | +Under Review; -Pending Review | Assigns to ZCG Review Team | Non-KYC pathway |
| Grant Application | "Grant Approved" | - | Comment | +Approved; -Under Review | No change | Final approval |
| Grant Application | "Grant Declined" | - | Comment | +Declined; -Under Review | No change | Rejection notification |
| Grant Application | "KYC Verified" | "KYC Required" | Comment, Label, PR, Merge | -KYC Required; +KYC Verified | No change | KYC completion processing |
| Grant Application | "KYC Verified" | !"KYC Required" | Comment, PR, Merge | No changes | No change | Invalid state handling |
| Grant Application | "Forum Post Missing" | - | Comment | +Pending Forum Post | No change | Forum requirement notification |
| Grant Application | "Forum Posted" | - | Comment, PR, Merge | -Pending Forum Post; +Forum Verified | No change | Forum verification |
| Grant Application | "Does Not Meet Criteria" | - | Comment, PR, Merge | +Invalid; -Pending Review | No change | Requirement failure handling |
| Grant Application | "Update Request" | - | Comment | +Updates Required; -Under Review | Assigns back to Author | Request for changes |
| Grant Application | Issue Commented | - | Comment | No changes | No change | General communication |
| Grant Application | "Milestone X Complete" | - | Comment, PR, Merge | +Milestone X Complete | No change | Milestone tracking |
| Grant Application | "Milestones Past Due" | - | Comment, PR, Merge | +Past Due | No change | Deadline tracking |
| Payment Request   | Issue Opened | - | Assign, Label | +Payment Request | Assigns to ZCG Finance Team | New payment processing |
| Payment Request   | Issue Edited | - | Assign, Label | +Changes Requested | Reassigns to ZCG Finance Team | Payment modification handling |
| Payment Request   | "Startup Payment Request" | - | Comment | +Startup Payment | No change | Initial funding process |
| Payment Request   | "Milestone Payment Request" | - | Comment | +Milestone Payment | No change | Progress payment process |
| Payment Request   | "Author Verified" | - | Comment | +Author Verified; -Pending Review | No change | Identity confirmation |
| Payment Request   | "Author Denied" | - | Comment | +Author Denied; -Pending Review | No change | Identity rejection |
| Payment Request   | "Payment Completed" | - | Comment | +Completed; -Payment Request | No change | Payment confirmation |
