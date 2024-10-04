---
title: "Subgroup membership testing on elliptic curves via the Tate pairing"
status: "Declined"
amount: "15000.0"
submitter: "[REDACTED] [REDACTED]"
email: "[REDACTED]"
date: "2022-09-16 13:57:31"
project_name: "Subgroup membership testing on elliptic curves via the Tate pairing"
summary: "Implementing the new subgroup membership test for the elliptic curve Jubjub"
total_grant_value: "15000.0"
submitter_last_name: "[REDACTED]"
original_title: "Subgroup membership testing on elliptic curves via the Tate pairing"
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
  Internet
- **Original Title:**
  Subgroup membership testing on elliptic curves via the Tate pairing

- **Labels:**
  - OPEN

### Project Overview

- **Project Name:**
  Subgroup membership testing on elliptic curves via the Tate pairing
- **Last Updated:**
  2022-09-16 13:57:31
- **Sponsorship Request:**
  No
- **Project Image (Public Gallery):**
  IMG_tckdve.jpg
- **Project Summary:**
  Implementing the new subgroup membership test for the elliptic curve Jubjub

### Project Description

- **Overview:**
  Recently, the applicant's article (https://link.springer.com/article/10.1007/s13389-022-00296-9) has been published in the quite prestigious Journal of Cryptographic Engineering. The corresponding free version is available on the web page https://eprint.iacr.org/2022/037. This article explains how to guarantee the membership of a point in the prime-order subgroup of an elliptic curve (over a finite field) satisfying some moderate conditions. For this purpose, we apply the Tate pairing on the curve, however it is not required to be pairing-friendly. Whenever the cofactor is small, the new subgroup test is much more efficient than other known ones, because it needs to compute at most two n-th power residue symbols (with small n) in the basic field. More precisely, the running time of the test is (sub-)quadratic in the bit length of the field size, which is comparable with the Decaf-style technique. The test is relevant, e.g., for the zk-SNARK friendly curve Jubjub proposed by the Zcash research team. The goal of the project is to provide a low-level implementation of the new test.
- **Proposed solution:**
  Developers will use the new subgroup check in their implementations of cryptographic protocols.
- **Solution Format:**
  Code in Rust of the new subgroup check for the Jubjub curve.
- **Dependencies:**
  This is not applicable to the current project.
- **Technical approach:**
  In two words, the new subgroup test is based on the Tate pairing and on (sub)-quadratic Euclidean-type algorithms of computing the power residue symbol. See details in Section 2 of the applicant's article.

### Requested Grant Amount

- **Amount:**
  15000.0

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
  0.0
- **Compensation justification:**
  N/A
- **Startup funding required:**
  No
- **Total proposed grant value:**
  15000.0

### Team Members

- **Project Lead:**
  Dimitri Koshelev
- **Background:**
  The applicant has a solid background in elliptic cryptography. This is confirmed by numerous articles in quite prestigious international scientific journals such as IEEE Transactions on Information Theory, Finite Fields and Their Applications Cryptography and Communications, Designs, Codes and Cryptography, Journal of Cryptographic Engineering, SIAM Journal on Applied Algebra and Geometry. And even more eprints are currently under review in other famous journals on applied mathematics and cryptography. Earlier D. Koshelev won grants of several blockchain organizations, namely Ethereum Research (https://blog.ethereum.org/2021/11/04/esp-allocation-update-q2-2021) and Web 3 Foundation (https://github.com/w3f/Grants-Program/blob/master/docs/accepted_grant_applications.md#surfing_woman-wave-13---first-quarter-2022). These grants were dedicated to research and development of hashing to elliptic curves. On this topic there is a draft (https://datatracker.ietf.org/doc/draft-irtf-cfrg-hash-to-curve/), which is expected to be standardized by CFRG (Crypto Forum Research Group) in the near future, because it is necessary in many modern protocols. More precisely, the applicant invented a series of indifferentiable hash functions to elliptic curves of j-invariants 0, 1728. One of them (https://link.springer.com/article/10.1007/s10623-022-01012-8) is relevant for the curve BLS12-381, which is a de facto standard in today's real-world pairing-based cryptography. The purpose of the W3F grant was implementing the new hash function. D. Koshelev prepared a reference implementation in Sage (https://github.com/dishport/Indifferentiable-hashing-to-ordinary-elliptic-curves-of-j-0-with-the-cost-of-one-exponentiation) and then his colleague did an efficient Rust implementation (https://github.com/zhenfeizhang/indifferentiable-hashing). The additional team member F. Sakharov plays the role of a Rust developer in the current project. He has four years of Rust experience working as a Software Engineer at Parity Technologies (https://www.parity.io/). And he worked as a Systems Software Engineer in the informational security domain before that. Further information about professional achievements of D. Koshelev and F. Sakharov can be found on the web pages https://www.linkedin.com/in/dimitri-koshelev/ https://www.researchgate.net/profile/Dimitri-Koshelev and https://www.linkedin.com/in/fedor-sakharov/ https://github.com/montekki respectively.

### Funding History

- **Previous funding:**
  No
- **Other funding sources:**
  No

### Risks and Evaluation

- **Execution risks:**
  There are no risks and obstacles, because the new subgroup membership test has already been invented and published.
- **Unintended Consequences:**
  This is not applicable to the current project.
- **Evaluation plan:**
  Comparison of the running time of the new subgroup check and old ones. In order to provide a correct comparison we will use the ecosystem arkworks (https://github.com/arkworks-rs). The latter already contains some subgroup tests.

### Project Timeline

- **Project timeline determination:**
  By means of a comparison with other similar projects.

### Milestone 1

- **Amount:**
  10000.0
- **Expected Completion Date:**
  12/31/2022

  - **Deliverables:**
    - A reference implementation of the new subgroup membership test for Jubjub in Sage or Magma

### Milestone 2

- **Amount:**
  5000.0
- **Expected Completion Date:**
  3/31/2023

  - **Deliverables:**
    - A fast implementation of the new subgroup membership test for Jubjub in Rust

### Submission Date

- **Submission Date:**
  2022-09-16 13:57:31

### File Attachments

- **Article.pdf**: [Additional documentation]

