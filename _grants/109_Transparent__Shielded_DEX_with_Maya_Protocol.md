---
title: "Transparent & Shielded DEX with Maya Protocol"
status: "Accepted"
amount: "110000.0"
submitter: "[REDACTED] [REDACTED]"
email: "[REDACTED]"
date: "2024-02-07 02:47:22"
project_name: "Transparent & Shielded DEX with Maya Protocol"
summary: "Integration of Zcash into the decentralized exchange MAYA protocol"
total_grant_value: "110000.0"
submitter_last_name: "[REDACTED]"
original_title: "Transparent & Shielded DEX with Maya Protocol"
labels:
  - APPROVED
  - MILESTONE 1: COMPLETE
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
  web
- **Original Title:**
  Transparent & Shielded DEX with Maya Protocol

- **Labels:**
  - APPROVED
  - MILESTONE 1: COMPLETE

### Project Overview

- **Project Name:**
  Transparent & Shielded DEX with Maya Protocol
- **Last Updated:**
  2024-02-18 00:53:41
- **Sponsorship Request:**
  No
- **Project Image (Public Gallery):**
  hanh-avatar.jpeg
- **Project Summary:**
  Integration of Zcash into the decentralized exchange MAYA protocol

### Project Description

- **Overview:**
  With the increased regulation pressure on privacy coins, it is paramount to actively look for decentralized ways to acquire Zcash. This proposal would add ZEC to the Maya Protocol DEX and allow users to swap it for any supported currency (BTC, ETH, etc.) without KYC. > The users will be able to use both transparent and *shielded* addresses. However, the vaults/liquidity pools remain transparent.
- **Proposed solution:**
  The solution is to add ZEC to Maya Protocol. The outline is documented here: https://gitlab.com/mayachain/mayanode/-/blob/073dd542e42cd08ee175967f2673e9f11e8959e3/docs/newchain.md Note that the Zcash protocol is more complicated because of the inclusion of *shielded* transactions and some deviations from Bitcoin even for transparent transactions.
- **Solution Format:**
  - Users of the MP DEX can swap ZEC for other crypto - Liquidity providers can contribute ZEC
- **Dependencies:**
  We have been in contact with the MP team.
- **Technical approach:**
  The standard modifications to TC/MP are: MAYANode changes Bifrost changes Node launcher changes xchainjs changes And there is integration of `librustzcash` for the generation of the ZKP, UA, ZIP 317 Fees & NU-5 TXv5.

### Requested Grant Amount

- **Amount:**
  110000.0

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
  110000.0
- **Compensation justification:**
  This is based on the value provided to the Zcash community and the cost of the TC proposal. Note: The work done by the TC integration team is not going to be directly used. ## Extended Milestone Description M1: Resolve issues surrounding the usage of transparent & shielded addresses for sending and receiving ZEC ### Sending ZEC: A shielded sender does not include a return address. In case of rejection from MP, how do they refund the user? Proposal: Add a custom refund address in the memo. Signed off my MP but pending implementation and merge from upstream (Thorchain). That shouldn't be a problem since it is already planned, but we need to follow up. Alternatives: - Restrict to transparent - Issue warning when sending from shielded ### Receiving ZEC: MP Validators need to check that the payment from the Vault is completed successfully in a decentralized way. As such, they must be able to decrypt shielded tx from MP. - Solution: Establish a rotating OVK used by Asgard that allows validators to recover the encryption key. The output notes are not malleable per the protocol design. Open Issues: What's the process for managing the OVK? How do validators get the OVK? ### How do we integrate librustzcash into MP? - MP is written in Go. They are OK if external components are integrated via C FFI. ### What API will the Zcash integration have? TBD Deliverable: - API documents - Sequence Diagrams for the swap from/to ZEC - Signoff for any dependency on MP ## M2: BiFrost Implementation of the BiFrost component for Zcash. - Zcash Blockchain scanner - Detect and verify incoming ZEC into Asguard - Detect and verify outgoing ZEC (use transparent address or decrypt using OVK) - Parse memo - Calculate Fees per ZIP 317 - Build unsigned transaction v5 - Calculate Sighash per ZIP 244 - Sign TSS Deliverable: - PR Into BiFrost - Zcash external library ## M3: Mayanode - Add logic to parse an address - Return gas asset for the chain - add logic in regards to how to update - define a new asset - add logic to get address from a pubic key Deliverable: - PR into MayaNode ### M4: Finishing touches and testing - Deployment script: Node Launcher - Stagenet/Testnet - Add support to JS client library xchainjs Deliverable: - **Test end to end swap from NodeJS** ## M5: Integration in YWallet Delivarable: - Ability to swap without leaving YWallet. Note that YW only has support for Zcash. Therefore for the another currency, a different app must be used. For bitcoin, YW will generate a payment URI. This work is primarily for adding Zcash to the backend of MP. As such YW has no dependency on it and works like any other MP client. In other words, users should be able to swap using other apps or online as long as their wallet supports custom memos.
- **Startup funding required:**
  No
- **Total proposed grant value:**
  110000.0

### Team Members

- **Project Lead:**
  hanh
- **Background:**
  I am the author of YWallet and an independent contributor to Zcash.

### Funding History

- **Previous funding:**
  Yes
- **Previous funding details:**
  Cold Wallet YWallet BTCPay
- **Other funding sources:**
  No

### Risks and Evaluation

- **Execution risks:**
  The code base is in GOlang but there are no SDK for Zcash in this language. Therefore we'll need to do some interop. It shouldn't be impossible but it adds some degree of complexity. There are some concerns regarding the length of UA and it may prevent some use cases but it seems to be workable.
- **Unintended Consequences:**
  None
- **Evaluation plan:**
  The project will be deemed completed when it is possible to swap BTC/ZEC for example on MP. There is no guarantee of liquidity and/or trading volume. Integration into wallets is not part of the proposal. However, YWallet will make its best effort to include it at no extra charge. For other wallets, the integration is well documented by MP and TC.

### Project Timeline

- **Project timeline determination:**
  Based on the TC integration timeline

### Milestone 1

- **Amount:**
  20000.0
- **Expected Completion Date:**
  4/1/2024

  - **Deliverables:**
    - Design and planning

### Milestone 2

- **Amount:**
  30000.0
- **Expected Completion Date:**
  5/1/2024

  - **Deliverables:**
    - Code changes to Bifrost

### Milestone 3

- **Amount:**
  30000.0
- **Expected Completion Date:**
  6/1/2024

  - **Deliverables:**
    - Changes to Mayanode

### Milestone 4

- **Amount:**
  30000.0
- **Expected Completion Date:**
  7/1/2024

  - **Deliverables:**
    - Final code changes: Node launcher & JS client library xchainjs

### Additional Milestones

- **Additional Milestones:**
  Yes

### Submission Date

- **Submission Date:**
  2024-02-07 02:47:22

### File Attachments


