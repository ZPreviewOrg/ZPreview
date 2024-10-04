---
title: "DeFi for ZEC: Shielded ZEC DeFi wallet for Ethereum, BSC and Polygon"
status: "Declined"
amount: "1385000.0"
submitter: "[REDACTED] [REDACTED]"
email: "[REDACTED]"
date: "2022-07-08 17:01:09"
project_name: "DeFi for ZEC: Shielded ZEC DeFi wallet for Ethereum, BSC and Polygon"
summary: "Advanced DeFi integrations and wallet for ZEC made possible by the RAILGUN Privacy System, available today on Ethereum, BSC and Polygon"
total_grant_value: "1385000.0"
submitter_last_name: "[REDACTED]"
original_title: "DeFi for ZEC: Shielded ZEC DeFi wallet for Ethereum, BSC and Polygon"
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
  Members of the Electric Coin Company team
- **Original Title:**
  DeFi for ZEC: Shielded ZEC DeFi wallet for Ethereum, BSC and Polygon

- **Labels:**
  - OPEN

### Project Overview

- **Project Name:**
  DeFi for ZEC: Shielded ZEC DeFi wallet for Ethereum, BSC and Polygon
- **Last Updated:**
  2022-07-08 17:01:09
- **Sponsorship Request:**
  No
- **Project Image (Public Gallery):**
  Zcash_Railgun.png
- **Project Summary:**
  Advanced DeFi integrations and wallet for ZEC made possible by the RAILGUN Privacy System, available today on Ethereum, BSC and Polygon

### Project Description

- **Overview:**
  Zcash is a digital currency with the strongest privacy features on the current market. ZEC enables end-to-end private, efficient and safe value transfer with low fees. This purpose is closely aligned with the priorities of Right To Privacy, which aims to support projects that advance the usage and market depth of privacy, especially within the cryptocurrency ecosystem. As it stands, Zcash is currently limited by functionality restraints – it is currently used primarily as a system for private value transfer and a private memoing system. Advanced cryptocurrency use cases, such as staking, liquidity provisioning, token swapping and other Decentralized Finance tools, are currently inaccessible or challenging to access for ZEC users. If Zcash is to reach its goal of a billion regular users, it will require many more complex interactions and capabilities, including advanced DeFi functionality.
- **Proposed solution:**
  We at Right to Privacy believe that DeFi functionality through the RAILWAY WALLET will dramatically increase the usability, security, adoption and accessibility of Zcash/ZEC, helping to enable long-term scalability to a billion users. For one, this will enable users to buy Zcash with USDT/USDC directly, via DEX trading, with no party in the middle. It will also allow anonymous & private yield deposits of ZEC in DeFi contracts on other chains (Ethereum, Polygon etc.) to earn interest from lending ZEC. We propose an integrated wallet solution for ZEC balances, which is embedded into the privacy-centric RAILWAY WALLET. This wallet will be available on all common platforms, including desktop web, native mobile iOS and Android. This Zcash-integrated wallet will be capable of dApp functionality that makes it incredibly easy to bridge ZEC to Ethereum, BNB Smart Chain, and Polygon through Ren Protocol, with the end-to-end privacy of RAILGUN. For example, this means that renZEC assets will be entirely shielded in the RAILGUN asset pool after they are bridged to Ethereum. This will be accomplished using a custom Zcash RAILGUN Adapt module, and means that users can enjoy anonymity while performing any ZEC DeFi interactions, as well as end-to-end privacy when bridging ZEC between Ethereum, BNB Smart Chain, Polygon and the Zcash chain itself. Furthermore, multi-chain renZEC assets will enable advanced DeFi interactions. Through the RAILWAY WALLET, users will be able to stake shielded renZEC, privately provide liquidity of renZEC, and use a multitude of dApps anonymously with ZEC on the click of a button. The proposed Zcash RAILWAY WALLET integration will unite privacy evangelists under a single secure platform, which greatly extends the functionality of ZEC/Zcash, and will be usable on both desktop and mobile devices, with security and anonymity established at the very core.
