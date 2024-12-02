# 🔄 GitHub-based Grant Management System Workflow

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

## ⚙️ Configuration & Setup

The system uses the following configuration variables to update the Grant Application Project. 🔧

To configure these:

1. Go to Repository Settings > Actions > Variables
2. Select the "Variables" tab
3. Add each variable with its corresponding value

- PROJECT_GRANT_APPLICATION_PROJECT_ID
- PROJECT_GRANT_APPLICATION_STATUS_ID
- PROJECT_GRANT_APPLICATION_STATUS_APPROVED_ID
- PROJECT_GRANT_APPLICATION_STATUS_CANCELLED_ID
- PROJECT_GRANT_APPLICATION_STATUS_COMPLETE_ID
- PROJECT_GRANT_APPLICATION_STATUS_DECLINED_ID
- PROJECT_GRANT_APPLICATION_STATUS_IN_PROGRESS_ID
- PROJECT_GRANT_APPLICATION_STATUS_NEW_ID
- PROJECT_GRANT_APPLICATION_STATUS_UNDER_REVIEW_ID

## 📢 Notification Messages & Alerts 🔔

The system uses the following notification messages to track grants through their lifecycle. 📨

To configure these:

1. Go to Repository Settings > Actions > Variables
2. Select the "Variables" tab
3. Add each variable with its corresponding value

- ADMIN_NOTIFY_GRANT_APPLICATION_ISSUE_MISMATCH
- NOTIFY_GRANT_APPLICATION_APPROVED_KYC_REQUIRED
- NOTIFY_GRANT_APPLICATION_APPROVED_NO_KYC
- NOTIFY_GRANT_APPLICATION_DECLINED
- NOTIFY_GRANT_APPLICATION_DOES_NOT_MEET_CRITERIA
- NOTIFY_GRANT_APPLICATION_FORUM_POST_MISSING
- NOTIFY_GRANT_APPLICATION_MILESTONE_OVERDUE
- NOTIFY_GRANT_APPLICATION_MILESTONE_COMPLETE
- NOTIFY_GRANT_APPLICATION_PROGRESS_UPDATE_REQUIRED
- NOTIFY_GRANT_APPLICATION_RECEIVED
- NOTIFY_GRANT_APPLICATION_UNDER_REVIEW
- NOTIFY_GRANT_APPLICATION_CHANGES_REQUIRE_REVIEW
- NOTIFY_GRANT_APPLICATION_CHANGES_APPROVED
- NOTIFY_GRANT_APPLICATION_KYC_REQUEST
- NOTIFY_GRANT_APPLICATION_ZCG_REVIEW_REQUIRED
- NOTIFY_GRANT_APPLICATION_CANCELLED
- NOTIFY_GRANT_STARTUP_PAYMENT_REQUEST_SENDER_NOT_AUTHORISED
- NOTIFY_GRANT_STARTUP_PAYMENT_REQUEST_RECEIVED
- NOTIFY_GRANT_STARTUP_PAYMENT_COMPLETE
- NOTIFY_GRANT_MILESTONE_PAYMENT_REQUEST_SENDER_NOT_AUTHORISED
- NOTIFY_GRANT_MILESTONE_PAYMENT_COMPLETE
- NOTIFY_GRANT_MILESTONE_PAYMENT_REQUEST_UNDER_REVIEW
- NOTIFY_GRANT_MILESTONE_PAYMENT_REQUEST_APPROVED

## 🏷️ Label Management

The system uses the following categories of labels to track grants through their lifecycle.

### 1. 📋 Grant Review Status

***The Grant Review system uses the following categories of labels to track grants through their lifecycle. Labels trigger the project status to move foward to the status listed in the table. The status will never automatically move backwards.***

| Label | Description | Required For | Status |
|-------|-------------|--------------|--------|
| Pending Grant Application | Initial submission state | Grant Application | New |
| Grant Application | Validated application | Grant Application | New |
| Ready For ZCG Review | Ready for committee evaluation | Grant Application & Grant Milestone | Under Review |
| Grant Approved | Application accepted | Grant Application | Approved |
| Grant Declined | Application rejected | Grant Application | Declined |
| Does Not Meet Criteria | Failed requirements check | Grant Application | Declined |
| Grant Complete | Grant Complete | Grant Application | Complete |

### 2. ✅ Verification Requirements 🔐

