---
title: "Proof of Balance"
status: "Accepted"
amount: "40000.0"
submitter: "[REDACTED] [REDACTED]"
email: "[REDACTED]"
date: "2024-01-20 12:31:51"
project_name: "Proof of Balance"
summary: "Prove that you own a certain amount of coins without revealing their history"
total_grant_value: "40000.0"
submitter_last_name: "[REDACTED]"
original_title: "Proof of Balance"
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
  Forums
- **Original Title:**
  Proof of Balance

- **Labels:**
  - APPROVED

### Project Overview

- **Project Name:**
  Proof of Balance
- **Last Updated:**
  2024-02-07 02:15:31
- **Sponsorship Request:**
  No
- **Project Image (Public Gallery):**
  hanh-avatar.jpeg
- **Project Summary:**
  Prove that you own a certain amount of coins without revealing their history

### Project Description

- **Overview:**
  There are several possible applications besides proving your balance: - coin voting - airdrops With this scheme, users can keep their funds shielded at all times. They can opt to use transparent funds too. If used for a vote, one can consider giving more weight to shielded funds. Ex: 1 transparent ZEC = 1 vote, 1 sapling ZEC = 2 votes, 1 orchard ZEC = 3 votes. 
  It is not necessary to move funds before or after "voting".
- **Proposed solution:**
  Let's say you want to organize a coin-weighted vote. Pick a start date/height and an end date/height. Coins must be in the user wallet before the start date and the vote has to be submitted before the end date. Conceptually, the idea is to make a "virtual fork" at the start height. A vote is a transaction that is valid on the fork. That guarantees: - no double spending, i.e. no double voting, - the balance is frozen, i.e. transactions after the start height don't count. - the user has spending authority on these coins - the vote cannot be used to spend on the mainnet Naturally, there is no mining or actual block creation.
- **Solution Format:**
  1. ZIP formalizing the coin balance proof process 1. A package for the organizer. For ex: a repo containing a website template that can be cloned to set up an election 1. A package for developers of clients / voting machines 1. Integration of the previous package in a wallet
- **Dependencies:**
  The ZIP has to be approved by the usual Zcash stakeholders Implementation has no external dependencies
- **Technical approach:**
  https://forum.zcashcommunity.com/t/zec-hldrs-group/45324/4 More information will be provided in the ZIP

### Requested Grant Amount

- **Amount:**
  40000.0

### Budget Breakdown

- **Hardware/Software budget:**
  40000.0
- **Hardware/Software justification:**
  Only the first milestone has been improved by the ZCG. The grant has been edited to reflect this. Note: I have kept the other milestones as a reference for the future proposal.
- **Services budget:**
  0.0
- **Services justification:**
  N/A
- **Compensation budget:**
  40000.0
- **Compensation justification:**
  This is based on the complexity of the tasks and the value it brings to the zcash ecosystem.
- **Startup funding required:**
  No
- **Total proposed grant value:**
  40000.0

### Team Members

- **Project Lead:**
  hanh
- **Background:**
  I am a frequent contributor in the zcash community.

### Funding History

- **Previous funding:**
  Yes
- **Previous funding details:**
  I have received grants for several projects. The most notable one is Ywallet.
- **Other funding sources:**
  No

### Risks and Evaluation

- **Execution risks:**
  Once the ZIP is approved, there should not be any major obstacle
- **Unintended Consequences:**
  None
- **Evaluation plan:**
  I'll run a test voting campaign to demonstrate the process.

### Project Timeline

- **Project timeline determination:**
  There are challenging elements to this project: - the cryptography - the voting protocol - the election site - the clients An end-to-end solution takes time to build.

### Milestone 1

- **Amount:**
  40000.0
- **Expected Completion Date:**
  5/1/2024

  - **Deliverables:**
    - ZIP

### Submission Date

- **Submission Date:**
  2024-01-20 12:31:51

### File Attachments


