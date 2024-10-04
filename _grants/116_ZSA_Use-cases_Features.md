---
title: "ZSA Use-cases Features"
status: "Accepted"
amount: "650000.0"
submitter: "[REDACTED] [REDACTED]"
email: "[REDACTED]"
date: "2024-05-13 10:58:49"
project_name: "ZSA Use-cases Features"
summary: "Expand ZSAs to allow for the main use-cases: exchanges, stablecoins, payments"
total_grant_value: "650000.0"
submitter_last_name: "[REDACTED]"
original_title: "ZSA Use-cases Features"
labels:
  - APPROVED
  - Cancelled
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
  We are long time members of the Zcash Community.
- **Original Title:**
  ZSA Use-cases Features

- **Labels:**
  - APPROVED
  - Cancelled

### Project Overview

- **Project Name:**
  ZSA Use-cases Features
- **Last Updated:**
  2024-06-24 07:24:59
- **Sponsorship Request:**
  No
- **Project Image (Public Gallery):**
  5b50bb22-4b9d-4b9d-8d41-38a81d1ebe8a.png
- **Project Summary:**
  Expand ZSAs to allow for the main use-cases: exchanges, stablecoins, payments

### Project Description

- **Overview:**
  There is a huge opportunity to leverage the expansion of Zcash into the DeFi space to bring in stablecoins into the ecosystem. However, the increased scrutiny by financial authorities means that it would be necessary to bring in means to comply with regulations in order for there to be agreement for launching stablecoins over ZSAs. Another feature of interest would be to allow users and exchanges more control over their incoming transactions. This would go a long way towards ensuring exchanges can satisfy checks regarding the source of funds before they accept them. We had mentioned in our previous grant our roadmap with Zcash for 2024, and our interest in these areas, and had suggested we formalize this as a grant proposal in 2024. We believe right now is a great time to develop means to include meta-data information along with transactions, and to allow more control over fund receipts, so as to best support expanding the ecosystem using ZSAs. The opportunity to launch stablecoins at the earliest is large enough that we propose the implementation of this meta-data information in two stages. We start with creating enhanced viewing keys for the issuer of an Asset, as an initial property that would be acceptable for needs of stablecoin issuers. Next, we will introduce a mechanism to allow parties to confirm and reject incoming transactions, which can be used to enforce the validity and compliance of the incoming funds. Simultaneously, we will work to review and analyze the methods available for including opt-in identity on blockchains in different contexts, and come up with suggestions for how we can use them to achieve more fine-grained forms of compliance while balancing users privacy. In addition, we propose the integration of the Asset Swaps development work, and the wallet adaptation support in this grant. This was approved in the earlier grant, but portions of it were repurposed towards helping support the Zebra effort to get ZSA functionality up and running as soon as possible.
- **Proposed solution:**
  Enhanced Issuer Viewing Keys We propose enhanced viewing keys for the issuer of an Asset, using verifiable encryption. This allows stablecoin issuers to privately view transactions involving their Asset (aka the stablecoin). This gives them the ability to prove to authorities they aren't enabling illegal activities, while maintaining privacy for other users. User Control and Transaction Acceptance We'd also like to add support for recipients to approve transactions before accepting funds. Exchanges could use this to satisfy themselves about the source of funds before they accept them into their accounts. This design builds on top of our work designing Asset Swaps. Exchange Compatibility and Identity Schemes Exchanges would prefer to have means of knowing that the parties they provide services to do not fall afoul of AML or other regulations. At the same time, there is a need to allow for user privacy to be preserved without revealing unnecessary information. Therefore, simultaneously to the above, we will create a technical report analyzing identity on blockchains. Our goal is to look at the existing techniques used, to come up with ways to disclose just the information required while preserving privacy.
- **Solution Format:**
  As in the case of our previous grants, for enhanced issuer viewing keys and transaction acceptance, we will provide technical reports for our research reviews, followed by ZIPs for the design, followed by implementations of these designs for the Zcash protocol and Zebra node. For the survey of techniques to add identity information in blockchain transactions, we will provide a technical report analyzing the schemes we consider, along with a high level overview of our methodology of evaluating and picking these schemes.
