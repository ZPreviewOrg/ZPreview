---
title: "Zecwallet and Orchard"
status: "Accepted"
amount: "114400.0"
submitter: "[REDACTED] [REDACTED]"
email: "[REDACTED]"
date: "2022-06-08 19:21:01"
project_name: "Zecwallet and Orchard"
summary: "Add Orchard features to Zecwallet Mobile and Desktop Apps"
total_grant_value: "114400.0"
submitter_last_name: "[REDACTED]"
original_title: "Zecwallet and Orchard"
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
  Zcash community forum.
- **Original Title:**
  Zecwallet and Orchard

- **Labels:**
  - APPROVED
  - GRANT COMPLETE
  - MILESTONE 1: COMPLETE
  - MILESTONE 2: COMPLETE
  - MILESTONE 3: COMPLETE
  - OPEN

### Project Overview

- **Project Name:**
  Zecwallet and Orchard
- **Last Updated:**
  2022-06-08 19:21:01
- **Sponsorship Request:**
  No
- **Project Image (Public Gallery):**
  11062_2.png
- **Project Summary:**
  Add Orchard features to Zecwallet Mobile and Desktop Apps

### Project Description

- **Overview:**
  The Zcash protocol recently activated NU5, which has the Orchard pool. Orchard is a big step forward for Zcash, and should have support within Zecwallet. The Orchard pool is designed as a separate shielded pool from Sapling, and so requires a significant amount of wallet work to support sending transactions to and from the Orchard pool.
- **Proposed solution:**
  Zecwallet will implement full support for the Orchard shielded pool in its various wallets and SDKs. This includes full support for sending and receiving shielded Orchard funds in a way that works across all wallets. Additionally, we'll implemented *experimental* support for using Zebra, the Zcash Foundation's full node client as a backend for Lite wallets using LightwalletD.
- **Solution Format:**
  Zecwallet Fullnode - Add support for Unified Addresses - Add support for zcashd v5.0.0 mnemonic wallets - Add sending and receiving funds from Orchard Zecwallet CLI client and SDK - Lite client support for Orchard - Full Orchard pool support to send and recieve funds from the Orchard shielded pool - Add Unified addresses - Blazesync for Orchard, so that orchard blocks are synced at full speed. Zecwallet Lite mobile and Desktop Apps - UA address support in UI - Send / Recieve orchard funds - Ability to shield funds to Orchard pool from transparent addresses - Send and receive v4 or v5 transactions, depending on the receiver LightwalletD - Full support for Orchard actions - *experimental* support for using Zebra as a backend, deployed in production
- **Dependencies:**
  There are no significant dependencies. All work can be done by the Zecwallet team. Dependencies:
- **Technical approach:**
  Zecwallet uses its own SDK (called zecwallet-light-cli), which is compatible with the ECC SDK, but features the "blazesync" sync algorithm that syncs the Zcash blockchain significantly faster. The main part of this grant is adding Orchard support to the Zecwallet lite SDK, including extending blazesync to the orchard pool, adding support for unified addresses and ability to decode v4 and v5 transactions This SDK is then used across the mobile and desktop apps. The UI will also be extended to support Orchard features like the unified addresses and the separate Orchard pool.

### Requested Grant Amount

- **Amount:**
  114400.0

### Budget Breakdown

- **Hardware/Software budget:**
  0.0
- **Hardware/Software justification:**
  Hardware costs are included in the hourly rate.
- **Services budget:**
  0.0
- **Services justification:**
  Services costs are included in the overall budget
- **Compensation budget:**
  114400.0
- **Compensation justification:**
  1 person working full time for 13 weeks (@ $200 / hr) = 200 * 8 * 5 * 13 = $104000 1 person working part time (10%) for 13 weeks (@ $200 / hr) = 200 * 4 * 13 = $10400 Total = $114,400 All cloud services (hosting for LightwalletD) and hardware costs are included in the budget
- **Startup funding required:**
  No
- **Total proposed grant value:**
  114400.0

### Team Members

- **Project Lead:**
  Zecwallet / Aditya Kulkarni
- **Background:**
  Zecwallet Fullnode and Zecwallet Lite are 2 of the popular full node and liteclient wallets for Zcash that have full support for Zcash , including shielded address (sapling support). They are fast syncing and work reliably well.

### Funding History

- **Previous funding:**
  Yes
- **Previous funding details:**
  Several Zecwallet grants, most recently "Zecwallet Research and Development"
- **Other funding sources:**
  No

### Risks and Evaluation

- **Execution risks:**
  There are no substantial technical or project risks here.
- **Unintended Consequences:**
  One of the big challenges of this work is that UI complexity will increase because of the additional shielded pool, and will make UX worse for a while. This could lead to user confusion and make Zecwallet and Zcash harder to use. Although the use of Unified Addresses will mitigate this substantially, for a transition period (while all Zcash users move over to the orchard pool from sapling), there will be increased complexity and confusion in the product.
- **Evaluation plan:**
  Success criteria is: 1. Zecwallet desktop and mobile apps have support for - Unified addresses - Send and Receive funds from the orchard pool. 2. These features are deployed to 100% of mobile and desktop users of Zecwallet.

### Project Timeline

- **Project timeline determination:**
  Zecwallet has substantial experience building for Zcash, and we feel the timeline is accurate and achievable.

### Milestone 1

- **Amount:**
  20000.0
- **Expected Completion Date:**
  6/22/2022

  - **Deliverables:**
    - Zecwallet Fullnode with full Orchard support for zcashd v5.0.0

### Milestone 2

- **Amount:**
  47200.0
- **Expected Completion Date:**
  8/3/2022

  - **Deliverables:**
    - Zecwallet lite CLI and Desktop with full Orchard support

### Milestone 3

- **Amount:**
  47200.0
- **Expected Completion Date:**
  9/7/2022

  - **Deliverables:**
    - Zecwallet lite mobile (android + ios) with full Orchard support

### Additional Milestones

- **Additional Milestones:**
  No

### Submission Date

- **Submission Date:**
  2022-06-08 19:21:01

### File Attachments


