---
title: "Implement Orchard"
status: "Declined"
amount: "227500.0"
submitter: "[REDACTED] [REDACTED]"
email: "[REDACTED]"
date: "2022-08-04 20:52:30"
project_name: "Implement Orchard"
summary: "An implementation of the orchard transaction protocol in a Rust library, and user-facing applications that use that library."
total_grant_value: "227500.0"
submitter_last_name: "[REDACTED]"
original_title: "Implement Orchard"
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
  Zancas has been active on forum.zcashcommunity.com since before the inception of ZOMG, other ZingoLabs members have also lurked and interacted dating back to 2018.
- **Original Title:**
  Implement Orchard

- **Labels:**
  - OPEN

### Project Overview

- **Project Name:**
  Implement Orchard
- **Last Updated:**
  2022-08-04 20:52:30
- **Sponsorship Request:**
  No
- **Project Image (Public Gallery):**
  zinglogo.jpg
- **Project Summary:**
  An implementation of the orchard transaction protocol in a Rust library, and user-facing applications that use that library.

### Project Description

- **Overview:**
  The ECC has provided Orchard and related primitives that developers can build upon. Work remains to be done to provide functioning transaction systems based on these primitives. Currently, the only applications that fully support Orchard transactions are `zebrad` and `zcashd`, and therefore, the OS platforms, heavy system requirements, and technical knowledge to build and run these clients are prohibitive for many, many people. ZingoLabs is bringing Orchard transactions to `ligthwalletd` proxy clients, including the two major mobile device platforms.
- **Proposed solution:**
  ZingoLabs is implementing an Orchard/UA transaction management library and applications on top of it.
- **Solution Format:**
  * a library that supports Unified Address/Orchard transaction capabilities. * a command line interface that provides advanced users these capabilities. * a mobile wallet on iOS and Android that provides mobile users with these capabilities. * a testing interface, bringing together zcashd's regtest mode and the cli application.
- **Dependencies:**
  A feature of our approach is that it minimizes dependencies, both externally and internally. By external dependencies we mean other organizations, and by internal dependencies we mean exclusive capabilities (like `App Store Publication Rights`). We are responsible for our own application, so we don't need to depend on non-gatekeeper third parties to offer our work to users. We have multiple key-holders in our organization, so the failure of one key-holder will likewise not prevent us from offering our work to users. We currently depend on GitHub for source management, publication, and collaboration. We depend on gatekeepers at Apple and Google to permit our apps to be published and distributed through their app stores.
- **Technical approach:**
  We forked from zecwallet, which means we are starting with a mostly functional wallet that only needs the addition of Orchard as a new feature. This is a much simpler problem than the construction of a new wallet from scratch, and means that we are going to complete the implementation in months. We are using the existing Sapling and Sprout transaction code as a guideposts, and creating the analogous Orchard logic. Where possible, our code is modular and generic, which facilitates reuse. This means that we are creating abstractions that are generic to domain (Sapling/Orchard[/ZFuture]), implementing standard interfaces, and collecting related functionality in distinct modules. See this module as exemplary: https://github.com/zingolabs/zingolib/blob/dev/lib/src/wallet/traits.rs Our design, consistent with the Unified Address architecture, makes it easy to add hypothetical future transaction protocols [ZFuture]. In concert with the transaction port work that is the Orchard implementation, we are developing tooling that is accelerating our development effort by exposing `zcashd` regtest mode in a lightwalletd-proxy environment (`zingo-cli --regtest`). This tooling is essential to our own effort, and is available for anyone interested in evaluating proxy/`lightwalletd` behavior in a controlled regtest setting. Finally, we are working to upgrade the UI/UX of our application. Upgrades that are already in place: * privacy preserving price checks. * user-facing server (`lightwalletd`) selection. * internationalization. * regtest environment integrated with (available to) mobile app development. * mitigated potentially catastrophic 'send all' button in mobile apps. * more organized help output. Our strategy is to give our future selves as much leverage as possible. If our next project is to re-implement the same orchard transaction system in a different environment, we'll be able to reuse most of the code we're writing now. For example, if our next project to is port our code to a WASM target, we'll have a compatible codebase.

### Requested Grant Amount

- **Amount:**
  227500.0

### Budget Breakdown

- **Hardware/Software budget:**
  0.0
- **Hardware/Software justification:**
  We love open source software and using privacy respecting tools as much as possible. We are using Tor, Tor-Browser, Jitsi, Helix, Matrix/Element, Cryptpad.. currently, all for free. We would like to be able to offer these services and projects ZEC in the future. We have our own development systems, no additional cost should be necessary.
- **Services budget:**
  0.0
- **Services justification:**
  We have some minor costs associated with domain nameservice and hosting, and we would consider running a `lightwalletd` server if the rest of the ecosystem does not provide a highly available and fast instance (currently we are using ZUUL). However, because these costs should be relatively small, we will not include them in this proposal.
