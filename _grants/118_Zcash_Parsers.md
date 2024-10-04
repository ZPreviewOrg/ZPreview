---
title: "Zcash Parsers"
status: "Accepted"
amount: "7200.0"
submitter: "[REDACTED] [REDACTED]"
email: "[REDACTED]"
date: "2024-05-13 17:15:24"
project_name: "Zcash Parsers"
summary: "Extend the adoption of Zcash to more platforms by providing parsing libraries in Go"
total_grant_value: "7200.0"
submitter_last_name: "[REDACTED]"
original_title: "Zcash Parsers"
labels:
  - APPROVED
  - GRANT COMPLETE
  - MILESTONE 1: COMPLETE
  - MILESTONE 2: COMPLETE
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
  Kris Nuttycombe
- **Original Title:**
  Zcash Parsers

- **Labels:**
  - APPROVED
  - GRANT COMPLETE
  - MILESTONE 1: COMPLETE
  - MILESTONE 2: COMPLETE

### Project Overview

- **Project Name:**
  Zcash Parsers
- **Last Updated:**
  2024-05-13 17:15:24
- **Sponsorship Request:**
  No
- **Project Image (Public Gallery):**
  Me_1_of_1.jpg
- **Project Summary:**
  Extend the adoption of Zcash to more platforms by providing parsing libraries in Go

### Project Description

- **Overview:**
  Although Zcash has address parsers available in the Rust programming language, several exchanges need a Go implementation of the parsers. In addition, a Kotlin Version has been identified as a need.
- **Proposed solution:**
  I will develop and release a fully tested set of parsing libraries adhering to Zcash requirements in Go and Kotlin languages. These will be useful for exchanges and wallet developers These libraries will parse Tex, Sapling, Orchard, and Universal addresses. Libraries will include packages for F4Jumble algorithms, and Universal address encoding and decoding. In addition in the case of the Kotlin code. Bech32 and Blake2b packages will be included.
- **Solution Format:**
  Public git hub repositories with the appropriate libraries
- **Dependencies:**
  In go lang I am using https://github.com/btcsuite/btcd/ opensource libraries for Bech32m decoding and github.com/gtank/blake2/blake2b library for Blake 2b decoding. My current research is pointing me towards writing these packages myself for the Kotlin port. We will need deep peer review from the Zcash Folks.
- **Technical approach:**
  I will use the existing Rust libraries and Zcash Documentation as the foundation for porting code. Each package will be tested against existing Zcash Test vectors.

### Requested Grant Amount

- **Amount:**
  7200.0

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
  7200.0
- **Compensation justification:**
  Each implementation ( Go and Kotlin ) represents approximately 24 hours of work. I arrived at my figures using a base rate of $150.00/hr.
- **Startup funding required:**
  No
- **Total proposed grant value:**
  7200.0

### Team Members

- **Project Lead:**
  Mark Harris
- **Background:**
  My name is Mark Harris. I have 25 years of experience writing code and leading teams that write code. I consider myself to be technology agnostic and have worked with a large set of modern languages. I have led and participated in several ports of legacy code to modern frameworks.

### Funding History

- **Previous funding:**
  No
- **Other funding sources:**
  No

### Risks and Evaluation

- **Execution risks:**
  Adoption by Binance is the goal for the Go libraries. The availability of the Kotlin Libraries is intended to spur development on other platforms. Crypto seems to be pretty fickle. The biggest potential Obstacle is Crytpo exchanges moving away from supporting Zcash.
- **Unintended Consequences:**
  As the libraries are currently hosted by me, maintenance and management pull requests would fall largely on my shoulders. To mitigate we should move the libraries to Zcash public repos and provide a set of reviewers.
- **Evaluation plan:**
  The number on success metric will be adoption of libraries by the community.

### Project Timeline

- **Project timeline determination:**
  The go libraries are ready for review. I am extrapolating my time out for the Kotlin libraries

### Milestone 1

- **Amount:**
  3600.0
- **Expected Completion Date:**
  5/15/2024

  - **Deliverables:**
    - Go language Libraries

### Milestone 2

- **Amount:**
  3600.0
- **Expected Completion Date:**
  5/24/2024

  - **Deliverables:**
    - Kotlin libraries

### Submission Date

- **Submission Date:**
  2024-05-13 17:15:24

### File Attachments


