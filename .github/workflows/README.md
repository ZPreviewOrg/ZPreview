# GitHub-based Grant Management System Workflow

An automated workflow system for managing different types of grant applications and payments through GitHub, utilizing, issues, status, labels, and assignments. The system automatically responds to different combinations of an issue's current status and labels to maintain the grant lifecycle.

When a change occurs on a grant application issue, the workflow system:
1. Checks the Current Status of the grant
2. Checks the Current Labels on the issue
3. Performs automated actions:
   - Updates Labels (adding/removing as needed)
   - Changes Assignments of the issue to relevant teams/individuals
   - Posts standardized comment templates
   - Updates the overall grant Status

Unless otherwise specific any changes made create a PR which created and merged to the corresponding grants file within the GitHub repository.

## Label Categories

The system uses the following categories of labels to track grant status:

### 1. Application Status
These labels indicate the current state of a grant application:

| Label | Description |
|-------|-------------|
| Pending Grant Application | Initial state for new applications |
| Grant Application | Confirmed valid application |
| Ready For ZCG Review | Application ready for committee review |
| Grant Approved | Application has been approved |
| Grant Declined | Application has been declined |
| Does Not Meet Criteria | Application rejected for not meeting requirements |

### 2. Verification Status  
Labels related to verification requirements:

| Label | Description |
|-------|-------------|
| KYC Required | Identity verification needed |
| KYC Verified | Identity verification completed |
| Forum Post Missing | Required forum post not found |
| Changes Pending Review | Application changes need review |
| Approve_Changes | Changes have been approved |

### 3. Progress Tracking
Labels that monitor project progress:

| Label | Description |
|-------|-------------|
| Progress Update Required | Project update needed |
| Milestone 1 Complete | First milestone achieved |
| Milestones Past Due | Project milestones overdue |

### 4. Payment Status
Labels related to payment processing:

| Label | Description |
|-------|-------------|
| Pending Startup Payment Request | Initial funding requested |
| Pending Grant Milestone | Milestone payment requested |
| Grant Milestone | Milestone payment in process |
| Milestone Payment Approved | Payment approved |
| Milestone Payment Complete | Payment completed |
| Milestone Payment Requests | Payment request submitted |

## List of Status

### Active States
- New - Just submitted, initial state
- Under Review - Being evaluated by committee
- In Progress - Work actively ongoing
- Approved - Grant approved and active

### Terminal States  
- Declined - Application not approved
- Cancelled - Grant terminated early
- Complete - All milestones achieved

## "Pending Grant Application" Workflows

***PRs and merges will not occur for "Pending Grant Applications" as they are not official Grant Applications yet.***

The "Pending Grant Application" label is set when a Grant Application is submitted using the "Grant Application" form. The following tables define how the system manages issues with a "Pending Grant Application" label. Each row describes what automated actions the system will take based on the current state of an issue.

### Initial "Pending Grant Application" Workflow

***PRs and merges will not occur for "Pending Grant Applications" as they are not official Grant Applications yet.***

| Label Updates | Assignment Updates |
|---------------|--------------------|
| -Changes Pending Review | +Admin |

### "Pending Grant Application" Workflow when Issue Labelled

***PRs and merges will not occur for "Pending Grant Applications" as they are not official Grant Applications yet.***

