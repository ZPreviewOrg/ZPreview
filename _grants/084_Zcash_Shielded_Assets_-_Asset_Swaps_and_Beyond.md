---
title: "Zcash Shielded Assets - Asset Swaps and Beyond"
status: "Accepted"
amount: "1800000.0"
submitter: "[REDACTED] [REDACTED]"
email: "[REDACTED]"
date: "2023-05-02 11:22:57"
project_name: "Zcash Shielded Assets - Asset Swaps and Beyond"
summary: "ZSA - Asset Swaps and Beyond"
total_grant_value: "1800000.0"
submitter_last_name: "[REDACTED]"
original_title: "Zcash Shielded Assets - Asset Swaps and Beyond"
labels:
  - APPROVED
  - MILESTONE 1: COMPLETE
  - MILESTONE 10: COMPLETE
  - MILESTONE 11: COMPLETE
  - MILESTONE 6: COMPLETE
  - MILESTONE 7: COMPLETE
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
  We have previously been funded through this program.
- **Original Title:**
  Zcash Shielded Assets - Asset Swaps and Beyond

- **Labels:**
  - APPROVED
  - MILESTONE 1: COMPLETE
  - MILESTONE 10: COMPLETE
  - MILESTONE 11: COMPLETE
  - MILESTONE 6: COMPLETE
  - MILESTONE 7: COMPLETE
  - Start Up Funding COMPLETE

### Project Overview

- **Project Name:**
  Zcash Shielded Assets - Asset Swaps and Beyond
- **Last Updated:**
  2024-05-30 20:18:26
- **Sponsorship Request:**
  No
- **Project Image (Public Gallery):**
  5b50bb22-4b9d-4b9d-8d41-38a81d1ebe8a.png
- **Project Summary:**
  ZSA - Asset Swaps and Beyond

### Project Description

- **Overview:**
  The QEDIT team has been working to enable a multi-asset Zcash ecosystem via the ZSA project. Over the course of the last year, we have implemented the core ZSA protocol on our own forks of the zcash , orchard , and librustzcash repositories. With these forks we were able to develop efficiently, experiment rapidly, validate our implementations, and iterate, thereby stabilizing a design. To make ZSA useful for the ecosystem, we now need to get the ZSA protocol out to the community. We want for more devs and users to try it out, play with the new capabilities on a testnet, and provide us with feedback. In parallel to these tests, we propose to add basic functionalities to ZSA, with the objective of a wider adoption of the Zcash ecosystem as the future of internet money, and a better connection to the wider crypto ecosystem. We now have a more clear roadmap for 2023 and beyond, detailing QEDIT's continued commitment to the Zcash ecosystem. In this proposal, here is what we plan to develop and deliver: Enabling ZSAs on the Zcash main-net : We have implemented the core protocol, including RPC commands for issuing and transferring shielded custom assets. Although this is sufficient for rapid development, we aim to quickly iterate and update the protocol to reduce the barriers for users to try out these new features in the wider ecosystem. There needs to be a seamless integration of the ZSA protocol with other developments to the Orchard protocol that have been progressing in parallel over the past year. Additionally, an external security audit is required before the integration can be deployed on the Zcash mainnet. Adding Atomic Swaps and Additional Features for Exchange Compatibility : Our goal is to cement Zcash as the go-to ecosystem for privacy-respecting finance on the internet. As it stands, the ZSA protocol has the functionality to issue new Custom Assets, and to transfer those Assets in a shielded manner within transactions. These are the initial steps necessary for Zcash to allow its users to perform a wider variety of transactions. Full support for decentralized finance would require additional features that build on top of our core work on Shielded Assets. One such feature is the support for Atomic Swaps . Atomic Swaps would simplify the process for users to perform market-like transactions without the need for trust between parties or in a third party. This ease, coupled with the privacy guaranteed by Zcash, would help onboard more users and lead to knock-on benefits to existing ZEC and ZSA users from the increased traffic and demand for ZEC. Atomic Swaps are an existing feature on other blockchains like Ethereum, and including them has the potential to significantly increase the demand for ZEC and the entire ecosystem. We also want to keep it easy to onboard new adopters of Zcash. One way is by making it easier for them to use fiat currency or other cryptocurrencies to buy ZEC and bridge Assets through major exchanges, that is, simplifying the purchase of ZEC. Most major exchanges like Coinbase, and Kraken have requirements before allowing for the transfer of fiat to crypto. To support this, Zcash would benefit from added control over incoming transactions, and other features for compatibility like the option to include masked sender information while interacting with exchanges.
