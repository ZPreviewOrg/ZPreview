---
title: "Zcash-Avalanche Elastic Subnet Bridge"
status: "Accepted"
amount: "210433.0"
submitter: "[REDACTED] [REDACTED]"
email: "[REDACTED]"
date: "2023-04-05 18:16:24"
project_name: "Zcash-Avalanche Elastic Subnet Bridge"
summary: "Bridge assets between Zcash and Avalanche using permissionless Subnet architecture"
total_grant_value: "210433.0"
submitter_last_name: "[REDACTED]"
original_title: "Zcash-Avalanche Elastic Subnet Bridge"
labels:
  - APPROVED
  - MILESTONE 1: COMPLETE
  - MILESTONE 2: COMPLETE
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
  From the website
- **Original Title:**
  Zcash-Avalanche Elastic Subnet Bridge

- **Labels:**
  - APPROVED
  - MILESTONE 1: COMPLETE
  - MILESTONE 2: COMPLETE
  - OPEN
  - Start Up Funding COMPLETE

### Project Overview

- **Project Name:**
  Zcash-Avalanche Elastic Subnet Bridge
- **Last Updated:**
  2024-03-20 18:04:21
- **Sponsorship Request:**
  No
- **Project Image (Public Gallery):**
  zcashavalanchebridge-Icon.png
- **Project Summary:**
  Bridge assets between Zcash and Avalanche using permissionless Subnet architecture

### Project Description

- **Overview:**
  We propose to build software to provide querying and asset bridging between Zcash and Avalanche using permissionless “Elastic” Subnet architecture that has just been released on Avalanche. Zcash and Avalanche together provide a complete cryptocurrency solution. Zcash provides the privacy needed, and Avalanche provides the speed and scalability necessary to become a global financial backbone. Zcash has built a community that is at the forefront of privacy research, an area on which Avalanche has just begun to focus. At the same time, Zcash runs the risk of becoming a footnote in history due to its lack of interoperability with modular platforms such as Avalanche, Cosmos, and Polkadot. This Subnet would be one way to keep Zcash connected and relevant to the wider ecosystem. The time is right. Projects are building connections between Avalanche and Cosmos (Landslide), between Cardano and Cosmos , and between Zcash and THORChain . Avalanche has recently matured enough to support this project with both Inter-Subnet Messaging (ICM) and Elastic Subnets now in production .
- **Proposed solution:**
  The overall project vision can be divided into three parts: Create bridging software that uses an Elastic (permissionless) Subnet on Avalanche, and deploy a production-ready, fully-functional version of this software with a GUI to the Avalanche and Zcash testnets. Deploy this bridging software to production on a new Avalanche Elastic Subnet on Avalanche's mainnet. Create another Elastic Subnet that runs Zcash-on-Avalanche, including support for shielded transactions, and supports bridging from Zcash using the new Zcash-Avalanche bridge. The scope of this proposal covers Part 1 only. In the meantime, we can take steps to prepare for Part 2 and Part 3, but these will have to be completed separately. The reason for this is that actual deployment of bridge and Zcash Subnets involves stakeholders beyond red·dev and the ZCG Committee, in particular, the Zcash Foundation and perhaps Ava Labs and the Avalanche Foundation as well. For instance, from the discussion on the forum , we have discovered that token design, issuance, and tokenomics all require more discussion. However, we can start building the bridging software (Part 1) right away since these decisions do not affect the bridging software design, and in the interest of time, we should do so.
- **Solution Format:**
  There are three final deliverables: The software deliverable for this proposal, Part 1 as described above, are git repos for the bridging software and for the bridge GUI (webapp or wallet plugin), including both software and documentation. In addition, we will create a test Subnet on the Avalanche Fuji Testnet running three nodes, funded for one year, and we will publish the GUI (webapp or wallet plugin) that allows you to bridge test ZEC from the Zcash testnet to ZEC.z on Fuji's C-Chain and back again, also funded for one year. We will also deliver proposals for Part 2 and Part 3 of this project, in the same format as this proposal for Part 1.
