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

#### 4.1.1 Initial Submission Actions

- Validation checks
- Automatic labeling
- Assignee routing

#### 4.1.2 Status-based Actions

### 4.2 Grant Management Workflow

#### 4.2.1 Initial Submission Actions

- Assignee routing

#### 4.2.2 Status-based Actions

- New grant actions
- Review process actions
- Approval workflows
- Progress tracking
- Closure procedures

### 4.3 Payment Processing
#### 4.3.1 Initial Grant Payment
- Verification requirements
- Approval workflow
- Payment execution
- Status updates

#### 4.3.2 Milestone Payments
- Progress verification
- Documentation review
- Payment approval
- Distribution process

## 5. System Administration
### 5.1 Access Control
- Role definitions
- Permission levels
- Authentication requirements

### 5.2 Maintenance Procedures
- Label management
- Workflow updates
- System backups
- Performance monitoring

### 5.3 Reporting and Analytics
- Grant metrics
- Payment tracking
- Performance indicators
- Compliance reporting
