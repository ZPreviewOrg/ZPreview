---
title: "Ziggurat 3.0 - Network Wide Testing and Active Validation"
status: "Accepted"
amount: "446200.0"
submitter: "[REDACTED] [REDACTED]"
email: "[REDACTED]"
date: "2022-11-14 22:31:37"
project_name: "Ziggurat 3.0 - Network Wide Testing and Active Validation"
summary: "Expands Ziggurat’s coverage by outfitting the crawler with advanced telemetry. Culminates in a coordinated red-teaming exercise on testnet."
total_grant_value: "446200.0"
submitter_last_name: "[REDACTED]"
original_title: "Ziggurat 3.0 - Network Wide Testing and Active Validation"
labels:
  - APPROVED
  - GRANT COMPLETE
  - MILESTONE 1: COMPLETE
  - MILESTONE 2: COMPLETE
  - MILESTONE 3: COMPLETE
  - OPEN
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
  From our previous applications and initially from word of mouth in the industry.
- **Original Title:**
  Ziggurat 3.0 - Network Wide Testing and Active Validation

- **Labels:**
  - APPROVED
  - GRANT COMPLETE
  - MILESTONE 1: COMPLETE
  - MILESTONE 2: COMPLETE
  - MILESTONE 3: COMPLETE
  - OPEN
  - Start Up Funding COMPLETE

### Project Overview

- **Project Name:**
  Ziggurat 3.0 - Network Wide Testing and Active Validation
- **Last Updated:**
  2022-11-14 22:31:37
- **Sponsorship Request:**
  No
- **Project Image (Public Gallery):**
  logo.png
- **Project Summary:**
  Expands Ziggurat’s coverage by outfitting the crawler with advanced telemetry. Culminates in a coordinated red-teaming exercise on testnet.

### Project Description

- **Overview:**
  The Ziggurat team believes that a network layer hack - one that could take down an entire blockchain - is a very real possibility. Our goal is to prove ourselves wrong by working to prevent it. This work was started in the two previous grants, however there is still more that can be done for ZCash. Single nodes are well-covered but network-wide analysis stops only at reachable node counts and node and network protocol versions.
- **Proposed solution:**
  Simply put, we’d like to continue the same Ziggurat work that has already demonstrated high value to the ZCash ecosystem. We want to take advantage of this opportunity to apply everything we’ve learned in a much more active fashion. Specifically, we would like to expand the current Ziggurat offering to include: Automated testing of every new zcashd and Zebra release Topography metrics (e.g. centrality and island formation) from the crawler Historical charts of its metrics in the GUI (going back e.g. 90 days) Time lapse Using the crawler to provide nodes with lists of peers that would be most beneficial to the structure/goals of the network Finally, this work would culminate in a single (or series of) testnet red-teaming exercises where we purposely put the testnet (or a testnet) under strain to validate existing hypotheses as well as generate new ideas for ways to protect ZCash.
- **Solution Format:**
  Currently the majority of the work exists in two GitHub repositories: https://github.com/runziggurat/zcash https://github.com/runziggurat/zcash-gui We expect to continue the work within those repositories as long as it remains convenient. The only exception to this delivery format would be new security disclosures, which would be made privately.
- **Dependencies:**
  Historically, we have designed the Ziggurat codebase to be completely independent from those of zcashd and Zebra. Everything from the regular commits to the CI pipelines are sub-separate, which means we can stay nimble, not have to wait for anything from the node developers, and vice versa. This remains true for the vast majority of deliverables in this grant. However, this particular grant includes the testnet red-teaming exercise, and we would indeed require more coordination and mutual planning than in the past to schedule the event and liaise with testnet node runners. While it may be a simple matter of notifying them that the red-team event is happening, we still want to call this out as a dependency at the outset. Once the event is coordinated and conducted, we will not require any other involvement in order to compile and deliver our final reports.