***The Grant Review system requires Grantees are required to meet conditions set by ZCG and FPF. These labels are used to track the outstanding conditions not met by the grantee. 📋***

| Label | Description | Required For |
|-------|-------------|--------------|
| KYC Required | Identity verification needed | Grant Application |
| KYC Verified | Identity verification passed | Grant Application |
| Forum Post Missing | Forum post requirement unfulfilled | Grant Application |
| Changes Pending Review | Modifications need review | Grant Application & Grant Milestone |
| Changes Approved | Modifications accepted | Grant Application & Grant Milestone |

### 3. 📊 Grant and Milestone Tracking 📈

***Grants will be tracked using a combination of the Grant Application and the Grant Milestone. 🎯 A Grant Milestone is a supertype of a Grant Milestone Payment Request and may be used for more features in the future. Currently it's only utilised for payment requests. ⏱️***

| Label | Description | Required For |  |
|-------|-------------|--------------|
| Progress Update Required | Status report needed | Grant Application |
| Milestone 1 Complete | Milestone Complete | Grant Applciation |
| Milestones Past Due | Deadlines missed | Grant Application |

### 4. 💰 Grant Milestone Payment Request 💸

***A Grant Milestone Payment Request is a subtype of a Grant Milestone. 📝 Currently a Grant Milestone is only utilised for payment requests. 💳***

| Label | Description | Status |
|-------|-------------|-------|
| Pending Startup Payment Request | Initial funding requested | New |
| Startup Payment Request | Initial funding requested | Under Review |
| Pending Grant Milestone Payment Request | Milestone payment requested | New |
| Grant Milestone Payment Request | Payment request being reviewed | Under Review |
| Ready For ZCG Review | Ready for committee evaluation | Under Review |
| Milestone Payment Approved | Payment authorized | In Progress |
| Milestone Payment Complete | Payment sent | Complete |

## 📈 Status Management

The system uses the following project status to track grants through their lifecycle:

### 📝 Grant Application

#### 🟢 Active Status 

| Status | Description |
|-------|-------------|
| ✨ New  | Just submitted, initial state |
| 🔍 Under Review | Being evaluated by committee |
| ✅ Approved  | Grant approved and active |
| 🚀 In Progress | Work actively ongoing |

#### 🛑 Terminal Status

| Label | Description | Status |
|-------|-------------|-------|
| ✨ Complete | All milestones achieved |
| ❌ Declined | Application not approved |
| 🚫 Cancelled | Grant terminated early |

### 💰 Grant Milestone Payment Request Status

The system uses the following Status of labels to track Milestones through their lifecycle:

#### 🟢 Active Status

| Status | Description |
|-------|-------------|
| New | Just submitted, initial state |
| Under Review | Being evaluated |
| Approved | Milestone Payment Approved |
| In Progress | Payment Processing in Progress |

#### 🔴 Terminal Status

| Status | Description |
|-------|-------------|
| Complete | Payment Complete |
| Declined | Payment Request Declined, No Payment Made |
| Cancelled | Payment Request Cancelled, No Payment Made |

## 📝 "Pending Grant Application" Workflows

***PRs and merges will not occur for "Pending Grant Applications" as they are not official Grant Applications yet.***

The "Pending Grant Application" label is set when a Grant Application is submitted using the "Grant Application" form. The following tables define how the system manages issues with a "Pending Grant Application" label. Each row describes what automated actions the system will take based on the current state of an issue.

### 📝 Initial "Pending Grant Application" Workflow

***PRs and merges will not occur for "Pending Grant Applications" as they are not official Grant Applications yet.***

| Label Updates | Assignment Updates | Issues Comments |
|---------------|--------------------|-----------------|
| - | - | NOTIFY_GRANT_APPLICATION_RECEIVED |
| -Changes Pending Review | +Admin | - |

### 📝 "Pending Grant Application" Workflow when Issue Labelled

***PRs and merges will not occur for "Pending Grant Applications" as they are not official Grant Applications yet.***