- **Dependencies:**
  Our project does not have any dependencies beyond the existing libraries for the Zcash protocol and blockchain, the Zebra node, the Halo2 implementation, and our prior work on ZSAs and Asset Swaps. We will work with the Zcash Foundation and the ECC to ensure the proper design, development and integration of the changes to the protocol.
- **Technical approach:**
  Enhanced Issuer Viewing Keys When it comes to heavily regulated areas like stablecoins, we suggest an approach to allow issuers of the stablecoins to prove to authorities they are not abetting bad actors to perform illegal transactions, while maintaining privacy guarantees for the larger set of users. The suggested technique uses verifiable encryption so that the issuer (alone) can view all transactions performed involving the issued Asset. This means that at the time of compliance, the issuer can inspect if any transactions are falling afoul of regulations. At the same time, since the details remain encrypted, the privacy guarantees for anyone other than the issuer remain strong, like before. During asset issuance, each issuer will be able to decide whether they want to enable this feature, and users will also know when such a feature is active for an asset, allowing them to opt in about whether or not they agree to reveal the transaction information to issuers. The verifiable encryption primitive is needed because we need the consensus to verify that the  appropriate  transaction  metadata  was  properly encrypted , using the  correct encryption key , and attached to the transaction. The  proper metadata  should include the  canonical addresses  of the sender and the recipient, and the amount. To utilize existing Zcash cryptography and technological advancements, we did an initial investigation into verifiable encryption using the Halo2 proof system. The linked technical document describes our effort to prove knowledge of the plaintext for a given ciphertext and to prove some property of the plaintext, using the Halo2 proof system. The encryption should be ZK friendly, and the property proven is that the plaintext serves as a secret key to a digital signature scheme for a known public key. Note that this document does not describe how to tie verifiable encryption into the Zcash protocol, which will require further investigation. We have also already implemented a proof of concept for verifiable encryption using Halo2, which can be explored in the linked GitHub repository . Further optimizations to the gadgets and proper connection to the OrchardZSA protocol will be required for application to our real-world use case. Note that there are other methods and tools to do verifiable encryption, and while the usage of Halo2 seems promising and is the preferred option, there is a chance that some other method will be used eventually, based on the complete enhanced viewing key protocol design. Transaction Acceptance The aim of this work is to provide recipients with the ability to only receive funds that they approve of. An example use case is that of exchanges receiving funds from users for conversion. The exchange would want to satisfy itself that the sender of the funds meets the necessary KYC etc requirements before proceeding with the transaction. However, at present, the protocol works in a way that the funds will automatically be received by the exchange, which they would not prefer, since they would not like to “handle” the Asset if they have issues with its history, etc. We provide a means for the recipient to provide an approval signature for the transactions it wants to accept the funds of. Only such transactions will actually get validated on chain and be “handled” by the recipient. Our design fits well on top of the Asset Swaps design that we have recently provided a draft of in ZIP 228 , which again, allows for the reuse of existing work and cryptography in elegant ways. Identity Schemes Technical Report While the enhanced view for issuers allows for stablecoins to deploy over ZSAs, it stops short of being a solution that preserves user privacy to the maximum while allowing for parties to provide information at the relevant stages to interact with exchanges. This would require the inclusion of identity information in transactions in a shielded manner, along with means to either reveal or prove properties about the information when necessary. There has been some work in this direction in various other contexts: zkLogin is a technique that allows the use of OAuth tokens to create accounts for the Sui blockchain. The zkSend feature is already available to get users on the Sui ecosystem. Privacy Pass is a technique supported by Cloudflare and Google to provide unlinkable anonymous tokens that to reduce the number of CAPTCHA challenges encountered by users. zkPass and zPass provide ways to verify identity and other sensitive information through decentralized digital identity models. There are many approaches to decentralized identity, such as Hyperledger Indy , Sovrin , iden3 , among others. The Decentralized Identity Foundation is working to create a common framework for decentralized identity, while the Rebooting the Web of Trust workshops have been collaborating on decentralized identity solutions. We want to analyze these efforts and propose solutions that fit in best with the Zcash and ZSA ecosystem. Our work will also highlight the rationale behind how we weight the different schemes.

### Requested Grant Amount

- **Amount:**
  650000.0

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
  650000.0
- **Compensation justification:**
  The expected budget is roughly $85k per month of work, covering a team of about 4 full-time ZKP and protocol engineers.