- **Technical approach:**
  CI/CD Updates Currently, two GitHub Action workflows that run every 24 hours: one to run the Ziggurat test suite for zcashd and one for Zebra. Additionally, the network crawler runs at the same cadence. Each of these workflows outputs timestamped json or jsonl files to the results folder, which are then ingested to the UI via the GitHub API. We would like to continue the “nightly” testing but also add special cases whenever new zcashd and Zebra releases are tested. The intent is to be able to apply special testing and GUI display for the releases. Network-wide topology / topography metrics from the crawler Currently, the crawler obtains the following metrics, as seen in the screenshot below: Protocol versions and cardinality Node versions and cardinality A total count of Connection A count of known nodes A count of good or “reachable” nodes We would like to expand the crawler’s capabilities in order to understand the entire network as one, at a much more comprehensive level. This would include features such as: Network visualizations, up to but not necessarily including full network topology mapping “Anonymized” topography data such as connection speeds, cloud status, and other stats that tools like nmap might allow. Centrality measurements “Island formation” analysis Historical charts of metrics in the GUI As mentioned above, the nightly GitHub action generates json/jsonl files in a “results” folder. Currently, we are only reading from the latest file and showing present-day information. We would like to expand the GUI’s display to take advantage of the historical data, going back to the last 90 days. This would include, but not be limited to: Time lapse of current metrics Time lapse of the new metrics mentioned above We will use the same tooling we have been using for this phase. (next.js, d3 charts, etc) Intelligent Peer Sharing Option Given the data that we collect in the above steps, it becomes theoretically feasible to gather a set of peers that we believe would be suitable for any given node on the network, and suggest that peer list to the node via Zebra’s Addr / GetAddr messages or the zcashd equivalent. The peer list would be suitable for both the singular node in question, as well as the overall “shape” of the network by suggesting peers that would reduce centrality and island formation. Red Teaming Exercise We would like to conduct a proper red team exercise on the ZCash testnet and generate a full report on the event and our subsequent findings. This both culminates the transition of the crawler from passive to active and puts to full use our findings in the CPR tests conducted over the last 2 years. The steps here would be something like: Liaise with node developers and the existing security team(s) to learn more about existing safeguards and any preferred investigations they would like to conduct Create a test plan and conduct several “dry runs” on our local devnets Event planning and broadcasting to communicate our intentions to existing testnet operators The main event which would include investigations including (but not limited to): Spamming various messages, spamming random bytes, spamming random new connections, topology partitioning, peer list manipulation Optionally, we could explore consensus layer metrics to evaluate during the above investigations. These could include: TPS, block time, BFT security thresholds We recognize that this is perhaps the most ambitious idea we’ve had for Ziggurat to date, and as such has the most potential to tangibly improve the network.

### Requested Grant Amount

- **Amount:**
  446200.0

### Budget Breakdown

- **Hardware/Software budget:**
  0.0
- **Hardware/Software justification:**
  N/A
- **Services budget:**
  25000.0
- **Services justification:**
  We currently use Google Cloud for most of Equilibrium projects that require cloud hosting. A simple benchmark is $320/mo for a blockchain-capable cloud VM We want to budget for 6 VMs over 12 months - one for zcashd, Zebra, and the crawler for both testnet and mainnet with some padding in case other expenses are incurred.
- **Compensation budget:**
  409200.0
- **Compensation justification:**
  See the attached “Ziggurat Budget” spreadsheet in the Uploads section
- **Startup funding required:**
  Yes
- **Startup funding explanation:**
  We request the entire services as well as 15% of the compensation budget up front.
- **Startup funding amount:**
  88180.0
- **Total proposed grant value:**
  446200.0

### Team Members

- **Project Lead:**
  Mark Henderson