| Current Labels | Label Updates | Assignment Updates | Issues Comments | Status Updates |
|----------------|---------------|--------------------|-----------------|----------------|
| +Ready For ZCG Review | +Grant Application | +ZCG | NOTIFY_GRANT_APPLICATION_UNDER_REVIEW | Under Review |
| +Grant Approved; KYC Required; | +Grant Application; -Ready For ZCG Review | - | NOTIFY_GRANT_APPLICATION_APPROVED_KYC_REQUIRED | Approved |
| +Grant Approved; !KYC Required; | +Grant Application; -Ready For ZCG Review | - | NOTIFY_GRANT_APPLICATION_APPROVED_NO_KYC | Approved |
| +Grant Declined | +Grant Application; -Ready For ZCG Review | - | NOTIFY_GRANT_APPLICATION_DECLINED | Declined |
| +Does Not Meet Criteria | -Ready For ZCG Review | - | NOTIFY_GRANT_APPLICATION_DOES_NOT_MEET_CRITERIA | Declined |
| +KYC Required | - | - | - | - |
| +Forum Post Missing | - | - | NOTIFY_GRANT_APPLICATION_FORUM_POST_MISSING | - |
| +Progress Update Required | - | - | NOTIFY_GRANT_APPLICATION_PROGRESS_UPDATE_REQUIRED | - |
| +Milestones Past Due | - | - | NOTIFY_GRANT_APPLICATION_MILESTONE_OVERDUE | - |
| +Changes Pending Review | - | - | NOTIFY_GRANT_APPLICATION_CHANGES_REQUIRE_REVIEW | - |
| +Changes Approved | -Changes Pending Review; -Changes Approved; | - | NOTIFY_GRANT_APPLICATION_CHANGES_APPROVED | - |
| -Changes Pending Review | - or Changes Pending Review | - | - or ADMIN_NOTIFY_GRANT_APPLICATION_ISSUE_MISMATCH | - |

## 📝 "Grant Application" Workflows

***PRs and merges of changes will be automatically pushed into the _grants/{}.md file. PRs and merges will not occur for grants with "Changes Pending Review" label.***

The following tables define how the system manages issues with a "Grant Application" label. Each row describes what automated actions the system will take based on the current state of an issue.

### 🆕 Initial "Grant Application" Workflow

***This may be the first time the grant file is pushed to the repository. PRs and merges of changes will be automatically pushed into the _grants/{}.md file from this point.***

When the "Grant Application" label is added to an issue the system will remove -Pending Grant Application must take a few steps to initialise the grant within the repository.

| Label Updates | Assignment Updates | Project Updates |
|---------------|--------------------|-----------------|
| -Changes Pending Review; -Pending Grant Application;  | +Admin | +_grants/a{issue_number:05d}+title\[:50\].md |

### 🏷️ "Grant Application" Workflow with "New" Status when Labelled

***PRs and merges of changes will be automatically pushed into the _grants/{}.md file.***

| Current Labels | Label Updates | Assignment Updates | Issues Comments | Status Updates |
|----------------|---------------|--------------------|-----------------|----------------|
| +Ready For ZCG Review | - | +ZCG | NOTIFY_GRANT_APPLICATION_UNDER_REVIEW | Under Review |
| +Grant Approved; KYC Required; | -Ready For ZCG Review | - | NOTIFY_GRANT_APPLICATION_APPROVED_KYC_REQUIRED | Approved |
| +Grant Approved; !KYC Required; | -Ready For ZCG Review | - | NOTIFY_GRANT_APPLICATION_APPROVED_NO_KYC | Approved |
| +Grant Declined | -Ready For ZCG Review | - | NOTIFY_GRANT_APPLICATION_DECLINED | Declined |
| +Does Not Meet Criteria | -Ready For ZCG Review | - | NOTIFY_GRANT_APPLICATION_DOES_NOT_MEET_CRITERIA | Declined |
| +KYC Required | - | - | - | - |
| +Forum Post Missing | - | - | NOTIFY_GRANT_APPLICATION_FORUM_POST_MISSING | - |
| +Progress Update Required | - | - | NOTIFY_GRANT_APPLICATION_PROGRESS_UPDATE_REQUIRED | - |
| +Changes Pending Review | - | - | NOTIFY_GRANT_APPLICATION_CHANGES_REQUIRE_REVIEW | - |
| +Changes Approved | -Changes Pending Review; -Changes Approved; | - | NOTIFY_GRANT_APPLICATION_CHANGES_APPROVED | - |
| -Changes Pending Review | - or Changes Pending Review | - | - or ADMIN_NOTIFY_GRANT_APPLICATION_ISSUE_MISMATCH | - |

### 🔍 "Grant Application" Workflow with "Under Review" Status when Issue Labelled

***PRs and merges of changes will be automatically pushed into the _grants/{}.md file.***

