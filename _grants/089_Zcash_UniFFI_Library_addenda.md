---
title: "Zcash UniFFI Library addenda"
status: "Accepted"
amount: "144000.0"
submitter: "[REDACTED] [REDACTED]"
email: "[REDACTED]"
date: "2023-08-17 06:43:01"
project_name: "Zcash UniFFI Library addenda"
summary: "Addenda to the zcash uniffi library: integration with librustzcash, demo mobile apps, and addition of sync capabilities to the library"
total_grant_value: "144000.0"
submitter_last_name: "[REDACTED]"
original_title: "Zcash UniFFI Library addenda"
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
  Zcash community
- **Original Title:**
  Zcash UniFFI Library addenda

- **Labels:**
  - APPROVED
  - GRANT COMPLETE
  - MILESTONE 1: COMPLETE
  - MILESTONE 2: COMPLETE
  - MILESTONE 3: COMPLETE

### Project Overview

- **Project Name:**
  Zcash UniFFI Library addenda
- **Last Updated:**
  2023-08-17 06:43:01
- **Sponsorship Request:**
  No
- **Project Image (Public Gallery):**
  eiger-logo-horizontal-black-transparent.png
- **Project Summary:**
  Addenda to the zcash uniffi library: integration with librustzcash, demo mobile apps, and addition of sync capabilities to the library

### Project Description

- **Overview:**
  In the previous grant proposal responding to this RFP , we proposed to add a layer to Librustzcash that translates the main Zcash library methods into four different languages, which was possible thanks to Mozilla’s UniFFI library. As a result, the Librustzcash library is now usable in other languages, avoiding the need for double work from these developers. Most of the core functionalities needed to code a small light client or a wallet were exposed. There are now some points we can improved. We highlight and propose to work on three possible improvements, described in the next sections below.
- **Proposed solution:**
  In this grant proposal, we want to take it three steps further, by: moving the UniFFI-supported library closer to the original library, creating a small demo of a wallet showcasing how to use this library on Android and iOS adding sync capabilities to the UniFFI library
- **Solution Format:**
  codebase infrastructure change demo code for future users/developers addition of new features to the UniFFI library
- **Dependencies:**
  The UniFFI codebase is dependent on the Mozilla UniFFI library
- **Technical approach:**
  As the Zcash ecosystem grows, so will its technical components, including the Librustzcash codebase. Thus, we should make sure that we keep these upcoming developments in mind and make the Zcash UniFFI library as easy to upgrade and maintain as possible. We want to ease this burden by finding ways to increase the degree of integration between these two libraries, while monitoring future maintenance and preventing hiccups in the normal Librustzcash workflow. Code demonstrations are often mistaken for purely optional parts of a library’s implementation; many codebases are written down with all kinds of nice tools for static analysis, but more often than not, when developers reach out to use them, they cannot find a way to do so. This is why we would like to include both in the CI and in the examples a demo of the most used functionalities for each major mobile ecosystem, so that a developer may clone it and get up and running quickly on a Zcash-based project. In order to interact with the blockchain, we might need to know what is the last block and keep track of all notes, and to do this we need to include synchronization capabilities to the UniFFI library. In order to showcase the integration, we will integrate this code into the second milestone which, in addition to all the features listed, will be able to read the chain and show real-time information about last block height and address status. We will also look into broadcasting a transaction without the need of connecting to an external node, as previewed for Milestone 2. We will use the Zcash Android SDK (and its iOS version) as reference for features needed for synchronisation, trying to parallel their features.

### Requested Grant Amount

- **Amount:**
  144000.0

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
  144000.0
- **Compensation justification:**
  Total Funds Requested: $96 000 Milestone 1: Librustzcash integration - 1 month, 2 engineers (8 FTEs) Milestone 2: UniFFI synchronisation - 1 month, 2 engineers (8 FTEs) Milestone 3: UniFFI demo codebase - 1 month, 2 engineers (8 FTEs) Total FTEs: 24 - One FTE is 40 hours. The standard grants-work rate at Eiger for an engineer is 150 $/hr. The above quantities result in a total budget ask of 150 $/hour x 40 hours x 24 = $ 144 000
- **Startup funding required:**
  No
- **Total proposed grant value:**
  144000.0

### Team Members

- **Project Lead:**
  Eiger
- **Background:**
  The promise of web3 is to upgrade the very foundations of our society – from money, finance, and governance to media, gaming, and science. To deliver on that promise, decentralised technologies are to be integrated into the everyday experiences of billions of people. For engineering, this is a mountain of a challenge. Eiger was founded to develop infrastructure for web3 mass adoption. We help technology companies improve and integrate the core technologies of web3 to meet the climbing demands for scale and performance. We currently employ 25+ senior web3 engineers across the globe and work with some of the most ambitious organisations in the industry, including Forte, Aleo, and XRP Labs, to name a few. Eiger is part of Equilibrium Group, a blockchain powerhouse founded in 2018, composed of three entities: Eiger – high-value add engineering services Equilibrium – applied research, proprietary products, and investing in early-stage ventures Membrane Finance – infrastructure and services for EUROe, a euro-backed stablecoin

### Funding History

- **Previous funding:**
  Yes
- **Previous funding details:**
  We have received a grant for building the UniFFI library.
- **Other funding sources:**
  No

### Risks and Evaluation

- **Execution risks:**
  All programming languages are different and have features and caveats that are specific to them. This leads to the outcome that implementation in some languages may be easier than others. Examples of this are features such as support for asynchronous operations, as well as cryptographic primitives. Since modifying the programming languages themselves is both time-consuming and far out of the scope of this grant, this risk must be accepted and worked through when possible.
- **Unintended Consequences:**
  The only small unintended possible consequence is an increased burden on librustzcash developers - but that's something we are going to try and mitigate as much as possible, through automation.
- **Evaluation plan:**
  The deliverables will be made publicly available and/or open sourced, so that anyone will be free to extract the metrics of interest.

### Project Timeline

- **Project timeline determination:**
  engineers' availability, and amount of time required for each project fraction. Also, there were some 2 weeks added at the beginning to account for possible delays.

### Milestone 1

- **Amount:**
  48000.0
- **Expected Completion Date:**
  9/15/2023

  - **Deliverables:**
    - Librustzcash integration

### Milestone 2

- **Amount:**
  48000.0
- **Expected Completion Date:**
  10/31/2023

  - **Deliverables:**
    - UniFFI synchronisation features

### Milestone 3

- **Amount:**
  48000.0
- **Expected Completion Date:**
  11/30/2023

  - **Deliverables:**
    - UniFFI demo codebase

### Additional Milestones

- **Additional Milestones:**
  No

### Submission Date

- **Submission Date:**
  2023-08-17 06:43:01

### File Attachments


