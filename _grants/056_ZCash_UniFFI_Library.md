---
title: "ZCash UniFFI Library"
status: "Accepted"
amount: "216000.0"
submitter: "[REDACTED] [REDACTED]"
email: "[REDACTED]"
date: "2022-12-30 14:34:55"
project_name: "ZCash UniFFI Library"
summary: "An SDK to use native Rust Zcash libraries in other languages (Ruby, Kotlin, Python, and Swift)"
total_grant_value: "216000.0"
submitter_last_name: "[REDACTED]"
original_title: "ZCash UniFFI Library"
labels:
  - GRANT COMPLETE
  - MILESTONE 1: COMPLETE
  - MILESTONE 2: COMPLETE
  - MILESTONE 3: COMPLETE
  - MILESTONE 4: COMPLETE
  - MILESTONE 5: COMPLETE
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
  Internet search
- **Original Title:**
  ZCash UniFFI Library

- **Labels:**
  - GRANT COMPLETE
  - MILESTONE 1: COMPLETE
  - MILESTONE 2: COMPLETE
  - MILESTONE 3: COMPLETE
  - MILESTONE 4: COMPLETE
  - MILESTONE 5: COMPLETE
  - OPEN

### Project Overview

- **Project Name:**
  ZCash UniFFI Library
- **Last Updated:**
  2022-12-30 14:34:55
- **Sponsorship Request:**
  No
- **Project Image (Public Gallery):**
  eiger-logo-horizontal-black-transparent.png
- **Project Summary:**
  An SDK to use native Rust Zcash libraries in other languages (Ruby, Kotlin, Python, and Swift)

### Project Description

- **Overview:**
  Currently, the barrier to entry for building apps on Zcash is too high. There is a need to extend the native Rust interfaces in other popular languages, to allow developers to rely on Zcash's underlying cryptography without having the need to rewrite the code from scratch.
- **Proposed solution:**
  The SDK will be written using Mozilla’s UniFFI, a toolkit for building cross-platform software components in Rust, which currently supports four languages: Python, Swift, Kotlin, and Ruby.
- **Solution Format:**
  Libraries for the respective environments, including Zcash functionalities as native code.
- **Dependencies:**
  Mozilla UniFFI librustzcash eventual testing/documenting libraries for the supported languages
- **Technical approach:**
  We will be writing tests with pre-generated data for each method for every supported platform - Kotlin, Swift, Python, and Ruby, and documentation for every method with emphasis on utilising Unified Addresses by default. Upon evaluating the milestone completion, the “requirements for evaluation” section should be used for validation. (FTE = Full-Time Equivalent). “Per each language” refers to the supported languages mentioned above - Kotlin, Swift, Python, and Ruby.

### Requested Grant Amount

- **Amount:**
  216000.0

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
  216000.0
- **Compensation justification:**
  This figure corresponds to 12 weeks of work for 3 senior engineers working full-time (40 hr/week) and paid 150 $/hr, which is the standard rate in our company.
- **Startup funding required:**
  No
- **Total proposed grant value:**
  216000.0

### Team Members

- **Project Lead:**
  Eiger
