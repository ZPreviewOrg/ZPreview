---
title: "Orchard and UA for YWallet"
status: "Accepted"
amount: "114400.0"
submitter: "[REDACTED] [REDACTED]"
email: "[REDACTED]"
date: "2022-09-20 12:24:23"
project_name: "Orchard and UA for YWallet"
summary: "Add Orchard features to YWallet Mobile and Desktop Apps"
total_grant_value: "114400.0"
submitter_last_name: "[REDACTED]"
original_title: "Orchard and UA for YWallet"
labels:
  - APPROVED
  - GRANT COMPLETE
  - MILESTONE 1: COMPLETE
  - MILESTONE 2: COMPLETE
  - MILESTONE 3: COMPLETE
  - OPEN
---

## Terms and Conditions

- [X] I agree
- [ ] Link to this issue on forum - _do after application has been submitted_

### Application Metadata

- **Submitter First Name:**
  [REDACTED]
- **Submitter Last Name:**
  [REDACTED]
- **Submitter Email:**
  [REDACTED]
- **Status:**
  Accepted
- **How did you learn about Zcash Community Grants:**
  Forums
- **Original Title:**
  Orchard and UA for YWallet

- **Labels:**
  - APPROVED
  - GRANT COMPLETE
  - MILESTONE 1: COMPLETE
  - MILESTONE 2: COMPLETE
  - MILESTONE 3: COMPLETE
  - OPEN

### Project Overview

- **Project Name:**
  Orchard and UA for YWallet
- **Last Updated:**
  2022-09-20 12:24:23
- **Sponsorship Request:**
  No
- **Project Image (Public Gallery):**
  hanh-bear.jpg
- **Project Summary:**
  Add Orchard features to YWallet Mobile and Desktop Apps

### Project Description

- **Overview:**
  The Zcash protocol recently activated NU5, which has the Orchard pool. Orchard is a big step forward for Zcash, and should have support within YWallet. The Orchard pool is designed as a separate shielded pool from Sapling, and so requires a significant amount of wallet work to support sending transactions to and from the Orchard pool.
- **Proposed solution:**
  YWallet will implement full support for the Orchard shielded pool in its various wallets and SDKs. This includes full support for sending and receiving shielded Orchard funds in a way that works across all wallets. We'll implement smart note management, leveraging UA's ability to include multiple address types. https://youtu.be/Zl8A1rSxexs
- **Solution Format:**
  YWallet Mobile and Desktop - Add support for *all* Unified Addresses - Add support for zcashd v5.0.0 mnemonic wallets - Add sending and receiving funds from Orchard - Lite client support for Orchard - WarpSync for Orchard, so that orchard blocks are synced at full speed. - Create account from UA view key - Smart note management, leveraging UA's ability to include multiple address types. - Note Management: Auto and manual shielding across all pools as recommended by "shielded by default"
- **Dependencies:**
  No external dependencies. A prototype has been built.
- **Technical approach:**
  YWallet uses its own SDK (called zcash-sync), which features the "warpsync" algorithm that syncs the Zcash blockchain significantly faster. The main part of this grant is adding Orchard support to YWallet including extending warpsync to the orchard pool, adding support for unified addresses and the ability to decode v4 and v5 transactions The UI will also be extended to support Orchard features like the unified addresses and the separate Orchard pool.

### Requested Grant Amount

- **Amount:**
  114400.0

### Budget Breakdown

- **Hardware/Software budget:**
  114400.0
- **Hardware/Software justification:**
  The total budget is identical to the grant for ZecWallet since the project is of the exact nature. I replaced the part about FullNode (since YWallet does not have it) with support for UAs with multiple receivers and UA View keys. Also, I added an intelligent note selection module that improves privacy taking ZIP 315 into consideration. Together, they will provide a UX close to the intention of
- **Services budget:**
  0.0
- **Services justification:**
  N/A
- **Compensation budget:**
  114400.0
- **Compensation justification:**
  N/A
- **Startup funding required:**
  No
- **Total proposed grant value:**
  114400.0

### Team Members

- **Project Lead:**
  hanh
- **Background:**
  YWallet author Background in OS, Database engine, and high frequency trading systems Over 25 years of experience

### Funding History

- **Previous funding:**
  Yes
- **Previous funding details:**
  - Cold Wallet - BTCPay Server integration of Zcash - YWallet
- **Other funding sources:**
  No

### Risks and Evaluation

- **Execution risks:**
  A prototype has been built for Orchard/warpsync. Smart note management is work in progress. There could be an issue with finding the optimal combination of notes in complex cases but this should not affect normal users.
- **Unintended Consequences:**
  One of the big challenges of this work is that UI complexity will increase because of the additional shielded pool, and will make UX worse for a while. This could lead to user confusion and make Zecwallet and Zcash harder to use. Although the use of Unified Addresses will mitigate this substantially, for a transition period (while all Zcash users move over to the orchard pool from sapling), there will be increased complexity and confusion in the product.
- **Evaluation plan:**
  Success criteria is: 1. YWallet desktop and mobile apps have support for - Unified addresses - Send and Receive funds from the orchard pool. 2. These features are deployed to 100% of mobile and desktop users of YWallet.

### Project Timeline

- **Project timeline determination:**
  1 person working full time for 13 weeks (@ $220 / hr) = 220 * 8 * 5 * 13 = $114400

### Milestone 1

- **Amount:**
  70000.0
- **Expected Completion Date:**
  12/1/2022

  - **Deliverables:**
    - Sinsemilla Hash
    - Warp Sync for Orchard
    - Refactorization of Warp Sync to support both Sapling / Orchard side by side

### Milestone 2

- **Amount:**
  20000.0
- **Expected Completion Date:**
  1/15/2023

  - **Deliverables:**
    - Smart Note Selection / Management - Shielded by Default

### Milestone 3

- **Amount:**
  24400.0
- **Expected Completion Date:**
  2/15/2023

  - **Deliverables:**
    - YWallet 2.0

### Additional Milestones

- **Additional Milestones:**
  No

### Submission Date

- **Submission Date:**
  2022-09-20 12:24:23

### File Attachments


