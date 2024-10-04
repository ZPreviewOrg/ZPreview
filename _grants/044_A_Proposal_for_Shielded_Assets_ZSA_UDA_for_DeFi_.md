---
title: "A Proposal for Shielded Assets (ZSA/UDA) for DeFi on Zcash"
status: "Accepted"
amount: "1187615.0"
submitter: "[REDACTED] [REDACTED]"
email: "[REDACTED]"
date: "2022-11-02 10:35:39"
project_name: "A Proposal for Shielded Assets (ZSA/UDA) for DeFi on Zcash"
summary: "This post outlines a proposal by the QEDIT team to build generic shielded assets on the Zcash blockchain."
total_grant_value: "1187615.0"
submitter_last_name: "[REDACTED]"
original_title: "A Proposal for Shielded Assets (ZSA/UDA) for DeFi on Zcash"
labels:
  - APPROVED
  - GRANT COMPLETE
  - MILESTONE 1: COMPLETE
  - MILESTONE 10: COMPLETE
  - MILESTONE 11: COMPLETE
  - MILESTONE 2: COMPLETE
  - MILESTONE 3: COMPLETE
  - MILESTONE 4: COMPLETE
  - MILESTONE 5: COMPLETE
  - MILESTONE 6: COMPLETE
  - MILESTONE 7: COMPLETE
  - MILESTONE 8: COMPLETE
  - MILESTONE 9: COMPLETE
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
  Through attending Zcon conferences
- **Original Title:**
  A Proposal for Shielded Assets (ZSA/UDA) for DeFi on Zcash

- **Labels:**
  - APPROVED
  - GRANT COMPLETE
  - MILESTONE 1: COMPLETE
  - MILESTONE 10: COMPLETE
  - MILESTONE 11: COMPLETE
  - MILESTONE 2: COMPLETE
  - MILESTONE 3: COMPLETE
  - MILESTONE 4: COMPLETE
  - MILESTONE 5: COMPLETE
  - MILESTONE 6: COMPLETE
  - MILESTONE 7: COMPLETE
  - MILESTONE 8: COMPLETE
  - MILESTONE 9: COMPLETE

### Project Overview

- **Project Name:**
  A Proposal for Shielded Assets (ZSA/UDA) for DeFi on Zcash
- **Last Updated:**
  2023-11-21 17:07:17
- **Sponsorship Request:**
  No
- **Project Image (Public Gallery):**
  Logo_Blue_1.png
- **Project Summary:**
  This post outlines a proposal by the QEDIT team to build generic shielded assets on the Zcash blockchain.

### Project Description

- **Overview:**
  Motivation and overview At QEDIT we believe that privacy is a universal human right. We also believe cryptography is a powerful tool to provide financial privacy, which promotes the freedom of the individual. With this proposal, we want to bring DeFi to the Zcash ecosystem, and at the same time enable the use of the best privacy technology within the existing DeFi ecosystem! A couple of months ago we asked, and the community answered: generic shielded assets (ZSA/UDA) are the most requested feature at the moment .
- **Proposed solution:**
  To pave the path for private DeFi, we wish to extend the Orchard protocol with these three features: Implement a permissionless issuance mechanism for native shielded assets, which will provide users with some degree of programmability over minting different types of assets (fungible vs non-fungible, public vs private supply, etc) Extend the transfer mechanism to allow for multiple types of assets to be transferred in the same transaction, while maintaining a single anonymity pool for all assets Enable a secure one-way bridge with other blockchains, allowing for existing assets to be imported onto the Zcash ecosystem These features form the basis for a fully fledged native and private DeFi ecosystem on Zcash such as private DEX, AMM and lending (as well as anonymous credentials for identification), which we see as future work. Our goal is to develop these core features with extensibility in mind. The project is expected to last between 8-10 months of design and development and another two months of review and merger with the main code-base (or as defined by the NU6 deployment roadmap, to be determined). Approach & desiderata To build a usable MVP that will enhance adoption of Zcash, since this is the first core development project outside of the ECC and Zcash Foundation, we will work with the community and other stakeholders to test our assumptions, and ensure that our final design includes the user’s feedback. The design must prioritize usability, economic and technical considerations. The following is a list of desiderata: Usability: take a product and experience (UX) design approach build easy-to-use, stable APIs ensure, when possible, the interoperability of different implementations (e.g. zcashd vs zebrad) Economic: design an incentive mechanism for the validators and current users of $ZEC (e.g.:ZEC-based fee structures) ensure reserve integrity for imported assets by verifying collaterals exist in the corresponding blockchain Technical: identify underlying commonalities (such as locking / burning mechanisms) ensure the development is aligned with other builder teams, creating a shared roadmap for the development of the Zcash ecosystem incorporate feedback from other experts and work with security teams for ensuring proper review of the code