- **Dependencies:**
  Technical Dependencies From a technical point of view, we will only depend on Ava Labs platform team maintaining the same pace as they have for the past two years as they release new features related to Subnets. For instance, next on their roadmap is connecting AWM to the C-Chain, which is necessary for bridging. There is no reason to suspect that they will slow down; their funding is solid, their team is committed, and Avalanche's ongoing success depends on Subnets. However, it is still a dependency. Aside from this, the prerequisite software and tech is already in place, and it is all open source and permissionless. Community Dependencies Just as important for the long-term success of this project is buy-in from both the Zcash and Avalanche communities. While certainly not everyone needs to support the project for it to succeed, some support will still be required. Not only that, but both the Avalanche and Zcash communities will have to work together to some extent. As Kit wrote on the forum, it would be best if the communities think of this bridge as an international bridge like the Peace Bridge between the US and Canada rather than as the property of one platform or the other. Signs of community support are excellent so far. On the Zcash side, ECC CEO Zooko enthusiastically tweeted out our preliminary proposal as soon as he saw it posted on the forum, "Very, very cool. A proposal to implement Avalanche↔Zcash bridging!" Recent Zcash Foundation board member Matthew Green replied enthusiastically as well, "Why stop at bridges? Create a Zcash custom chain over on Avalanche with a 1:1 ZEC peg, enforced using ZK across both chains. Then Avalanche has a privacy layer, you can have a PoS chain for Zcash, and pegged ZEC tokens can move to the EVM chain and natively access DeFi," supporting what we describe in this proposal as "Part 3." On the Avalanche side, there is also enthusiasm. Ava Labs CEO Emin Gün Sirer replied to Green immediately, saying, “Exactly. This sounds like a great idea.” (Ava Labs is the Avalanche equivalent of ECC, but unlike in the relationship between ECC and the Zcash Foundation, Sirer also has considerable influence over the Avalanche Foundation.) Phillip Liu Jr., Head of Strategy at Ava Labs, quote-tweeted Zooko's tweet using the emoji of the two interested eyes looking leftward . A number of others also quote-tweeted indicating their positive interest . Back on the Zcash side, discussion on the forum thread has been robust , with community members, including Green, contributing ideas and asking important questions. So, community support appears to be strong indeed. Looking forward, development will be expedited with support from Ava Labs' Developer Relations department. The red·dev team has worked with them before and has an amiable working relationship with Developer Evangelist Gabriel Cardona as well as with other team members. (Cardona was on the panel of judges that awarded the prizes we have won from Avalanche.) Looking ahead to Part 3—the creation of a Zcash-on-Avalanche Subnet—we have reached out to the lead developer of another project, Zapa , who has already made progress toward this goal. He reached out to the Zcash community last year . Though he is now preoccupied with other work, he expressed his support for our bridge proposal and his interest in connecting Zapa with this project.
- **Technical approach:**
  Tools For project management, we will use Odoo (ERP software) for overall financial, time and progress tracking, and we will use Gitlab repos for software-specific features, issues, and workflows. We will publish deliverables to red·dev's public Github repo as specified by milestone. For our development environment, we will use VSCode with git and other plugins. We will use Google Workspace apps for comm, file storage, etc. For UX and UI design, we will use Adobe XD. For diagrams, we will use Umbrello and Pencil in addition to Google tools. We already have successfully used this same set of tools for Fund Raisin and other software projects, so there is no learning curve, and we have a reliable system in place with regular backups. Services We will use Azure cloud for deployments, as Microsoft supports Intel SGX while Amazon and Google do not, and we also have a prior relationship with an Azure network engineer. Project Steps 1. We will begin by creating a preliminary PoC that supports querying testnet Zcash transactions from an Avalanche Subnet on Avalanche's Fuji testnet using a command line interface. It may seem odd to jump into coding so quickly, but this will allow us to explore the technologies involved using a practical use case. Since the technologies of Subnets, the Core wallet, Avalanche Warp Messaging are all brand new, it makes sense to actually try them out in a test case before we build anything more substantial. This will also give us a real-world opportunity to enhance our working relationship with Ava Labs' Developer Relations department, on which we will depend throughout. It will also give the technically-minded members of the Zcash community an opportunity early on to "kick the tires" and get familiar with how things work on the Avalanche side. Concurrently, we will study Intel's SGX tech, which is new to us. 2. We will then create a series of UML structural and behavioral diagrams that describe the bridge software, which together will comprise the software specification for the bridge. Structural diagrams used will be Class , Component , and Deployment . Behavioral diagrams used will be Use Case , Activity , Sequence , and Communication/Collaboration . 3. We will then review these UML diagrams with experts to make sure our design is sound and our plan of attack is reasonable. 4. We will then build the bridge and bridge GUI (webapp or plugin). The exact order of building will be determined after the UML specification is complete. Our general strategy when building is to have each team member start out working on separate aspects of the project, and then to help each other out as we get further along so that we can all support the software overall. 5. Once built, we will deploy the software and submit it to audit. Once the auditor is satisfied that the bridge software is ready to deploy, we will publish and deploy it to the testnets as described above. We will also publish the auditor's report.

### Requested Grant Amount

- **Amount:**
  210433.0

### Budget Breakdown