- **Background:**
  Equilibrium is a software consultancy and venture studio with a mission to further privacy and decentralization. Our clients include StarkWare, ZCash, Aleo, Protocol Labs, The Ethereum Foundation, The XRPL Foundation, Polygon and quite a few more. Our expertise is deeply technical, and we also employ economists and expert cryptographers to deliver results beyond the bounds of software development. Much of our recent work has involved the design and testing of peer-to-peer networks in both familiar (e.g. libp2p) and customized contexts. Our impact typically falls into the following categories: Bug Fixing detecting vulnerabilities using dedicated fuzz tests squashing memory leaks detecting and fixing blocking operations in asynchronous contexts Implementation creating alternative implementations of network protocols creating thorough network integration tests simplifying existing implementations, suggesting protocol improvements Profiling creating integration-level benchmarks detecting and investigating memory/CPU spikes introducing/increasing parallelism where applicable Network Analysis crawling swarms using the P2P network layer (not RPC) visualizing data to display on a web-based interface gathering metrics such as reachable node cardinality, as well as node and network protocol versions Furthermore, Equilibrium has a taste for graphic and product design, seen in the execution of Vanilla, the XRPL Hooks Playground, and the Ziggurat GUI site itself.

### Funding History

- **Previous funding:**
  Yes
- **Previous funding details:**
  This would be the third grant awarded to Ziggurat from the ZCash Foundation. The previous two are here: https://grants.zfnd.org/proposals/1199600083 https://zcashgrants.org/gallery/25215916-53ea-4041-a3b2-6d00c487917d/23814137/
- **Other funding sources:**
  Yes
- **Other funding details:**
  Since its inception as a network testing suite for ZCash, Ziggurat has become a cross-blockchain endeavor to aid in network stability and security. Our mission is to become as industry-wide as possible to prevent (or at least mitigate) dreaded network layer hacks from occurring anywhere. Specifically, we have received funding from the XRPL Foundation and the Algorand Foundation, and are applying to other additional sources.

### Risks and Evaluation

- **Execution risks:**
  Please refer to the “Risk and Mitigation” sections in the Ziggurat 3.0 Milestones and Deliverables upload.
- **Unintended Consequences:**
  Our primary concern is similar to any security-focused project and that is the “weaponization” of our codebase, particularly the crawler. Luckily, we have a good rapport with ECC and ZF and have already had numerous conversations with representatives from both regarding this issue. A secondary concern would be a false sense of overall security once the network is covered by Ziggurat’s testing. To this we want to be clear: while Ziggurat is a strong mitigation, it is not fail-safe protection. Network attacks may still occur outside of our discovered flaws, and new vulnerabilities may be introduced into the code base after our test plan is implemented. Conveniently, the approach to both of these potential consequences is similar: We will simply continue to be transparent about our work and code “in the open”. However, if there exists a cause for “proprietarization” of code or more discreet disclosures of information, we will opt for the more private approach.
- **Evaluation plan:**
  Please refer to the “Evaluation Plan” sections in the Ziggurat 3.0 Milestones and Deliverables upload.

### Project Timeline

- **Project timeline determination:**
  The project timeline was determined through comparing the deliverables in the attached document with the resourcing realities at Equilibrium. Our estimations are based on past work done with the Ziggurat project or commensurate work on other Equilibrium projects.

### Milestone 1

- **Amount:**
  93000.0
- **Expected Completion Date:**
  1/16/2023

  - **Deliverables:**
    - Stage 3 - Network-wide testing. Deliverables c, d, e, and f. See the attached budget and deliverable desriptions

### Milestone 2

- **Amount:**
  87000.0
- **Expected Completion Date:**
  2/1/2023

  - **Deliverables:**
    - Stages 4 and 5, deliverables 4a, 4b, 4c, and 5c. See the attached budget and deliverable desriptions

### Milestone 3

- **Amount:**
  178020.0
- **Expected Completion Date:**
  4/17/2023

  - **Deliverables:**
    - Stage 6 in its entirety. See the attached budget and deliverable desriptions

### Additional Milestones

- **Additional Milestones:**
  No

### Submission Date

- **Submission Date:**
  2022-11-14 22:31:37

### File Attachments

- **Ziggurat_Budget_-_Compensation.pdf
Ziggurat_Milestones_and_Deliverables.pdf**: [Additional documentation]