- **Solution Format:**
  We are both writing code (to be submitted in the form of several pull requests to the Orchard and Zcashd repositories), as well as written specifications and documentation (submitted in the form of ZIPs and updated Zcash Specification document)
- **Dependencies:**
  Our project does not have any dependencies beyond the existing libraries for the Zcash protocol and blockchain. We will work with the Zcash Foundation and the ECC to ensure the proper design, development and integration of the ZSA protocol.
- **Technical approach:**
  In this proposal we do not aim to provide the exact details of how the features will be designed or implemented. Our goal is to give some intuition of why we believe that this project can be done and to collect feedback and input from the community on these topics for optimal execution. For each of the outlined components below, there are several aspects to their implementation: Core cryptographic protocol design, specification and implementation Circuit changes and implementation Integration within blockchain components, such as consensus rules, networking, etc. Integration with existing nodes (Zcashd & Zebra) Security assurance through tests coverage and internal reviews Core Feature: generalized shielded asset transfer In order to be able to represent different assets in Orchard, one needs to define a new data field that uniquely represents the type of the asset in question. It has to be done in a way that enforces the balance of an action description to be preserved. Mainly, the valueold and the valuenew must be balanced only with respect to the same asset type . Ideally we would also like to allow different action descriptions to transfer different asset types, where the overall balance is checked without revealing which assets (or how many different types) are being transferred. Below we overview a possible direction for accomplishing this feature. As mentioned, it is not the goal of the proposal to outline the details of the design for each feature. This direction, which was first outlined by Daira Hopwood and Jack Grigg in this github issue 3 , involves using a single value base point (out of a fixed number) for the value commitment for each asset type in a transaction. Today, the (net) value, v , of a note in the Orchard protocol is committed using a Pedersen commitment (§5.1.3) ValueCommitOrchardrcv(v):=[v]VOrchard+[rcv]ROrchard with fixed value base point, VOrchard and randomness base point ROrchard , derived from a fixed string, using the GroupHash function: VOrchard:=GroupHashP("z.cash:Orchard-cv","v") ROrchard:=GroupHashP("z.cash:Orchard-cv","r") In the ZSAs update, we would like to allow for each asset in a specific transaction to have a different value base point. In order to reduce the cost of the circuit, we do not require that the base point itself be tied to the unique asset type identifier, ASSET_ID (i.e.: the base points are not globally unique). Instead, we can generate a set of fixed value base points V1,...,Vl , one for each asset type in a transaction (up to l ). As long as the same base point is used for each of the action descriptions with the same asset type, the balance will be verified correctly for a given transaction. This method does require the transaction to have pre-determined fixed fixed of asset types, where the value base points can be reused across different transactions and for different asset types (across those transactions). This enables the circuit to be the same for every action description. The different base points should be derived using the GroupHash function: VOrchardtypei:=GroupHashP("z.cash:Orchard-cv:type_i","v") Where type_i designates the asset type in slot i of the transaction. It makes sense for the specific ASSET_ID of that asset to be added to the note structure, and as we mention below, this ASSET_ID will be tied to the issuance mechanism. This is in order to make sure that the recevier can validate the asset type, and that the integrity of the UTXO chain for a given type is preserved. Note that in order to keep the privacy of the transaction with respect to asset types, allowing different asset types to be aggregated within the balance check, the ROrchard will stay the same for all asset types, as it is the component where the binding signature verification key is aggregated. Also, intuitively, the design yields for different asset types and the same balance verification process will ensure that homomorphically the balance is preserved between the same asset types. If different asset types are spent and output, the verification will fail with overwhelming probability. Making this design correct and sound, intuitively. Furthermore, this construction requires GroupHashP to be resistant to second-preimage atttacks. Of course, this is not the only possible way to implement this feature, and we will explore others before finalizing the design and specification. One such alternative is to append the unique string identifier to the value itself, while maintaining the same base points for all asset types. Though this may increase the development complexity, as it would imply changing the circuit to verify that the value commitment is a commitment to two values of the same type, it may yield for more extensibility in the future. Core Feature: issuance mechanisms In order to transfer assets with different types, one must issue them on the blockchain. The $ZEC asset is currently issued through a proof-of-work mechanism, and is implemented using a (private) mining transaction. To support generic asset types, we will have to implement further transaction types to enable their issuance into the system. As outlined in Jack Grigg’s proposal 3 , various applications require different issuance functionality (e.g.: public vs private, schedules, crowdfunding, etc.). There are two major components to the issuance mechanism, which we plan to implement as two different transaction, extending the Orchard protocol: Registration of the token, which stamps on-chain all the information about the asset, making it official that the asset exists (though initially not in circulation). The specific information that we will add, may include the following:the registrar address: the user who established the registration
  a list of allowed minter addresses (those who can mint)
  asset type identifier, ASSET_ID
   maximum supply
   Minting of the token, which generates a transaction and sets a specific amount of tokens in circulation. This could beThe registrar address is only allowed to mint
  A list of minting addresses are allowed to mint
  Other rules will be explored to enable different types of minting.
   We will explore the possibility of using Transaction Zcash Extensions (TZEs) 4 in order to implement the registration and minting transactions. One way to make it work would be to implement them as a chain of UTXOs. We aim to design a protocol that would also allow for key rotation within the minting addresses, allowing both for revocation and for key-recovery mechanisms. Having a UTXO chain may be used to enable this, as the “owner” could represent the “allowed minter” address. We are currently considering designing these in a transparent manner (except for the transfer due to the minting transaction), and we leave private issuance of assets as an extension of the MVP and as future work. We would first like to ensure that there is an inherent economic incentive to add privacy while maintaining the integrity of each asset in circulation. In a transparent issuance mechanism, the total supply in circulation of each asset can be known by analysing the blockchain contents. EDIT #2{ 
  We note that to build the issuance feature, we will focus on a developing a single mechanism that encompasses the most fundamental type of issuance, which will be defined according to the consensus reached with the community.
   } Asset type identifier asset_id definition The asset_id can be generated using some random string, or even a hash derived from the issuer address (which could benefit a future private issuance mechanism). Note that by generating a unique random string as an asset type, we remove the need to handle a naming system, preventing users from maliciously chosing pre-determined asset type names. The mapping of these strings to their actual asset type names is to be handled off-chain, similar to how smart contract addresses are handled off-chain for Ethereum. Importing of assets In the MVP, importing assets from a different chain can be done by having an explicit address be the importer of that asset, acting as a trusted party to maintain a locked reserve of the original asset. We will however, take this process into account when designing the issuance mechanism such that it is feasible to import, at least, the ERC20 token standard of Ethereum. In fact, the most flexibility comes from letting any user declare off-chain that they will hold the reserves (say of $ETH) in a smart contract, and since the asset supply will be public, anyone can verify that the supply is backed by a reserve collateral. Note that this would also allow for some form of “mutual fungibility” since two different entities may decide to hold a reserve and issue “zBTC” on the Zcash chain, while registering different asset types. As long as these two entities are trusted, the two asset types are fungible (as long as the protocol allows for it). In the design phase we will work with the Zcash Foundation team around the FROST 2 secret-sharing scheme in order to potentially use multi-signatures to implement committee-like structures for importing assets. This would indeed reduce the trust given to a single entity. In the future, probably with other proposals, we intend to explore further how to use zero-knowledge proofs to enable fully untrusted cross-chain interoperability of assets, but this is currently out of scope. Other extensions The two transactions outline above are enough to deploy a usable MVP. However, we will consider more advanced issuance methods that include a set of consensus rules for automated issuance / redeeming mechanisms, for example: Any address that sends $ZEC to the registrar address in exchange for that asset will be able to redeem that asset from the registration pool (note that this will require revealing to the validators the amount being sent for exchange).An initial value of exchange may have to be added to the registration transaction information
  This may require to implement a new type of “swap transaction”
  The proof will have to verify that the exchange rate and values of different types are correctly implemented
   Users send ZEC tokens to the issuer address for an amount of time (i.e.: number of blocks) and at the end the number of assets sent is proportional to the raised funds. Though it is out of scope, other extensions to issuance mechanisms may be around on-chain governance (e.g.: rules determining who and when can issue or mint), or around parametrizing automatic issuance of tokens. We will gather inputs from different stakeholders to ensure that the issuance mechanism represents the needs of the community and users. Core Feature: fees structures In order to ensure that the ZSA/UDA MVP offers the right incentives to different stakeholders, we will also implement a fee mechanism that will apply to all transactions. The Electric Coin Company has been working with a team at George Mason University to simulate different fee structures and how they could impact the Zcash ecosystem at large. We hope to build on this project and work with both teams to design such a mechanism for ZSAs. As part of the project we want to ensure that all the relevant parties are involved in designing a structure that truly benefits the whole ecosystem. In essence, we will start with two basic methods to explore: Default method - use the existing fee mechanism today with $ZEC, applied to all asset types:fixed fee per transaction, indifferent of asset type
  same for issuance transactions
   Low-hanging fruit - introduce some variability based on different criteria:change fees depending on the type of transaction, but still make it fixed
  change fees based on the number of action descriptions or per KB
   We want to ensure that the fee mechanism fits well within the desired privacy model of indistinguishable transactions. We also believe that the fees should be paid in the native $ZEC token to ensure its value in the ecosystem. In a future proof-of-stake mechanism, there may be different type of “validators” and as such, fees may vary depending on the validating operation being performed (e.g.: verification of proofs vs staking validation). User-focused reference implementation for wallet APIs We plan to provide a reference wallet API implementation for using multiple-assets. Given our experience in product development, we will always aim to design the protocols through that lense, focusing on its usability. Moreover, we hope to work with different wallet providers to ensure the smoothest user experience.