- **Hardware/Software budget:**
  0.0
- **Hardware/Software justification:**
  N/A
- **Services budget:**
  52753.0
- **Services justification:**
  Azure hosting for Subnet nodes with SGX for 38 + 52 weeks, and web hosting for 12 + 52 weeks ($16,752 total). Outside consulting services are also included here ($30,000 for an audit and $6,000 for Azure and other outside consulting expertise as needed).
- **Compensation budget:**
  157680.0
- **Compensation justification:**
  Dev team for a total of 3660 person-hours. Includes 20% overhead for company admin functions. Individual compensation rates are confidential and will be shared with the ZCG Committee on request.
- **Startup funding required:**
  Yes
- **Startup funding explanation:**
  Startup funding will cover initial dev team salaries and will cover initial expenses related to Azure SGX VM hosting. Amount was calculated by taking 10% of dev team total salaries.
- **Startup funding amount:**
  12032.0
- **Total proposed grant value:**
  210433.0

### Team Members

- **Project Lead:**
  red·dev
- **Background:**
  The red·dev team has dug deep into Avalanche since the Denali Testnet . We maintained a bare-metal validator through many upgrades and have explored each new feature as it has been released, including having built Subnets. Along the way, we have won prizes that have required us to apply what we have learned. For instance: In 2020, we won a second place prize for this project which required interoperability with Chainlink . In 2021, we won two awards for describing how to set up querying of Avalanche from Chainlink and how to use Solidity to verify X-Chain signatures on the C-Chain . In 2022, we wrote this tutorial that required us to become deeply familiar with Avalanche Subnet architecture and won $5,000 from Avalanche . red·dev is also the creator of Fund Raisin, a crowd-funding platform like Kickstarter or GoFundMe with NFTs as awards, live on the Avalanche mainnet C-chain. It is in a public beta with our latest campaign, Earthquake Relief Fund in Turkiye . Though Fund Raisin operates a few layers higher in the stack than the Subnet we propose, it provides an example use case for how Zcash on Avalanche would be usefully connected, as donors often like to donate to causes anonymously. Fund Raisin also illustrates that the red·dev team has the ability to build and ship elegant and functional software. Our CEO, Kit Sturgeon, who has been in crypto since 2013 and initially became familiar with Zooko before Zcash through Tahoe LAFS, has followed Zcash since its inception. With a technical background in both network security and data-centric software applications, he has over 30 years of experience building and shipping custom software solutions across many industries, including Wall Street financial services, and including four years leading members of the current team. Some red·dev team members have requested pseudonymity, so we are using initials instead of names for all. Software engineering team members, all of whom contributed to the award-winning projects described above, include TS and AM. When TS is not working with red·dev , he is a Solutions Architect for one of India’s biggest tech companies and supervises a group of eight developers. AM holds a Masters in Computer Science from St. Xavier's College in Kolkata, and she is currently furthering her education at George Brown College in Toronto. OG and MA will be responsible for testing and quality assurance. The UX will be built by AL (the designer behind the logo above and Fund Raisin) assisted by MA. MG will provide support for all financial matters, and ZH works as Kit’s administrative assistant and as red·dev’s social media manager. We also have the support from technical experts as consultants. Network engineer MA manages the Microsoft Active Directory for a large university and is an Azure expert. GB is a veteran Apple software engineer where he worked for over 17 years. An expert troubleshooter, his last project at Apple was rewriting the MacOS kernel to improve its crash reporting capabilities. Both MA and GB are available to consult as needed with the red·dev core team. Though our team has the necessary experience and expertise to successfully build this bridge, we will need to develop some new skills along the way, such as coding using Intel SGX. This is not unusual for us; the same has been true for every project we have successfully completed together, and we have already gathered the prerequisite skills (such as using cryptographic primitives and understanding both UTXO/bitcoin and account/EVM addressing implementations) to deal with the complexities of interacting with SGX as well as both the Zcash and Avalanche platforms. Twitter: @reddevinc (company), @mrkit2u (CEO), and @fundraisinapp (product).

### Funding History

- **Previous funding:**
  No
- **Other funding sources:**
  No

### Risks and Evaluation