- **Background:**
  The promise of web3 is to upgrade the very foundations of our society – from money, finance, and governance to media, gaming, and science. To deliver on that promise, decentralised technologies are to be integrated into the everyday experiences of billions of people. For engineering, this is a mountain of a challenge. Eiger was founded to develop infrastructure for web3 mass adoption. We help technology companies improve and integrate the core technologies of web3 to meet the climbing demands for scale and performance. We currently employ 25+ senior web3 engineers across the globe and work with some of the most ambitious organizations in the industry, including Forte, Aleo, and XRP Labs, to name a few. Eiger is part of Equilibrium Group, a blockchain powerhouse founded in 2018, composed of three entities: Eiger – high-value add engineering services Equilibrium – applied research, proprietary products, and investing in early-stage ventures Membrane Finance – infrastructure and services for EUROe, a euro-backed stablecoin Team members Development members Łukasz Wojtów ( GitHub , LinkedIn ) is a Software Engineer at Eiger. He has many years of experience building large-scale, performant systems. During his career, he’s been involved in a broad range of work: networking, security, OS kernels, backend, and frontend. At Eiger, he specializes in reverse-engineering p2p protocols. Luca Campobasso ( GitHub , LinkedIn ) is a Software Engineer at Eiger. He has extensive experience with functional languages (7 years), especially with Scala and Elixir, mostly focused on backend systems design. Luca has participated in Exercism as a student and mentor in several tracks (including Kotlin track). He also has experience with Kotlin development on Android. Marko Sabec ( GitHub , LinkedIn ) is a Software Engineer at Eiger. He has around 15 years of experience with DevOps, full stack development, and smart contracts, with a focus on security. During his career he’s been involved in a multitude of roles (DevOps Engineer, Software Engineer, CTO) and projects involving networking, security, and backend design. As for used languages, he specializes in Rust, Golang, and Python. Advising members Niklas Long ( GitHub , LinkedIn ) deeply cares about open source, distributed systems and data privacy. He has been on the Aleo Core Team since late 2020, mostly overhauling, testing and profiling their network; he is the author of Ziggurat and an active contributor to Rust IPFS. Mark Henderson ( GitHub , Twitter ) is the VP of Engineering at Equilibrium. He has led the team starting with the original Rust IPFS grant in late 2019, through engagements with many of the largest names in Web3, and is now circling back to finish the critical work the team started with the original Ziggurat proposal. Core contributor to OrbitDB, Rust IPFS, and Ziggurat.

### Funding History

- **Previous funding:**
  No
- **Other funding sources:**
  No

### Risks and Evaluation

- **Execution risks:**
  Throughout the design of the test plan stub, we will invariably have questions for the core development team, particularly team members that were involved in the networking aspects of the code. If the team members are busy, estranged, or otherwise unavailable then this could be more work. We will have to accept this risk, and fall back to practices such as reading existing OSS code in the absence of human interactions. All programming languages are different and have features and caveats that are specific to them. This leads to the outcome that implementation in some languages may be easier than others. Examples of this are features such as support for asynchronous operations, as well as cryptographic primitives. Since modifying the programming languages themselves is both time-consuming and far out of the scope of this grant, this risk must be accepted and worked through when possible. Since the goal is full parity with the existing librustzcash library output, we assume that this output is generally correct and free of flaws. If this is not the case, then we risk copying these flaws to the other language implementations. It would be good to double check all output in the existing code against expectations and existing test suites, just to ensure that the output is as expected.
- **Unintended Consequences:**
  if the project is successful, I foresee no negative consequences, just that since the libraries that will be generated will be used in totally different platforms, it might be easy to fall behind on that, and potentially ruin lots of applications that will use those libraries by not doing the appropriate due diligence.
- **Evaluation plan:**
  since the result of this grant will consist only in code on a repo, the repository of choice will take care of keeping the usage metrics public.

### Project Timeline

- **Project timeline determination:**
  Here is the full explanation of the milestones: https://forum.zcashcommunity.com/t/zcash-uniffi-library-rfp/43468

### Milestone 1

- **Amount:**
  18000.0
- **Expected Completion Date:**
  1/27/2023

  - **Deliverables:**
    - Project setup

### Milestone 2

- **Amount:**
  36000.0
- **Expected Completion Date:**
  2/10/2023

  - **Deliverables:**
    - Keys handling

### Milestone 3

- **Amount:**
  72000.0
- **Expected Completion Date:**
  3/3/2023

  - **Deliverables:**
    - Addresses, ZIP-313, ZIP-321, Payment disclosures

### Milestone 4

- **Amount:**
  54000.0
- **Expected Completion Date:**
  3/24/2023

  - **Deliverables:**
    - Transactions

### Additional Milestones

- **Additional Milestones:**
  Yes

### Submission Date

- **Submission Date:**
  2022-12-30 14:34:55

### File Attachments


