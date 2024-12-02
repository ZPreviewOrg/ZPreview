# GitHub Grant Management System

## 1. System Overview
### 1.1 Purpose and Scope
- System objectives
- Target users
- Key features

### 1.2 Core Components
- Application processing engine
- Payment management system
- Verification framework
- Automated workflows

### 1.3 Technical Architecture
- Integration points
- System dependencies
- Security considerations

## 2. Label Management
The system uses several categories of labels to track grants through their lifecycle. Labels trigger automatic status transitions forward but never backward.

### 2.1 Grant Review Status Labels
| Label | Description | Required For | Status |
|-------|-------------|--------------|---------|
| Pending Grant Application | Initial submission state | Grant Application | New |
| Grant Application | Validated application | Grant Application | New |
| Ready For ZCG Review | Ready for committee evaluation | Grant Application & Grant Milestone | Under Review |
| Grant Approved | Application accepted | Grant Application | Approved |
| Grant Declined | Application rejected | Grant Application | Declined |
| Does Not Meet Criteria | Failed requirements check | Grant Application | Declined |
| Grant Complete | All milestones fulfilled | Grant Application | Complete |

### 2.2 Verification Labels
These labels track compliance with ZCG and FPF requirements:

| Label | Description | Required For |
|-------|-------------|--------------|
| KYC Required | Identity verification needed | Grant Application |
| KYC Verified | Identity verification passed | Grant Application |
| Forum Post Missing | Forum post requirement unfulfilled | Grant Application |
| Changes Pending Review | Modifications need review | Grant Application & Grant Milestone |
| Changes Approved | Modifications accepted | Grant Application & Grant Milestone |

### 2.3 Grant and Milestone Tracking Labels
Labels for monitoring grant progress and milestone completion:

| Label | Description | Required For |
|-------|-------------|--------------|
| Progress Update Required | Status report needed | Grant Application |
| Milestone 1 Complete | First milestone achieved | Grant Application |
| Milestones Past Due | Deadlines missed | Grant Application |

### 2.4 Grant Milestone Payment Request Labels
Labels specific to payment processing workflow:

| Label | Description | Status |
|-------|-------------|---------|
| Pending Startup Payment Request | Initial funding requested | New |
| Startup Payment Request | Initial funding under review | Under Review |
| Pending Grant Milestone Payment Request | Milestone payment requested | New |
| Grant Milestone Payment Request | Payment request being reviewed | Under Review |
| Ready For ZCG Review | Ready for committee evaluation | Under Review |
| Milestone Payment Approved | Payment authorized | In Progress |
| Milestone Payment Complete | Payment sent | Complete |

Note: Grant Milestone Payment Requests are a specialized type of Grant Milestone currently used exclusively for payment processing.

## 3. Status Management
The system uses distinct status categories to track both grant applications and milestones through their complete lifecycle.

### 3.1 Grant Application Statuses
Grant applications move through the following statuses as they progress:

#### 3.1.1 Active Statuses
| Status | Description |
|--------|-------------|
| New | Initial state after submission, pending initial review |
| Under Review | Currently being evaluated by the grant committee |
| In Progress | Grant work has begun and is actively ongoing |
| Approved | Grant has been approved and is considered active |

#### 3.1.2 Terminal Statuses
| Status | Description |
|--------|-------------|
| Declined | Application was not approved by the committee |
| Cancelled | Grant was terminated before completion |
| Complete | All milestones successfully achieved and grant closed |

### 3.2 Grant Milestone Statuses
Individual milestones within approved grants follow their own status progression:

#### 3.2.1 Active Statuses
| Status | Description |
|--------|-------------|
| New | Milestone newly created and awaiting start |
| Under Review | Milestone completion being evaluated |
| In Progress | Work on milestone actively underway |
| Approved | Milestone completion verified and approved |

#### 3.2.2 Terminal Statuses
| Status | Description |
|--------|-------------|
| Cancelled | Milestone terminated before completion |
| Complete | Milestone successfully completed and closed |

Note: Status transitions generally move forward only - reverting to a previous status requires special administrative action.

## 4. Workflow Processes

### 4.1 Grant Application Workflow

The system manages grant applications through distinct phases with specific workflows and automated actions.

#### 4.1.1 Pending Grant Application Workflows

***PRs and merges will not occur for "Pending Grant Applications" as they are not official Grant Applications yet.***

The "Pending Grant Application" label is set when a new Grant Application is submitted using the "Grant Application" form. The following tables define how the system manages issues with a "Pending Grant Application" label.

##### Initial "Pending Grant Application" Workflow

| Label Updates | Assignment Updates |
|---------------|--------------------|
| -Changes Pending Review | +Admin |

##### "Pending Grant Application" Workflow when Issue Labelled

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
| +Changes Approved | -Changes Pending Review; -Changes Approved; | - | NOTIFY_GRANT_APPLICATION_CHANGES_APPROVED | - |
| -Changes Pending Review | - or Changes Pending Review | - | - or ADMIN_NOTIFY_GRANT_ISSUE_MISMATCH | - |

#### 4.1.2 Grant Application Workflows

***PRs and merges of changes will be automatically pushed into the _grants/{}.md file. PRs and merges will not occur for grants with "Changes Pending Review" label.***

##### Initial "Grant Application" Workflow

