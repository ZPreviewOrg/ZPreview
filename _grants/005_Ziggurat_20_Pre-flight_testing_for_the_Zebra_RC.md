---
title: "Ziggurat 2.0: Pre-flight testing for the Zebra RC, CI support, a GUI, and more"
status: "Accepted"
amount: "372000.0"
submitter: "[REDACTED] [REDACTED]"
email: "[REDACTED]"
date: "2022-03-28 13:53:36"
project_name: "Ziggurat 2.0: Pre-flight testing for the Zebra RC, CI support, a GUI, and more"
summary: "Equilibrium continues working on Ziggurat, the network testing framework: Zebra pre-release checks, CI integration, and a GUI"
total_grant_value: "372000.0"
submitter_last_name: "[REDACTED]"
original_title: "Ziggurat 2.0: Pre-flight testing for the Zebra RC, CI support, a GUI, and more"
labels:
  - APPROVED
  - GRANT COMPLETE
  - MILESTONE 1: COMPLETE
  - MILESTONE 2: COMPLETE
  - MILESTONE 3: COMPLETE
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
  We are previous applicants, and we previously discovered ZCash Community Grants from members of the ZCash community.
- **Original Title:**
  Ziggurat 2.0: Pre-flight testing for the Zebra RC, CI support, a GUI, and more

- **Labels:**
  - APPROVED
  - GRANT COMPLETE
  - MILESTONE 1: COMPLETE
  - MILESTONE 2: COMPLETE
  - MILESTONE 3: COMPLETE
  - Start Up Funding COMPLETE

### Project Overview

- **Project Name:**
  Ziggurat 2.0: Pre-flight testing for the Zebra RC, CI support, a GUI, and more
- **Last Updated:**
  2022-03-28 13:53:36
- **Sponsorship Request:**
  No
- **Project Image (Public Gallery):**
  logo.png
- **Project Summary:**
  Equilibrium continues working on Ziggurat, the network testing framework: Zebra pre-release checks, CI integration, and a GUI

### Project Description

- **Overview:**
  Networking is an often (perhaps the most) overlooked component of the entire Web3 stack of technologies. Many blockchains consider the networking layer to be an impediment in their development and still others admit to it being sub-optimal. The reasons vary - networking tends to be esoteric, opaque, hard to test - but the outcomes typically end up being the same: the networking layer becomes an inconvenient afterthought, with hidden security flaws and performance bottlenecks. Additionally, inefficient network implementations can contribute to wasteful energy consumption, particularly if the network packets are too frequent and/or too heavy in size. From our research, these types of implementations are more common than one might think, nearly the standard rather than the exception. While Ziggurat is not a generalized panacea, it can certainly help identify these issues and guide the user towards mitigation.
- **Proposed solution:**
  Ziggurat is an existing tool that is both used and respected by the core developers at ECC and ZF. Its use last year led to the disclosure of over half a dozen security vulnerabilities, and at least twice as many bugs. The zcashd project, the Zebra project, and the ZCash network in general are better off for this work - we would simply like to continue it. We will first perform the requested re-testing of Zebra, which is working toward an imminent release candidate, using an updated version of Ziggurat that has been refreshed to match any network functionality that has been added or changed since the last test. New tests would be written and old tests updated. Beyond extending the test suite itself, the team will add new functionality to Ziggurat: CI support, and network crawler, and a web-based GUI. This tooling would further streamline development and allow us to look beyond a single node's networking interfaces. We will then use the data collected for analysis in terms of node centrality, clustering, island formation, and overall performance.
- **Solution Format:**
  This project has five clear activities / deliverables: Pre-flight Checks - Finalize requirements with the core developers, and refresh the Ziggurat repository with profiling, static code analysis, async runtime inspection - anything the Rust community has improved over the last year. Immediate re-testing Zebra and zcashd - Apply the updated Ziggurat codebase to the zcashd and Zebra implementations to validate security mitigations, and catch any bug regressions. CI integration and New Ziggurat tests would potentially be implemented during this phase. Periodic Re-Testing of Zebra and zcashd - The release cadence of Zebra is roughly one per month, and zcashd is slightly slower. We would like to reserve time in our schedule for re-testing each release to make sure there are no regressions, new bugs, or security flaws Create network crawler - Use our existing lightweight node implementation that only includes the networking portion of the protocol in order to map the network topology (and other relevant data) for analysis Create web-based UI - Create a web application that encapsulates all feasible Ziggurat features. Ziggurat-as-a-Service, closed beta - Once the team is confident in the new UI based tooling, they will invite members of ZF and ECC to log in to the web application and try it out. From there, the team is open to discuss "victory lap" activities like announcements, blog posts, etc.