- **Proposed solution:**
  Steps to e nabling ZSAs in Zcash main-net ZSA-specific Testnet launch Giving users access to these exciting developments would be best achieved through the setup and deployment of a Testnet that supports the ZSA protocol. Users could then directly connect to this Testnet to experiment with the issuance and transfer of new Assets, and test out the new and modified RPC commands. The development of a block explorer would allow for additional information to be studied by users, and will also help in gathering better metrics for analyses. Integrating the ZSA protocol into NU6 We are currently backporting our changes for the ZSA protocol, including backward compatibility for Orchard notes, into the Orchard protocol as a first step towards integration. We will follow a similar process for integrating other developments as part of NU6. The external security audit will be facilitated by providing auditors with an easy setup, as well as support and clarifications as needed. We will also review the initial findings with the audit team. Support for Asset Swaps Swaps are a basic feature for expanding the ecosystem to allow for transactions with multiple assets in a trustless manner. The core ZSA protocol allows for a user to transfer an Asset to another user, but this does not include the context for these transfers — how was the recipient located, was any compensation provided to the sender for sending the Asset, and so on. Our feature would allow users to swap different amounts of different Assets with each other without the need for any centralization or trust in any third party, and also with the guarantee that either both the transfers occur successfully, or neither does. There are two kinds of swaps to consider: Closed-recipient swaps 
  These are when the two parties locate each other and decide on the details of the transfer off-chain. Only the actual simultaneous transfer of assets occurs on-chain. Open-recipient swaps 
  These are when a party has an idea of which Asset they want to exchange for how much of another Asset, but does not have a recipient fixed. The swap will publish such open “offers”, and when a matching offer comes along, it will be matched and the swap will be completed similar to the closed-recipient case. We believe that there would be a significant demand for Asset Swap capabilities over ZSAs immediately after the deployment of ZSAs — therefore we propose to develop the feature in a manner that would allow it to deploy soon after NU6. This initial feature would be a “no-frills” version that would have the values and types of Assets being swapped publicly available for the miner to match offers easily. In parallel, we would work towards augmenting the “no-frills” version to include added privacy in the form of confidentiality of amounts and types of Assets transferred. Compatibility with Exchanges Greater Control over Transactions The proliferation of custom assets would come with a preference for users to be able to refuse any assets they are not interested in receiving, such as spammy airdrops or “scamcoin” transfers. This would involve the recipient having the option to refuse any Asset sent to them over the blockchain, after which the sender receives the Asset back (less some fees for the blockchain usage). The forms of control we consider are: accept incoming assets by default 
  This means an explicit refusal action to reject incoming transactions. This is the most in line with the current status quo. refuse incoming assets by default 
  This requires an explicit acceptance action to receive the asset. opt-in for certain forms of transactions 
  This allows for users to allow by default any incoming transactions of certain Assets, which is a less cumbersome option than requiring explicit approval for every transaction. Enabling ZSA users to interact with Exchanges As the Zcash ecosystem becomes more commonly used as the means of performing transactions over the internet, there will need to be greater connectivity with exchanges to allow users to exchange fiat currency for ZEC or Custom Assets. These exchanges would sometimes come with compliance and travel rule requirements. To allow for this, we would augment the protocol to allow for the optional inclusion of masked information about the sender of funds in a way that preserves privacy to the extent possible.