When the "Grant Application" label is added:

| Label Updates | Assignment Updates | Project Updates |
|---------------|--------------------|-----------------|
| -Changes Pending Review; -Pending Grant Application; | +Admin | +_grants/a{issue_number:05d}+title[:50].md |

##### Status-Based Workflows

The system processes applications differently based on their current status:

###### New Status Workflow

| Current Labels | Label Updates | Assignment Updates | Issues Comments | Status Updates |
|----------------|---------------|--------------------|-----------------|----------------|
| +Ready For ZCG Review | - | +ZCG | NOTIFY_GRANT_UNDER_REVIEW | Under Review |
| +Grant Approved; KYC Required; | -Ready For ZCG Review | - | NOTIFY_GRANT_APPLICATION_APPROVED_KYC_REQUIRED | Approved |
| +Grant Approved; !KYC Required; | -Ready For ZCG Review | - | NOTIFY_GRANT_APPLICATION_APPROVED_NO_KYC | Approved |
| +Grant Declined | -Ready For ZCG Review | - | NOTIFY_GRANT_APPLICATION_DECLINED | Declined |

###### Under Review Status Workflow

| Current Labels | Label Updates | Assignment Updates | Issues Comments | Status Updates |
|----------------|---------------|-------------------|-----------------|----------------|
| +Ready For ZCG Review | - | +ZCG | NOTIFY_GRANT_APPLICATION_APPLICATION_RECEIVED | - |
| +Grant Approved; KYC Required; | -Ready For ZCG Review | - | NOTIFY_GRANT_APPLICATION_APPROVED_KYC_REQUIRED | Approved |
| +Grant Approved; !KYC Required; | -Ready For ZCG Review | - | NOTIFY_GRANT_APPLICATION_APPROVED_NO_KYC | Approved |

###### Approved & In Progress Status Workflow

| Current Labels | Label Updates | Assignment Updates | Issues Comments | Status Updates |
|----------------|---------------|-------------------|-----------------|----------------|
| +KYC Required | - | - | NOTIFY_GRANT_APPLICATION_KYC_REQUEST | - |
| +Progress Update Required | - | - | NOTIFY_GRANT_APPLICATION_PROGRESS_UPDATE_REQUIRED | - |
| +Milestone 1 Complete | - | - | NOTIFY_GRANT_APPLICATION_MILESTONE_COMPLETE | - |

###### Terminal Status Workflows

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

##### File Change Management

###### Grant Application Changes
***Grant Application Changes Require Review. Any notifications, PR, merging should be handled by the label change events.***

| Label Changes |
|---------------|
| +Changes Pending Review |

###### Grant File Updated

***Check Frontmatter, Issues, and Projects are in sync***

| Check  | Label Changes | Issue Changes | Warn | Log |
|--------|---------------|---------------|------|-----|
| Row    | - | Create new entry in project | - | - |
| Fields | - | - | - | List of Frontmatter fields not in project |
| Labels | Requires Label Sync | - | List of Frontmatter fields not in project | - |
| Values | Requires Value Sync | - | List of Frontmatter values not matching | - |

### 4.2 Payment Processing

#### 4.2.1 Initial Grant Payment Workflow
The system manages initial grant payments through a structured workflow with automated actions and status tracking.

##### Initial Payment Request Processing
When a new payment request is submitted:

| Check | Label Updates | Assignment Updates | Status Updates |
|-------|---------------|-------------------|----------------|
| - | - | +Admin | - |
| Sender == Grant Assignee | - | Close | - |

##### Payment Request Status Workflow
| Current Labels | Label Updates | Assignment Updates | Issues Comments |
|----------------|---------------|-------------------|-----------------|
| +Ready For ZCG Review | +Grant Milestone | +ZCG | NOTIFY_GRANT_MILESTONE_PAYMENT_REQUEST_UNDER_REVIEW |
| +Milestone Payment Approved | -Ready For ZCG Review | - | NOTIFY_GRANT_MILESTONE_PAYMENT_APPROVED |
| +Milestone Payment Complete | -Ready For ZCG Review | - | NOTIFY_GRANT_MILESTONE_PAYMENT_COMPLETE |

#### 4.2.2 Milestone Payment Workflow
Milestone payments follow a specific verification and approval process:

##### Initial Milestone Payment Request Processing
When a milestone payment request is submitted:

| Check | Label Updates | Issues Comments | Assignment Updates |
|-------|---------------|-----------------|-------------------|
| - | -Pending Grant Milestone | - | +Admin |

##### Milestone Payment Status Workflow
| Current Labels | Label Updates | Assignment Updates | Issues Comments | Grant Updates |
|----------------|---------------|-------------------|-----------------|---------------|
| +Ready For ZCG Review | - | +ZCG | NOTIFY_GRANT_MILESTONE_PAYMENT_REQUEST_UNDER_REVIEW | Milestone Payment Requests |
| +Milestone Payment Approved | -Ready For ZCG Review | - | NOTIFY_GRANT_MILESTONE_PAYMENT_APPROVED | - |
| +Milestone Payment Complete | -Ready For ZCG Review | - | NOTIFY_GRANT_MILESTONE_PAYMENT_COMPLETE | +Milestone 1 Complete |

Note: PRs and merges are currently not supported for "Pending Grant Milestone" or "Grant Milestones".