| Current Labels | Label Updates | Assignment Updates | Issues Comments | Status Updates |
|----------------|---------------|--------------------|-----------------|----------------|
| +Ready For ZCG Review | +Grant Application | +ZCG | NOTIFY_GRANT_UNDER_REVIEW | Under Review |
| +Grant Approved; KYC Required; | +Grant Application; -Ready For ZCG Review | - | NOTIFY_GRANT_APPLICATION_APPROVED_KYC_REQUIRED | Approved |
| +Grant Approved; !KYC Required; | +Grant Application; -Ready For ZCG Review | - | NOTIFY_GRANT_APPLICATION_APPROVED_NO_KYC | Approved |
| +Grant Declined | +Grant Application; -Ready For ZCG Review | - | NOTIFY_GRANT_APPLICATION_DECLINED | Declined |
| +Does Not Meet Criteria | -Ready For ZCG Review | - | NOTIFY_GRANT_APPLICATION_DOES_NOT_MEET_CRITERIA | Declined |
| +KYC Required | - | - | - | - |
| +Forum Post Missing | - | - | NOTIFY_GRANT_APPLICATION_FORUM_POST_MISSING | - |
| +Progress Update Required | - | - | NOTIFY_GRANT_APPLICATION_PROGRESS_UPDATE_REQUIRED | - |
| +Milestones Past Due | - | - | NOTIFY_GRANT_APPLICATION_MILESTONE_OVERDUE | - |
| +Changes Pending Review | - | - | NOTIFY_GRANT_APPLICATION_CHANGES_REQUIRE_REVIEW | - |
| +Approve_Changes | -Changes Pending Review | - | NOTIFY_GRANT_APPLICATION_CHANGES_APPROVED | - |
| -Changes Pending Review | - or Changes Pending Review | - | - or ADMIN_NOTIFY_GRANT_ISSUE_MISMATCH | - |

## "Grant Application" Workflows

***PRs and merges of changes will be automatically pushed into the _grants/{}.md file. PRs and merges will not occur for grants with "Changes Pending Review" label.***

The following tables define how the system manages issues with a "Grant Application" label. Each row describes what automated actions the system will take based on the current state of an issue.

### Initial "Grant Application" Workflow

***This may be the first time the grant file is pushed to the repository. PRs and merges of changes will be automatically pushed into the _grants/{}.md file from this point.***

When the "Grant Application" label is added to an issue the system will remove -Pending Grant Application must take a few steps to initialise the grant within the repository.

| Label Updates | Assignment Updates | Project Updates |
|---------------|--------------------|-----------------|
| -Changes Pending Review; -Pending Grant Application;  | +Admin | +_grants/a{issue_number:05d}+title\[:50\].md |

### "Grant Application" Workflow with "New" Status when Labelled

***PRs and merges of changes will be automatically pushed into the _grants/{}.md file.***

| Current Labels | Label Updates | Assignment Updates | Issues Comments | Status Updates |
|----------------|---------------|--------------------|-----------------|----------------|
| +Ready For ZCG Review | - | +ZCG | NOTIFY_GRANT_UNDER_REVIEW | Under Review |
| +Grant Approved; KYC Required; | -Ready For ZCG Review | - | NOTIFY_GRANT_APPLICATION_APPROVED_KYC_REQUIRED | Approved |
| +Grant Approved; !KYC Required; | -Ready For ZCG Review | - | NOTIFY_GRANT_APPLICATION_APPROVED_NO_KYC | Approved |
| +Grant Declined | -Ready For ZCG Review | - | NOTIFY_GRANT_APPLICATION_DECLINED | Declined |
| +Does Not Meet Criteria | -Ready For ZCG Review | - | NOTIFY_GRANT_APPLICATION_DOES_NOT_MEET_CRITERIA | Declined |
| +KYC Required | - | - | - | - |
| +Forum Post Missing | - | - | NOTIFY_GRANT_APPLICATION_FORUM_POST_MISSING | - |
| +Progress Update Required | - | - | NOTIFY_GRANT_APPLICATION_PROGRESS_UPDATE_REQUIRED | - |
| +Changes Pending Review | - | - | NOTIFY_GRANT_APPLICATION_CHANGES_REQUIRE_REVIEW | - |
| +Approve_Changes | -Changes Pending Review | - | NOTIFY_GRANT_APPLICATION_CHANGES_APPROVED | - |
| -Changes Pending Review | - or Changes Pending Review | - | - or ADMIN_NOTIFY_GRANT_ISSUE_MISMATCH | - |

### "Grant Application" Workflow with "Under Review" Status when Issue Labelled

***PRs and merges of changes will be automatically pushed into the _grants/{}.md file.***