- **Compensation budget:**
  227500.0
- **Compensation justification:**
  One quarter-year: 3 full time and 1 half time developer. One quarter = 52 weeks / 4 = 13 weeks. 13 weeks * 40 hours = 520 hours for full time. For half time, 260 hours. Total requested developer time is 1820 hours, at a flat rate of $125 USD / hour = $227,500 total.
- **Startup funding required:**
  No
- **Total proposed grant value:**
  227500.0

### Team Members

- **Project Lead:**
  ZingoLabs
- **Background:**
  ZingoLabs : A collective of tech workers and FOSS enthusiasts, founded in 2018 just after the first Denver Zcash Meetup*. We've had about a dozen people involved with our projects, contributing in some way, but the four current core developers are spotlighted briefly below. *(intro: https://yewtu.be/watch?v=oX6Vesmxgiw - one of our members volunteered to make the videos from that event too!) Zancas : I started writing Python to infer evolutionary histories of microbiomes in 2002. I transitioned from biology to work full time as a software developer in 2011 when I worked at Least Authority Enterprises integrating tahoe-LAFS with AWS's S3. I worked at F5 from 2014-2017 where I wrote what continues to be their most popular open source software, a Python API that provided a fluent-style RESTful interface to the load balancer's web-server. * https://github.com/zancas/f5-common-python Since leaving F5 I've:
  - contributed to Zcash development: * https://github.com/zcash/zcash/pull/5065#pullrequestreview-704554448 * https://github.com/zcash/zcash/pulls?q=is%3Apr+is%3Amerged+author%3Azancas Completed --^ In flight: * https://github.com/zcash/zcash/pulls/zancas - experimented with Zcash interfaces: * https://github.com/zingolabs/zcrpctypegen * https://github.com/zingolabs/zcashrpc I started writing Rust in 2018. Aloearev: I started writing Rust in 2018, with a project to write Zcash-interfacing code in the browser. Since then, I've worked almost exclusively in Rust, mostly on Zcash-related projects, such as https://github.com/zingolabs/zcrpctypegen . I've also contributed to helix ( https://github.com/helix-editor/helix/pulls?q=is%3Apr+author%3Aaloearev ), and updated zingolib (at the time simply known as our fork of zecwallet-lite-cli) to work with NU5 sapling transactions significantly before the canonical fork. Dannasessha : I first started using Bitcoin in 2013. Briefly, I volunteered with Least Authority Enterprises in 2014, and subsequently I worked as a contractor with the (now) ECC in a non-developer role beginning, pre-launch, in 2016. I produced the second video published on ECC's YouTube channel ( https://yewtu.be/watch?v=D6dY-3x3teM) --only after the Genesis Block livestream--and then went on to play an integral role in bringing the Zcash Radiolab episode ( https://radiolab.org/episodes/ceremony) to fruition working with WNYC, with an estimated audience of 1.8 million. In 2018, I joined ZingoLabs and worked on core parts of a project aiming to bring message passing via ZEC shielded transactions' encrypted memo fields to the masses via a browser plugin, largely based around JS, Node, and applied to the browser's DOM. I began writing Rust in earnest in 2020, and since that time have worked mostly with ZingoLabs across several projects and repos, but also contributed to the Vim-inspired modal Helix editor, implemented in Rust ( https://github.com/helix-editor/helix/pull/988) . Prior to my switch to working with Helix-as-IDE, I worked with Lua and composed a Vimscript plugin to support ZEC-backporting-from-BTC in Neovim. I have contributed to testing materials for the excellent code training and mentorship platform Exercism, and also have experience working with CI Pipelines, Docker, infrastructure/system administration, Bash scripting and, oh, I use Arch btw. :) Juanky : I have worked as a developer, analyst, and project manager for more than 20 years within various companies (for 6 years) and at the largest university in Spain (for 16 years), on a range of platforms and technologies. A small sample would be: Clipper, .NET, ASP, Cobol, RPG, Java, Spring, C, C++ Builder, JavaScript, VBScript, Natural, dBase, Adabas, several Oracle tools, Db2, etc... I started working with ReactJS and React Native in 2018 when I moved to the USA. Since then, I've worked in several projects as a Web Developer with the above technologies along with Redux, HTML 5, CSS 3, and SASS. I also built 2 Apps for both iOS and Android that detected different species of fish/crabs in photos and videos using JavaScript, React, React Native, Python, Amazon AWS, S3, ECS, SageMaker, Docker, Express, TensorFlow, Pre-Trained Models, and MongoDB... Right now I'm working as a part-time front-end engineer, but I would like to deepen my involvement with Zcash after working with ZingoLabs for the last four or so months.

### Funding History

- **Previous funding:**
  No
- **Other funding sources:**
  No

### Risks and Evaluation

