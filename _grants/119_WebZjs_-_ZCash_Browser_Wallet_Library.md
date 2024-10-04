---
title: "WebZjs - ZCash Browser Wallet Library"
status: "Accepted"
amount: "150000.0"
submitter: "[REDACTED] [REDACTED]"
email: "[REDACTED]"
date: "2024-06-03 11:58:21"
project_name: "WebZjs - ZCash Browser Wallet Library"
summary: "Expand the ZCash ecosystem with a browser-compatible library offering essential primitives for web wallets and browser plugins."
total_grant_value: "150000.0"
submitter_last_name: "[REDACTED]"
original_title: "WebZjs - ZCash Browser Wallet Library"
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
  Chainsafe has been in the industry for seven years and have been supporters of the Zcash vision since inception. We see ourselves as strategically vision aligned partners, and wish to contribute to the protocol. We first learned of the Zcash Community Grants through networking with foundation and community members.
- **Original Title:**
  WebZjs - ZCash Browser Wallet Library

- **Labels:**
  - APPROVED

### Project Overview

- **Project Name:**
  WebZjs - ZCash Browser Wallet Library
- **Last Updated:**
  2024-06-03 11:58:21
- **Sponsorship Request:**
  No
- **Project Image (Public Gallery):**
  0ffa5142-a917-403e-8da7-d5eaab257029.jpg
- **Project Summary:**
  Expand the ZCash ecosystem with a browser-compatible library offering essential primitives for web wallets and browser plugins.

### Project Description

- **Overview:**
  Currently, in the ZCash ecosystem, the existing wallet libraries are geared towards developing native and mobile wallets. Historically this has been due to the inability of a web-based library to perform the operations required to sync a wallet in a reasonable time. We have shown that thanks to the developments in librustzcash (which can operate in a browser via Wasm), NU5, and improvements to browser parallelism, it is now feasible to sync a browser wallet in areasonable time. There is now an opportunity to put these tools in the hands of web developers to help them build beautiful and functional wallet front-ends for Zcash.
- **Proposed solution:**
  Extend our proof-of-concept implementation into a properly engineered library allowing wallet developers to access the following functionality: Connection to lightwalletd Key generation Wallet sync functionality Transaction building and proof generation Browser storage abstraction With a clean interface for retrieving wallet balances, sync progress, block height etc. The library will be developed primarily in Rust to take advantage of the existing Zcash client libraries and performance improvements.
- **Solution Format:**
  An open source repo containing the implementation of the library in Rust and Typescript. Including: CI/CD Documentation Example application consuming the library (PoC snap)
- **Dependencies:**
  The Zcash Rust ecosystem including librustzcash and the orchard and sapling crates forms a core part of this proposal and this depends upon their ongoing maintenance. Some collaboration with the teams developing these crates may also be of benefit. Part of this proposal is to deliver a demo wallet showing how the code should be used however this is not targeted toward users. Successfully delivered should be followed up with a promotion for web developers to use the library to produce user-facing applications.
- **Technical approach:**
  See separate specification document https://hackmd.io/63k0Son6SxqQSBZ1uOJ2Tw

### Requested Grant Amount

- **Amount:**
  150000.0

### Budget Breakdown

- **Hardware/Software budget:**
  0.0
- **Hardware/Software justification:**
  Link to a detailed breakdown of the cost of engineering, engineering estimations per milestone, and overarching strategic alliance discount can be found below: https://docs.google.com/document/d/1j6hhLeCSjBG4VtaQ0lSHnxqxBm4If3HoXBh52o6xTqU/edit?usp=sharing Note that this link is public.
- **Services budget:**
  150000.0
- **Services justification:**
  Link to a detailed breakdown of the cost of engineering, engineering estimations per milestone, and overarching strategic alliance discount can be found below: https://docs.google.com/document/d/1j6hhLeCSjBG4VtaQ0lSHnxqxBm4If3HoXBh52o6xTqU/edit?usp=sharing Note that this link is public.
- **Compensation budget:**
  150000.0
- **Compensation justification:**
  As mentioned in the above link, the proposed grant amount is $150,000 USD. Note that the actual cost of this engagement is $253,000 USD. Chainsafe has decided to offer a large discount of 41% to put this project into a more affordable budget bracket for the Zcash Foundation. Chainsafe has deemed this work as a public good contribution and will not turn a profit on the work provided should the grant be awarded. The value of each milestone below represents the amount after the discount has been applied. For a more detailed cost breakdown, please refer to the following link: https://docs.google.com/document/d/1j6hhLeCSjBG4VtaQ0lSHnxqxBm4If3HoXBh52o6xTqU/edit?usp=sharing
- **Startup funding required:**
  No
- **Total proposed grant value:**
  150000.0

### Team Members

- **Project Lead:**
  ChainSafe Systems
