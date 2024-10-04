---
title: "Tao: Asynchronous Payment channels for stable coins"
status: "Declined"
amount: "25500.0"
submitter: "[REDACTED] [REDACTED]"
email: "[REDACTED]"
date: "2022-04-29 14:15:19"
project_name: "Tao: Asynchronous Payment channels for stable coins"
summary: "\"Tao\" is an innovative payment channel solution that remains secure under network asynchrony and concurrently provides correct incentives."
total_grant_value: "25500.0"
submitter_last_name: "[REDACTED]"
original_title: "Tao: Asynchronous Payment channels for stable coins"
labels:
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
  Declined
- **How did you learn about Zcash Community Grants:**
  from website https://identityreview.com/15-crypto-grants-you-should-know-about/
- **Original Title:**
  Tao: Asynchronous Payment channels for stable coins

- **Labels:**
  - OPEN

### Project Overview

- **Project Name:**
  Tao: Asynchronous Payment channels for stable coins
- **Last Updated:**
  2022-04-29 14:15:19
- **Sponsorship Request:**
  No
- **Project Image (Public Gallery):**
  taologo1.png
- **Project Summary:**
  "Tao" is an innovative payment channel solution that remains secure under network asynchrony and concurrently provides correct incentives.

### Project Description

- **Overview:**
  The public blockchain, such as Ethereum, has the limited transaction throughput associated with the underlying consensus protocol, demanding that every system participant verify and store a replica of the entire history of transactions. Also, blockchain applications require low overhead and cost to be useable, and therefore their transaction costs need to remain low. A bottleneck for this has been on-chain payments, which incur a fee for every transaction. When we require many micro-transactions to be sent, the cost quickly becomes unmanageable. Therefore, off-chain solutions seem promising since they only use the blockchain as a fail-safe mechanism and move the transaction load offline. Any two parties that interact can set up a joint account on the blockchain, a "channel" through which the two parties can transact off-chain, sending money back and forth. Two parties rely on the blockchain as a fail-safe mechanism in disputes. Current proposals, however, require synchrony assumptions to preserve the channel safety, leaking to an adversary the exact amount of time needed to control the network for a successful attack.
- **Proposed solution:**
  We introduce "Tao," an innovative payment channel solution that remains secure under network asynchrony and concurrently provides correct incentives. The core idea is to incorporate the conflict resolution process within the channel by introducing a rational committee of external parties. Hence, if a party wants to close a channel unilaterally, it can only get the committee's approval for the last valid state. Furthermore, to provide sub-second latency, It uses consistent broadcasts to announce updates and close the channel. This lightweight abstraction is powerful enough to preserve safety and liveness to any rational parties. The system will address three challenges: How to achieve the proactive security check without using a single trusted third party to approve every transaction The system will employ a group of validators. If there is a dispute, they will make sure the correct state is the only one available for submission on-chain, regardless of its time to make this final state visible. How to reduce the cost The system will use a lightweight, consistent broadcast protocol to preserve safety and liveness. How to address incentives We employ both rewards and punishment to design the appropriate incentives such that the honest and rational behavior of Validators aligns. At the same time, no synchrony assumptions are required; the sentence of misbehaving Wardens is not conditional on timing assumptions. How to provide regulated environments for fiat currency or stable coins First, the state updates are no longer private but interconnected in a tamper-evident hash-chain. Essentially, the Validators maintain a single hash (constant-size storage cost) which is the head of the hash chain of the state history. Second, to provide accountability for the auditor, we require that the auditor posts the access request on-chain. Only then will the Validators give the auditor the necessary metadata to verify the state history received from the parties of the channel.
- **Solution Format:**
  The final form will be a payment network with the smart contracts that are ready to deploy on the Ethereum network
- **Dependencies:**
  The payment channel has to integrate into the public blockchain
