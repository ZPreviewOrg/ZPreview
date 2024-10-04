---
title: "Zenith Full Node Wallet"
status: "Accepted"
amount: "124800.0"
submitter: "[REDACTED] [REDACTED]"
email: "[REDACTED]"
date: "2024-01-09 21:27:00"
project_name: "Zenith Full Node Wallet"
summary: "The Zcash ecosystem needs a modern full node wallet and Zecwallet has left a gap that we intend to address with this grant."
total_grant_value: "124800.0"
submitter_last_name: "[REDACTED]"
original_title: "Zenith Full Node Wallet"
labels:
  - APPROVED
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
  Zcash Community Forums
- **Original Title:**
  Zenith Full Node Wallet

- **Labels:**
  - APPROVED
  - MILESTONE 1: COMPLETE
  - MILESTONE 2: COMPLETE

### Project Overview

- **Project Name:**
  Zenith Full Node Wallet
- **Last Updated:**
  2024-01-09 21:27:00
- **Sponsorship Request:**
  No
- **Project Image (Public Gallery):**
  vtechlogoletter.png
- **Project Summary:**
  The Zcash ecosystem needs a modern full node wallet and Zecwallet has left a gap that we intend to address with this grant.

### Project Description

- **Overview:**
  The first product derived from our work in building ZGo is Zenith, the Zcash Full Node CLI wallet. Zecwallet has left a void in the Zcash ecosystem for users that run their own full nodes and use the node's wallet for ZEC transfers. Zenith can fill this void. Also, with the announcement from ECC that `zcashd` will be retired on 2024, Zenith can provide the full node wallet functionality on `zebra`. Building a modern full node wallet allows us to make many improvements that have been discussed by the community: - Deprecate standalone transparent addresses, only supporting them under Unified Addresses. - Remove transparent-only versions of the RPC endpoints. - Implement Unified Viewing Keys with functionality already available in `zcash-haskell`. - Implement auto-shielding of ZEC and auto-migration to the Orchard shielded pool.
- **Proposed solution:**
  Create a full node wallet with a GUI that allows users to send and receive Zcash transactions and perform other tasks related to full nodes. The Zenith Full Node Wallet shall be built using the same full node RPC endpoints that `lightwalletd` uses. This allows our team to start working right away using `zcashd` as the full node and then to run on `zebra` nodes, once `zebra` supports the needed RPC endpoints.
- **Solution Format:**
  The new Zenith Full Node Wallet shall have a GUI with functionality to: - Create new accounts and new addresses. - Display received transactions. - Send ZEC to Unified, Sapling, and transparent addresses. - Send shielded memos to Unified and Sapling addresses. - Maintain a local address book. - Generate Payment Request URIs and QR codes. - Accept Payment Request URIs to generate transactions. - Load Sapling and Unified viewing keys. The new Zenith Full Node Wallet shall have a set of GUI endpoints that allow applications to interact with the wallet programatically via HTTP requests. The new Zenith Full Node Wallet shall have a GUI to provide full nodes without graphic interfaces (cloud servers) with wallet functionality.
- **Dependencies:**
  - `zcash-haskell` library - `zcashd` functionality - `zebra` support for the RPC endpoints used by `lightwalletd`: - `getinfo` - `getblockchaininfo` - `getbestblockhash` - `z_gettreestate` - `getblock` - `getrawtransaction` - `sendrawtransaction` - `getrawmempool` - `getaddresstxids` - `getaddressbalance` - `getaddressutxos`
- **Technical approach:**
  Figure 1 shows the proposed architecture for Zenith. The GUI shall be built on OpenGL and Haskell. The wallet shall leverage the functionality available on the `zcash-haskell` library and new enhancements planned to interact with `zcashd` or `zebra` and provide additional functionality. The transaction storage shall be built on a local SQLite database for portability and ease of installation. The wallet RPC server shall be built on Haskell and run on a different port than the RPC server provided by `zcashd`/`zebra`. Figure 2 shows an example of the graphical capabilities of this approach.

### Requested Grant Amount

- **Amount:**
  124800.0

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
  124800.0
- **Compensation justification:**
  The compensation is based on an estimate of 39 weeks of work, at 40 hours per week, at $80 per hour.
- **Startup funding required:**
  No
- **Total proposed grant value:**
  124800.0

### Team Members

- **Project Lead:**
  Vergara Technologies LLC
- **Background:**
  We are a father-and-son team with decades of combined experience in technology consulting, project management, digital product management in South America and the United States. - Rene Vergara Larrea, MSc, PMP - Senior Technical Product Owner for a Fortune 50 insurance firm in the US, working with Java, ReactJS and MongoDB. - Creator of ZGo. - Rene Vergara Araque, MBA, MPM - Developer for ZGo, maintainer of ZGo's website. - Creator of [GeoVSU](https://www.tecproval.com/geovsu.php), a GIS-enabled web application for the real estate market in Ecuador. - Creator of the [educational videos](https://www.youtube.com/watch?v=1kwbLY8CkjY) for GeoVSU. - Former CEO of AT&S Consultores, a technology consulting firm in Quito, Ecuador.

### Funding History

- **Previous funding:**
  Yes
- **Previous funding details:**
  Received a grant for the creation of ZGo, and another grant for support for ZGo on 2024.
- **Other funding sources:**
  No

### Risks and Evaluation

- **Execution risks:**
  Zenith is an application that relies on a Zcash full node for its functionality, therefore changes to the full node implementations can potentially impact Zenith's features. Our proposed solution assumes that `zebra` will have all the RPC endpoints needed for our application implemented in a similar way as they are implemented by `zcashd`. Any large divergence in functionality between `zebra` and `zcashd` will likely require additional work for Zenith to support `zebra`. To mitigate this risk, our proposed solution uses a small subset of the RPC endpoints that are common between `zcashd` and `zebra`.
- **Unintended Consequences:**
  Having the functionality of the wallet separated from the full node itself may mean that apps that interact with `zcashd` full nodes will have to update their systems to use Zenith. Also, there may be some duplication of effort with other teams in the ecosystem.
- **Evaluation plan:**
  We will conduct a survey after each milestone to estimate how many users in the community are using the wallet, and gather feedback and potential new feature requests.

### Project Timeline

- **Project timeline determination:**
  The project timeline was determined by a decomposition of the scope and a bottom-up estimation of the time to code, test and document the features proposed.

### Milestone 1

- **Amount:**
  31200.0
- **Expected Completion Date:**
  4/12/2024

  - **Deliverables:**
    - Command Line Basic Wallet

### Milestone 2

- **Amount:**
  31200.0
- **Expected Completion Date:**
  6/14/2024

  - **Deliverables:**
    - Command Line Address Book
    - Graphic Basic Wallet

### Milestone 3

- **Amount:**
  31200.0
- **Expected Completion Date:**
  8/16/2024

  - **Deliverables:**
    - Command Line URI functionality
    - Grapic Address Book
    - Graphic URI functionality
    - API Basic functionality

### Milestone 4

- **Amount:**
  31200.0
- **Expected Completion Date:**
  11/1/2024

  - **Deliverables:**
    - Command Line Viewing Keys
    - Graphic Viewing Keys
    - API Address Book
    - API URI functionality
    - API Viewing Keys

### Additional Milestones

- **Additional Milestones:**
  Yes

### Submission Date

- **Submission Date:**
  2024-01-09 21:27:00

### File Attachments

- **proposal.pdf**: [Additional documentation]