- **Startup funding required:**
  Yes
- **Startup funding explanation:**
  ZCG would your milestone payouts be detailed as follows for this grant : (1) $216,666.66 paid upfront, (2) $216,666.67 paid 30 days after the first payment, (3) $216,666.67 paid once the ZIPs have been reviewed by the ZIP editors and moved from “Draft” to “Proposed” status. QEDIT Rationale: In order for us to plan for the staffing of engineers, we kindly ask if you could provide a start-up funding of 2/3rds upon approval. The payments are split into two: - First payment upon approval. - Second payment one month later. - The third payment paid once the ZIPs have been delivered and accepted by the ZIP Editors. QEDIT will iterate on the ZIPs with the Editors to reach consensus.
- **Startup funding amount:**
  433333.33
- **Total proposed grant value:**
  650000.0

### Team Members

- **Project Lead:**
  QEDIT
- **Background:**
  We are  QEDIT , the cryptography team that has been working on the Zcash Shielded Assets (ZSA) and Asset Swaps capabilities. Previously we performed the audits for both  Sapling  and  Orchard  before they launched into main-net. We are a significant part of the  ZKProof.org standardization effort , and we have led the  zkInterface interoperability standard  within the DARPA-funded  SIEVE program  to advance the state-of-the-art of ZKPs.

### Funding History

- **Previous funding:**
  Yes
- **Previous funding details:**
  We have received two major grants from ZCG: A Proposal for Shielded Assets (ZSA/UDA) for DeFi on Zcash Zcash Shielded Assets -- Asset Swaps and Beyond
- **Other funding sources:**
  No

### Risks and Evaluation

- **Execution risks:**
  As with other major changes to the core protocol, we will have to be aware of code conflicts with other parallel development efforts. We have taken all possible precautions to ensure that the complete protocols are tangible (e.g. the proof-of-concept for verifiable encryption described above), but there is a small risk that we come to the conclusion that the complete protocol is not efficient enough. This risk will be mitigated early in the protocol design stages.
- **Unintended Consequences:**
  Our solutions maintain an opt-in approach to these additional features. As a result, a user can weigh the pros and cons before choosing to transact with Assets that have these features enabled. The presence of the enhanced issuer viewing key creates a point of failure for transaction privacy at the issuer. If the issuers viewing key is compromised, then the attacker can view the entire transaction graph of that Asset . It is important to note that the compromise is limited to the individual Asset, and does not provide spend or issue capabilities to the attacker. The rest of the pool continues to enjoy privacy as normal. Further, we recall that issuer compromise even before this addition could allow attackers to issue Assets. Users will have to consider the reputation of the issuer with these points in mind before choosing to use Assets created by them. Users will also have to consider the reputation of the issuer that enables these viewing keys, as they will have to trust such issuers not to misuse the view of the transaction graph they have.
- **Evaluation plan:**
  The evaluation will be on the basis of milestone completion. Each milestone will have a deliverable in the form of a pull request to existing repositories, or separate repositories, or documents (for the research and ZIP components)

### Project Timeline

- **Project timeline determination:**
  We will begin by researching and designing the features we are proposing. We also propose this timeline to allow the grants committee flexibility to pick and choose the features they find promising, and evaluate funding based on the price of ZEC.

### Milestone 1

- **Amount:**
  216666.67
- **Expected Completion Date:**
  12/1/2024

  - **Deliverables:**
    - Research + Design of 2 ZIPs: Enhanced Viewing Keys and User Control (+ iterations with ZIP Editors)

### Milestone 2

- **Amount:**
  0.0
- **Expected Completion Date:**
  2/1/2025

  - **Deliverables:**
    - Wallet Adaptation for Asset Swaps

### Milestone 3

- **Amount:**
  0.0
- **Expected Completion Date:**
  12/1/2024

  - **Deliverables:**
    - Asset Swaps Integration

### Milestone 4

- **Amount:**
  0.0
- **Expected Completion Date:**
  10/31/2024

  - **Deliverables:**
    - ZIP for Enhanced Viewing Keys (Moved to Milestone 1)

### Additional Milestones

- **Additional Milestones:**
  Yes

### Submission Date

- **Submission Date:**
  2024-05-13 10:58:49

### File Attachments