| Current Labels | Label Updates | Assignment Updates | Issues Comments | Status Updates |
|----------------|---------------|-------------------|-----------------|----------------|
| +Ready For ZCG Review | - | +ZCG | NOTIFY_GRANT_APPLICATION_UNDER_REVIEW | - |
| +Grant Approved; KYC Required; | -Ready For ZCG Review | - | NOTIFY_GRANT_APPLICATION_APPROVED_KYC_REQUIRED | Approved |
| +Grant Approved; !KYC Required; | -Ready For ZCG Review | - | NOTIFY_GRANT_APPLICATION_APPROVED_NO_KYC | Approved |
| +Grant Declined | -Ready For ZCG Review | - | NOTIFY_GRANT_APPLICATION_DECLINED | Declined |
| +Does Not Meet Criteria | -Ready For ZCG Review | - | NOTIFY_GRANT_APPLICATION_DOES_NOT_MEET_CRITERIA | Declined |
| +KYC Required | - | - | - | - |
| +Forum Post Missing | - | - | NOTIFY_GRANT_APPLICATION_FORUM_POST_MISSING | - |
| +Progress Update Required | - | - | NOTIFY_GRANT_APPLICATION_PROGRESS_UPDATE_REQUIRED | - |
| +Changes Pending Review | - | - | NOTIFY_GRANT_APPLICATION_CHANGES_REQUIRE_REVIEW | - |
| +Changes Approved | -Changes Pending Review; - Changes Approved; | - | NOTIFY_GRANT_APPLICATION_CHANGES_APPROVED | - |
| -Changes Pending Review | - or Changes Pending Review | - | - or ADMIN_NOTIFY_GRANT_APPLICATION_ISSUE_MISMATCH | - |

### ✅ "Grant Application" Workflow with "Approved" Status when Issue Labelled

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
| +Changes Approved | -Changes Pending Review; -Changes Approved; | - | NOTIFY_GRANT_APPLICATION_CHANGES_APPROVED | - |
| -Changes Pending Review | - or Changes Pending Review | - | - or ADMIN_NOTIFY_GRANT_APPLICATION_ISSUE_MISMATCH | - |

### ⏳ "Grant Application" Workflow with "In Progress" Status when Issue Labelled

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
| +Changes Approved | -Changes Pending Review; -Changes Approved; | - | NOTIFY_GRANT_APPLICATION_CHANGES_APPROVED | - |
| -Changes Pending Review | - or Changes Pending Review | - | - or ADMIN_NOTIFY_GRANT_APPLICATION_ISSUE_MISMATCH | - |

### 🔚 "Grant Application" with "Cancelled/Declined/Complete" Status when Issue Labelled

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
| +Changes Approved | -Changes Pending Review; -Changes Approved; |
| -Changes Pending Review | - |

### ✏️ "Grant Application" Workflow when Issue Edited

***Grant Application Changes Require Review. Any notifications, PR, merging should be handled by the label change events.***

| Label Changes |
|---------------|
| +Changes Pending Review |

### 🔄 "Grant Application" Workflow when Grant File Pushed to "main"

***Check Frontmatter, Issues, and Projects are in sync***

| Check  | Label Changes | Issue Changes | Warn | Log |
|--------|---------------|---------------|------|-----|
| Row    | - | Create new entry in project | - | - |
| Fields | - | - | - | List of Frontmatter fields not in project |
| Labels | Requires Label Sync | - | List of Frontmatter fields not in project | - |
| Values | Requires Value Sync | - | List of Frontmatter values not matching | - |

## 💸 "Pending Startup Payment Request" Workflows

***PRs and merges are currently not supported for "Pending Startup Payment Request".***

The "Pending Startup Payment Request" label is set when a Payment Request is submitted using the "Grant Startup Payment Request" form. The following tables define how the system manages issues with a "Pending Startup Payment Request" label. Each row describes what automated actions the system will take based on the current state of an issue.

### 🆕 Initial "Pending Startup Payment Request" Workflow

***PRs and merges are currently not supported for "Pending Startup Payment Request".***

When the "Pending Startup Payment Request" label is added to an issue the system does a few initial actions.

| Check | Label Updates | Issues Comments | Assignment Updates | Status Updates |
|-------|---------------|-----------------|--------------------|----------------|
| - | - | - | +Admin | - |
| Sender == Grant Assignee | - | NOTIFY_GRANT_STARTUP_PAYMENT_REQUEST_SENDER_NOT_AUTHORISED | Close |

