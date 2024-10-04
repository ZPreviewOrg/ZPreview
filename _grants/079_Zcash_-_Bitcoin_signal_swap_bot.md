---
title: "Zcash <-> Bitcoin signal swap bot"
status: "Declined"
amount: "52500.0"
submitter: "[REDACTED] [REDACTED]"
email: "[REDACTED]"
date: "2023-03-19 08:48:01"
project_name: "Zcash <-> Bitcoin signal swap bot"
summary: "A signal messenger bot providing swaps between Zcash and other major cryptocurrencies, starting with Bitcoin."
total_grant_value: "52500.0"
submitter_last_name: "[REDACTED]"
original_title: "Zcash <-> Bitcoin signal swap bot"
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
  Through previous knowledge on Zcash and search engines.
- **Original Title:**
  Zcash <-> Bitcoin signal swap bot

- **Labels:**
  - OPEN

### Project Overview

- **Project Name:**
  Zcash <-> Bitcoin signal swap bot
- **Last Updated:**
  2023-03-19 08:48:01
- **Sponsorship Request:**
  No
- **Project Image (Public Gallery):**
  logo_only_transparent_fav.png
- **Project Summary:**
  A signal messenger bot providing swaps between Zcash and other major cryptocurrencies, starting with Bitcoin.

### Project Description

- **Overview:**
  Financial privacy necessitates private communications. When users of Zcash transact or transfer funds in most browser environments they are exposing meta data identifiers; IP is collected through browser interfaces, browser's harvest data for ads, ISPs and VPNs collect your usage times and locations, etc... The browser is the biggest tool for surveillance services because harvesting data in transit is much easier than harvesting data at rest. To avoid exploitation all meta data must be eliminated.
- **Proposed solution:**
  The solution to avoiding meta data surveillance is to route all information through signal messenger (signal.org) instead of a browser environment. Signal does not relay IP, have access to data in transit, and provides a highly minimalized attack and surveillance surface. By creating a swap service with signal messenger as a User Interface users of Zcash can swap between Bitcoin and Zcash easily and privately.
- **Solution Format:**
  A chat bot that operates on signal messenger and provides a user friendly swap service between Bitcoin and Zcash. Users will be able to message the bot (operating under a standard US phone number) and provide Bitcoin or Zcash for swapping. The bot will have a simple Command Line Interface with a succinct tutorial for first time users.
- **Dependencies:**
  The system built is primarily a simple dbus or message in/message out style system that can be adapted to any chat application and is not dependent on signal messenger, but the software is not currently adapted to any other chat software. Potential cross-platform integrations have been accounted for in development. Independent hosting is possible. Little to no involvement is required by ZF, ECC, or anyone else assuming cryptocurrency products operate normally and as documented.
- **Technical approach:**
  The approach is relatively simple, the bot hosts a Zcash and Bitcoin wallet and offers a unique address for each swap. When the user sends the designated amount of funds to the address given they will receive a payment in the same amount to their wallet address that they previously uploaded. Project is written in Kotlin and we utilize SCRUM methodology for development. For further details please set up a call with our CTO, Matt@undercurrent.ai

### Requested Grant Amount

- **Amount:**
  52500.0

### Budget Breakdown

- **Hardware/Software budget:**
  35000.0
- **Hardware/Software justification:**
  The 35k is to fund an initial liquidity pool for users of the swap service. This will provide usability to the service and enable users to swap small amounts of funds between Bitcoin and Zcash.
- **Services budget:**
  2500.0
- **Services justification:**
  This will cover AWS and miscellaneous hosting or software development fees. This includes but is not limited to: Collaboration software fees, exchange fees for converting funds to USD usable by employees, software exploration fees, test transaction fees, utility fees for development, etc...
- **Compensation budget:**
  15000.0
- **Compensation justification:**
  Head developer is being paid 12,000 for approximately 6 weeks of full time work ($50/hour) which is significantly lower than the average rate of pay for a senior software developer in the San Francisco bay area. Two dedicated testers will each be paid for ~75 hours of testing at $20/hour which is also below the average rate of pay for a software tester in the San Francisco bay area.
- **Startup funding required:**
  No
- **Total proposed grant value:**
  52500.0

### Team Members

- **Project Lead:**
  Undercurrent
- **Background:**
  CTO: https://www.linkedin.com/in/matthew-weser-38999a79/ CEO: https://www.linkedin.com/in/cody-gibbons-3195a8136/

### Funding History

- **Previous funding:**
  No
- **Other funding sources:**
  Yes
- **Other funding details:**
  We are seeking the same amount of funding from private investors in exchange for a % of swap fees as well as grants of the same size from other privacy oriented cryptocurrency projects. The first project to accept our grant will be prioritized for development, in the case of multiple successful grant applications we will implement each cryptocurrency in the order that the grant funds are released. Undercurrent hopes to provide swaps between the major cryptocurrencies Bitcoin, Ethereum, and all privacy oriented cryptocurrencies that provide grants for implementation and initial liquidity pool provisions.

### Risks and Evaluation

- **Execution risks:**
  The largest foreseen obstacle is that of adoption of our service. Marketing in the crypto environment can be challenging. Hosting fees are negligible and will only increase with use that should be translating into more revenue from swaps. Potential bad actors could attack the system and cause hosting fees to be higher than swaps revenue. Protections may have to be built requiring additional resources. Failure by undercurrent to raise more funds may lead to the death of the swaps service but this is seen as unlikely at this current time.
- **Unintended Consequences:**
  With a lot of success the project may face scaling bugs but growth will be limited by liquidity pool limits and dynamics. The user interface will be kept simple and straightforward and new swap pairs will be tested extensively before public release. Other negative ramifications are inherent to increased privacy and security.
- **Evaluation plan:**
  We will share user growth, liquidity pool growth, and other growth metrics of the service. Qualitative metrics will include a user feedback element showing comments on the service.

### Project Timeline

- **Project timeline determination:**
  The timeline was based on a complexity analysis that was informed by previous projects completed by Undercurrent.

### Milestone 1

- **Amount:**
  15000.0
- **Expected Completion Date:**
  4/15/2023

  - **Deliverables:**
    - Swaps product prototype: A functioning swaps service without extensive testing or UX refinement

### Milestone 2

- **Amount:**
  37500.0
- **Expected Completion Date:**
  4/30/2023

  - **Deliverables:**
    - Swaps product open beta: A polished product with refined UX and extensive testing completed

### Submission Date

- **Submission Date:**
  2023-03-19 08:48:01

### File Attachments

- **Undercurrent_overview.pdf**: [Additional documentation]

