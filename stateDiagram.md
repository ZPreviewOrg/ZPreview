```mermaid
stateDiagram-v2
    [*] --> "📝 Pending Grant Application": Issue opened with '📝 Pending Grant Application'
    
    "📝 Pending Grant Application" --> "📋 Grant Application": 
        When "👀 Ready For ZCG Review" is added
        Note right of "📋 Grant Application": 
          - Remove "📝 Pending Grant Application"\n
          - Add "📋 Grant Application"\n
          - Assign to ZCG reviewer\n
          - Set status to "Under Review"\n
          - Create & merge a PR\n
          - Add a comment: "NOTIFY_GRANT_APPLICATION_UNDER_REVIEW"
    
    "📋 Grant Application" --> "Approved (KYC Required)":
        When "✅ Grant Approved" AND "🔐 KYC Required" are present
        Note right of "Approved (KYC Required)": 
          - Remove "👀 Ready For ZCG Review"\n
          - Update status to "Approved"\n
          - Note KYC required\n
          - Create & merge a PR\n
          - Add a comment: "NOTIFY_GRANT_APPLICATION_APPROVED_KYC_REQUIRED"
    
    "📋 Grant Application" --> "Approved (No KYC)":
        When "✅ Grant Approved" is added without "🔐 KYC Required"
        Note right of "Approved (No KYC)":
          - Remove "👀 Ready For ZCG Review"\n
          - Update status to "Approved"\n
          - Create & merge a PR\n
          - Add a comment: "NOTIFY_GRANT_APPLICATION_APPROVED_NO_KYC"
    
    "📋 Grant Application" --> "Declined":
        When "❌ Grant Declined" is added
        Note right of "Declined":
          - Remove "👀 Ready For ZCG Review"\n
          - Update status to "Declined"\n
          - Create & merge a PR\n
          - Add a comment: "NOTIFY_GRANT_APPLICATION_DECLINED"
    
    "📋 Grant Application" --> "Declined (Criteria Not Met)":
        When "⛔ Does Not Meet Criteria" is added
        Note right of "Declined (Criteria Not Met)":
          - Remove "👀 Ready For ZCG Review"\n
          - Update status to "Declined"\n
          - Create & merge a PR\n
          - Add a comment: "NOTIFY_GRANT_APPLICATION_DOES_NOT_MEET_CRITERIA"
    
    "📋 Grant Application" --> "Forum Post Missing":
        When "📢 Forum Post Missing" is added
        Note right of "Forum Post Missing":
          - Add comment: "NOTIFY_GRANT_APPLICATION_FORUM_POST_MISSING"
    
    "📋 Grant Application" --> "Progress Update Required":
        When "📊 Progress Update Required" is added
        Note right of "Progress Update Required":
          - Add comment: "NOTIFY_GRANT_APPLICATION_PROGRESS_UPDATE_REQUIRED"
    
    "📋 Grant Application" --> "Milestones Past Due":
        When "⏰ Milestones Past Due" is added
        Note right of "Milestones Past Due":
          - Add comment: "NOTIFY_GRANT_APPLICATION_MILESTONE_OVERDUE"
    
    "📋 Grant Application" --> "Changes Pending Review":
        When "🔄 Changes Pending Review" is added
        Note right of "Changes Pending Review":
          - Add comment: "NOTIFY_GRANT_APPLICATION_CHANGES_REQUIRE_REVIEW"

    "Changes Pending Review" --> "Changes Approved":
        When "✔️ Changes Approved" AND "🔄 Changes Pending Review" both present
        Note right of "Changes Approved":
          - Remove "🔄 Changes Pending Review" and "✔️ Changes Approved"\n
          - Add comment: "NOTIFY_GRANT_APPLICATION_CHANGES_APPROVED"
```