### 🏷️ "Pending Startup Payment Request" Workflow when Issue Labelled

***PRs and merges are currently not supported for "Pending Startup Payment Request".***

| Current Labels | Label Updates | Assignment Updates | Issues Comments | Grant Label Updates |
|----------------|---------------|--------------------|-----------------|---------------------|
| +Ready For ZCG Review | +Grant Milestone | +ZCG | NOTIFY_GRANT_MILESTONE_PAYMENT_REQUEST_UNDER_REVIEW | Milestone Payment Requests |
| +Milestone Payment Approved | +Grant Milestone; -Ready For ZCG Review; | - | NOTIFY_GRANT_MILESTONE_PAYMENT_REQUEST_APPROVED | - |
| +Milestone Payment Complete | +Grant Milestone; -Ready For ZCG Review; | - | NOTIFY_GRANT_MILESTONE_PAYMENT_COMPLETE | +Milestone 1 Complete |

## 🎯 "Pending Grant Milestone" Workflows

***PRs and merges are currently not supported for "Pending Grant Milestone" or "Grant Milestones".***

The "Pending Grant Milestone" label is set when a Payment Request is submitted using the "Grant Milestone Payment Request" form. The following tables define how the system manages issues with a "Pending Grant Milestone" label. Each row describes what automated actions the system will take based on the current state of an issue. Currently only "Milestone Payment Request" workflows are supported.

### 🆕 Initial "Pending Grant Milestone" + "Milestone Payment Request" Workflow

***PRs and merges are currently not supported for "Pending Grant Milestone" or "Grant Milestones".***

When the "Pending Grant Milestone" label is added to an issue the system does a few initial actions.

| Check | Label Updates | Issues Comments | Assignment Updates | Status Updates |
|-------|---------------|-----------------|--------------------|----------------|
| - | - | - | +Admin | - |
| Sender == Grant Assignee | - | NOTIFY_GRANT_MILESTONE_PAYMENT_REQUEST_SENDER_NOT_AUTHORISED | Close |

### 🏷️ "Pending Grant Milestone" Workflow when Issue Labelled

***PRs and merges are currently not supported for "Pending Grant Milestone" or "Grant Milestones".***

| Current Labels | Label Updates | Assignment Updates | Issues Comments | Grant Label Updates |
|----------------|---------------|--------------------|-----------------|---------------------|
| +Ready For ZCG Review | +Grant Milestone | +ZCG | NOTIFY_GRANT_MILESTONE_PAYMENT_REQUEST_UNDER_REVIEW | Milestone Payment Requests |
| +Milestone Payment Approved | +Grant Milestone; -Ready For ZCG Review; | - | NOTIFY_GRANT_MILESTONE_PAYMENT_REQUEST_APPROVED | - |
| +Milestone Payment Complete | +Grant Milestone; -Ready For ZCG Review; | - | NOTIFY_GRANT_MILESTONE_PAYMENT_COMPLETE | +Milestone 1 Complete |

### 🆕 Initial "Grant Milestone" + "Milestone Payment Request" Workflow

***PRs and merges are currently not supported for "Pending Grant Milestone" or "Grant Milestones".***

When the "Grant Milestone" label is added to an issue the system must does a few initial actions.

| Check | Label Updates | Issues Comments | Assignment Updates | Status Updates |
|-------|---------------|-----------------|--------------------|----------------|
| - | -Pending Grant Milestone | - | +Admin | - |

### 🏷️ "Grant Milestone" + "Milestone Payment Request" Workflow when Issue Labelled

***PRs and merges are currently not supported for "Pending Grant Milestone" or "Grant Milestones".***

| Current Labels | Label Updates | Assignment Updates | Issues Comments | Grant Label Updates |
|----------------|---------------|--------------------|-----------------|---------------------|
| +Ready For ZCG Review | - | +ZCG | NOTIFY_GRANT_MILESTONE_PAYMENT_REQUEST_UNDER_REVIEW | Milestone Payment Requests |
| +Milestone Payment Approved | -Ready For ZCG Review; | - | NOTIFY_GRANT_MILESTONE_PAYMENT_REQUEST_APPROVED | - |
| +Milestone Payment Complete | -Ready For ZCG Review; | - | NOTIFY_GRANT_MILESTONE_PAYMENT_COMPLETE | +Milestone 1 Complete |