- **Execution risks:**
  We are focused on immediately realizable solutions to a well-understood issue. Our timeline is short, our coordination burden is low, and our deliverable is concrete. This means that even in highly unpredictable environments we have an excellent chance of success. The area where we have the least insight is in the UX for UAs. It's plausible that the cognitive overhead of using UAs will cause significant confusion for people are migrating from Sapling z-addresses, and transparent addresses. We are *not* the only team implementing orchard transactions (they're already available in full-nodes). The quality of other implementations is an unknown, and dynamic. Because we are publishing our own app, we do not depend on outside parties to incorporate our work (beyond the above-listed gatekeepers). We are also interested in other platforms for publication (such as F-Droid and browser extensions). We have worked in the past with GitLab as a collaboration tool, and we would be willing to move back or setup our own system if it becomes necessary. We depend on patched forks of librustzcash, and Orchard because these codebases are quite active. There's a risk of our contributions not merging, and there will be a "patch-overhead" for downstream consumers of our libraries until the patches can be removed.
- **Unintended Consequences:**
  Our work might dissuade others from entering the space. "Oh *that's* already taken care of." It might not be as portable as anticipated: "Oops.. actually _nothing_ we learned/did implementing Orchard in `zingolib` is useful for `free2z`/`DAG-sync`/`warp-sync`..." It might never be usable: "Well due to scaling issues no-one can transact anyway.. so who cares if you have orchard?" It might conflict other comparable work without providing distinguishing features. "This is basically that." It might become an attractive nuisance. I believe this is the worst possible outcome. It is sufficiently useful to attract users, but it then betrays their trust by ceasing to function. Therefore, we believe that it is critical to align our economic incentives with the moral responsibility we incur by providing people with a financial application. Outside of the scope of this grant we have discussed our approach to this issue.
- **Evaluation plan:**
  * A functioning Orchard-capable library for lightwalletd-proxy clients. * Three working Orchard-capable applications will be published and available to users free of charge: i. A command line interface available through GitHub and/or other internet distribution channels ii. An iOS App available through the Apple App Store iii. An Android App available through the Google Play Strore. * The source code of the above applications and library will also be available to users free of charge under the MIT/BOSL license. * Developers can use the `zingo-cli` in regtest mode to send and receive orchard transactions. * Opt-in testing. App users can install an app that communicates with a regtest server, from the Apple-or-Google gatekeepers, that sends and receives Orchard Transactions presented via Unified Addresses.

### Project Timeline

- **Project timeline determination:**
  The timeline was based on our in-house rates of task completion as observed since we began this project in mid-April.

### Milestone 1

- **Amount:**
  75833.33
- **Expected Completion Date:**
  9/1/2022

  - **Deliverables:**
    - Receiving Orchard Transactions (regtest): Read and write NU5 transactions using upstream librustzcash. Verifiable with: 1. (cargo test) reference test-vector read and written in unit-test. 2. (zingo-cli send) (zingo-cli balance) and (zingo-cli list) exercise NU5 transaction read-and-write with `zingo-cli` in `regtest` mode.
    - Unified Addresses are displayed in the zingo-mobile app. Verifiable with: 1. A ZCG member signs up for a test account with Google or Apple for use of a gated mobile application. 2. The ZCG member navigates to an obvious orchard/UA tab and presses a 'new address' button. 3. The ZCG member sees a unified address.
    - Decrypt a memo from an orchard action & Present the memo contents to a requester using `zingo-cli --regtest`. Verifiable with: 1. (zcash-cli --regtest z_sendmany) 2. (zingo-cli list) regtest mode

### Milestone 2

- **Amount:**
  75833.33
- **Expected Completion Date:**
  10/1/2022

  - **Deliverables:**
    - Sending Orchard Transactions (regtest): encrypt and transmit a memo in orchard. Verifiable with: 1. cargo test: unit-test that demonstrates specific functionality. 2. A ZCG member uses `zingo-cli`, in regtest mode to encrypt and send a memo. 3. A ZCG member receives and decrypts the memo (as above).
    - Proof-of-concept mock-ups of user interface permitting memo receipt & Proof-of-concept mock-ups of user interface permitting memo sends in zingo-mobile. Verifiable with: 1. Images or prototype UI within application. 2. ZCG feedback on options.

### Milestone 3

- **Amount:**
  75833.33
- **Expected Completion Date:**
  11/1/2022

  - **Deliverables:**
    - Send and Receive Orchard Transactions in ZingoZcash mobile app (regtest): Interface is stabilized, such that application test-users can experiment with flows. Verifiable with: 1. ZCG members can send and receive memos and TAZ to each other. 2. Automated mobile app tests verify specific "happy-path" workflows.
    - Upgrade to multi-receiver UAs. Verifiable with: 1. New unit-tests. 2. A ZCG member uses `zingo-cli` regtest to receive at UA from sapling-only sender. 3. ZCG member uses `zingo-cli` regtest to receive at UA from transparent sender.

### Additional Milestones

- **Additional Milestones:**
  No

### Submission Date

- **Submission Date:**
  2022-08-04 20:52:30

### File Attachments