| Current Labels | Label Updates | Assignment Updates | Issues Comments | Status Updates |
|----------------|---------------|-------------------|-----------------|----------------|
| +Ready For ZCG Review | - | +ZCG | NOTIFY_GRANT_APPLICATION_APPLICATION_RECEIVED | - |
| +Grant Approved; KYC Required; | -Ready For ZCG Review | - | NOTIFY_GRANT_APPLICATION_APPROVED_KYC_REQUIRED | Approved |
| +Grant Approved; !KYC Required; | -Ready For ZCG Review | - | NOTIFY_GRANT_APPLICATION_APPROVED_NO_KYC | Approved |
| +Grant Declined | -Ready For ZCG Review | - | NOTIFY_GRANT_APPLICATION_DECLINED | Declined |
| +Does Not Meet Criteria | -Ready For ZCG Review | - | NOTIFY_GRANT_APPLICATION_DOES_NOT_MEET_CRITERIA | Declined |
| +KYC Required | - | - | - | - |
| +Forum Post Missing | - | - | NOTIFY_GRANT_APPLICATION_FORUM_POST_MISSING | - |
| +Progress Update Required | - | - | NOTIFY_GRANT_APPLICATION_PROGRESS_UPDATE_REQUIRED | - |
| +Changes Pending Review | - | - | NOTIFY_GRANT_APPLICATION_CHANGES_REQUIRE_REVIEW | - |
| +Approve_Changes | -Changes Pending Review | - | NOTIFY_GRANT_APPLICATION_CHANGES_APPROVED | - |
| -Changes Pending Review | - or Changes Pending Review | - | - or ADMIN_NOTIFY_GRANT_ISSUE_MISMATCH | - |

### "Grant Application" Workflow with "Approved" Status when Issue Labelled

***PRs and merges of changes will be automatically pushed into the _grants/{}.md file.***

| Current Labels | Label Updates | Assignment Updates | Issues Comments | Status Updates |
|----------------|---------------|-------------------|-----------------|----------------|
| +Ready For ZCG Review | - | +ZCG | NOTIFY_GRANT_APPLICATION_ZCG_REVIEW_REQUIRED | - |
| +Grant Approved; KYC Required; | -Ready For ZCG Review | - | NOTIFY_GRANT_APPLICATION_APPROVED_KYC_REQUIRED | Approved |
| +Grant Approved; !KYC Required; | -Ready For ZCG Review | - | NOTIFY_GRANT_APPLICATION_APPROVED_NO_KYC | Approved |
| +Grant Declined | -Ready For ZCG Review | - | NOTIFY_GRANT_APPLICATION_CANCELLED | Declined |
| +Does Not Meet Criteria | -Ready For ZCG Review | - | NOTIFY_GRANT_APPLICATION_DOES_NOT_MEET_CRITERIA | Declined |
| +KYC Required | - | - | NOTIFY_GRANT_APPLICATION_KYC_REQUEST | - |
| +Forum Post Missing | - | - | NOTIFY_GRANT_APPLICATION_FORUM_POST_MISSING | - |
| +Progress Update Required | - | - | NOTIFY_GRANT_APPLICATION_PROGRESS_UPDATE_REQUIRED | - |
| +Milestone 1 Complete | - | - | NOTIFY_GRANT_APPLICATION_MILESTONE_COMPLETE | - |
| +Milestones Past Due | - | - | NOTIFY_GRANT_APPLICATION_MILESTONE_OVERDUE | - |
| +Changes Pending Review | - | - | NOTIFY_GRANT_APPLICATION_CHANGES_REQUIRE_REVIEW | - |
| +Approve_Changes | -Changes Pending Review | - | NOTIFY_GRANT_APPLICATION_CHANGES_APPROVED | - |
| -Changes Pending Review | - or Changes Pending Review | - | - or ADMIN_NOTIFY_GRANT_ISSUE_MISMATCH | - |

### "Grant Application" Workflow with "In Progress" Status when Issue Labelled

***PRs and merges of changes will be automatically pushed into the _grants/{}.md file.***