- **Solution Format:**
  Enabling ZSAs in Zcash main-net Testnet launch This will include the setup and deployment of a testnet that supports the ZSA protocol. We would construct the network and maintain it for a period of 12 months. We would also provide a block explorer along the lines of zcashblockexplorer.com that supports the ZSA testnet. Integrating the ZSA protocol into NU6: For the integration with NU6 updates, we will be providing updates to the existing ZIPs connected to the ZSA protocol (viz. ZIP-226, ZIP-227, and ZIP-317), along with support and contributions to the future ZIP describing the v6 transaction structure for NU6. For the external security audit, we will be providing binaries for the construction of a node that runs the ZSA protocol, along with support and clarifications for the auditing team as necessary. Asset Swaps This will be delivered in the form of new ZIPs for the design of the asset swaps protocol, along with an implementation of the same over the ZSA protocol and the zcashd client. It will be covered in two stages: The “no-frills” version, with the ability to perform swaps over ZSAs, where the value and type of Assets being swapped are public. The augmented version adds privacy features for the confidentiality of the values and types of Assets being swapped. Compatibility with Exchanges We will be studying the features of different Exchanges, to provide an objective view of which exchanges would provide the best features to support ZEC and ZSAs. This will be delivered in the form of new ZIPs for the design of each of the following features, along with an implementation of the same for the ZSA protocol and the zcashd client: Control over transactions Enabling ZSA users to interact with Exchanges
- **Dependencies:**
  The security audit will need to be performed by an independent external team. There will also be dependence on ECC for joint work with them toward the NU6 integration of the ZSA protocol.
