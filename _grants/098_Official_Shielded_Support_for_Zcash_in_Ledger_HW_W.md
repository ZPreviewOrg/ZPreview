---
title: "Official Shielded Support for Zcash in Ledger HW Wallet"
status: "Accepted"
amount: "101800.0"
submitter: "[REDACTED] [REDACTED]"
email: "[REDACTED]"
date: "2023-11-07 17:25:44"
project_name: "Official Shielded Support for Zcash in Ledger HW Wallet"
summary: "Official Public release of Zcash Ledger app w/ Sapling support and 12 months of maintenance."
total_grant_value: "101800.0"
submitter_last_name: "[REDACTED]"
original_title: "Official Shielded Support for Zcash in Ledger HW Wallet"
labels:
  - APPROVED
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
  From ZF and ZCG
- **Original Title:**
  Official Shielded Support for Zcash in Ledger HW Wallet

- **Labels:**
  - APPROVED

### Project Overview

- **Project Name:**
  Official Shielded Support for Zcash in Ledger HW Wallet
- **Last Updated:**
  2024-02-16 00:34:31
- **Sponsorship Request:**
  No
- **Project Image (Public Gallery):**
  Screenshot_2023-11-07_at_13.16.11.png
- **Project Summary:**
  Official Public release of Zcash Ledger app w/ Sapling support and 12 months of maintenance.

### Project Description

- **Overview:**
  Zondax developed a Ledger app with Sapling z-address support as part of a Zcash Foundation grant. More recently Zondax upgraded the app, improving its application structure, refactoring it and adding support for new Ledger Devices (Ledger Nano S plus) and completed integration with a fork of the Zecwallet Lite Desktop wallet for demo and testing purposes. We've been diligently working on this application for a while now, encountering various obstacles and external blockers along the way. We are currently at the final stages of preparing for the official public release, and we are seeking this grant to complete the remaining tasks that have emerged due to recent updates in both Ledger's requirements and the latest changes in Zcash.
- **Proposed solution:**
  Our main goal is to help make the Zcash Ledger application with shielded support publicly available through an official release by Ledger. What we already have accomplished: Development of a Ledger app with sapling support, available under: https://github.com/Zondax/ledger-zcash Full integration with latest Ledger SDK and Ledger Stax device Fork of Zecwallet lite https://github.com/Zondax/zecwallet-light-cli to fulfill Ledger requirements to initiate a submission. To accomplish this we need to add support to ZIP317 fees, have a security audit executed by a third party partner approved by Ledger SAS, and demonstrate we will maintain the application for at least 12 months.
- **Solution Format:**
  Zondax source code will be delivered under Apache 2.0 License and/or MIT License (this is also required by Ledger). Deliverables will include source code, unit tests, continuous integration, and integration tests.
- **Dependencies:**
  This proposal aims to reduce our dependencies on external organizations. Additionally, by adhering to Ledger's recommendations and conducting an external audit, we expect to expedite our review and release processes. While we still rely on Ledger for the release, we are confident we can complete this project.
- **Technical approach:**
  Agile methodology + streamlined coordination process with Ledger towards public release. CI testing and continuous integration. ----------------------------------------------------------------- Phase 1 - Final steps towards public release ----------------------------------------------------------------- M1 - Adding support for ZIP317 We need to update the embedded app and our fork of Zecwallet Lite to support ZIP317 fees. ZIP 317 was adopted after we developed the embedded app and forked Zecwallet Lite. Without this work, Ledger won’t be able to test the new embedded app (because the shielded transactions will probably not get mined). ---------------------------------------------------------------------------------------------------------------------------------- M2 Security Audit by one of Ledger’s approved audit partners. We will coordinate an external security audit, and execute any relevant fixes. The external auditor will be selected from a list provided by Ledger SAS. --------------------------------------------------------------------------------------------------------------------------------- ----------------------------------------------------------------- Phase 2 - Maintenance and Support ----------------------------------------------------------------- M3 - Technical support & maintenance of embedded Ledger App for 12 months During this period we will maintain the Ledger App covering the following areas: Ledger SDK or firmware upgrades that affect the application Device support for Ledger Nano, Nano Plus, Nano X and Stax Security fixes related to Ledger SDK layers Repository and issue monitoring and triage Resource availability (ensure internal training in your chain, rotation of resources, etc.) Analysis and early warnings in the case of known security issues that may affect the application Early warnings and prioritization in the case of urgent issues or vulnerabilities Periodic coordination with Ledger Note * This does not include development of new features or upgrades to new protocols or the cost of additional security audits. We will also take responsibility for maintaining our fork of Zecwallet for 12 months after we submit the application to Ledger. While our team would be interested in continuing to maintain the fork beyond this period, that is not within the scope of this grant. By maintaining the fork for 12 months, the team is committing to ensuring that the modified version of Zecwallet Lite Desktop continues to work properly and can be used with the Ledger Nano App during that time. ---------------------------------------------------------------------------------------------------------------------------------- M4 Documentation of the integration to support other Zcash Desktop Wallet teams We want to ensure that other desktop Wallets (eg. YWallet, Zingo ) have the opportunity to add Ledger compatibility . We will provide a javascript integration library, and once we have an official release we will concentrate on documenting the process via blogs to allow other developers to understand the integration process. This will facilitate further integrations in the ecosystem. Deliverables: At least x2 blog post explaining step by step the integration process 1 x javascript/typescript integration library Support via slack channel for up to 60h