| Current Labels | Label Updates | Assignment Updates | Issues Comments | Status Updates |
|----------------|---------------|-------------------|-----------------|----------------|
| +Ready For ZCG Review | - | +ZCG | NOTIFY_GRANT_APPLICATION_ZCG_REVIEW_REQUIRED | - |
| +Grant Approved; KYC Required; | -Ready For ZCG Review | - | NOTIFY_GRANT_APPLICATION_APPROVED_KYC_REQUIRED | Approved |
| +Grant Approved; !KYC Required; | -Ready For ZCG Review | - | NOTIFY_GRANT_APPLICATION_APPROVED_NO_KYC | Approved |
| +Grant Declined | -Ready For ZCG Review | - | NOTIFY_GRANT_APPLICATION_CANCELLED | Declined |
| +KYC Required | - | - | NOTIFY_GRANT_APPLICATION_KYC_REQUEST | - |
| +Forum Post Missing | - | - | NOTIFY_GRANT_APPLICATION_FORUM_POST_MISSING | - |
| +Progress Update Required | - | - | NOTIFY_GRANT_APPLICATION_PROGRESS_UPDATE_REQUIRED | - |
| +Milestone 1 Complete | - | - | NOTIFY_GRANT_APPLICATION_MILESTONE_COMPLETE | - |
| +Milestones Past Due | - | - | NOTIFY_GRANT_APPLICATION_MILESTONE_OVERDUE | - |
| +Changes Pending Review | - | - | NOTIFY_GRANT_APPLICATION_CHANGES_REQUIRE_REVIEW | - |
| +Approve_Changes | -Changes Pending Review | - | NOTIFY_GRANT_APPLICATION_CHANGES_APPROVED | - |
| -Changes Pending Review | - or Changes Pending Review | - | - or ADMIN_NOTIFY_GRANT_ISSUE_MISMATCH | - |

### "Grant Application" with "Cancelled/Declined/Complete" Status when Issue Labelled

***PRs and merges of changes will be automatically pushed into the _grants/{}.md file. Cancelled, Declined, and Complete Grant Applications will not post notifications or update status.***

| Current Labels | Label Updates |
|----------------|---------------|
| +Ready For ZCG Review | - |
| +Grant Approved; KYC Required; | -Ready For ZCG Review |
| +Grant Approved; !KYC Required; | -Ready For ZCG Review |
| +Grant Declined | -Ready For ZCG Review |
| +KYC Required | - |
| +KYC Verified | -KYC Required |
| +Forum Post Missing | - |
| +Progress Update Required | - |
| +Milestone 1 Complete | - |
| +Milestones Past Due | - |
| +Changes Pending Review | - |
| +Approve_Changes | -Approve_Changes -Changes Pending Review |
| -Changes Pending Review | - |

### "Grant Application" Workflow when Issue Edited

***Grant Application Changes Require Review. Any notifications, PR, merging should be handled by the label change events.***

| Label Changes |
|---------------|
| +Changes Pending Review |

### "Grant Application" Workflow when Grant File Pushed to "main"

***Check Frontmatter, Issues, and Projects are in sync***

| Check  | Label Changes | Issue Changes | Warn | Log |
|--------|---------------|---------------|------|-----|
| Row    | - | Create new entry in project | - | - |
| Fields | - | - | - | List of Frontmatter fields not in project |
| Labels | Requires Label Sync | - | List of Frontmatter fields not in project | - |
| Values | Requires Value Sync | - | List of Frontmatter values not matching | - |

## "Pending Startup Payment Request" Workflows

***PRs and merges are currently not supported for "Pending Startup Payment Request".***

The "Pending Startup Payment Request" label is set when a Payment Request is submitted using the "Grant Startup Payment Request" form. The following tables define how the system manages issues with a "Pending Startup Payment Request" label. Each row describes what automated actions the system will take based on the current state of an issue.

### Initial "Pending Startup Payment Request" Workflow

***PRs and merges are currently not supported for "Pending Startup Payment Request".***

When the "Pending Startup Payment Request" label is added to an issue the system does a few initial actions.

| Check | Label Updates | Issues Comments | Assignment Updates | Status Updates |
|-------|---------------|-----------------|--------------------|----------------|
| - | - | - | +Admin | - |
| Sender == Grant Assignee | - | NOTIFY_GRANT_STARTUP_PAYMENT_REQUEST_SENDER_NOT_AUTHORISED | Close |

### "Pending Startup Payment Request" Workflow when Issue Labelled