- **Technical approach:**
  In this proposal, we do not aim to provide the exact, unilateral details of how the features will be designed or implemented. Our goal is to give an intuition of why we believe that this project can be done and to collect feedback and input from the community on these topics for optimal execution. The broad aspects that we need to keep in mind while developing these features are: The core cryptographic protocol design, specification, and implementation Changes to the proof circuit Interface with blockchain components such as consensus rules Testnet A testnet phase is an important part of the process of getting the ZSA protocol deployed on the Zcash main-net. It would provide a “sandbox” to try out various aspects of the new protocol. The audit team would also be able to take advantage of it to try out different features during their review. Any issues that arise would help iron out inconsistencies and improve performance so that the final deployment is seamless. The approach we would take to achieve this is outlined below: We would start by building and compiling the ZSA-specific zcashd binaries. The next step would be to get a local testnet up and running. We plan to do this by using the testnet-in-a-box methods to run a few nodes together and confirm that they are able to successfully communicate with each other to perform ZSA protocol features like issuance and Asset transfer. At this point, we will be able to identify any gaps or bottlenecks that might exist, which we can cycle back as feedback to the protocol development team to discuss and sort out. As any wrinkles are being ironed out, we will begin the planning of the open testnet, and deciding what customizations we would use for this independent testnet. For example, decisions would need to be taken about whether to use a fresh genesis block versus using an existing one, tweaking the DNS seeder to have awareness of the requisite nodes, and picking any prefixes, constants, and other parameters. We will then deploy the testnet with ZSA protocol support, along with a public call to join the testnet so that we can test the robustness to scaling up to a larger traffic flow. There would be regular updates made to the testnet with updates made based on the analysis of the data. Public binaries would be provided for these updates. Once the testnet is deployed, we will perform maintenance and debug any issues that arise. As necessary, we will perform rollbacks of the testnet, though of course in a transparent manner with notice via public channels so as not to spook testnet participants. This phase would continue for 6-12 months, with the integration targeted for NU6. Once the testnet is operational, we will also provide a block explorer for this testnet, which will allow developers and users alike to study the blockchain and how the transactions are validated and interact with the chain. This block explorer will be active for the duration of the testnet, and will be open source, so it can be repurposed for use subsequently. Asset Swaps There are a number of interesting questions we need to consider while developing Asset Swaps for Zcash. If we consider a Swap between two parties, we must consider repercussions of, and possible mitigations for, the “free option” that becomes available to the party that performs the last step of the protocol. That is, it is possible for that party to abort the protocol at this last step if the Swap is no longer beneficial for it. Since the “exchange rates” of different Assets are dynamically changing, we would need to provide a mechanism for time-limiting Swaps. This mechanism would also reduce freezing up of Assets due to their being locked up in Swaps that have not been completed. At the same time, some time window would need to be provided in order to find a matching Swap, for example. We would need to balance the length of window based on these considerations. The basic notion of an Asset Swap would involve two parties who already have an idea of what Assets they want to Swap decided off-chain (like an over-the-counter transaction). However, we would be able to get much closer to market-like capabilities by allowing for Swaps to occur by matching parties’ Swap offers together (without the parties having found each other ahead of time). This brings up additional considerations, such as who performs the matching of the offers? Privacy considerations would center around the information revealed to the matching party. The simpler notion would involve the matching party learning the amounts and types of Assets being swapped, while a more advanced notion would have these details remaining confidential even to the matching party. We would also require a fee mechanism that maintains fairness to all users, and disincentivizes parties from flooding the network with spam Swap offers that are unlikely to be matched. Swaps would be occurring on top of the ZSA Transfer protocol, and therefore the fees would also need to mesh with the fees for the transfers. There would be changes required to the Note structure to allow for Asset Swaps. Our priority would be for changes to be minimal, and to reuse existing cryptography and structures from the Zcash ecosystem in order to allow for more robust security analyses and make full use of the development that has already been done in the ecosystem. Closed-recipient Asset Swaps This is the basic functionality, where the recipients and exchange rate are assumed to be known ahead of time. Note that this automatically makes the use case less general than the open-recipient setting. One technique to achieve this could make use of the ZSA transfer protocol along with the support for multi-signatures (via FROST) that is also a part of NU6. Open-recipient Asset Swaps There are two parts to this more general functionality, the matching of offers, followed by the actual swap once a pair of matching offers have been found. Protocols for achieving atomic swaps in a similar manner have been suggested, such as Zswap for the Sapling protocol, and SwapCT for the Monero protocol. 
   Swap Orders 
  In our proposal, a party who wants to effect a Swap sends a Swap Order transaction. This Order contains the following trade information: Type and value of the proposed Asset Type and value of the desired Asset A time limit (maximum eligible block) The party also sends the randomness used to create the input and output value commitments, which the matcher will use to generate a binding signature for a Swap Bundle. 
   Matching Orders The order-matching is done by a specific “transaction matcher” based on the orders they have received from the parties. The matcher needs to find two Swap Orders where the values and types of proposed and desired Assets exactly balance out and bind the two together. At the moment, our proposal only works for exact matches of Asset types and values. 
   Security For a Swap Order, the party creates a zero-knowledge proof that proves various conditions hold except with negligible probability (just as in an Orchard transaction). In addition to these proofs, the miner creates a binding signature for the entire Swap Bundle, using the asset types and values provided by the traders, and the value commitment randomness. This signature proves that the inputs and outputs are balanced per type. Since both the zero-knowledge proofs and the binding signature are existing parts of the Orchard protocol, we are able to reuse critical cryptographic components to add the Swap functionality. Compatibility with Exchanges Greater control over transactions 
   The status quo in Zcash is that funds simply appear in the user's wallet once they are sent by a sender. We aim to give users more control over the transactions they allow into their wallets. The two forms of control, as mentioned above, are: Accept-by-default Refuse-by-default Opt-in Enabling interaction with Exchanges We want to understand the requirements of various popular exchanges such as Gemini, Coinbase, and Kraken to characterize what information would need to be provided. A simple example of a feature we propose to add here would be to add a form of sender identity to a note. The simple way to do so would be to augment the memo field to include a standard format for the sender's identity. Since the memo field is encrypted such that it can only be read by the recipient (aka the exchange), this does not reveal publicly any of the sender's information, it just provides the information to the exchange. This can be combined with the transaction control techniques described above to allow exchanges to refuse incoming transactions that do not satisfy their requirements.

### Requested Grant Amount

- **Amount:**
  1800000.0

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
  1800000.0
- **Compensation justification:**
  The expected budget is roughly $150k per month of work, covering a team of about 8-9 engineers and contributors.
- **Startup funding required:**
  Yes