### Requested Grant Amount

- **Amount:**
  101800.0

### Budget Breakdown

- **Hardware/Software budget:**
  0.0
- **Hardware/Software justification:**
  Only time and materials for the development have been considered. Zondax has already provided its employees with licenses, software and hardware.
- **Services budget:**
  0.0
- **Services justification:**
  Zondax AG runs its own infrastructure in a Datacenter in Zurich. The costs of the infra is already considered in the project/hourly rate.
- **Compensation budget:**
  101800.0
- **Compensation justification:**
  Services include implementation, development, integration, infrastructure costs, external audit costs and coordination. Zondax AG will receive all payments and pays its employees on a monthly basis.
- **Startup funding required:**
  No
- **Total proposed grant value:**
  101800.0

### Team Members

- **Project Lead:**
  Zondax
- **Background:**
  Experience and repositories Zondax is a growing and distributed team with experience and projects for more than 50 blockchains. Zondax has been contributing to the Blockchain ecosystem since 2018-2019. The team has received and completed a large number of grants and currently maintains most Ledger apps for the ecosystem (+30). Our team includes experts in most blockchain aspects, cryptography and programming languages. Most of our contributions to the blockchain ecosystem can be found in our GitHub organization: https://github.com/zondax We have experience in the review and release process by Ledger and have a streamlined workflow to simplify this. Zondax has successfully delivered over 30 Ledger Nano App projects https://docs.zondax.ch/ledger-apps/overview and 4 Ledger Live integrations that are either publicly released or currently under security review. Legal structure Zondax AG Dammstrasse 16 Zug 6300 Switzerland UID CHE-491.796.576 License: Zondax source code will be delivered under Apache 2.0 License and/or MIT License (this is also required by Ledger). Deliverables will include source code, unit tests, continuous integration, and integration tests.

### Funding History

- **Previous funding:**
  Yes
- **Previous funding details:**
  Zondax developed a Ledger app with Sapling z-address support as part of a Zcash Foundation grant. However, the grant didn’t cover pending steps that are required by Ledger for the official release. This proposal aims to complete this integration. We have received funding for the development of the application from ZF but it didn’t cover the work that is being described in this proposal.
- **Other funding sources:**
  No

### Risks and Evaluation

- **Execution risks:**
  We already possess extensive experience in developing apps for Ledger. In the past, one of the obstacles we encountered in achieving an official release was our dependence on an external party to merge changes on the web wallet side. Fortunately, we no longer face this hindrance as we will be using our own fork of Zec wallet, eliminating this dependency. While we still rely on Ledger for the release, we expect to significantly reduce our risks by leveraging our existing relationship with them and by taking over the full integration process.
- **Unintended Consequences:**
  The community has been expecting this for already long time, it will bring numerous benefits.
- **Evaluation plan:**
  Official public release of the Ledger App Public release of the Ledger App (Nano S+, Nano X, Stax) , SDK and firmware upgrades of the app during the maintenance period.

### Project Timeline

- **Project timeline determination:**
  Timeline has been determined based on previous experience with development, effort estimation and experience of the team. Given that we do not know the initial start date of the proposal, timeline is approximated. We will be able to work on some of these Milestones in parallel (support for integration of other wallets can start as soon as the app has been submitted to Ledger) 
  M1 is expected to be completed in 2-3 weeks 
  M2 is expected to be completed in 3 weeks 
  M3 consists of 12 months of maintenance work 
  M4 will take between 6-8 weeks.

### Milestone 1

- **Amount:**
  6200.0
- **Expected Completion Date:**
  11/21/2023

  - **Deliverables:**
    - Update of Zecwallet Lite and Zcash Ledger App to support ZIP317 fees.

### Milestone 2

- **Amount:**
  22000.0
- **Expected Completion Date:**
  12/15/2023

  - **Deliverables:**
    - Zcash Ledger app with Sapling support  including the necessary fixes resulting from the audit

### Milestone 3

- **Amount:**
  61200.0
- **Expected Completion Date:**
  12/31/2024

  - **Deliverables:**
    - 12 months of maintenance of Zcash Ledger App

### Milestone 4

- **Amount:**
  12400.0
- **Expected Completion Date:**
  2/29/2024

  - **Deliverables:**
    - x2 blog post explaining step by step the integration process
    - 1 x javascript/typescript integration library
    - Support via slack channel for up to 60h

### Additional Milestones

- **Additional Milestones:**
  Yes

### Submission Date

- **Submission Date:**
  2023-11-07 17:25:44

### File Attachments