***PRs and merges are currently not supported for "Pending Startup Payment Request".***

| Current Labels | Label Updates | Assignment Updates | Issues Comments | Grant Label Updates |
|----------------|---------------|--------------------|-----------------|---------------------|
| +Ready For ZCG Review | +Grant Milestone | +ZCG | NOTIFY_GRANT_MILESTONE_PAYMENT_REQUEST_UNDER_REVIEW | Milestone Payment Requests |
| +Milestone Payment Approved | +Grant Milestone; -Ready For ZCG Review; | - | NOTIFY_GRANT_MILESTONE_PAYMENT_APPROVED | - |
| +Milestone Payment Complete | +Grant Milestone; -Ready For ZCG Review; | - | NOTIFY_GRANT_MILESTONE_PAYMENT_COMPLETE | +Milestone 1 Complete |

## "Pending Grant Milestone" Workflows

***PRs and merges are currently not supported for "Pending Grant Milestone" or "Grant Milestones".***

The "Pending Grant Milestone" label is set when a Payment Request is submitted using the "Grant Milestone Payment Request" form. The following tables define how the system manages issues with a "Pending Grant Milestone" label. Each row describes what automated actions the system will take based on the current state of an issue. Currently only "Milestone Payment Request" workflows are supported.

### Initial "Pending Grant Milestone" + "Milestone Payment Request" Workflow

***PRs and merges are currently not supported for "Pending Grant Milestone" or "Grant Milestones".***

When the "Pending Grant Milestone" label is added to an issue the system does a few initial actions.

| Check | Label Updates | Issues Comments | Assignment Updates | Status Updates |
|-------|---------------|-----------------|--------------------|----------------|
| - | - | - | +Admin | - |
| Sender == Grant Assignee | - | NOTIFY_GRANT_MILESTONE_PAYMENT_REQUEST_SENDER_NOT_AUTHORISED | Close |

### "Pending Grant Milestone" Workflow when Issue Labelled

***PRs and merges are currently not supported for "Pending Grant Milestone" or "Grant Milestones".***

| Current Labels | Label Updates | Assignment Updates | Issues Comments | Grant Label Updates |
|----------------|---------------|--------------------|-----------------|---------------------|
| +Ready For ZCG Review | +Grant Milestone | +ZCG | NOTIFY_GRANT_MILESTONE_PAYMENT_REQUEST_UNDER_REVIEW | Milestone Payment Requests |
| +Milestone Payment Approved | +Grant Milestone; -Ready For ZCG Review; | - | NOTIFY_GRANT_MILESTONE_PAYMENT_APPROVED | - |
| +Milestone Payment Complete | +Grant Milestone; -Ready For ZCG Review; | - | NOTIFY_GRANT_MILESTONE_PAYMENT_COMPLETE | +Milestone 1 Complete |

### Initial "Grant Milestone" + "Milestone Payment Request" Workflow

***PRs and merges are currently not supported for "Pending Grant Milestone" or "Grant Milestones".***

When the "Grant Milestone" label is added to an issue the system must does a few initial actions.

| Check | Label Updates | Issues Comments | Assignment Updates | Status Updates |
|-------|---------------|-----------------|--------------------|----------------|
| - | -Pending Grant Milestone | - | +Admin | - |

### "Grant Milestone" + "Milestone Payment Request" Workflow when Issue Labelled

***PRs and merges are currently not supported for "Pending Grant Milestone" or "Grant Milestones".***

| Current Labels | Label Updates | Assignment Updates | Issues Comments | Grant Label Updates |
|----------------|---------------|--------------------|-----------------|---------------------|
| +Ready For ZCG Review | - | +ZCG | NOTIFY_GRANT_MILESTONE_PAYMENT_REQUEST_UNDER_REVIEW | Milestone Payment Requests |
| +Milestone Payment Approved | -Ready For ZCG Review; | - | NOTIFY_GRANT_MILESTONE_PAYMENT_APPROVED | - |
| +Milestone Payment Complete | -Ready For ZCG Review; | - | NOTIFY_GRANT_MILESTONE_PAYMENT_COMPLETE | +Milestone 1 Complete |