- **Technical approach:**
  Design Algorithm The payment channel consists of three phases: Open, Update, and Close. The smart contract has two functions, Open and Close, that receive the inputs of the protocols and verify that they adhere to the abstractly defined protocols specified below. Typical workflow for a state update. (1) Alice and Bob agree on a new state update. (2) They broadcast that they reached an agreement with the committee (with an associated fee). (3) When the committee replies, each sender executes this update. 📷 1. The Validators commit their identities on the blockchain during the funding transaction of the channel open. 2. Both channel parties agree on a committee of Validators before opening the channel. 3. The channel can only be closed by a transaction published on the blockchain and signed by both parties or one of the parties and a threshold (t) of honest Validators. Thus committee acts as power of attorney for the parties of the channel. 4. Tao employs correct incentives for the t rational Validators to follow the protocol hence it can withstand t = 2f + 1 rational and f Byzantine Validators. Consensus is not necessary for updating transactions, as we only provide guarantees to rational parties (if both parties misbehave, one of them might lose its funds). When a new update state occurs in the channel, the parties run a consistent broadcast protocol (cost of O(n)) with the committee : a) a party announces to each Validator that a state update has occurred. b) This announcement is a monotonically increasing sequence number to guarantee that the new state is the freshest state, signed by both channel parties to signal that they agree. If the consistent broadcast protocol succeeds (t Validators acknowledge reception), this can prove to both parties that the state update is safe. 5. Both parties proceed to the execution of the off-chain state. At the end of the life cycle of a channel, a dispute might occur, leading to the unilateral closing of the channel. The Validator will reply to the party that it can only close at the state represented by the last sequence number. Define a successful closing at the maximum of all proposed states, guaranteeing safety. The closing process is safe because the transactions are already totally ordered and agreed to by the parties of the channel; thus, the committee acts as a shared Phase I Open image Open is the opening of a channel between two parties with three additional parameters: the hashes of the public keys of the Validators of the channel, denoted by V1; V2 ,...., Vn; the threshold t, and a closing fee F. The closing fee will be awarded to the responsive Validators in the last phase, Close, if and only if the channel's closing is done in collaboration with the committee. In this case, the first t Validators that assisted in closing the channel will be rewarded with the amount F=t. In addition, each Validator locks collateral in the BRICK smart contract, which will be claimed by the parties of the channel during phase Close if a Validator misbehaves (e.g., receives a bribe). Phase II: Update and Consistent Broadcast Both algorithms are executed consecutively every time an update occurs when the state of the channel changes. During Update, the channel parties agree on a new state and create an announcement to the committee using Consistent Broadcast. To agree on a new state, both parties sign the hash of the new state. On the other hand, the announcement is the new sequence number signed by both parties of the channel. Furthermore, if a party wants to close the channel unilaterally, the Validators can provide a signature on the stored announcement σWi(M; close). In Protocol 3, each party sends the announcement for every state update to all Validators, including a small update fee for watching the channel. Then, each Validator replies to every party that sent the announcement by signing the announcement. The Validator’s signature can be used later to penalize the Validator .(a party can claim the Validator’s collateral) in case the Validator colludes with a party and signs a previous state to close the channel. Phase III: Close 📷 Both parties collectively sign the freshest state (closing transaction) and publish it on-chain. However, in case a channel party is not responding to new state updates or closing requests, the counterparty can unilaterally close the channel in collaboration with the committee of the channel Incentivizing Honest Behavior The system works without the fees if we assume one honest party and t honest Validators. However, our goal is to have no honest assumptions and instead align rational behavior to honest through incentives. There are three incentive mechanisms : 1) Update Fee (r). The parties establish a one-way channel with each Validator where they send a small payment every time they want a signature for a state update. Note that the update fee is awarded to the Validators at step 1 of Protocol 3. 2) Closing Fee (F). During phase Open (Protocol 1), the parties lock a closing fee F in the channel, which is split only among the first t Validators that participate in Protocol 5. If the channel closes optimistically (Protocol 4), the closing fee returns to the parties. 3) Validator Collateral. During phase Open, each Validator locks collateral at least equal to the amount locked in the channel v divided by f. The collateral is either returned to the Validator at the closing of the channel or claimed by a channel party that provides a proof-of-fraud. A proof-of-fraud consists of two conflicting messages signed by the same Validator: (a) a signature on an announcement on a state update of the channel, (b) a signature on an announcement for closing on a previous state of the Channel ImgImIIIn case, a party submits the closing announcements and at most f proofs-of-fraud, to close the channel we execute a second closing process excluding the Validators that committed fraud. Then, the channel closes in the state with the maximum sequence number of the announcements submitted by a total of t non-excluded Validators.IImg

