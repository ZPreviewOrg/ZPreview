---
title: "Block explorer + Testnet infrastructure"
status: "Accepted"
amount: "14400.0"
submitter: "[REDACTED] [REDACTED]"
email: "[REDACTED]"
date: "2024-05-10 21:30:27"
project_name: "Block explorer + Testnet infrastructure"
summary: "To provide developers community with a testnet infrastructure"
total_grant_value: "14400.0"
submitter_last_name: "[REDACTED]"
original_title: "Block explorer + Testnet infrastructure"
labels:
  - APPROVED
  - Start Up Funding COMPLETE
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
  Zcash is being taught in  block chain lessons at the national university of La plata. The Zcash book and all community provided material shows how this community actively works on providing materials and tools to facilitate block chain adoption.
- **Original Title:**
  Block explorer + Testnet infrastructure

- **Labels:**
  - APPROVED
  - Start Up Funding COMPLETE

### Project Overview

- **Project Name:**
  Block explorer + Testnet infrastructure
- **Last Updated:**
  2024-06-06 19:06:21
- **Sponsorship Request:**
  No
- **Project Image (Public Gallery):**
  Untitled.png
- **Project Summary:**
  To provide developers community with a testnet infrastructure

### Project Description

- **Overview:**
  Zcash community actively works on providing the technology for a blockchain focused on privacy. These privacy properties are not present in other blockchains making  Zcash unique on its kind, therefore both developers and end-users may need a different learning path to familiarize themselves with the concept of a privacy preserving blockchain and cryptocurrency protocol. Testnet plays a fundamental role in the development cycle of a blockchain ecosystem. And most importantly during the first steps of any end-user and developer with intentions of joining the  community. During the Zconf 24 it was claimed many times by key players that the community should focus on providing tools to ease the technology adoption. Unfortunately the official testnet node is not working, limiting the approach of any person interested in the blockchain using a safe method. On the other hand, the block explorer application has shown to be a useful tool in prod environment however there is no block explorer for test environment and production's one is going to stop working by end of May 30th. Although the Block Explorer One is] public for testnet and production and Blockchair for prod [bc], they are proprietary and source code is not open-sourced so the community is not able to audit them or run a similar instance by themselves. [beo] https://blockexplorer.one/ [bc]https://blockchair.com/zcash/
- **Proposed solution:**
  For this grant I propose to work on providing a minimum infrastructure to let a Zcash adopter to test the blockchain. 
  
   For such a thing, I will provide a Kubernete project based/inspired on Testnet in a Box (TNB) [tnb] project to use the latest Zcash node (Zebra) and Block Explorer [be] version. Then I’ll deploy it in the cloud with public access.
  
   Because the Block Explorer has been running on top of Zcashd, the first  deliverable will be based on the latest version of  Zcashd node. The goal is to have a version live as soon as possible so that anyone can test. Secondly, I will work on updating the project to use the Zebra version of Zcash. Then, I will include a faucet so that we are able to fund (deposit to) addresses, transact on the test network and browse transaction details in the Block Explorer. At this point, the infrastructure will provide anything a user needs to test the blockchain and see the results. The fourth milestone consists of providing monitoring tools like Kibana to monitor and share operation data to the community. The grant includes the expenses for hosting all the resources mentioned above. Optionally, the node+block explorer components can be deployed on production doubling the grant budget. This could be a good idea because the project hosting the Block Explorer[be] is finishing by the end of May. 
  Another option to consider is to deploy another Zebra node (even with a different version) on a different location ( EU) to exercise node synchronization. This is super useful for adopters who can track their transactions across the nodes but also for devs to run in an isolated context two Zcash nodes with different versions ( for example, main branch vs latest stable). Compatibility issues can be detected early. Finally in order to speed up the testnet node initialization, a snapshot of testnet blocks will be published to get downloaded from a CDN.
  
  
  
  [tnb] https://github.com/zcash-hackworks/zcash-testnet-in-a-box/ [be] https://github.com/nighthawk-apps/zcash-explorer
- **Solution Format:**
  The goal of the project is to get a testnet live and thus I plan to provide a Kubernete project that orchestrates the required components deployment. Therefore, the deliverables are incremental version of such project:  Deliverable1: A kubernetes project deployed in the cloud for the latest version of Zcashd in open-source. Similar to Testnet in a Box project that packages many testnet components.   Deliverable 2 A block explorer deployed in the cloud using Zcashd.  Deliverable 3 Production Block Explorer Deliverable 4  An updated version of the new version of Testnet in a Box for the Zebra node.A Block Explorer including any compatibility change required for Zebra Node. Deliverable 5 Monitoring tools for the testnet. Deliverable 6 Second testnet instance in a different location and using Zcashd. Deliverable 7 A donation feature to support the block explorer and avoid recurrent grant application to support these critical features. Deliverable 8 Testnet snapshot download from CDN.
