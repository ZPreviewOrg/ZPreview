---
title: "Zcash Lightwalletd Infrastructure Development and Maintenance"
status: "Accepted"
amount: "45000.0"
submitter: "[REDACTED] [REDACTED]"
email: "[REDACTED]"
date: "2024-04-16 16:11:25"
project_name: "Zcash Lightwalletd Infrastructure Development and Maintenance"
summary: "Make it simpler for anyone to host lightwalletd while demonstrating our approach in four global regions for one year of hosting"
total_grant_value: "45000.0"
submitter_last_name: "[REDACTED]"
original_title: "Zcash Lightwalletd Infrastructure Development and Maintenance"
labels:
  - APPROVED
  - MILESTONE 1: COMPLETE
  - MILESTONE 2: COMPLETE
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
  The Zcash team mentioned ZCG to me at their booth at Messari Mainnet 2022
- **Original Title:**
  Zcash Lightwalletd Infrastructure Development and Maintenance

- **Labels:**
  - APPROVED
  - MILESTONE 1: COMPLETE
  - MILESTONE 2: COMPLETE
  - Start Up Funding COMPLETE

### Project Overview

- **Project Name:**
  Zcash Lightwalletd Infrastructure Development and Maintenance
- **Last Updated:**
  2024-04-16 16:11:25
- **Sponsorship Request:**
  No
- **Project Image (Public Gallery):**
  zecrocks.png
- **Project Summary:**
  Make it simpler for anyone to host lightwalletd while demonstrating our approach in four global regions for one year of hosting

### Project Description

- **Overview:**
  Lightwalletd nodes are essential to Zcash users, yet there are not many running. It's also not straightforward for users to launch and maintain their own nodes.
- **Proposed solution:**
  We want to simplify the process of launching Lightwalltd nodes by developing releasing Kubernetes Helm charts for Lightwalletd. We will test and iterate on these approach in a real production environment by running Lightwalletd in at least four global regions on a mixture of dedicated and cloud hardware.
- **Solution Format:**
  1. Open-sourced Kubernetes Helm charts for lightwalletd and zebra. 2. One year of lightwalletd nodes hosted by our team on Kubernetes using these charts at the "Zec.rocks" domain and subdomains. 3. A retrospective post on lessons learned throughout the year of maintaining this infrastructure posted at the end of the year.
- **Dependencies:**
  Zcash light wallet developers will need to our servers to their server lists in order for end users to benefit. Our servers are currently added to Zingo, we will speak with other light wallet developers to advocate wider integrations. Lightwalletd and Zebra docker releases should remain compatible with one another. We will liaise with these teams to share any incompatibilities we find.
- **Technical approach:**
  Please reference our attached PDF for the full details our proposed approach.

### Requested Grant Amount

- **Amount:**
  45000.0

### Budget Breakdown

- **Hardware/Software budget:**
  0.0
- **Hardware/Software justification:**
  N/A
- **Services budget:**
  35000.0
- **Services justification:**
  We will commit $35,000 of the grant's budget to leasing server hardware across a mixture of dedicated and cloud Kubernetes infrastructure providers. Some of the hardware is already owned by the applicants and racked up in a USA datacenter. A portion of this budget will cover the ongoing colocation and bandwidth costs of the hardware used within the scope of this proposal.
- **Compensation budget:**
  10000.0
- **Compensation justification:**
  The applicant has experience as a senior site reliability engineer. Writing, releasing, and maintaining open source Kubernetes Helm charts will require ongoing time throughout the year.
- **Startup funding required:**
  Yes
- **Startup funding explanation:**
  We can obtain advantageous lease terms when prepaying annually for leased dedicated servers in global regions. This budget will be used to provision these servers, ultimately allocating the community's capital more efficiently.
- **Startup funding amount:**
  11250.0
- **Total proposed grant value:**
  45000.0

### Team Members

- **Project Lead:**
  Emersonian
- **Background:**
  Our team has extensive experience with architecting, deploying and maintaining scalable application infrastructure. Our lead engineer has experience working as a senior site reliability engineer and currently maintains self-hosted nodes for eleven different blockchains, all self-hosted on owned hardware and orchestrated with Kubernetes. They wish to keep their identity private in this initial proposal but will share their identity with Zcash Foundation. Zancas is co-applicant and is a known contributor to the Zcash ecosystem.

### Funding History

- **Previous funding:**
  No
- **Other funding sources:**
  No

### Risks and Evaluation

- **Execution risks:**
  Please reference our attached PDF. We do not anticipate cost overruns and believe the grant to be sufficient to cover bandwidth costs on the global load balancer we are using.
- **Unintended Consequences:**
  We do not believe it is possible for too many lightwalletd instances to be running. Ideally users will feel empowered to run their own by following our documentation and using our Helm charts. A possible negative consequence to an abundance of Lightwalletd instances running is that some could log user activity and IP addresses. We will get ahead of this risk by advocating that users run their own Lightwalletd nodes when possible, especially when their threat model demands the utmost caution.
- **Evaluation plan:**
  We will transparently share all hosting costs and bandwidth metrics to help the community better estimate the requirements to host Lightwalletd infrastructure. We will also writeup a retrospective post sharing lessons learned, and documenting any changes in architecture that were necessary to meet the real-world needs of Zcash users, including the steps taken to mitigate any uptime challenges such as DDoS attacks.

### Project Timeline

- **Project timeline determination:**
  The timeline is informed by our team's experience with hosting application infrastructure.

### Milestone 1

- **Amount:**
  0.0
- **Expected Completion Date:**
  5/30/2024

  - **Deliverables:**
    - Dedicated hardware is hosting lightwalletd in the regions specified in our proposal
    - Helm charts are open sourced and documented for community use

### Milestone 2

- **Amount:**
  11250.0
- **Expected Completion Date:**
  7/16/2024

  - **Deliverables:**
    - Lightwalletd servers are online for 3 months

### Milestone 3

- **Amount:**
  11250.0
- **Expected Completion Date:**
  10/16/2024

  - **Deliverables:**
    - Lightwalletd servers are online for 6 months

### Milestone 4

- **Amount:**
  11250.0
- **Expected Completion Date:**
  1/16/2025

  - **Deliverables:**
    - Lightwalletd servers are online for 9 months

### Additional Milestones

- **Additional Milestones:**
  Yes

### Submission Date

- **Submission Date:**
  2024-04-16 16:11:25

### File Attachments

- **Zcash_Grant_-_Lightwalletd_Infrastructure_v1.pdf**: [Additional documentation]