### Requested Grant Amount

- **Amount:**
  1187615.0

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
  1187615.0
- **Compensation justification:**
  The team size may vary from 3-5 people according to the needs of the specific milestone, at a cost of $1,300 per person-day. The budget includes a 10% conservative buffer.
- **Startup funding required:**
  No
- **Total proposed grant value:**
  1187615.0

### Team Members

- **Project Lead:**
  Jonathan Rouach
- **Background:**
  We are QEDIT , the cryptography team that performed the audits for both Sapling and Orchard before they launched into mainnet. We run the ZKProof standardization effort , and we are leading the zkInterface interoperability standard within the DARPA-funded SIEVE program to advance the state-of-the-art of ZKPs. We’ve built the first enterprise-grade private asset transfer solution, extending the Sapling protocol.

### Funding History

- **Previous funding:**
  Yes
- **Previous funding details:**
  This project was already granted, we are just transferring it to this platform. Full proposal in https://forum.zcashcommunity.com/t/a-proposal-for-shielded-assets-zsa-uda-for-defi-on-zcash/40520
- **Other funding sources:**
  No

### Risks and Evaluation

- **Execution risks:**
  We are aware that so far, there have not been other teams (outside of the ECC) building on the core protocol of Zcash. From our experience in building standards, communities and managing consortia of entities with diverse interests, we are ready to work with all the teams involved, and the community, to establish a shared roadmap of development, enabling smooth work and deployment of all the protocol updates. We can see some interesting challenges that could come up, and we will put them upfront to ensure we do not miss any risk. Some of these include: Reducing the risk of code conflicts or lack of integration during development by other teamsmaintain communication with other development teams
  pull / align the codebase often
   Ensure that the deployment of NU6 is properly defined and scoped, not too long after our development. Ensuring the design of the protocol is extensible to and compatible with future updates. Specifically with certain DeFi protocols that the community may want. Ensuring that the design of the MVP is apealing enough to users to increase Zcash adoption. For this, we willuse prototypes / stubs to test usability among the ecosystem
  start testing early before implementation
  work closely with the community
   Ensuring that the solution is financially viable for users (e.g.: high fees and low scalability)
