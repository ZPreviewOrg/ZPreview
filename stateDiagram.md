```mermaid
stateDiagram-v2
    [*] --> "📝 Pending Grant Application": Issue opened with '📝 Pending Grant Application'
    
    "📝 Pending Grant Application" --> "📋 Grant Application": When "👀 Ready For ZCG Review" is added
    note right of "📋 Grant Application"
      - Remove "📝 Pending Grant Application"
      - Add "📋 Grant Application"
      - Assign to ZCG reviewer
      - Set status to "Under Review"
      - Create & merge a PR
      - Add a comment: "NOTIFY_GRANT_APPLICATION_UNDER_REVIEW"
    end note

    "📋 Grant Application" --> "Approved (KYC Required)": When "✅ Grant Approved" AND "🔐 KYC Required" are present
    note right of "Approved (KYC Required)"
      - Remove "👀 Ready For ZCG Review"
      - Update status to "Approved"
      - Note KYC required
      - Create & merge a PR
      - Add a comment: "NOTIFY_GRANT_APPLICATION_APPROVED_KYC_REQUIRED"
    end note

    "📋 Grant Application" --> "Approved (No KYC)": When "✅ Grant Approved" is added without "🔐 KYC Required"
    note right of "Approved (No KYC)"
      - Remove "👀 Ready For ZCG Review"
      - Update status to "Approved"
      - Create & merge a PR
      - Add a comment: "NOTIFY_GRANT_APPLICATION_APPROVED_NO_KYC"
    end note

    "📋 Grant Application" --> "Declined": When "❌ Grant Declined" is added
    note right of "Declined"
      - Remove "👀 Ready For ZCG Review"
      - Update status to "Declined"
      - Create & merge a PR
      - Add a comment: "NOTIFY_GRANT_APPLICATION_DECLINED"
    end note
    
    "📋 Grant Application" --> "Declined (Criteria Not Met)": When "⛔ Does Not Meet Criteria" is added
    note right of "Declined (Criteria Not Met)"
      - Remove "👀 Ready For ZCG Review"
      - Update status to "Declined"
      - Create & merge a PR
      - Add a comment: "NOTIFY_GRANT_APPLICATION_DOES_NOT_MEET_CRITERIA"
    end note
    
    "📋 Grant Application" --> "Forum Post Missing": When "📢 Forum Post Missing" is added
    note right of "Forum Post Missing"
      - Add comment: "NOTIFY_GRANT_APPLICATION_FORUM_POST_MISSING"
    end note

    "📋 Grant Application" --> "Progress Update Required": When "📊 Progress Update Required" is added
    note right of "Progress Update Required"
      - Add comment: "NOTIFY_GRANT_APPLICATION_PROGRESS_UPDATE_REQUIRED"
    end note

    "📋 Grant Application" --> "Milestones Past Due": When "⏰ Milestones Past Due" is added
    note right of "Milestones Past Due"
      - Add comment: "NOTIFY_GRANT_APPLICATION_MILESTONE_OVERDUE"
    end note

    "📋 Grant Application" --> "Changes Pending Review": When "🔄 Changes Pending Review" is added
    note right of "Changes Pending Review"
      - Add comment: "NOTIFY_GRANT_APPLICATION_CHANGES_REQUIRE_REVIEW"
    end note

    "Changes Pending Review" --> "Changes Approved": When "✔️ Changes Approved" AND "🔄 Changes Pending Review" both present
    note right of "Changes Approved"
      - Remove "🔄 Changes Pending Review" and "✔️ Changes Approved"
      - Add comment: "NOTIFY_GRANT_APPLICATION_CHANGES_APPROVED"
    end note
```