- **Background:**
  Established in 2017, the core business of ChainSafe Systems is software development consulting, specifically the research and development of blockchain protocols and products, including infrastructure and tools. ChainSafe has worked to maintain stable alternative implementations, improve functionality and in turn adoption of some of the top protocols in the space such as Ethereum, Filecoin, and Polkadot - helping to create and secure over 230 Billion USD in combined value measured by market capitalization of these protocols. ChainSafe has experience building and maintaining client libraries being the custodians of the Ethereum javascript library web3js since 2020. Additionally, they developed MetaMask snap wallets for Filecoin, Polkadot, Near and Mina as well as the snap E2E testing tool Dappeteer.

### Funding History

- **Previous funding:**
  Yes
- **Previous funding details:**
  Before submitting this proposal, we received a small grant (<$30k) to research the feasibility of implementing such a library. The findings were such that it would be possible to do so, and this grant is for the implementation of the library.
- **Other funding sources:**
  No

### Risks and Evaluation

- **Execution risks:**
  Having already conducted a feasibility study we can enter into this project with confidence that the computationally expensive tasks (trial decryption and witness updating) can be done in the browser within a reasonable amount of time for the average user. We have also performed preliminary tests of wallet sync in the MetaMask snap secure ECMAScript environment with promising results. Another serious spam/sand-blasting attack on Zcash would impact the sync time of new wallets to the point that the UX may be unacceptable. Post ZIP-317 it appears that the spam attacks have halted but this remains a risk that web-wallets are more susceptible to than regular wallets.
- **Unintended Consequences:**
  While the intention is to make it hard to misuse the library to develop insecure wallets this would certainly still be possible by inexperienced developers. As a result there may be a proliferation of insecure Zcash web wallets as a result.It is hoped this downside will be far outweighed by the excellent wallet projects that build upon the library
- **Evaluation plan:**
  Short updates will be posted to the Zcash community forum upon completion of each milestone. If applicable these will be accompanied by more comprehensive benchmarks such as typical sync rates and transaction generation times as these become available.

### Project Timeline

- **Project timeline determination:**
  We calculated project timelines based on internal resource capacity planning. This is a process by which we consider engineering labor availability, and labor estimations required to complete the project. Sometimes actual figures can vary from initial estimations. However, in this unlikely event, the total amount requested as per this grant application will not change. The estimated completion dates associated with each milestone assume a start date of June 17th, 2024. Should the commencement of this project be delayed due to grant application procedures, the estimated milestone completion dates will need to be updated based on the new commencement date. For a closer look at estimated completion times, please refer to the cost breakdown linked earlier in the application, as well as below for your convenience. https://docs.google.com/document/d/1j6hhLeCSjBG4VtaQ0lSHnxqxBm4If3HoXBh52o6xTqU/edit?usp=sharing

### Milestone 1

- **Amount:**
  17000.0
- **Expected Completion Date:**
  6/24/2024

  - **Deliverables:**
    - Milestone 1 - Key Generation: Implement wrappers around existing Rust Zcash key generation. Allow entropy to be provided by library consumer. Test coverage reusing librustzcash tests where possible. The estimated labour cost of this milestone is 2 engineering-weeks and the estimated duration is 1 week @ 2FTE.

### Milestone 2

- **Amount:**
  17000.0
- **Expected Completion Date:**
  7/1/2024

  - **Deliverables:**
    - Milestone 2 - Storage Abstraction: Define storage interface in typescript. Create wasm-bindgen Rust definition that can accept storage implementations passed from host js runtime. Rust-side implementation of storage handler to be consumed by other parts of the library. The estimated labour cost of this milestone is 2 engineering-weeks and the estimated duration is 1 week @ 2FTE.

### Milestone 3

- **Amount:**
  66000.0
- **Expected Completion Date:**
  7/29/2024

  - **Deliverables:**
    - MS3 - Wallet Sync: Extend sync capabilities of the feasibility study code to provide full wallet sync functionality integrating zcash_client_backend crate where possible. Integrate with storage abstraction to persist notes and witnesses for finalized chain. Benchmarks for full-sync. Test coverage reusing zcash_client_backend tests where possible. The estimated labour cost of this milestone is 8 engineering-weeks and the estimated duration is 4 weeks @ 2FTE.

### Milestone 4

- **Amount:**
  33000.0
- **Expected Completion Date:**
  8/12/2024

  - **Deliverables:**
    - MS4 - Transaction Proving: Wrap proving code from sapling and orchard crates to generate proofs for notes obtained from sync using generated keys. Use web-workers to take advantage of parallelism and avoid blocking main thread. Test coverage reusing librustzcash tests where possible. The estimated labour cost of this milestone is 4 engineering-weeks and the estimated duration is 2 weeks @ 2FTE.

### Additional Milestones

- **Additional Milestones:**
  Yes

### Submission Date

- **Submission Date:**
  2024-06-03 11:58:21

### File Attachments