### Requested Grant Amount

- **Amount:**
  25500.0

### Budget Breakdown

- **Hardware/Software budget:**
  25500.0
- **Hardware/Software justification:**
  Implement the key system components and protocol including : Payment channel Open Pyment channel update and Consistent Broadcast Payment channel Close
- **Services budget:**
  0.0
- **Services justification:**
  N/A
- **Compensation budget:**
  0.0
- **Compensation justification:**
  N/A
- **Startup funding required:**
  No
- **Total proposed grant value:**
  25500.0

### Team Members

- **Project Lead:**
  Tao: Asynchronous Payment channels for stable coins
- **Background:**
  Our team has extensive expertise on multiple levels, from software development to system analysis. With knowledge and skills, we can tackle the challenges and develop solutions in the blockchain technology. Moreover, the natural ability of some of the team members to navigate and predict future technological trends combined with the technical experience and project management skills of other members translates into a clear roadmap.

### Funding History

- **Previous funding:**
  No
- **Other funding sources:**
  No

### Risks and Evaluation

- **Execution risks:**
  The system will address three challenges: How to achieve the proactive security check without using a single trusted third party to approve every transaction The system will employ a group of validators. If there is a dispute, they will make sure the correct state is the only one available for submission on-chain, regardless of its time to make this final state visible. How to reduce the cost The system will use a lightweight, consistent broadcast protocol to preserve safety and liveness. How to address incentives We employ both rewards and punishment to design the appropriate incentives such that the honest and rational behavior of Validators aligns. At the same time, no synchrony assumptions are required; the sentence of misbehaving Wardens is not conditional on timing assumptions. How to provide regulated environments for fiat currency or stable coins First, the state updates are no longer private but interconnected in a tamper-evident hash-chain. Essentially, the Validators maintain a single hash (constant-size storage cost) which is the head of the hash chain of the state history. Second, to provide accountability for the auditor, we require that the auditor posts the access request on-chain. Only then will the Validators give the auditor the necessary metadata to verify the state history received from the parties of the channel.
- **Unintended Consequences:**
  none
- **Evaluation plan:**
  Phase I: Implement the key system components and protocol including : Payment channel Open Pyment channel update and Consistent Broadcast Payment channel Close Estimate development time : Payment channel Open 40 Hrs Pyment channel update and Consistent Broadcast 30 Hrs Payment channel Close 40 Hrs Total : 30 Hrs Phase II System integration and running the workflows on the test environment Estimate Time : 30 Hrs Phase III Final run and performance testing in the pre-production like environment Estimate Time : 30 Hrs Total Estimate Cost The development cost per hour USD $150/Hr Total cost : 110+ 30 + 30 = 170 Hrs * $150/Hr = USD $25,500

### Project Timeline

- **Project timeline determination:**
  According to the process of the code delivery

### Milestone 1

- **Amount:**
  16500.0
- **Expected Completion Date:**
  5/11/2022

  - **Deliverables:**
    - Implement the key system components and protocol including : Payment channel Open  Pyment channel update and Consistent Broadcast Payment channel Close

### Milestone 2

- **Amount:**
  4500.0
- **Expected Completion Date:**
  5/18/2022

  - **Deliverables:**
    - System integration and running the workflows on the test environment

### Milestone 3

- **Amount:**
  4500.0
- **Expected Completion Date:**
  6/1/2022

  - **Deliverables:**
    - Final run and performance testing in the pre-production like environment

### Additional Milestones

- **Additional Milestones:**
  No

### Submission Date

- **Submission Date:**
  2022-04-29 14:15:19

### File Attachments

- **Tao_Asynchronous_Payment_channels_for_stable_coins.pdf**: [Additional documentation]

