---
title: "halo2 docs improvement"
status: "Accepted"
amount: "24000.0"
submitter: "[REDACTED] [REDACTED]"
email: "[REDACTED]"
date: "2023-04-13 18:59:52"
project_name: "halo2 docs improvement"
summary: "halo2 proving system and APIs are gaining wide adoption. The halo2 book is a first point of reference and could be improved."
total_grant_value: "24000.0"
submitter_last_name: "[REDACTED]"
original_title: "halo2 docs improvement"
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
  Friends and colleagues
- **Original Title:**
  halo2 docs improvement

- **Labels:**
  - APPROVED
  - Cancelled

### Project Overview

- **Project Name:**
  halo2 docs improvement
- **Last Updated:**
  2023-04-13 18:59:52
- **Sponsorship Request:**
  No
- **Project Image (Public Gallery):**
  logo_square.jpeg
- **Project Summary:**
  halo2 proving system and APIs are gaining wide adoption. The halo2 book is a first point of reference and could be improved.

### Project Description

- **Overview:**
  There are a couple of sections that are missing a full write-up in the halo2 book, namely: - 2.3 Lookup tables (https://zcash.github.io/halo2/user/lookup-tables.html) - 2.4 Gadgets (https://zcash.github.io/halo2/user/gadgets.html) Some other sub-sections contain TODOs, and I'd like to tackle a couple of these too: - 5.3 Cryptographic Groups: Multi-scalar multiplication, incl. Pippenger's algorithm - 5.4 Elliptic Curves, information about Pallas/Vesta as well as hashing to curves For the scope of this grant I will not tackle any further TODOs, but upon successful completion of the grant I'd be happy to apply for a follow-up to iron out the rest.
- **Proposed solution:**
  I'm planning to fill the missing sections of halo2 book to match the style of the rest of the docs, including worked examples where appropriate.
- **Solution Format:**
  PR to https://github.com/zcash/halo2/
- **Dependencies:**
  PR to be reviewed by halo2 repository maintainers.
- **Technical approach:**
  I think writing user documentation is self-explanatory.

### Requested Grant Amount

- **Amount:**
  24000.0

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
  24000.0
- **Compensation justification:**
  A total of 3 milestones, each expected to take about two week of full time work, at a rate of $100/h = 3 * 2 * 40 * 100 = $24,000
- **Startup funding required:**
  No
- **Total proposed grant value:**
  24000.0

### Team Members

- **Project Lead:**
  Hungry Cats Studio
- **Background:**
  I'm Marcin, aka mmagician, core maintainer of arkworks cryptographic libraries: https://github.com/arkworks-rs/algebra/commits?author=mmagician The contributions to arkworks include working on API refactors, features and most relevant for this proposal: documentation and examples. I also work with 2 other team members who have background in mathematics/physics, but are new to cryptography. Depending on internal workload at Hungry Cats Studio, I might share the work for this grant with my team. In that case, all work will be supervised and double-checked by me and PRs co-authored.

### Funding History

- **Previous funding:**
  No
- **Other funding sources:**
  No

### Risks and Evaluation

- **Execution risks:**
  N/A
- **Unintended Consequences:**
  A negative outcome could only be produced by submitting incorrect docs. All care will be taken to ensure correctness, and the PR will need review from halo2 repo maintainers before appearing in public docs anyway.
- **Evaluation plan:**
  Successful completion of a milestone will be synonymous with a positive review by the halo2 repository maintainers.

### Project Timeline

- **Project timeline determination:**
  2 weeks per milestone is an estimate of the time needed to deep-dive into the technical aspects of the halo2 sub-components and complete a detailed write-up of the section. Based on experience with writing arkworks code documentation and examples. I've added 1 month+ of buffer from application submission date to allow for Grant review and onboarding.

### Milestone 1

- **Amount:**
  8000.0
- **Expected Completion Date:**
  5/31/2023

  - **Deliverables:**
    - User Documentation - Lookup tables docs

### Milestone 2

- **Amount:**
  8000.0
- **Expected Completion Date:**
  6/17/2023

  - **Deliverables:**
    - User Documentation - Gadgets docs

### Milestone 3

- **Amount:**
  8000.0
- **Expected Completion Date:**
  6/30/2023

  - **Deliverables:**
    - Background Material - Cryptographic Groups & Elliptic Curves docs

### Additional Milestones

- **Additional Milestones:**
  No

### Submission Date

- **Submission Date:**
  2023-04-13 18:59:52

### File Attachments