- **Execution risks:**
  The two largest execution risks are (1) that we are building on bleeding-edge technology, and (2) bridges are honeypots for hackers. In addition, there is some regulatory risk. New Tech Because Subnet tech on Avalanche is so new, there is a higher chance of it having bugs, halting, having security vulnerabilities, or just not delivering on its promises. We would not even propose this project if we thought these risks were large and/or long term. However, it may take Ava Labs some time to fix initial problems that crop up as it deploys new features, which could delay the project. Similarly, the Core wallet—the GUI wallet software produced by Ava Labs that is optimized for Subnets and bridging—is new, so we may encounter difficulties building a plugin to it to give users GUI access to the bridge. That is why we may need to fall back to building a webapp GUI to support bridging. Software Defects leading to Bridge Hacks As we have seen, cross-chain bridges are lucrative targets for hackers. Bridges can easily secure billions of dollars of assets. Subnet architecture mitigates this risk somewhat, as the Subnet itself is a mini blockchain, secured with the same tech that secures Avalanche's mainnet chains. In this way, we will leverage existing security tech rather than trying to reinvent the wheel. Still, buggy software could still give a hacker an opening for attack. For this reason, the project includes hiring an auditing firm to review all code for vulnerabilities. Also, the software source code will be published, allowing both the Zcash and Avalanche communities to find and fix defects. Regulatory Risk Governments and regulatory bodies are finally focusing on crypto, and this could also provide additional hurdles for a project. These risks, however, will have an impact later, during deployment, and not during Part 1. For instance, it's possible that the US government could determine that all crypto assets are securities. This would add a large compliance burden to any entity releasing new tokens, such as bridged tokens and tokens used to secure a permissionless Subnet. Luckily, the crypto industry is not only international, but also gaining influence in Washington. Indeed, Ava Labs CEO Sirer, who has tweeted his support for a Zcash-Avalanche connection, now sits on a technical advisory board to the CFTC .
- **Unintended Consequences:**
  The project will require long-term financial support for Part 2 and Part 3 to promote usability, stability, privacy, integrity, availability, decentralization, interoperability, maintainability, technical debt, requisite education, and so on. Both the bridging Subnet and the Zcash-on-Avalanche Subnet will benefit from institutional support, just as Zcash receives support from ECC and ZF, and Avalanche receives support from Ava Labs and the Avalanche Foundation. A large amount of Zcash could transfer through the bridge to Avalanche. Depending on the amount, this may have unintended impacts on both platforms.
- **Evaluation plan:**
  Our evaluation will be for the success of Part 1, building and deploying the bridging software to testnets. Audit success . We will publish the auditors' reports and track all corrections and mitigations made in our public Github repo, including the seriousness of each issue found. User reviews . We will publish a quarterly summary of the feedback provided by testers/users of the software. Community engagement . We will publish a quarterly summary of community engagement, including downloads, forum posts, and bridging statistics. Spin-off projects launched . We will publish a quarterly report of all new projects built that depend on this bridge. For example, one could be ZK services on Avalanche using Zcash. Enthusiasm around moving ahead on Part 2 and Part 3 . We will publish a quarterly summary about this as well.

### Project Timeline

- **Project timeline determination:**
  The project timeline was determined based on current knowledge, team capabilities, complexity and size of project, and experience. Note: the timeline will be refined for Deliverable 2.2. Milestone payouts were determined by dividing total payment (excluding startup payment) into seven equal portions and paying out one portion per milestone except for the final milestone where two portions are paid.

### Milestone 1

- **Amount:**
  28343.0
- **Expected Completion Date:**
  6/1/2023

  - **Deliverables:**
    - Preliminary PoC that supports querying testnet Zcash transactions from a testnet Avalanche Subnet with a CLI, published on Github and with a one-node Subnet on the Avalanche testnet

### Milestone 2

- **Amount:**
  28343.0
- **Expected Completion Date:**
  7/14/2023

  - **Deliverables:**
    - Final set of UML diagrams (as listed above) for project specification after reviews
    - Revised milestone estimated completion dates based on UML spec and performance to-date

### Milestone 3

- **Amount:**
  56686.0
- **Expected Completion Date:**
  4/30/2024

  - **Deliverables:**
    - A written analysis posted to the forum of whether or not FROST should replace BLS for threshold signature signing, and if so, a redesign of UML diagrams to reflect this change.
    - Implementation of security best practices to protect ZavaX Oracle subnet, and a report posted to the forum describing our penetration tester’s attempt to stop the ZavaX Oracle subnet from operating.
    - The addition of functionality to enable easy verification all past blocks on all ZavaX Oracle nodes and a notification of this new feature posted to the forum.

### Milestone 4

- **Amount:**
  28343.0
- **Expected Completion Date:**
  5/31/2024

  - **Deliverables:**
    - Support for bridging ZEC to ZEC.z in both directions on testnets, with a one-validator Subnet, to C-Chain (assuming supported) or Subnet
    - UX and UI design for GUI completed

### Additional Milestones

- **Additional Milestones:**
  Yes

### Submission Date

- **Submission Date:**
  2023-04-05 18:16:24

### File Attachments


