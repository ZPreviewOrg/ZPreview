---
title: "Trezor support for Zcash shielded transactions"
status: "In-Progress"
amount: "130000.0"
submitter: "[REDACTED] [REDACTED]"
email: "[REDACTED]"
date: "2023-04-21 07:42:54"
project_name: "Trezor support for Zcash shielded transactions"
summary: "Our goal is to implement Orchard shielded transaction into Trezor T hardware wallet and Trezor Suite."
total_grant_value: "130000.0"
submitter_last_name: "[REDACTED]"
original_title: "Trezor support for Zcash shielded transactions"
labels:
  - Cancelled
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
  In-Progress
- **How did you learn about Zcash Community Grants:**
  by communication with ECC
- **Original Title:**
  Trezor support for Zcash shielded transactions

- **Labels:**
  - Cancelled
  - MILESTONE 1: COMPLETE
  - MILESTONE 2: COMPLETE
  - MILESTONE 3: COMPLETE

### Project Overview

- **Project Name:**
  Trezor support for Zcash shielded transactions
- **Last Updated:**
  2023-04-21 07:42:54
- **Sponsorship Request:**
  No
- **Project Image (Public Gallery):**
  trezor_plus_zcash.png
- **Project Summary:**
  Our goal is to implement Orchard shielded transaction into Trezor T hardware wallet and Trezor Suite.

### Project Description

- **Overview:**
  Initially, Zcash design excluded the possibility of signing shielded transactions in hardware wallets, since computational and memory resources required for calculating a transaction authorising zk-proof were enormous. In 2018, the Sapling update facilitated this by separating the spending authority from proving authority. This opens a new opportunity for implementing shielded transactions in hardware wallets. We consider Zcash to be an important player in the cryptocurrencies innovation field, therefore we would like to contribute to mass adoption of shielded transactions by enabling users to store their shielded funds securely on the Trezor hardware wallet.
- **Proposed solution:**
  Subject of this grant is Trezor full support for Zcash Orchard (ZIP-224) shielded transactions. This includes necessary additions to Trezor firmware, Trezor Suite app and Trezor Connect API, which facilitates further integration with third-party wallets.
- **Solution Format:**
  New code added to Trezor firmware, Trezor Suite and Trezor Connect via GitHub Pull Requests.
- **Dependencies:**
  Trezor Firmware depends on zcash/pasta_curves crate. Trezor Suite depends on zcash/orchard crate and a blockchain scanning tool, currently zingolabs/zingolib crate.
- **Technical approach:**
  From the beginning of 2021, Zcash has been working on the Orchard update, which brings a new transaction format, address unification, and other features. Simultaneously, it will require a creation of a new privacy pool, where users will migrate their funds after the Orchard activation at the end of 2021. After this pool transfusion, Sapling will become obsolete, which pushes the Orchard into the center of our interest. We will follow the design in ZIP305. The spending key never leaves the device, proof authorizing and full viewing are sent to the computer to delegate computationally demanding tasks such as zk-proof authorization and blockchain scanning. We will make use of the open source Rust code from zcash/librustzcash and zcash/orchard repositories. Since we already use Rust in the Trezor firmware codebase, integration of this new code should be straightforward. All firmware source code and unit tests will be available under GPLv3 licence. The new Zcash code for Suite and the Connect API will be written in TypeScript and will be available under MIT licence. Trezor Firmware The Zcash component of the Trezor firmware will be extended to fully support Zcash Orchard shielded transactions. (Transparent addresses are already supported). The code will be designed for Trezor Model T. Support for Trezor One will be achieved (unless there are unforeseen blockers found) by SatoshiLabs porting Trezor Model T firmware to Trezor One and is not part of this grant. Unlike Zondax’s Zcash Ledger app, shielded addresses will be derived according to ZIP32 (Orchard version) to maintain compatibility with other ZIP32-based third party wallets. Trezor Connect API Connect API will enable third party Zcash wallets to perform all necessary operations such as getting a shielded address and signing a shielded transaction. Trezor Suite We will implement Zcash shielded transactions into the Trezor Suite, the official Trezor desktop wallet. This step requires implementation of blockchain scanning, transaction zk-proof authorisation and communication with a Zcash full node.

### Requested Grant Amount

- **Amount:**
  130000.0

### Budget Breakdown

- **Hardware/Software budget:**
  0.0
- **Hardware/Software justification:**
  N/A
- **Services budget:**
  0.0
- **Services justification:**
  N/A
- **Compensation budget:**
  130000.0
- **Compensation justification:**
  We propose a rate of $10,000 USD per 1 month of work as a framework. There are 13 months of work which means $130,000 USD in total. For payout timeline, see milestones.
- **Startup funding required:**
  No
- **Total proposed grant value:**
  130000.0

### Team Members

- **Project Lead:**
  SatoshiLabs
- **Background:**
  SatoshiLabs: Inventors of Trezor, the first hardware wallet. Creators of many standards used across the whole cryptocurrency industry. Tomas Krnak: Fascination with the concept of shielded transactions was one of the reasons why I decided to study cryptography. My enthusiasm has not faded. Four years and thousand pages about zk-proofs later, I’m finishing my master degree in cryptography at the Charles University and I am glad that I will have the opportunity to fully utilize my theoretical knowledge and coding skills to realize this project.

### Funding History

- **Previous funding:**
  No
- **Other funding sources:**
  No

### Risks and Evaluation

- **Execution risks:**
  Since the Orchard update is still in progress and the roadmap is not set in stone yet, the whole project could be delayed by waiting for certain Orchard components and documentation. Further, we may discover new bugs in the Orchard crate while working with it.
- **Unintended Consequences:**
  Zcash network is evolving, this will require an extra effort maintaining the newly added code in the Trezor firmware.
- **Evaluation plan:**
  At the end of this project a user can receive, store, spend and manage their shielded and transparent Zcash funds using the Trezor and the Suite. Third parties can integrate Trezor’s Zcash transactions into their wallets using the API. For evaluated goals, see milestones.

### Project Timeline

- **Project timeline determination:**
  Start date of the project was determined by availability of Tomas Krnak. He will start working in September 2021. Deadline of each milestone is then given by its duration estimation plus deadline of a previous milestone.

### Milestone 1

- **Amount:**
  10400.0
- **Expected Completion Date:**
  10/31/2021

  - **Deliverables:**
    - Basic project structure • Pallas curve and other primitives implementation • Unit tests of these primitives.

### Milestone 2

- **Amount:**
  19500.0
- **Expected Completion Date:**
  12/31/2021

  - **Deliverables:**
    - ZIP32 Orchard shielded addresses generation • Unified addresses (transparent + Orchard) • Viewing a unified address on display • Getting an addresses, viewing and authorization keys via API

### Milestone 3

- **Amount:**
  29900.0
- **Expected Completion Date:**
  3/31/2022

  - **Deliverables:**
    - authorization keys via API. $19,500 - paid 3. Signing a transaction via a command line interface • Reviewing a transaction on the display • API documentation

### Milestone 4

- **Amount:**
  59800.0
- **Expected Completion Date:**
  9/30/2022

  - **Deliverables:**
    - Integrating Zcash Orchard changes into Trezor Suite • Shielded addresses generation in Trezor Suite • Shielded transaction signing in Trezor Suite • Writing integration tests

### Additional Milestones

- **Additional Milestones:**
  Yes

### Submission Date

- **Submission Date:**
  2023-04-21 07:42:54

### File Attachments