- **Solution Format:**
  Wallet applications: RAILWAY: Privacy-first web application with a top-level Zcash wallet integration deployed at railway.xyz , available worldwide. RAILWAY: Privacy-first mobile application with a top-level Zcash wallet integration deployed to App Store and Google Play, available worldwide. New features: Transfer and store ZEC in a private Zcash balance in RAILWAY WALLET Bridge ZEC directly to shielded renZEC on Ethereum, BSC and Polygon Swap shielded ERC20 tokens directly to private ZEC balance Stake shielded renZEC tokens to earn rewards Provide liquidity through shielded renZEC tokens In the future, bridge ZEC to shielded renZEC on Arbitrum and Solana
- **Dependencies:**
  We require very little direct development support from ZF, ECC or external Zcash developers – the final products can operate without new ZIPs. However, it will be helpful to have guidance from Zcash engineers on SDK usage, connectivity, debugging, test environments and cross-chain development. We’re in touch with the REN Protocol team, and will look for guidance from them on REN protocol development and debugging. Similarly, we are already connected to the 0x Exchange team, and will look to them for guidance on 0x protocol development and debugging.
- **Technical approach:**
  [Please view the attached PDF document for a Technical Approach with Diagrams] Here are our primary product goals for this integration. Usability : Just over $1 million of renZEC has been minted on Ethereum to date. Easier access to private DeFi functionality can increase this by a large margin over the first year. Currently, users have to bridge their ZEC into a public Ethereum balance in order to gain access to staking and liquidity provisioning. Through the RAILWAY WALLET, ZEC can be bridged to a shielded renZEC balance, which is apt for Zcash proponents. This will unlock a slew of new functionality and use cases, entirely privately. Privacy + Security: The RAILWAY WALLET is the most private and secure blockchain wallet on the market today. Unlike most web and mobile applications, there is no backend storage system for RAILWAY, and every data piece is stored heavily-encrypted, offline, on-device. Security features are baked into the application core and user experience. For example, a PIN or password is required when the application accesses the user’s private key or seed phrase; this password is hashed to reference an encryption key that is used to store sensitive data onsite. User Agent data is stripped from external data requests. Shielded contract executions are dispatched through a Relayer network, which uses Waku protocol for anonymous, decentralized communication. The RAILWAY Zcash integration will inherit these strong privacy standards and security fundamentals as instilled and validated by four auditors to date: ABDK, Zokyo, Trail of Bits and Hacken. Adoption : We aim to make it easy for users to adopt the Zcash privacy system, obtain ZEC privately (off-exchange) and bridge shielded ZEC into their Zcash balance. RAILGUN and Ren protocol can enable one-click swaps into a private ZEC balance on Zcash. And it will be fully private, end to end. Here’s how it will work: A user shields an ERC-20 token (say, WBTC) into their private RAILGUN balance on Ethereum. The user initiates a private swap from their shielded RAILGUN balance. This contract call uses the RAILGUN Relay Adapt module and 0x Exchange to swap WBTC for renZEC. The renZEC can be either automatically deposited back into their shielded ETH balance, or bridged directly to the user’s Zcash ZEC wallet through their shielded address. Accessibility : The Zcash RAILWAY WALLET integration will be available through a public web interface, accessible via browser at railway.xyz . It will also be installable through a native application on mobile devices, including native iOS and Android apps. The RAILWAY WALLET will be internationalized to a variety of languages, making it one of the most accessible places to store, transfer and use ZEC for all kinds of DeFi applications, anywhere in the world.

### Requested Grant Amount

- **Amount:**
  1385000.0

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
  1385000.0
- **Compensation justification:**
  The team aims to allocate 3-4 senior frontend engineers, smart contract developers and design/product staff to each milestone/project. The exact figure may vary depending on overall scope and timeline constraints. Budget was determined by an estimate of $5,000 per developer-week, plus additional budget for project management, product testing, and quality assurance.
- **Startup funding required:**
  No
- **Total proposed grant value:**
  1385000.0

### Team Members

- **Project Lead:**
  The Right to Privacy Foundation