- **Startup funding explanation:**
  In order for us to plan for the staffing of engineers, we kindly ask if you could fund 6 months upon approval. That is, USD150k * 6 = USD 900k. We suggest that this sum be proportionately subtracted from each milestone below. The payments are split into two: First payment upon approval Second payment one month later
- **Startup funding amount:**
  900000.0
- **Total proposed grant value:**
  1800000.0

### Team Members

- **Project Lead:**
  QEDIT
- **Background:**
  We are  QEDIT , the cryptography team that has been working on the Zcash Shielded Assets (ZSA) capabilities. Previously we performed the audits for both  Sapling  and  Orchard  before they launched into main-net. We run the  ZKProof.org standardization effort , and we are leading the  zkInterface interoperability standard  within the DARPA-funded  SIEVE program  to advance the state-of-the-art of ZKPs.

### Funding History

- **Previous funding:**
  Yes
- **Previous funding details:**
  QEDIT has been working on the design and implementation of Zcash Shielded Assets , which allows for the issuance of Custom Assets and the transfer of these Assets on the Zcash blockchain.
- **Other funding sources:**
  No

### Risks and Evaluation

- **Execution risks:**
  As with other major changes to the core protocol, we will have to be aware of code conflicts with other parallel development efforts. Another relevant concern will be the time taken for development. The addition of some of these features (such as Asset Swaps) will be something that would significantly enhance the usage of shielded Assets on the Zcash ecosystem, and therefore is something that should be incorporated very soon after the launch of ZSAs. In such a case, we might need to allow quickly releasing the ability to perform such swaps and start off with a product that scales up to the maximum level of privacy over some iterations.
- **Unintended Consequences:**
  Asset Swaps This functionality adds complexity to the system, which could make the adoption curve steeper for users, as well as make it more challenging to maintain. It will be important to have an interface that is intuitive and simple for users. If asset swaps over ZSAs achieve runaway popularity, they could load to congestion on the blockchain. This would have to be handled via an appropriate fee mechanism that is fair for all users. On the other hand, if asset swaps do not achieve much traction, there might not be counterparties ready to swap Assets. The presence of unmatched orders would lead to unnecessary tying up of Assets. The presence of a time limit for matching will help mitigate this. The increased interoperability that Asset Swaps allow for can have the downside of increased price volatility. Exchange Compatibility Some of the features that help integrate better with exchanges could be considered to be a weakening of privacy features. Privacy being undermined would be a concern for most users, however, we reiterate that these are opt-in features. The ability to refuse transactions could allow for new attack techniques that make use of the requirement for approval or refusal to slow down the network.
- **Evaluation plan:**
  We are providing a detailed milestone list along with this proposal. For each milestone, we will provide a community forum post along with links to the appropriate deliverable (usually pull requests to Github repositories). There might be some adjustments of milestones as the design and implementation get discussed, which we will communicate clearly if required. For the testnet, we would also be launching the block explorer, which would provide quantitative metrics about the performance of the testnet.

### Project Timeline

- **Project timeline determination:**
  Based on internal discussions and discussions with the Zcash core teams and grants committee. Also, from experience in the project so far, and work done on the Zcash Shielded Assets project over the last year.

### Milestone 1

- **Amount:**
  40000.0
- **Expected Completion Date:**
  4/1/2024

  - **Deliverables:**
    - Testnet infra and manifest setup

### Milestone 2

- **Amount:**
  25000.0
- **Expected Completion Date:**
  3/1/2024

  - **Deliverables:**
    - ZSA Transaction Testing for Zebra Implementation PR

### Milestone 3

- **Amount:**
  40000.0
- **Expected Completion Date:**
  12/31/2024

  - **Deliverables:**
    - Testnet on-going support

### Milestone 4

- **Amount:**
  105000.0
- **Expected Completion Date:**
  7/1/2024

  - **Deliverables:**
    - Moved to Milesotne 10, Deliverable 10.1, reduced Milestone 4 by $100,000
    - NU6 integration - ZSA updates for NU6 freeze

### Additional Milestones

- **Additional Milestones:**
  Yes

### Submission Date

- **Submission Date:**
  2023-05-02 11:22:57

### File Attachments


