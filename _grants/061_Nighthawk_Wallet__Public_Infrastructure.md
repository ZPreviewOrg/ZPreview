---
title: "Nighthawk Wallet & Public Infrastructure"
status: "Accepted"
amount: "551000.0"
submitter: "[REDACTED] [REDACTED]"
email: "[REDACTED]"
date: "2023-01-13 17:40:32"
project_name: "Nighthawk Wallet & Public Infrastructure"
summary: "Nighthawk Wallet for Zcash and globally distributed public lightwalletd service setup."
total_grant_value: "551000.0"
submitter_last_name: "[REDACTED]"
original_title: "Nighthawk Wallet & Public Infrastructure"
labels:
  - APPROVED
  - GRANT COMPLETE
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
  ZIP-1014
- **Original Title:**
  Nighthawk Wallet & Public Infrastructure

- **Labels:**
  - APPROVED
  - GRANT COMPLETE
  - MILESTONE 1: COMPLETE
  - MILESTONE 2: COMPLETE
  - Start Up Funding COMPLETE

### Project Overview

- **Project Name:**
  Nighthawk Wallet & Public Infrastructure
- **Last Updated:**
  2023-02-23 19:01:14
- **Sponsorship Request:**
  No
- **Project Image (Public Gallery):**
  Fm7yiUGXEAAtmMx.jpeg
- **Project Summary:**
  Nighthawk Wallet for Zcash and globally distributed public lightwalletd service setup.

### Project Description

- **Overview:**
  Zcash mobile wallets are in a dire need of improved usability and end-user expectations have never been higher. With an ongoing development model, collaborating with the Electric Coin Company Mobile Engineering team, Zcash core developers, and ecosystem participants, we believe our mobile-first experienced team can deliver the best-in-class ZEC transactional experience to the masses. As the first Shielded-by-default wallet distributed to the public, Nighthawk Wallet's primary differentiator has been the ease of use, technical support(email & socials), and educating its users about various types of transactions possible when using the privacy-preserving properties of Zcash.
- **Proposed solution:**
  For 2023, our proposal to the Zcash community is to continue building Nighthawk Wallet and release a new version of Nighthawk with improved syncing performance including DAGSync(part of ECC’s Mobile SDK efforts). Our vision for the design and development of Nighthawk is as follows: 1. collaborate with ECC and upstream repositories to strengthen the codebase, share strategies to maximize ZEC adoption 2. the choice of leading-edge frameworks, type-safe development practices, and mobile native platforms that make apps secure and install faster, ultimately increasing adoption 3. reducing complicated terminology to help new users understand their actions 4. building accessibility supporting apps 5. reusing existing design patterns and standards for an intuitive experience 6. transparency of user actions in different functions like shielding/deshielding so the users are notified of the privacy level of their transactions --- Lightwalletd: We propose setting up a geographically distributed setup of light client infrastructure to make access faster and more available to end users. The new setup will be automated with a Kubernetes deployment to improve platform engineering efforts. Overall this is probably a small impact on reliability, but it is greater than zero. --- Zcash Block Explorer: Continue developing and providing a tracker-free block explorer experience with Tor V3 Onion browsing support. And a ZcashBlockExplorer.com server will be provisioned for test-net.
- **Solution Format:**
  Nighthawk Wallet native Android app on Google Play Store Nighthawk Wallet native Android app on F-Droid Store Nighthawk Wallet native iOS app on Apple App Store ZcashBlockExplorer.com with V3 Onion support (zcash-ex Elixir library and Block Explorer codebases) Highly available, redundant, geographically distributed public lightwalletd.com infrastructure Quarterly Reports
- **Dependencies:**
  Collaboration and ongoing project development of the ecosystem participants: ECC zcashd, lightwalletd, mobile SDKs, and reference wallets. ZF with zebrad support and development of the built-in lightwalletd support. Apple, Google, F-Droid, GitHub, Bitrise distribution mechanisms.
- **Technical approach:**
  See attachment.

### Requested Grant Amount

- **Amount:**
  551000.0

### Budget Breakdown

- **Hardware/Software budget:**
  0.0
- **Hardware/Software justification:**
  N/A
- **Services budget:**
  148000.0
- **Services justification:**
  Upgraded infrastructure costs for 8 instances 1 dedicated instance for status & zcashd API test server DNS & routing services
- **Compensation budget:**
  403000.0