- **Dependencies:**
  Our team already has a positive rapport with both ZF and ECC, having worked with their devs on the first Ziggurat grant. We don't expect anything to change here. We would need to be in close contact with them (and they with us) during the Zebra testing phase. After that, Ziggurat is luckily a "black box" testing framework by definition, and all other necessary communications can happen asynchronously. This includes the usage of the service itself, once it launches.
- **Technical approach:**
  Pre-flight Checks Update the Ziggurat's dependencies, Rust idioms, and deal with new "Clippy" warnings Update Ziggurat’s Zcash protocol implementation to match the latest work done on zcashd and Zebra If time allows, perform additional refactors on anything the Rust community has improved over the last year Collaborate with the core ECC and ZCash teams to finalize expectations, deliverables, and timelines Re-Test Zebra and Zcashd Run Ziggurat against the latest versions of Zebra and zcashd and report any and all findings Make sure the test suite spec is up-to-date through code analysis (dynamic and static) of Zebra and zcashd Iterate on the existing tests and analyze Zebra and zcashd in the context of the test suite Create new tests if necessary Integrate Ziggurat with CI (likely GitHub Actions) Periodic Re-Testing of Zebra and Zcashd Same as above, for every release of Zebra and zcashd Create Network Crawler Extend the test-driven subset of the network protocol (if needed) Create a node designed specifically to crawl the ZCash network Introduce runtime logs and, possibly, means of interactive introspection via RPC or similar Create Web-based GUI Collect relevant data from both Ziggurat nodes and crawlers Introduce endpoints exposing that data to be consumed by GUI clients Implement a front-end based either on CI integration or "front door" user login Ziggurat-as-a-Service, Closed Beta Instrument the front-end with analytics and observability Invite a small group of people to test the front-end Collect feedback from the user group

### Requested Grant Amount

- **Amount:**
  372000.0

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
  372000.0
- **Compensation justification:**
  This figure is based on our typical ask for grants of $30,000/mo per developer with an estimated six months of work. Due to the fact that we are seeking funding from multiple sources, we have divided this total amount and distributed our asks in a manner that we feel is appropriate.
- **Startup funding required:**
  Yes
- **Startup funding explanation:**
  The ZCash Foundation has requested immediate re-testing of Zebra and zcashd due to an imminent release candidate of Zebra. Since this is time sensitive, Equilibrium has agreed to "optimistically" perform this testing. The amount of this startup funding is commensurate to what we might charge if this were a direct contractual agreement.
- **Startup funding amount:**
  90000.0
- **Total proposed grant value:**
  372000.0

### Team Members

- **Project Lead:**
  Equilibrium.co - Mark Henderson, Lukasz Jedrzejczyk, Niklas Long, Tuomas Makinen
- **Background:**
  Equilibrium is a software consultancy and venture studio with a mission to further privacy and decentralization. Our clients include StarkWare, ZCash, Aleo, Protocol Labs, The Ethereum Foundation, The Web3 Foundation, and quite a few more. Our expertise is deeply technical, and we also employ economists and expert cryptographers to deliver results beyond the bounds of software development. Much of our recent work has involved the design and testing of peer-to-peer networks in both familiar (e.g. libp2p) and customized contexts. Our impact typically falls into three categories: Bugfixing detecting vulnerabilities using dedicated fuzz tests squashing memory leaks detecting and squashing blocking operations in asynchronous contexts Implementation creating alternative implementations of network protocols creating lightweight network integration tests simplifying existing implementations, suggesting protocol improvements Profiling creating integration-level benchmarks detecting and investigating memory/CPU spikes introducing/increasing parallelism where applicable We build systems using what we believe is the best technology and, more often than not, that includes the Rust programming language. Our team members actively contribute to projects such as Rust IPFS and Interledger-rs as well as ecosystem tools such as the rust compiler and Clippy. Furthermore, Equilibrium has a taste for graphic and product design, seen in the execution of Vanilla DeFi, the XRPL Hooks Playground, and the Equilibrium.co site itself. These are the Equilibrium team members that will be the most involved: Lukasz Jedrzejczyk has followed the development of Rust since before it became stable in 2015 and has been a proactive contributor to the Rust compiler and its StackOverflow community. He has participated in the development of multiple peer-to-peer nodes belonging to blockchains and other distributed systems, usually concentrating on the network layer. Notable examples are Rust IPFS and Aleo. Niklas Long deeply cares about open source, distributed systems and data privacy. He has been on the Aleo Core Team since late 2020, mostly overhauling, testing and profiling their network; is the author of Ziggurat and an active contributor to Rust IPFS. Tuomas Mäkinen has long experience from various large scale distributed infrastructures with complex networking setups. He's a mix of software engineer and an SRE with broad experience from Go and more recently Rust. Latest contributions include a PoC solution for bridging Aleo and Solana. Mark Henderson is the VP of Engineering at Equilibrium. He has led the team starting with the original Rust IPFS grant in late 2019, through engagements with many of the largest names in Web3, and is now circling back to finish the critical work the team started with the original Ziggurat proposal. Core contributor to OrbitDB, Rust IPFS, and Ziggurat.