- **Dependencies:**
  In order to expose the new Testnet server under the zcash domain (explorer.testnet.z.cash), Zcash domain's owner should update DNS records with the new CNAME record. Otherwise I will provide a new domain.
- **Technical approach:**
  The components mentioned above will be packaged in a Kubernetes or similar container based solution to easy its deploy and maintenance. Minor compatibility issues will be developed for supporting zebra in Zcash block explorer.

### Requested Grant Amount

- **Amount:**
  14400.0

### Budget Breakdown

- **Hardware/Software budget:**
  0.0
- **Hardware/Software justification:**
  NA
- **Services budget:**
  5400.0
- **Services justification:**
  Monthly cost of dedicated cloud server (or similar) per instance. Some reference price from Amazon: Amazon Elastic Block Store  for 500GB: usd 40.00 Amazon EC2 On-Demand instances for t3a.xlarge 4vCpu 16GB RAM: 109.79 Total: 149.79  
  The estimation is based on the official Zebra documentation https://zebra.zfnd.org/user/requirements.html#system-requirements. Three nodes are required: Testnet US: Running the latest stable version of Zebra (testnet) and Testnet block explorer in US. Testnet US: Running the main underdevelopment branch Zebra (testnet) and its Testnet block explorer in EU. Production Block Explorer: Running Block Explorer in a US location.
- **Compensation budget:**
  9000.0
- **Compensation justification:**
  1 - Server provisioning, and node deployment 5 hrs 2 - Kubernetes project development and testing 20hs. (Milestones 1-4) 3 - Block Explorer changes to work on top of Zebra and testing  20hs. 4 - Monitoring tools  15hs. Total 60 hs x 150 usd/hr = 9000 Cloud servers maintenance: usd 500/mo
- **Startup funding required:**
  Yes
- **Startup funding explanation:**
  The node and block explorer hosting is the core of this grant. Without server's provisioning the milestone can't be accomplished. The server hosting will be paid upfront to the cloud provider.
- **Startup funding amount:**
  450.0
- **Total proposed grant value:**
  14400.0

### Team Members

- **Project Lead:**
  Cacho
- **Background:**
  With more than 15 year of experience in technical and managerial positions, explored diverse industries and their challenges. In my academy facet, I got a Phd and perform research in software engineering. I'm teaching Cryptocurrency Introduction Lecture at the National University of La Plata where one of the main topics is privacy and Zcash as the main platform to transact tokens. I'm presenting this grant based on a need identified during Zcash teaching where basic resources for browsing block information and tokens for assets are require. In the industry side, I'm am leading some development projects and product implementations.

### Funding History

- **Previous funding:**
  No
- **Other funding sources:**
  No

### Risks and Evaluation

- **Execution risks:**
  One of the major risks is the improper estimation of hosting requirement .This could require to increase the server capacity to serve all the demand properly. During the block explorer integration with Zebra, there could arise unexpected issues that will require support from both apps. I expect to rely on the community for assistance.
- **Unintended Consequences:**
  I don't see any negative impact.
- **Evaluation plan:**
  I will share quarterly reports manually or automatically showing many metrics like; Node latency Node transactions Block explorer activity by different criteria like Country, timezone, and feature Storage and CPU usage for future references

### Project Timeline

- **Project timeline determination:**
  It was done based on components dependency and bandwidth.

### Milestone 1

- **Amount:**
  4500.0
- **Expected Completion Date:**
  5/31/2024

  - **Deliverables:**
    - 1 weeks : Deliverable 1 -  Zcashd node in testnet.
    - 2 weeks:  Deliverable 2 - Block Explorer in testnet.
    - 4 weeks: Deliverable 3  - Production Block explorer

### Milestone 2

- **Amount:**
  4950.0
- **Expected Completion Date:**
  6/30/2024

  - **Deliverables:**
    - 6 weeks: Deliverable 4 - Block Explorer on top of Zebra.
    - 7 weeks:  Deliverable 5 - Monitoring tools
    - 8  weeks:  Deliverable 6 - Second testnet Instance

### Milestone 3

- **Amount:**
  4500.0
- **Expected Completion Date:**
  7/31/2024

  - **Deliverables:**
    - 10 weeks: Deliverable 7 - Donation feature
    - 11 weeks: Deliverable 8 - Testnet snapshot download
    - 10 month hosting. 3 servers - 10 month

### Additional Milestones

- **Additional Milestones:**
  No

### Submission Date

- **Submission Date:**
  2024-05-10 21:30:27

### File Attachments