- **Background:**
  Right to Privacy Foundation The Right to Privacy Foundation ("Right to Privacy") is a UK-based non-profit organization that conducts privacy focused research, particularly within the software & blockchain sphere, creating strong relationships with cryptographers and developers. Right to Privacy has proven to be an extremely effective developer and organizer of new privacy-focused tools. Right to Privacy was the first to develop a Groth16 zk-snarks prover for mobile, and successfully funded the development of the RAILWAY WALLET , which combines both RAILGUN privacy technology and Status.im Waku privacy technology for a multi-chain anonymity wallet This wallet has been audited by Trail of Bits and works today on web. Based on this demonstrated success, Right to Privacy is confident to produce new, working privacy wallet software quickly and reliably. Right to Privacy holds contracts with privacy focused developers who will be building the advanced shielded ZEC DeFi integrations for Ethereum, BSC and Polygon. The team’s members are also big fans of the Zcash movement. – RAILGUN Privacy System Additionally, core contributors of the RAILGUN project team have set aside time to assist in this grant’s design and development efforts. 
  The RAILGUN Privacy System is a smart-contract-based private wallet system that enables anonymous DeFi interactions. It currently operates on Ethereum , BNB Smart Chain , Polygon and Ropsten Testnet , with plans to expand to Solana, Polkadot, Arbitrum and Near in the coming year. Most recently, RAILGUN became the first smart contract system to enable end-to-end private token swaps of ERC-20 assets. The RAILGUN Privacy System is developed by the RAILGUN DAO, a decentralized organization with global contributors.

### Funding History

- **Previous funding:**
  No
- **Other funding sources:**
  No

### Risks and Evaluation

- **Execution risks:**
  The technical process has been de-risked, as the RAILGUN v1 protocol was deployed in May 2022, and the RAILWAY WALLET launched in June 2022. The team has extensive experience shipping large-scale products to production, across distributed web, mobile and smart contract layers, so there are few execution risks on the technical side. There is a small risk for deployment to the Apple App Store. Apple has an extensive iOS App Store review process, and can restrict app launches for a number of reasons. However, the RAILWAY WALLET iOS app was previously approved with Ethereum, BSC, Polygon and Ropsten integrations, so we are optimistic that the Zcash integration will not pose a significant hurdle.
- **Unintended Consequences:**
  As with any large-scale software product, the Zcash-RAILWAY integration will require considerable long-term maintenance. We have budgeted for a period of 6 months of hard-core product engineering, as well as 12 months of technical support and iterative development, during which period we will have developers on-call to respond to feedback and fix issues as appropriate. Continual development of a released product also requires continuous QA and user testing. These may cut into time devoted to Right to Privacy’s other priorities, but we are prepared to commit to supporting the Zcash integration at our fullest capacity, no matter the opportunity cost.
- **Evaluation plan:**
  Quantitative statistics: Amount of minted renZEC (across Ethereum, BNB Smart Chain and Polygon) Zcash adoption and usage rates Number of daily/monthly active Zcash wallets app.railway.xyz web traffic metadata RAILWAY mobile app install rates on iOS and Android Qualitative observations: Commentary on ease of integration User feedback and issue reports

### Project Timeline

- **Project timeline determination:**
  The project timeline is based on the current team size, allocated headcount, and modest growth expectations. We have estimated a number of hours for development based on prior projects that our team has delivered. We have also budgeted for appropriate testing and release schedules based on size and complexity of each project/feature.

### Milestone 1

- **Amount:**
  280000.0
- **Expected Completion Date:**
  10/14/2022

  - **Deliverables:**
    - Zcash/ZEC RAILWAY WALLET integration and NU5 support, web and mobile

### Milestone 2

- **Amount:**
  115000.0
- **Expected Completion Date:**
  10/28/2022

  - **Deliverables:**
    - renZEC integration for in-wallet bridging to private DeFi

### Milestone 3

- **Amount:**
  150000.0
- **Expected Completion Date:**
  11/25/2022

  - **Deliverables:**
    - renZEC shielded staking, including shielded NFT mint

### Milestone 4

- **Amount:**
  125000.0
- **Expected Completion Date:**
  11/25/2022

  - **Deliverables:**
    - 0x integration for private swaps from ZEC (Zcash) to any shielded ERC20 asset

### Additional Milestones

- **Additional Milestones:**
  Yes

### Submission Date

- **Submission Date:**
  2022-07-08 17:01:09

### File Attachments

- **Railgun_Project_Whitepaper_-_July_2021.pdf
Railgun_Audit_Report_-_ABDK_July_2021.pdf
Railgun_Audit_Report_-_Zokyo_November_2021.pdf
Technical_Approach_with_diagrams.pdf**: [Additional documentation]