- **Compensation justification:**
  3 software developers, PR & code reviews, bug fixing & issue triaging for Nighthawk Wallet. Testing & quarterly reports Partial retroactive payment for 7 months of retroactive developer pay for developing Nighthawk Wallet in 2022 & 7 months of upgraded server bandwidth & DevOps pay for 2021 lightwalletd grant NOTE: Compensation for developing improvements and feature additions in Zcash Block Explorer and running lightwalletd infrastructure is not approved due to budgetary constraints of the ZCG.
- **Startup funding required:**
  Yes
- **Startup funding explanation:**
  Setting up the distributed team and funding operations Team compensation, Legal, and Accounting services Hardware Purchases, Software Licenses & Operations
- **Startup funding amount:**
  300000.0
- **Total proposed grant value:**
  551000.0

### Team Members

- **Project Lead:**
  Nighthawk Apps
- **Background:**
  The Nighthawk Apps team has assembled for the 2023 year to deliver updates for the Nighthawk Wallet for Zcash with native Android and iOS applications, ZcashBlockExplorer.com and servicing the light client infrastructure with a globally distributed public lightwalletd services setup. As active participants in the Zcash ecosystem, we approach ZEC interactions from a real-world, end-user standpoint . Over the last year, we have provided regular monthly updates on the Zcash Forum to keep the community in the loop with the progress of our progress, namely, a user-friendly self-custody wallet, a privacy-preserving block explorer, and a public lightwalletd service infrastructure with warrant canary.

### Funding History

- **Previous funding:**
  Yes
- **Previous funding details:**
  List of previously approved grants: ZF: Nighthawk Wallet maintenance + server costs ZOMG: Zcash Block Explorer ZOMG: Nighthawk Wallet Design & Development '21 ZOMG: (On-going) 2 years of Lightwalletd Infra hosting & maintenance ZOMG: (On-going) Zcash Thorchain Integration Grant
- **Other funding sources:**
  No

### Risks and Evaluation

- **Execution risks:**
  Keeping up with upcoming changes in Zcash APIs. Delays due to unforeseen challenges during the development of Zcash protocol, upstream repository priorities, and new ZIP reviews and deployment. Wallet apps: Refactoring Mobile UX to include privacy-preserving workflows of auto-shielding user funds to the latest shielded pool, note management, and mobile background operation feasibility. Privacy issues around integrating third-party SDKs might come up, our aim is to keep the majority of the features opt-in and always make available an "anti-feature" free version on F-Droid. Lightwalletd: Faults in the lightwalletd software may require frequent patching to restore to working versions. Availability and Support from ECC Engineers to help debug and fix issues in real-time. By having a status page and a connection to the community via social media and Zcash Form channels, we plan to keep up to date with the ongoing changes, and planned & unplanned software upgrades. ZcashBlockExplorer.com: With our Zcash-only focus, we plan to deliver the latest changes as a priority compared to other block explorers. We will investigate and develop libraries to use zebrad instead of zcashd for querying block data for better performance.
- **Unintended Consequences:**
  Regulations around cryptocurrency wallets in App Store/Play Store at a country level and attacks against lightwalletd infrastructure. We publish Nighthawk Wallet on F-Droid, compatible with Android devices. On-going maintenance of the mobile apps is required to reduce crash ratings on newer devices and Android versions. We plan to work with the community and developer suggestions to gather feedback and to make available the best products to our end users.
- **Evaluation plan:**
  Improved usability and maintenance of the wallet apps will benefit ZEC adoption. Public reviews of the wallet usage, increase in Orchard pool adoption and mobile app store downloads & ratings of the app would be some metrics to follow. Improved stability and availability with a distributed lightwalletd infrastructure will help with ease of development on the Zcash network. Our quarterly usage reports would include server stats and uptime. Ongoing support and development of ZcashBlockExplorer.com by a team focusing on Zcash will help provide accurate transaction information to end users. Public feedback can be collected as the explorer setup prioritizes the no-logging policy, hence the lack of analytics of usage.

### Project Timeline

- **Project timeline determination:**
  For the Nighthawk Wallet, the planned Zcash usability improvements, and team availability.

### Milestone 1

- **Amount:**
  150000.0
- **Expected Completion Date:**
  6/30/2023

  - **Deliverables:**
    - ZcashBlockExplorer on Testnet and public distributed lightwalletd infrastructure

### Milestone 2

- **Amount:**
  101000.0
- **Expected Completion Date:**
  9/30/2023

  - **Deliverables:**
    - Nighthawk Wallet with Fast Syncing Performance

### Submission Date

- **Submission Date:**
  2023-01-13 17:40:32

### File Attachments

- **Nighthawk_2022_Retroactive_Highlights.pdf
Nighthawk_Wallet_Infra_ZBE.pdf**: [Additional documentation]

