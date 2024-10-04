---
title: "ZCash SDK Feasibility Study [JS/TS]"
status: "Accepted"
amount: "35000.0"
submitter: "[REDACTED] [REDACTED]"
email: "[REDACTED]"
date: "2023-11-30 23:48:54"
project_name: "ZCash SDK Feasibility Study [JS/TS]"
summary: "Expanding the reach of the ZCash ecosystem by introducing an SDK that will allow for wider adoption and use."
total_grant_value: "35000.0"
submitter_last_name: "[REDACTED]"
original_title: "ZCash SDK Feasibility Study [JS/TS]"
labels:
  - APPROVED
  - GRANT COMPLETE
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
  BD Contact
- **Original Title:**
  ZCash SDK Feasibility Study [JS/TS]

- **Labels:**
  - APPROVED
  - GRANT COMPLETE
  - MILESTONE 1: COMPLETE

### Project Overview

- **Project Name:**
  ZCash SDK Feasibility Study [JS/TS]
- **Last Updated:**
  2024-02-19 04:40:52
- **Sponsorship Request:**
  No
- **Project Image (Public Gallery):**
  logo.png
- **Project Summary:**
  Expanding the reach of the ZCash ecosystem by introducing an SDK that will allow for wider adoption and use.

### Project Description

- **Overview:**
  Currently in the ZCash ecosystem, there is no convenient way for a developer to implement a web-based application to incorporate ZCash payments. With the implementation of a ZCash SDK in typescript, developers will have the ability to integrate ZEC payments and allow users to interact with the chain. Subsequently, this will potentially expand the reach of the ZCash project and bring in an audience for wider adoption. The SDK will also open up opportunities to implement a ZCash Snap and subsequently web-based wallets.
- **Proposed solution:**
  The purpose of this proposal is to outline the feasibility of the proposed implementation of the ZCash SDK. In order to gain a better understanding and more confidence in the completion of this project, research around its viability must be done. The next step would be to add value to the Zcash ecosystem by implementing and maintaining a TypeScript SDK for enabling more Zcash capabilities in the browser. Our future work will provide the ground work for the development of a Zcash MetaMask Snap along with a Web wallet that would utilize said snap as a secure enclave for user keys. Enabling millions of MetaMask users instant access will help significantly with Zcash adoption and usability. The SDK will also bring in opportunities for general web-based wallets (web wallet, extensions, electron applications, etc), that go beyond the scope of Snaps.
- **Solution Format:**
  This proposal covers a set of deliverables: small portions of the SDK as POC (proof of concept), load testing with specific datasize(s), and identify any other constraints that could block future progress.
- **Dependencies:**
  A coupleof dependencies that may affect development is librustzcash and halo2 . Our team will rely on some pieces of code that will assist our process with WASM compilation and may require those involved. The lightwalletd team to provide assistance (if any) when required. Another dependency is potentially zecwallet-light-cli , this library was created by Aditya. This repository was recommended by the Zephyr team in their blog update, over the c-library that is provided by the zecwallet-lib core. This repository had been (since September 26, 2023) archived and is most likely no longer maintained. This means that if there are any issues that occur with their code, help will be difficult to attain. This may cause us to fork this repository and make the necessary changes ourselves, or use the code available in the zecwallet-lib core.
- **Technical approach:**
  The feasibility study will attempt to verify that an SDK could be built out and any [known] issues will not impede on its completion.This study will involve the following: Verify that the WASM environment will not constrain the browser JS engine and can run as intended. Verify there are no network connectivity constraints and establish communication between the client and blockchain network. Implement a small POC that will showcase the ability to implement theproposed solution. * As these are the most pressing concerns raised by the Zephyr team, which attempted to build something similar. Network Test: The first step would be to verify that there are no issues with network connectivity. We will verify that there are no problems with socket connects (TCP/UDP) and that communications between the ZCash network and the browser can be established. WASM Test: The next step is to make sure that WASM will be able to be compiled into the browser and that there will be no issues with running WASM code in the browser. This will be done in a simple manner, where the browser will request the block height of the network (as an example). Load Test: The last step is to verify that the size of the WASM build will not cause any future problems. To do this, we will use some juke data (just to conflate the code size) to see the upper limit of what the browser can handle.

### Requested Grant Amount

- **Amount:**
  35000.0

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
  35000.0
