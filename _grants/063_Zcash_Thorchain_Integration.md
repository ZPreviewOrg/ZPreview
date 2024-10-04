---
title: "Zcash Thorchain Integration"
status: "Accepted"
amount: "258260.0"
submitter: "[REDACTED] [REDACTED]"
email: "[REDACTED]"
date: "2023-01-19 19:16:24"
project_name: "Zcash Thorchain Integration"
summary: "ZEC integration on Thorchain"
total_grant_value: "258260.0"
submitter_last_name: "[REDACTED]"
original_title: "Zcash Thorchain Integration"
labels:
  - Cancelled
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
  ZIP-1014
- **Original Title:**
  Zcash Thorchain Integration

- **Labels:**
  - Cancelled
  - MILESTONE 1: COMPLETE
  - MILESTONE 2: COMPLETE

### Project Overview

- **Project Name:**
  Zcash Thorchain Integration
- **Last Updated:**
  2023-12-08 01:42:20
- **Sponsorship Request:**
  No
- **Project Image (Public Gallery):**
  survey-icon-z02.png
- **Project Summary:**
  ZEC integration on Thorchain

### Project Description

- **Overview:**
  Zcash faces challenges with centralized exchanges changing their stance on ZEC support. Zcash users need 24x7 access to liquidity for their holdings. Hence, having the ability for a native ZEC swap via a decentralized exchange would be crucial for growth in adoption. Thorchain enables decentralized native ZEC swaps with popular cryptocurrencies, ERC20 tokens, and stablecoins. Zcash being the digital money focussed on privacy; adding support on a dex with native ZEC functionality instead of wrapping the ZEC with a custodian opens up tremendous opportunities for existing and new Zcash users to acquire ZEC via simplified UX. Additionally, Thorchain incentivizes wallets, node runners, and liquidity providers to integrate ZEC support to all their existing users by getting a fraction of the fees. e.g. ShapeShift uses Thorchain as a backend to swap native cryptocurrencies and a ZEC integration will expose Zcash to their existing user base. The low Zcash network transaction fees combined with defined swap fees & slippage % from liquidity pools will give Zcash users an exact quote for each Zcash swap that needs to be performed.
- **Proposed solution:**
  Zcash <> Thorchain Integration
- **Solution Format:**
  Zcash Thorchain platform integration with PRs to Thorchain platform repositories and xchain.js repositories.
- **Dependencies:**
  There are multiple users & stakeholders that benefit from this proposal: The users of Zcash bridge and the thin client would be Thorchain node runners & native swap wallets like ASGARDEX/ https://app.thorswap.finance The end users will be users who can easily swap their ZEC holdings between BTC, ETH, BCH, LTC, BNB, BUSD, USDT, and many ERC20 tokens. The end deliverable would also bring an understanding of possible Nighthawk Wallet integration in the future where the users would be able to swap between ZEC and the supported list of coins within Nighthawk. Additionally, all developers from the Zcash community can investigate & integrate the native swap functionality once the solution is delivered. How big of a problem would it be to not solve this problem? Zcash being limited to centralized exchanges and up to the whims of local regulations which keep flip-flopping support for Zcash is a risk and uncertainty for ZEC holders. This proposal will aim to provide Zcash liquidity via our partner NineRealms and participate in the Thorchain protocol which also opens up APY earning opportunities for existing Zcash holders. Accomplishing this task via a decentralized codebase will be instrumental in more parties holding Zcash.
- **Technical approach:**
  N/A

### Requested Grant Amount

- **Amount:**
  258260.0

### Budget Breakdown

- **Hardware/Software budget:**
  0.0
- **Hardware/Software justification:**
  N/A
- **Services budget:**
  20000.0
- **Services justification:**
  $5,000 x 4 months of multiple large AWS instances to run Thorchain test-net environment.
- **Compensation budget:**
  238260.0
- **Compensation justification:**
  $228,260: Software development, planning, evaluation, testing & deployment. (includes 1 year of support till Dec 2022). Task Total Resources Cost
  Development 120,000 4 $197.37/hr x 608 hrs
  Testing + Integration 60,000 3 $98.69/hr x 608 hrs
  Planning + Deployment 22,000 2 $36.18/hr x 608 hrs 202,000 + 26,260(13% tax) = $228,260 $10,000: $2,500 x 4 Thorchain core developers consultation, reviewing Pull Requests, and deploying to prod.
- **Startup funding required:**
  No
- **Total proposed grant value:**
  258260.0

### Team Members

- **Project Lead:**
  Nighthawk Apps
- **Background:**
  Nighthawk Apps has more than 30 years of combined experience in developing, deploying & supporting scalable applications for start-ups and Fortune 500 companies. We have been building applications within the cryptocurrency ecosystem since 2014 and are focussed our efforts towards making financial privacy accessible to everyone in the world.

### Funding History

- **Previous funding:**
  Yes
- **Previous funding details:**
  List of previously approved grants: ZF: Nighthawk Wallet maintenance + server costs ZOMG: Zcash Block Explorer ZOMG: Nighthawk Wallet Design & Development '21 ZOMG: (On-going) 2 years of Lightwalletd Infra hosting & maintenance
- **Other funding sources:**
  No

### Risks and Evaluation

- **Execution risks:**
  Delays due to unforeseen challenges and setbacks would need to be worked through with Thorchain core team. Support of our liquidity provider partner will be crucial to see a successful launch of Zcash on Thorchain. The need for ongoing automation & maintenance of Zcashd nodes within Thorchain framework, this responsibility will be handed to Thorchain core team after the Zcash bridge software is merged.
- **Unintended Consequences:**
  Adding support for T-address within Unified Addresses after NU5 for interoperability when it becomes available.
- **Evaluation plan:**
  Monitor Zcash pool size and ZEC liquidity deployment by partners. Monitor daily ZEC transaction volume (the existing coins are between $100k & $3M as of July 2021). Monitor the number of Thorchain DEX clients integrating Zcash support.

### Project Timeline

- **Project timeline determination:**
  Note: 1) The pull request review and main-net integration timeline depend on the Thorchain core team side and such delays will affect milestones planned grant. 2) Unused cloud credits will be returned at the end of 1yr support. (Expired as of Oct, 2023)

### Milestone 1

- **Amount:**
  77478.0
- **Expected Completion Date:**
  11/24/2021

  - **Deliverables:**
    - Setup test-net & sync all Thorchain supported blockchains in Kubernetes and hire team.

### Milestone 2

- **Amount:**
  77478.0
- **Expected Completion Date:**
  12/23/2021

  - **Deliverables:**
    - Write Bifrost chain client integration software, add Zcash daemon support.

### Milestone 3

- **Amount:**
  77478.0
- **Expected Completion Date:**
  3/31/2024

  - **Deliverables:**
    - Ship unit tests and xchainjs wrapper to enable Zcash swaps in one Thorchain client.

### Milestone 4

- **Amount:**
  25826.0
- **Expected Completion Date:**
  6/30/2024

  - **Deliverables:**
    - Deliver Bifrost chain client integration PRs with ancillary Python caller code. Sync with Thorchain team & liquidity partner to deploy Zcash swaps.

### Additional Milestones

- **Additional Milestones:**
  Yes

### Submission Date

- **Submission Date:**
  2023-01-19 19:16:24

### File Attachments


