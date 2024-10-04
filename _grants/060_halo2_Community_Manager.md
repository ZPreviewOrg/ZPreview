---
title: "halo2 Community Manager"
status: "Accepted"
amount: "50400.0"
submitter: "[REDACTED] [REDACTED]"
email: "[REDACTED]"
date: "2023-01-13 08:08:16"
project_name: "halo2 Community Manager"
summary: "Contributing to a more robust, modular, and feature-rich halo2 library by organising review and maintainence of external contributions."
total_grant_value: "50400.0"
submitter_last_name: "[REDACTED]"
original_title: "halo2 Community Manager"
labels:
  - APPLICATION WITHDRAWN
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
  Through my engagement as an ECC employee.
- **Original Title:**
  halo2 Community Manager

- **Labels:**
  - APPLICATION WITHDRAWN

### Project Overview

- **Project Name:**
  halo2 Community Manager
- **Last Updated:**
  2023-01-13 08:08:16
- **Sponsorship Request:**
  No
- **Project Image (Public Gallery):**
  Screenshot_2023-01-13_at_6.57.27_AM.png
- **Project Summary:**
  Contributing to a more robust, modular, and feature-rich halo2 library by organising review and maintainence of external contributions.

### Project Description

- **Overview:**
  The halo2 library, authored by the ECC team, has been widely adopted by projects such as zkEVM community edition, zKonduit's, ezkl, and Axiom. External teams have built many useful features, ranging from low-level proof system changes, to optimisations and API extensions, e.g.: dynamic lookup tables (zcash/halo2#660), multi-phase circuits (zcash/halo2#593), and polynomial commitment scheme abstraction. Many of these features are not directly used in the zcash project, but are widely useful in a variety of applications: as such, they are often submitted for inclusion upstream. However, reviewing pull requests and maintaining community reviewer/maintainer groups is a significant overhead in addition to the ECC team's other responsibilities. Maintaining an active
  ecosystem around halo2 would benefit the zcash project as: more eyes on the code increases the probability of surfacing edge cases, bugs, and security issues; industry-wide standardisation and benchmarking efforts will be more likely to include the halo2 library; a more modular and feature-rich halo2 library could make it easier to support future upgrades and extensions of the zcash protocol.
- **Proposed solution:**
  A halo2 community manager would contribute reviews, organise processes for external review and maintenance, and provide support to external teams exploring new features.
- **Solution Format:**
  1. Document the review policy for the halo2 repository (adapted from zcash/halo2#708 ) : Currently, the halo2 repository follows ECC's review policy for code that ends up in zcashd (as zcash/halo2 is a dependency of it), which is designed around "levels of bug impact". These are centred around reviews from ECC engineers and can require up to three reviews (for PRs that alter consensus rules). A compatible review policy for halo2 should be formalised and documented in the Halo 2 book. In particular, assuming a "nightly -> beta -> stable" feature workflow from zcash/halo2#707 , the review policy should be equivalent to the ECC review policy for any code landing in (or being moved to) the stable feature set, but could be weaker for experimental features targeting nightly . 2. Contribute reviews and maintain a workflow for external reviewers (adapted from zcash/halo2#709 ) : Since many external pull requests are in use, or will be used, mainly by projects outside of the zcash GitHub org, we should enable these stakeholders to contribute reviews. This will also lighten the review load of the ECC team, since external reviews would count toward the repo's review policy. This milestone involves setting up and maintaining a workflow for external reviewers to "sign up" for contributing reviews. Some possible workflows include: setting up a bot, having a GitHub team with permissions scoped for review, and having PR delegates along with a Discord channel for coordination. The halo2 community manager will also contribute reviews. 3. Administer a workflow for 'code maintainers' (adapted from zcash/halo2#710 ) : There is a clear desire for a wide set of new features to be upstreamed into the halo2 repository or newly developed for it. Some of those features can be developed orthogonally, but many will have some level of interaction with each other. Additionally, while several of the proposed new features are generally useful, others have more targeted use cases that ECC in particular does not have the resources to maintain on behalf of the community. A workflow for defining "code maintainers" should be established, to delegate responsibility for maintenance of various sub-components within the repository. This would ease the overall maintenance burden, and make feature inclusion more likely overall (though still subject to analysis with regard to the overall UX of the repository's crates). The halo2 community manager will play an active role in delegating reviews.
- **Dependencies:**
  This project involves liaising with the ECC core maintainers as well as maintainers of long-lived forks, such as halo2-ce .
- **Technical approach:**
  See previous section.

### Requested Grant Amount

- **Amount:**
  50400.0

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
  50400.0
- **Compensation justification:**
  The estimated time for this role is 14 hours/week, at a rate of 75 USD/hour. This works out to 56 hours/month at a cost of 4,200 USD/month, for a total commitment of 50,400 USD over a year.
- **Startup funding required:**
  No
- **Total proposed grant value:**
  50400.0

### Team Members

- **Project Lead:**
  Ying Tong
- **Background:**
  Ying Tong is one of the authors and maintainers of the halo2 library. She was previously an ECC employee and also liaises regularly with external teams. She helped to run 0xPARC's " Halo 2 Learning Group " and "Halo 2 Working Group". This is her halo2 contribution history .

### Funding History

- **Previous funding:**
  No
- **Other funding sources:**
  No

### Risks and Evaluation

- **Execution risks:**
  Features involving large refactorings may interfere with each other and cause conflicts. In this case, the simple "nightly -> beta -> stable" feature flagging may be insufficient or lead to large amounts of code duplication. We may eventually have to explore a branching approach to handle such features.
- **Unintended Consequences:**
  Since the external contributor workflow allows for features to be developed in-situ, experimental features will be introduced into the codebase (behind feature flags). Sufficient safeguards and documentation must be put in place to prevent unintentional use of these features in production.
   Downstream consumers of unstable features must also be prepared for backward-incompatible changes.
- **Evaluation plan:**
  As specified in the previous sections, the deliverables of this proposal include the documentation of review policies, external reviewer workflow, and code maintainer workflow. In addition, the halo2 community manager will: help organise biweekly "Halo 2 Developer Calls" involving the ECC team and the community; provide support in the "Halo 2 Ecosystem" Discord; and participate in external community calls (e.g. halo2-ce's biweekly call)

### Project Timeline

- **Project timeline determination:**
  This proposal is scoped to a 12-month period, and should be re-reviewed for renewal or possible restructuring at the end of this period.

### Milestone 1

- **Amount:**
  0.0
- **Expected Completion Date:**
  1/31/2023

  - **Deliverables:**
    - Document the review policy for the halo2 repository

### Milestone 2

- **Amount:**
  25200.0
- **Expected Completion Date:**
  1/31/2024

  - **Deliverables:**
    - Contribute reviews and maintain a workflow for external reviewers

### Milestone 3

- **Amount:**
  25200.0
- **Expected Completion Date:**
  1/31/2024

  - **Deliverables:**
    - Administer a workflow for defining 'code maintainers'

### Additional Milestones

- **Additional Milestones:**
  No

### Submission Date

- **Submission Date:**
  2023-01-13 08:08:16

### File Attachments