- **Compensation justification:**
  1 Technical Lead 1 FTE Engineers .5 Research Engineer .5 Project Manager Overhead fees (this includes any additional costs such as the research involved in the initial scope of work, marketing, and senior management advisory for the duration of the project)
- **Startup funding required:**
  No
- **Total proposed grant value:**
  35000.0

### Team Members

- **Project Lead:**
  Daniel Choi
- **Background:**
  ChainSafe [Organization] - Established in 2017, the core business of ChainSafe Systems is software development consulting, specifically the research and development of blockchain protocols and products, including infrastructure and tools which enable the onboarding of new developers and novel use cases for blockchain technology. ChainSafe has worked to maintain stable alternative implementations, improve functionality and in turn adoption of some of the top protocols in the space such as Ethereum, Filecoin, and Polkadot - helping to create and secure over 230 Billion USD in combined value measured by market capitalization of these protocols.
  
  As part of ChainSafe’s commitment to fostering the growth and adoption of blockchain technology, they also build developer resources that serve as public goods - open source code libraries and tooling that ensures that Web3 infrastructure will be made from technology developed in Ontario. Strong proponents of open-source technology and community-oriented commercialization, and with accessibility and utility for developers as our primary objective - ChainSafe helps to produce and maintain core infrastructure the web3 ecosystem needs to succeed and serves the global web3 community. Bero [Tech Lead] -
  An accomplished software engineer with a proven track record of success in the tech industry. Beginning in 2018, he joined a small agency where he quickly advanced to the role of Technical Lead. During his tenure at the agency, he worked on complex data visualization projects, honing his skills in Frontend Engineering. In 2020, he embarked on a new adventure by joining NodeFactory, where he continued to excel as a software engineer. His commitment to open source work and dedication to innovation led to a significant milestone in 2021 when ChainSafe Systems acquired NodeFactory. Following the acquisition, his focus shifted towards creating cutting-edge open source tools that have made a meaningful impact in the tech community.
  
  Ivan Rubido [Developer] -
  4 years of active web3 development experience. He began his journey at NodeFactory, working on a lot of dApps for various clients, such as Croatia National Post NFT platform and the Swap-Kiwi NFT dApp. For the following two years at Chainsafe, Ivan continued with consulting projects, statistics tools, dev tooling and maintained various Metamask snaps such as FilSnap and Polkadot Snap, and developed snaps for NEAR, Aleo, and Mina. His primary focus remains on ensuring user-friendly and secure applications and protocols. Ivan has amassed a profound understanding of blockchain technologies and standards Daniel [Researcher] - Daniel is blockchain researcher who has been previously a blockchain developer. Daniel has over 7 years of experience in the blockchain field and has done both research and development for various projects. He has contributed to many projects including: Kademlia DHT Double hash implementation, gasless transaction solutions, Chainlink-Cosmos, Ethermint, Polymath wallet, and testing. Currently, his areas of focus for research are ZKs, wallet and smart contract security, and Ethereum-related protocols.

### Funding History

- **Previous funding:**
  No
- **Other funding sources:**
  No

### Risks and Evaluation

- **Execution risks:**
  The known issue that has been encountered in the past was due to throttling of the browser. This is not a well studied area and may possibly cause issues in the future. Thus, we will conduct a preliminary viability test to assess the challenges and possible blockers that may present an impasse. If such situation makes it impossible to make any more progress, a report will be made and no further progress will be made toward the SDK.
- **Unintended Consequences:**
  If the project is a success, this would allow us to move forward with our bigger goal of completing a fully capable SDK.
- **Evaluation plan:**
  The metrics that we will provide is a report of the viability of the SDK implementation with respect to the browser, WASM, and network connectivity. The report will reflect the ability for such implementation to operate as intended within what bounds, any network constraints, compatibility issues with WASM and the browser, and related findings.

### Project Timeline

- **Project timeline determination:**
  The software project timeline is determined by breaking down tasks, considering available resources, and estimating how long each task will take. It involves planning for uncertainties, adjusting as needed, and keeping everyone involved in the loop.

### Milestone 1

- **Amount:**
  35000.0
- **Expected Completion Date:**
  3/31/2024

  - **Deliverables:**
    - Feasibility Tests

### Submission Date

- **Submission Date:**
  2023-11-30 23:48:54

### File Attachments