### Funding History

- **Previous funding:**
  Yes
- **Previous funding details:**
  The originating grant for Ziggurat was rewarded roughly one year ago: https://grants.zfnd.org/proposals/1199600083
- **Other funding sources:**
  Yes
- **Other funding details:**
  Our goal is to become the de-facto standard for Web3 peer-to-peer networks. As such we will continue to seek funding to apply Ziggurat to as many blockchain networks as we can. As of right now, we have additional applications out to the Algorand Foundation and the Web3 Foundation. We expect to seek additional funding in the future, though we have not chosen specific additional sources as of yet.

### Risks and Evaluation

- **Execution risks:**
  We identified four risks in our original proposal, and we only encountered two of them, which are still concerns: Risk: The native nodes are "heavy" The nodes are still necessarily complex. However, the mitigation we found that worked best was to run our own nodes and instrument them with tooling that allows us to introspect this behavior. Using this approach we were able to answer many of our own queries that we might have brought to the core developers, thus saving their time. Risk: The ZCash and Zebra developers are busy This is still true, especially leading up to a release candidate. However, our team already has a positive rapport with the developers and they understand Ziggurat is important work. Even still, interactions can happen minimally and asynchronously, especially after the first two milestones. Risk: CI Integration requires third-party tooling, such as GitHub Platforms like GitHub are generally fickle and unreliable, changing things and experiencing downtime at times when we'd like. Unfortunately, we simply have to accept this risk and work around any incidents or idiosyncrasies.
- **Unintended Consequences:**
  Of course we believe that having a solid understanding of one's own networking stack can only help, we recognize that there may be unintended consequences that could be viewed as negative: Maintainability - More tests will require more diligence on the part of the contributors, giving them more "hoops to jump through" with regards to getting their pull requests merged. However, this will likely have the long-term effect of improved codebase and runtime quality Ziggurat becomes the "de-facto network spec" - In the absence of a formal specification, the Ziggurat tests could become considered canon. This may have already happened, to some extent.
- **Evaluation plan:**
  We believe we can effectively track our performance with a small set of quantitative and qualitative metrics: 1. Quant: the number of discovered bugs (new or regression) 2. Quant: the number of new security disclosures 3. Quant: the number of performance bottlenecks identified 4. Qual: The rapport with the ZF and ECC core devs and their impression of our work 5. Qual: User experience / the ease-of-use of the delivered UI

### Project Timeline

- **Project timeline determination:**
  While some of the above work can be performed in parallel, we would like to lay them out serially in our timeline - we would like the time to apply thought and care into our work, and we want the requirements from the other grant sources to only minimally interfere with these estimates. Note: This timeline can be somewhat adjusted to align more closely with the Zebra team's release candidate timeline.

### Milestone 1

- **Amount:**
  94000.0
- **Expected Completion Date:**
  5/31/2022

  - **Deliverables:**
    - 33% Completion - Progress report on all activities

### Milestone 2

- **Amount:**
  94000.0
- **Expected Completion Date:**
  7/29/2022

  - **Deliverables:**
    - 66% Completion - Progress report on all activities

### Milestone 3

- **Amount:**
  94000.0
- **Expected Completion Date:**
  9/30/2022

  - **Deliverables:**
    - 100% Completion - Progress report on all activities

### Additional Milestones

- **Additional Milestones:**
  No

### Submission Date

- **Submission Date:**
  2022-03-28 13:53:36

### File Attachments


