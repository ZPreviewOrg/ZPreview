---
title: "Shielded Support for Ledger Hardware Wallets (NanoS+, NanoX)"
status: "Accepted"
amount: "300100.0"
submitter: "[REDACTED] [REDACTED]"
email: "[REDACTED]"
date: "2023-02-28 01:10:36"
project_name: "Shielded Support for Ledger Hardware Wallets (NanoS+, NanoX)"
summary: "Zcash Sapling and Orchard support in Ledger"
total_grant_value: "300100.0"
submitter_last_name: "[REDACTED]"
original_title: "Shielded Support for Ledger Hardware Wallets (NanoS+, NanoX)"
labels:
  - APPROVED
  - GRANT COMPLETE
  - MILESTONE 1: COMPLETE
  - MILESTONE 2: COMPLETE
  - MILESTONE 3: COMPLETE
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
  Internet
- **Original Title:**
  Shielded Support for Ledger Hardware Wallets (NanoS+, NanoX)

- **Labels:**
  - APPROVED
  - GRANT COMPLETE
  - MILESTONE 1: COMPLETE
  - MILESTONE 2: COMPLETE
  - MILESTONE 3: COMPLETE

### Project Overview

- **Project Name:**
  Shielded Support for Ledger Hardware Wallets (NanoS+, NanoX)
- **Last Updated:**
  2023-05-22 23:43:04
- **Sponsorship Request:**
  No
- **Project Image (Public Gallery):**
  hanh.jpeg
- **Project Summary:**
  Zcash Sapling and Orchard support in Ledger

### Project Description

- **Overview:**
  Shielded pools are not usable in hardware wallets. There is an ongoing effort to make Trezor work (Orchard only) and Ledger (Sapling only). But not both. This proposal would bring shielded pools (Sapling & Orchard) to Ledger popular series of Hardware Wallets (NanoS+ and above). These wallets are popular, affordable and have a secure element chip making them a highly secure solution for storing zcash.
- **Proposed solution:**
  1. Write zcash-ledger into YWallet 2. Extend zcash-ledger with Orchard & UA 3. Integrate with YWallet
- **Solution Format:**
  YWallet will have a new type of account backed by a Ledger. During account creation, the user will have the option to connect to a Ledger. Then Ywallet will take care of synchronization and note maintenance. As such the account behaves as a watch-only wallet. Signing will require plugging in the device and user authorization.
- **Dependencies:**
  There is a dependency on the Ledger team. As for all apps on their platform, we need to go through the submission process.
- **Technical approach:**
  I will write a new ledger app for this work. Then, we will need to do: - Orchard curves for Pedersen Hash and Signatures, - UA - Transaction V5

### Requested Grant Amount

- **Amount:**
  300100.0

### Budget Breakdown

- **Hardware/Software budget:**
  100.0
- **Hardware/Software justification:**
  A dedicated Ledger S+ device
- **Services budget:**
  0.0
- **Services justification:**
  N/A
- **Compensation budget:**
  300100.0
- **Compensation justification:**
  Based on the duration, complexity and value of the project.
- **Startup funding required:**
  No
- **Total proposed grant value:**
  300100.0

### Team Members

- **Project Lead:**
  hanh
- **Background:**
  I am the author of YWallet and the creator of Warp Sync. Previously I worked as a Senior Software Engineer at Microsoft and was the CTO of a Hedge Fund in Asia.

### Funding History

- **Previous funding:**
  Yes
- **Previous funding details:**
  Cold Wallet BTCPayServer Integration YWallet
- **Other funding sources:**
  No

### Risks and Evaluation

- **Execution risks:**
  The highest risk probably comes from Ledger certification process. Apps need to be tested, validated and signed off by them.
- **Unintended Consequences:**
  None
- **Evaluation plan:**
  At each phase, there is a clear deliverable 1. YWallet + Ledger z-addr 2. Ledger app with Orchard/UA PR 3. YWallet + Ledger UA

### Project Timeline

- **Project timeline determination:**
  Based on the history of development ledger app and shielded wallets

### Milestone 1

- **Amount:**
  100100.0
- **Expected Completion Date:**
  5/1/2023

  - **Deliverables:**
    - YWallet + taddr/zaddr in Ledger

### Milestone 2

- **Amount:**
  100000.0
- **Expected Completion Date:**
  8/1/2023

  - **Deliverables:**
    - Ledger app with Orchard & UA support

### Milestone 3

- **Amount:**
  100000.0
- **Expected Completion Date:**
  10/1/2023

  - **Deliverables:**
    - YWallet + Ledger UA (Transparent + Sapling + Orchard)

### Additional Milestones

- **Additional Milestones:**
  No

### Submission Date

- **Submission Date:**
  2023-02-28 01:10:36

### File Attachments