- **Unintended Consequences:**
  Other teams in the Zcash ecosystem may have to take ownership of the maintainability of this code, especially with regards to future code patches and vulnerabilities. In terms of the application, if successful, it means that any Ethereum token may be used with full ZK privacy, something that regulators may look at in unpredictable ways.
- **Evaluation plan:**
  We will publish the PRs and discuss the reviews in public. With the final submission we will also provide benchmarks, especially of the circuit size and proof time. In terms of qualitative, we will analyze the deployment process, from testnet to mainnet and help guide wallet developers into enabling the use of ZSA.

### Project Timeline

- **Project timeline determination:**
  With discussion internally and with the Zcash core teams. Also, from experience in the project so far.

### Milestone 1

- **Amount:**
  141570.0
- **Expected Completion Date:**
  4/15/2022

  - **Deliverables:**
    - Transfer Functionality ZIP: $141,570 (completed and paid 2/18/22)

### Milestone 2

- **Amount:**
  188760.0
- **Expected Completion Date:**
  5/18/2022

  - **Deliverables:**
    - Issuance Mechanism ZIP: $188,760 (completed and paid 5/18/22)

### Milestone 3

- **Amount:**
  235950.0
- **Expected Completion Date:**
  10/21/2022

  - **Deliverables:**
    - Issuance Mechanism Implementation: $235,950 (completed and paid 10/24/22)

### Milestone 4

- **Amount:**
  94380.0
- **Expected Completion Date:**
  11/30/2022

  - **Deliverables:**
    - Fees Structure ZIP

### Additional Milestones

- **Additional Milestones:**
  Yes

### Submission Date

- **Submission Date:**
  2022-11-02 10:35:39

### File Attachments


