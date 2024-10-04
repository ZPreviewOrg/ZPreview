---
title: "Zcash Wallet Community Developer 2024 Q2"
status: "Accepted"
amount: "45000.0"
submitter: "[REDACTED] [REDACTED]"
email: "[REDACTED]"
date: "2024-04-02 19:53:02"
project_name: "Zcash Wallet Community Developer 2024 Q2"
summary: "A “floating” wallet developer that contributes to different Zcash wallet teams and supports ZCG to articulate community-funded efforts"
total_grant_value: "45000.0"
submitter_last_name: "[REDACTED]"
original_title: "Zcash Wallet Community Developer 2024 Q2"
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
  ZCG
- **Original Title:**
  Zcash Wallet Community Developer 2024 Q2

- **Labels:**
  - APPROVED
  - MILESTONE 1: COMPLETE
  - MILESTONE 2: COMPLETE

### Project Overview

- **Project Name:**
  Zcash Wallet Community Developer 2024 Q2
- **Last Updated:**
  2024-04-17 22:08:32
- **Sponsorship Request:**
  No
- **Project Image (Public Gallery):**
  zwcd.png
- **Project Summary:**
  A “floating” wallet developer that contributes to different Zcash wallet teams and supports ZCG to articulate community-funded efforts

### Project Description

- **Overview:**
  Zcash is one of the most reputable projects of the crypto space, not only has the most advanced Zero-Knowledge Cryptography, furthermore it spawned a novel concept in the crypto space (not without controversy): a Dev Fund to provide self-sustainability to the project and committee that its community elects to distribute a portion of this fund in the form of grants. This fund allowed several teams to grow and orbit the Zcash ecosystem delivering a lot of value in different grants such as ZecWallet, Nighthawk Wallet, ZecPages, Z-Go, Free2Z, Global Ambassadors Program, Zcash Media, Z-Faucet, Ziggurat, Zcash Block explorer, Lightwalletd.com, Y-wallet, Zingo!, Zcash Ecosystem Security Lead, and many others. 
  
  Although the mentioned above are successful cases, there is room for improvement in terms of Developer Experience and general direction of the developments and cooperation between grant recipients.  Wallet teams are resource constraint and need support Bear market and current ZEC prices have conditioned our ability to properly support different wallet teams financially with the resources they need to properly fulfill both their own and the whole ecosystem’s goals. Nonetheless, wallets remain crucial for Zcash to achieve mass adoption and be an instrument for financial privacy and freedom for people around the world. 
   Scarce re-usability of grant-funded developments 
  
  The different grants that ZF and ZCG have given out regarding wallets or tooling produce good outcomes, but often they don’t end up being beneficial to the whole developer and user community in terms of providing building bricks for other developments. Teams usually don’t have either the motivation and resources to prioritize generalizing their developments. Tooling for the wide Zcash Dev ecosystem comes out of exceptional efforts from ZF and ECC where it should be the norm that all grants allocate a portion of their work for the benefit of the wide ecosystem.
  
  To put this in terms of specific cases we can go back in time and see a pattern repeatedly. ZecWallet was, if not the first, one of the first light-client wallets for Zcash. It was a breakthrough, great work of a brilliant developer we shall forever be grateful to. ZecWallet and ZecWallet-Lite surfaced many great features only available in the desktop terminal into people’s hands like utxo-shielding, BIP-39 compliance, multi-account support, fiat price conversion through trusted server (lightwalletd) and blaze-sync. However, for one reason or another, other developers were not able to build on top of that without forking the code . When needing these functionalities, other teams had to either adapt them or in the worst case, code them again from scratch.  
  This ends up not only being inefficient in terms of operations and resource allocation, but also it creates copies of duplicate functionality where one implementation does not benefit the other. For example, when shielding was implemented in librustzcash, ZecWallet users did not benefit from any of the updates the ECC Core and Wallet teams did there. An opportunity of building cohesion into ZEC UX was missed. Zingo Labs had to allocate a great portion of their resources to “bring back” the ZecWallet codebase to the common Zcash tooling. Thanks to the great effort they put into using Librustzcash and Lightwalletd (instead of insisting on the use of ZecWallet forks) they could start contributing to the tools used by everyone else.
  
  Also, this lack of cohesion creates a high entry barrier for new developers, because it’s hard for newcomers to see what building blocks to grab to achieve their goals within the Zcash Ecosystem.
  
   Teams competing over basic wallet functionality 
  
   In the months to come the Zcash Ecosystem will have three different Zcash-centric or Zcash-only wallets: Ywallet, Zingo!, Nighthawk and Secant (ECC’s mobile Wallet). This is huge! However, if we compare them, they implement core protocol features differently. To this date, the first two support Orchard in their own way while NH and Secant (by extension Unstoppable and EDGE) don’t. Moreover in the syncing front, there are three different algorithms competing against each other: Blaze Sync, Warp Sync, linear (or vanilla) sync, with or without filtering. This provides a heterogeneous and rough user experience where syncing the same keys on each wallet might bring different outcomes (because of heuristics mostly). And yet there’s a fourth diner coming to the table: DAGSync. 
  
  Blaze Sync and WarpSync are both works derived or sustained from the Dev Fund, but surprisingly not available to all Zcash developers. How could we expect each new development team to craft their own or port an existing syncing mechanism?
  
  Will DAGSync escape such logic? I bet it will because my experience working at ECC tells me that the core team will go the extra mile.
  
  We are all technologists here. We love nerding out, getting into the weeds, exploring rabbit holes just for the sake of it. That’s fine, but users shouldn’t have to download 3 wallets to know what works. This is also a risk because loading the same seed backup in different wallets is not a safe practice. One thing I’ve learned from all of these years of “coding the last mile” is that one has to live with this hard truth: Users don’t care how things work under the hood. If they have to, then you are probably in trouble.
  
   Zcash wallet developers should have their basics covered, so that they can focus on what their audiences need. Zcash wallet users should expect a uniform base experience over the core principles of the project, and tailored and hand-knitted UX over specific user cases of their choosing.
- **Proposed solution:**
  The section above describes the overall picture that led me to write this grant proposal. Although it does not cover them all. Resolving these issues would require more than a single person. Hence, I propose an initial step towards addressing these points that is more suited to the current market conditions, that is more focused on delivering specific and tangible value quickly to the developer community. I propose to continue in the role of a Zcash Wallet Community Developer that can work to fill in the gaps on the different wallet teams and their articulation within the Zcash ecosystem. This would be a full-time role split between different tasks that support the Zcash Wallet Developer teams and the community. - Wallet Development and Testing Part-time Wallet development for the different Zcash teams  Provide wallet related Code Reviews  Developing general-purpose wallet integration testing tooling - Ecosystem Outreach Moderate, expand and steer Light Client Working Group Attend Arborist Calls and the Zcash Ecosystem Spaces Office Hours of Technical support to Dev Teams requesting Grants or proposing RFPs Attend conferences and other events that are relevant to the role (funding will be evaluated independently with ZGC and ZF with different grants if more funds needed) - Collaboration with ZCG Consulting sessions with ZGC on RFP or grant proposals RFP drafting and assessment Zcash wallet ecosystem development forecast for 2024 Q2 The following list contains most of the themes/tasks/efforts that I’ve been able to track that are relevant to ZWCD’s role for 2024. This list is currently changing and evolving as our ecosystem does, so it should not be considered exhaustive or definitive. Although the grant has been modified to cover Q2 only, the list below contains the original forecast for Q2-Q4 List 1: Development projects that are currently ongoing, continuing on, or starting in 2024 Wallet developer ecosystem response to Exchanges announcing delistings Note : this is a “developing story”. In which capacity ZWCD will be involved depends on the outcome of the solution requirement analysis itself. encumbers a collective effort from all developers from Core to each one wallets that support Shielded Zcash.  ZIP specification for the solution that will be developed Development of the solution on the wallet level Coordination of the many teams involved and the Exchange counterparts. The Z|ECC and Workshops Shall ZCWD be there? Yes  Do we know where is it and when? Yes. It will take place in San Diego, CA, week of July 8th. ZconV : Shall ZCWD be there? Yes  Do we know where is it? Yes! Everywhere! We are preparing great things!  ZIP-321 request adoption:  Integration of ZIP-321 libraries into native mobile wallets. Development of kotlin multi-platform target for Javascript clients (JS SDK, Brave and react-native clients) FROST: (ongoing) [DONE] Design of a self-custody scheme for FROST. PoC of the Design Tooling for Mobile and Desktop Applications. Frost Mobile SDKs Decentralizing Core: [Tentative] Sunsetting GoLang Lightwalletd in favor of Zebra integration in RustLang Regtest and other testing tooling Support for Zebra and its integration with wallets Tooling: Regtest Support of Mobile SDKs (ongoing) ZSAs Development, wallet integration, tooling and documentation ZAVAX Bridge support Development, tooling and wallet integration Design Review Hardware Wallet (ledger) Support other wallets Integration to other wallets besides Zondax’s ZecWallet version DAGSync and other wallet ecosystem improvements R+D of better sync or (no sync at all solutions) ZEC In the Browser: Brave Wallet Support ZcashSDK for Javascript FROST integration for ZEC in the Browser ZEC to PoS: Wallet implications of Zcash moving to Proof of Stake Draft a ZIP to define Mortem and Post Mortem best practices for wallets: This is a totally undesirable ZIP but someone has to do it. It can’t happen that a wallet is no longer maintained and that Zodlers are left hanging to dry.  Research what other projects do in this matter Collect best practices and case studies Draft a document that instruct wallet developers how to deal with: Communications of End of Support / End of Life of a Zcash wallet Common migrations paths Suggested timelines Pre-mortem, Mortem and Post Mortem support  Tombstone releases
- **Solution Format:**
  Similarly to the Zcash Ecosystem Security Lead, the deliverables will be established on a monthly basis, agreed between the involved teams and ZCG, then informed to the whole community.  I have contacted many teams within the Zcash ecosystem like ZF, ECC, Zingo Labs, Nighthawk Apps and Red Dev to have a rough estimate on things that I could continue to contribute to if I remained within this role that ended in December and continued from January to November 2024.  
  There are many projects and initiatives in flight in our ecosystem. Many of them depend on one or more teams. I have made an effort to attempt to forecast this work and outlined it in the Schedule and Milestones sections.  The outline is right in the spirit of most of the detailed tasks, but it will have to be refined and specified as-we-go, since all of these are moving pieces within a complex distributed, decentralized and global ecosystem like ours. Also I’m considering the case of new teams arriving (Yay!) and applying for grants and serving them as a welcoming person of reference with Office Hours and other meetings. Also I believe that newcomers should be prioritized if they need guidance to foster a broader community. The initial grant application covered 3 months of full-time work from January 15th to April 15th 2024 with the possibility to extend to the whole year 2024. This presentation is the extension of that original grant for Q2 2024, plus some tweaks based on the experience I’ve collected these past months.
- **Dependencies:**
  The nature of the work done should not need any further integrations beyond having my PRs accepted by the organizations I'm helping. It wouldn’t require involvement from ECC or ZF besides their regular business as usual community outreach. I would need special involvement from ZF to set up some administrative things like calendars or Conference Call Venues for LCWG.
- **Technical approach:**
  would hand me well scoped tasks over their github repositories or other public means that the Zcash community or anyone can oversee. I’ve also been interacting more over community channels like the forums and R&D discord to communicate with other teams as needed. Work dynamic will be similar to the one of the previous Grant with some changes due to the nature of the work that needs to be carried out . What has changed over the last 5 or 6 months? 
  
  Well.. basically pretty much everything! And that’s really good for Zcash! 
  
  The main difference I foresee in terms of this grant is that when previously we had well defined tasks in terms of scope and time based on things that were previously developed and needed to be made, wrapped up or extended, we now have Ecosystem responses that are either time-sensitive with tight deadlines like the “avoid delisting initiative” Ongoing initiatives that have high-impact on the wallet ecosystem and would require collaboration and support from ZWCD but they mainly depend mainly on other teams: FROST ZSAs PoS HW wallet support Bridges w/ other Coins (Maya Protocol and ZAVAX bridge) NU6 Initiatives that solely depend on ZWCD: Tooling development Library and SDK development and maintenance Community Activities LCWG and Office Hours For this, the milestones would be structured in terms of main and secondary tasks. The main task will be the one that will be the most important and would take precedence before the rest of the items of the milestone unless there’s a blocker that makes it not fruitful to be worked on and the time would be better spent on something else. 
  
  List 1 can serve as a Backlog of possible tasks that ZWCD will contribute to advancing on its own or by supporting other teams leading them to avoid either being “blocked” or acting as “bottleneck” given the current “single-person” nature of the role. 
  Example: Milestone X: Main:  Task A, Ongoing, long thing that depends on Team Q delivering some API. Secondary: Task B Milestone X+1: Main:  Task A, Ongoing, long thing that depends on Team Q delivering some API. Secondary: Task C Milestone X+2: Main:  Task D, a task depending on Team R Secondary: Task C If the main task is blocked by the time Milestone X is underway, the work could be swapped like this: Milestone X: Main:  Task B Secondary: Task C Milestone X+1: Main:  Task A, Ongoing, long thing that depends on Team Q delivering some API. Secondary:  Milestone X+2: Main:  Task D, a task depending on Team R Secondary: Some other task with no deps. This reflects how ZCG and myself agreed on managing emerging blockers and priority changes that naturally happen in decentralized and distributed software engineering projects like Zcash. Managing a pool of possible tasks avoids being in a “deadlock” that would make the grant progress to be stalled by dependencies in other projects.

### Requested Grant Amount

- **Amount:**
  45000.0

### Budget Breakdown

- **Hardware/Software budget:**
  0.0
- **Hardware/Software justification:**
  n/a
- **Services budget:**
  0.0
- **Services justification:**
  n/a
- **Compensation budget:**
  45000.0
- **Compensation justification:**
  Total Request : 45000 USD = 45000 USD (3 milestones). Travel expenses to  Z|ECC Summit are not included. They will be requested from ZCG Expenses Startup funding:
   0 USD  
  Payment schedule assuming May 1st
  
  May 31st:
  15,000 USD 
  June 30th: (assumes progress approval)
  15,000 USD July 31st: (assumes progress approval)
  15,000 USD
- **Startup funding required:**
  No
- **Total proposed grant value:**
  45000.0

### Team Members

- **Project Lead:**
  Pacu
- **Background:**
  Note: following section is a refreshed update to the one presented previously back in January 2024 . I’ve taken this approach because I consider it would favor readability, so that people don’t have to constantly refer to the past presentation. I apologize in advance to readers that don’t find this helpful. 
   I’m Pacu. I’m a Software Developer. I have a Master’s Degree in Software Engineering and I’ve been proudly working as a Zcash wallet developer for around four and a half years. The first four as part of ECC’s wallet team, and these last 5 or 6 months as a ZCG grantee as Zcash Wallet Community Developer. You might have seen me around in the forums, Zcon talks, community calls, or any might not know me well or at all! Anyhow, I’m pretty sure that most of you might have interacted with the code I worked on. Disclaimer: I don’t like self-indulgence. The intent of this section is to recollect my participation and contributions to the Zcash space so you all can evaluate whether I have the necessary skills for the role I propose or not. My overall experience I always liked to work on stuff that people could take into their own hands. I’ve been developing software since 2008. First as a retro-porter at Gameloft where I learned to move around a myriad of code bases and game engines to fit popular games into low-end JavaME mobile phones, since then I’ve been dedicated to mobile-first applications. I’m not a “grasshopper” kind of developer, so in these last 16 years of experience I’ve had 3 or 4 jobs at most. Nonetheless I’ve been able to work in Corporations, Unicorns, freelance gigs and start ups; from publishing, to Investment Firms, Entertainment Corporations, Travel and Leisure companies and lastly decentralizing finance and fighting for the right to privacy. But always within the last mile of the software chain from the server to people’s fingertips. In my last big corp gig I worked with more than 60 developers serving millions of users in LATAM for the biggest online travel agency. I can say that I have the experience of walking into a bar and knowing that everyone there has your app on their phones. My hope is that we can achieve that with our Zcash applications. My journey as a Zcash Dev  First I started as an iOS Developer contractor for ECC and then as a full-time iOS Engineer, where I built the iOS Zcash SDK (https://github.com/zcash/ZcashLightClientKit/) and the first ECC reference wallet using SwiftUI ( https://github.com/zcash/zcash-ios-wallet ), shipped publicly as NightHawk Wallet by Nighthawk Apps.  I didn’t do this by myself. I had my ECC colleagues who helped me all the way. It is necessary to understand a lot of how Zcash works to effectively develop a mobile SDK that can be a “drop-in” kind of tool for developers around the world. This led me to have a good understanding of the Zcash light-client protocol, and “the protocol” itself. I worked back to back with Kevin Gorham, my Android counterpart, since I started the SDK as a “port” from the Android PoC which also let me actively contribute every now and then to that codebase as well. Later on I would have to onboard other great developers to our codebase. So I did end up learning a lot of Kotlin along the way. Wallets are an interdisciplinary work. Inevitably, I ended up picking up some Rust Lang skills which helped me be a more effective contributor all across the tech stack by contributing to the Rust backend: LibRustZcash ( https://github.com/zcash/librustzcash/pulls?q=is%3Apr+is%3Aclosed+author%3Apacu ). One of my most cherished PRs is this one that implements the principles of autoshielding; I had a great collaboration with ECC’s Core Team to guide me through this implementation which ended up being the backbone for “shielding by default” in our native mobile platforms ( https://github.com/zcash/librustzcash/pull/341 ). Security and Testing were always priorities for our team. Taylor Hornby and Larry Ruane co-created a set of RPCs in lightwalletd that let developers create a local ZIP-307 compliant synthetic compact blockchain and write integration tests that can reproduce blockchain edge cases. I kind of became the “darksidewalletd guy”. We called this suite “Darksidewalletd Tests” and their first implementation was carried out on ZcashLightClientKit ( https://github.com/zcash/ZcashLightClientKit/tree/main/Tests/DarksideTests ). This helped our team to develop on solid grounds knowing that our SDK would react properly to chain re-orgs. Working on these tests also had me working a bit in Go Lang ( https://github.com/zcash/lightwalletd/pulls?q=is%3Apr+is%3Aclosed+author%3Apacu ) when I caught bugs in Lightwalletd itself. Going down memory lane, one of my earliest work in tandem with @earthrise was finding a safe native library for BIP-39 for the Swift programming language. We conducted a survey of existing implementations of BIP-39, forked the one that best suited our SWOT analysis and created MnemonicSwift. https://github.com/zcash-hackworks/MnemonicSwift and even got it listed in the Bitcoin wiki page. https://en.bitcoin.it/wiki/BIP_0039 Building a Legacy 
  One of the goals I always had is to build a legacy. Projects that others can take over to the finish line. This entails setting up code conventions, contributing guidelines, abiding by industry standards, setting up coding guidelines, and more. Carter Jernigan and I worked hard on making that possible over the past year. The last wallet project I worked on at ECC is the Secant wallet. It has a lot of that. It is being actively developed by ECC and Nighthawk Apps in different forks. It was designed to be iterative, fast-paced, testable, rock-solid, and more importantly, end-user-facing. We aimed to base Secant on tech stacks that would be not only relevant in the present but also future-proof. We developed Secant in the open since day one. Anyone following the commits will be able to see its many iterations, different faces, and phases. Secant in its two forms, is actively built by great developers in two teams with different product plans and design approaches that will get ZEC into the hands of thousands and hopefully millions of users across the globe. Ecosystem Outreach work 
  One of the things I enjoyed a lot was working with the different teams on the Zcash Ecosystems. Whenever I was given a chance I tried to reach out to other teams to know about their work, and think about how I could make the SDK more useful to them. In May 2020, the wallet team co-hosted and also participated in the “Protect Privacy” Gitcoin hackathon ( https://bounties.gitcoin.co/hackathon/privacy/prizes/?org=zcash ). One of the teams participating ended up becoming the Nighthawk Apps team! They had the bravery and the talent to take the ECC Reference Wallet down to the finish line to be launched at the Apple and Google Stores (and also Fdroid!). Since then I’ve been collaborating very frequently with Nighthawk Apps and their team. Our work together, ended up creating the “Light-Client Working Group” or “Zcash Mobile Dev Calls” which have been held bi-weekly for quite some time now (see https://github.com/zcash/lcwg ) Another great partner and supporters of the Zcash cause are the folks at Unstoppable wallet. They have amazing multi-coin native applications for Android and iOS. It took me less than a day to draft a PoC integration to their iOS wallet. That is how modular their code is, pretty awesome. Obviously they took the baton and implemented the whole thing themselves and I helped occasionally as you can see in a few PRs ( https://github.com/horizontalsystems/unstoppable-wallet-ios/pulls?q=is%3Apr+author%3Apacu .
  
  I had the chance to briefly work with Paul and the EDGE wallet team, but to be honest, they mostly did everything and I just provided some guidance and incorporated their feedback into our codebase. They are an awesome team and are fully committed to the values of financial privacy that Zcash embraces. I hope if I get this grant I can collaborate with them more.
  
  One of my latest collaborations was with ZingoLabs, to bring darksidewalletd tests to their Zingo wallet by creating a PoC in Rust on how they could leverage this powerful tool ( https://github.com/zingolabs/zingolib/pulls?q=is%3Apr+is%3Aclosed+author%3Apacu ). I use Zingo Lib for some personal projects of mine and for educational purposes when teaching in college. Zancas and team are very engaged with the whole idea of integration tests for wallets and it seems they plan to take it to the next level. During the end of 2023 and Q1 of 2024 I’ve been actively involved in the Transparent-Source-Only Ecosystem Outreach also known as (Binance’s TEX addresses) collaborating with Binance, ECC, ZCG and Ywallet (Hahn) and reaching out and articulating efforts with the rest of wallets shielded and transparent-only wallets of the ecosystem  RFP and ZIP collaboration  Like many other Zcash developers I contributed to ZIPs and RFPs of great relevance to the Ecosystem like ZIP-317: Proportional Transfer Fee Mechanism or ZIP-316: Unified Addresses and Unified Viewing Keys and ZIP-315: Best Practices for Wallet Handling of Multiple Pools . I also helped draft the Zcash UniFFI Library RFP , reviewed RFP - Zcash Lightwalletd Infrastructure Development and Maintenance Seminars and talks Although these appearances were not a part of my job, I participated in many twitter spaces, conferences and podcasts related to Zcash and privacy. 
  
   Hello decentralization Conference : In February 2021 I participated in a workshop session at “Hello Decentralization” where I did a “code along” session where attendees could build a Point of Sale proof of concept app with ZcashLightClientKit and Swift UI. The session was called “We accept Zcash! building a PoS App with Zcash Viewing keys”. The site of the conference unfortunately is down. I could find this link ( https://www.crowdcast.io/e/hello-decentralization/register?navlinks=false&embed=true ) and the repository with the code-along material can be found here ( https://github.com/zcash-hackworks/we-accept-zcash-ios ). 
  
   Zcon3 : “The once and future ECC wallet”. In this talk we covered the past, current and future roadmap for ECC Wallet. 
  
   Zcon4:  Zcash wallet workshop with Adi from NightHawk and Joel Valenzuela from Digital Cash podcast Presented speakers and forwarded questions from the audience to them in a few talks as well. 
   Podcast Appearances : “Hacia Afuera” podcast. A podcast about latin american professionals making great contributions from the region to all the world. Link: https://open.spotify.com/episode/5msJJcTCXrnpdV0P1xKvYJ Research and Education Unrelated to blockchain but relevant to the tech stack we use here, I taught Introduction to Programming with C from 2009 to 2018 as an assistant professor in different private universities in Buenos Aires. 
  
  Teaching gives people a unique experience where one can learn differently, because “those who teach learn twice”. I like creating documentation, presentations and classes that aim to be appealing and motivating to students.
  
  Back in my undergrad college days I also worked in research and development and published different papers about soft computing and text mining. This helped me polish formal aspects of written English and also technical and scientific writing that definitely helped me grasp the protocol and all the ZIPs Zcash has.  When I say that I’ve dedicated these last 4 years to Zcash and the privacy space, I really mean it. I graduated from the Software Engineering Master Degree program of the National University of La Plata with a Thesis that studied Privacy Coin mobile wallets and their architecture. I described a framework of software patterns based on reverse engineering requirement analysis of existing non-custodial privacy coin wallet applications. (link in Spanish) https://doi.org/10.35537/10915/137845 
  
   This work derived into a research paper on wallet software design patterns presented at the Pattern Languages of Programs conference of 2022 an early draft can be found here . According to conference chairs, the paper will be listed in the ACM Library soon.  I’m currently also working as an Assistant Professor in the “Introduction to Blockchain” course at the Faculty of Informatics of the National University where I use tools such as Zingo-cli to explain how Zcash works.  I’m currently overseeing and writing chapter 6 of My First Zcash! Book which is about Zcash wallets in collaboration with other community members. Zcash Wallet Community Developer During Zcon4 I started a new journey in my career. I became a ZCG Grantee and was honored with the duty of working as a wallet developer for the Zcash ecosystem. Although some milestones seemed quite ambitious, I achieved all the proposed goals and presented my progress to ZCG synchronously in conference calls and t hrough the forums to the whole community in this thread . 
  A summary of the achievements: User Facing Development Although all milestones are thought in terms of how to make wallets better, there are some parts of being ZWCD that impact users more directly than others.  Native support for ZIP-321 Zcash Payment URIs for Android and iOS/MacOS I created two distinct Native Swift and Kotlin Libraries that: Generate Payment Request URIs for others to fulfill Parse Payment Request URIs for wallets to fulfill Are fully written in Swift or Kotlin with not external dependencies like rust or C bindings Composable with other libraries like zcash-{swift|kotlin}-wallet-sdk Has many unit tests and coverage Added 1500 LoCs of Features and Tests to each one of them The libraries are Open Source with MIT license here::  https://github.com/pacu/zcash-kotlin-payment-uri https://github.com/pacu/zcash-swift-payment-uri/ Contributed to find weak points in the ZIP-321 definition and add improvements to its specification. see https://github.com/zcash/zips/issues/451 Remarks: The Kotlin variant is a really good candidate to be turned into Kotlin multi-platform supporting javascript and even iOS for kotlin multi platform wallets! Found a nasty bug in Swift Compiler on Decimal handling. :/ which is, following their tradition, completely known and ignored by Apple  Developer Tooling 
   General Purpose, Reusable Darksidewalletd Datasets: “Darksidewalletd” is a development tool that lets developers create synthetic compact blockchains. These blockchains are totally controlled by the devs and can be shaped specifically to exercise specific scenarios for the wallets, such as chain reorgs that can cause transactions being unmined, tx reverted and all sorts for state changes that the wallets need to adjust to in order to keep the users’ funds spendable. I worked with Zingo Labs to ideate and create test scenarios that can help wallet developers benchmark, test and bugfix their wallets. These scenarios are not set in stone. Each one of them has scripts that can be ran to modify them and update them as needed, they can evolve as the protocol evolves.  https://github.com/zingolabs/darksidewalletd-datasets 151 coinbases :  This is a darksidewalletd dataset composed of 151 blocks of 1 transparent coinbase to the legacy t-address of zcashd and 150 shielded coinbases to sapling address. SECOND FLUSH OF ENTHUSIASM : A user gets onboarded into ZEC at a given time (block 1) and creates a wallet. User forgets about it until a later time it realizes it can accept a Zcash payment instead of fiat, so User intends to receive ZEC. Advanced ReOrg Tests : This is a set of tests originated as part of integration testing of the ECC Mobile SDKs Python API to interact with Zcash node RPCs: Part of this work ended up in creating python scripts that could use Zcashd RPCs to handle nodes in Regtest mode. As tests built up, this python starter to take the shape of an API which is expressed in this python file. Advanced Re Org Test implementation on Zingo-lib Zingo Viridians took the darksidewalletd work I had done and took it even further, grouping all the implemented test cases into a rust crate https://github.com/zingolabs/zingolib/tree/dev/darkside-tests .  Bringing Supporting Regtest/LocalNetwork testing back to Mobile SDKs Originally, the mobile SDKs had a suite of tests that allowed us to have a “canary” that would warn developers of regressions when changes were introduced into the codebase, mostly around chain re-orgs and the consistency of the internal state of the wallet SDKs. Due to various types of resource constraints these tests stopped working and were left unmaintained when Spend Before Sync. Given their importance it is one of my goals to bring them back to the place they deserve. It was originally intended to “just enable them back”, but given the experience we gained in the Zingo Lib integration, it was recognized as more beneficial to actually get them to work fully on a the new datasets that were not reliant on mainnet, because the original darksidewalletd tests would only prove that the wallet synced properly sapling blocks of version 4 transactions. This is a more ambitious effort that goes across many repositories and layers of the wallet stack. These changes are still in-flight but yet bring enhancements on their own, like the ability of providing custom checkpoints. This is an extract of the last forum update for milestone 5. tasklinkCI enhancements for Swift SDK https://github.com/zcash/lightwalletd/issues/464 Librustzcash regtest support (ongoing)https://github.com/zcash/librustzcash/pull/1054Custom Checkpoints for Regtest mode
  On Zcash Swift SDKhttps://github.com/Electric-Coin-Company/zcash-swift-wallet-sdk/pull/1331Support for Spend Before Sync on  Darksidewallethttps://github.com/zcash/lightwalletd/pull/468/ task | link -- | -- CI enhancements for Swift SDK | https://github.com/zcash/lightwalletd/issues/464 Librustzcash regtest support (ongoing) | https://github.com/zcash/librustzcash/pull/1054 Custom Checkpoints for Regtest modeOn Zcash Swift SDK | https://github.com/Electric-Coin-Company/zcash-swift-wallet-sdk/pull/1331 Support for Spend Before Sync on  Darksidewallet | https://github.com/zcash/lightwalletd/pull/468/ Light Client Working Group With great support of @decentralistdan we held 13 meetings of the Light Client Working Group, a venue that gathers Wallet developers together to share their work and tackle problems specific to the Zcash wallet ecosystem, you can see all the notes in this repository 
   The Reboot LCWG had lost most of its momentum, so we decided it was time for a fresh start. @aquietinvestor, @decentralistdan and I brainstormed a new format to bring the excitement back. We organized the working group in a way that it would reduce the amount of “status updates” and focus on Work initiatives . We identified three initiatives we wanted to work on and people volunteered to lead each one of those, while teams would have to commit some resources to carrying them forward: LCWG working Initiatives: ZIP-315 support on the wide wallet ecosystem Appointed Lead: Pacu (ZWCD) ZIP-317 Implementation across the ecosystem Appointed Lead: DecentralistDan (ZF) Decentralize Core Development, Zcashd, lightwalletd and other tooling Appointed Lead: Zancas (Zingo Labs) Code Reviews and small contributions: Over the course of the last grant I’ve reviewed almost thirty pull requests from many teams like NightHawk Apps, Zingo Labs and ECC. Most of them were requested directly and others were ad-hoc. I watch many of the core repositories of the Zcash ecosystem and I get PRs and activity feeds in my inbox. Every day I “get to work” I go through my notifications to see what I’ve missed (ZEC has many night owl contributors!) and things I consider worthy of ZWCD’s attention I’d review and comment if needed.  Tutorials Created a tutorial on how to run zcashd in regtest mode using docker. This info was outdated and scattered around several places, now it’s updated and in a single location. Community and Ecosystem Activities: User support The community part of the grant title was also endured. During the last grant period I worked with other community members to help them in certain circumstances that troubled them. Such as outages in ZecWallet Lite, users having issues with wallets not syncing among others. I have to give a massive shout out to @autotunafish from ZF for being present for every user needing help. Office Hours Another side of the ZWCD was this concept of office hours where I allocated a fixed amount of hours to meet people that wanted to get some help, assessment or counseling from someone from the Zcash development ecosystem. This kind of thing is often done by “Dev Rel” people in other development ecosystems.  RedDev <> ZCWD: We went over some overall concepts of the ZAVAX bridge. His team is working on implementing the Zcash <> AVAX bridge in a similar way the BTC <> AVAX bridge was done for V1 and then iterating to build up a more seamless experience for the user. We met recurrently over several weeks brainstorming and revisiting the proposed designed that were recently presented to ZCG as detailed on their last forum update Chainsafe <> ZCWD: Met with Chainsafe Team reps to go over various topics and doubts on their Zcash SDK proposal we channeled their inquiries through the Light Client Working Group and resulted in them presenting a grant for a Javascript Zcash SDK My First Zcash: wrote chapter 6 of the book which is about crypto and Zcash wallets, exchanges, CEXs and DEXs. Also designed exercises for readers to do in order to learn by doing.

### Funding History

- **Previous funding:**
  Yes
- **Previous funding details:**
  Previous Grants:  ZWCD 2023 ZWCD 2024 Q1
- **Other funding sources:**
  No

### Risks and Evaluation

- **Execution risks:**
  Risk : One risk could be that the workload is too much for a single person and that I’m spread too thin to be effective.  
   Mitigation : During this (hopefully if the community wants so) first half of the grant, it has been the case that some milestones were too varied and I noticed I suffered a lot from context switching. I’ve come to manage it, but for this following chapter I will try to be more dedicated to a main objective within one (or more) milestone, and a secondary one. This will not only help me be more effective but also be more present with the teams I’m committing to work with. 
  
   Risk : The opposite would be that teams can’t organize to delegate manageable pieces of work that I can deliver without causing them more overhead than the off-load that would mean that I could take on those tasks for them. Adding people to teams does mean that they have to dedicate some time to accommodate the new team members so they can be productive and on par with the rest of the team.
  
   Mitigation : A way to help avoid this risk would be to create such onboarding processes as part of my work so they can use those processes for augmenting their teams and onboarding new team members or receiving open source contributions from independent developers. An example of this could be how Zingo Viridians and I worked together in shaping up darksidewalletd integration tests. The datasets and tests I worked on were documented in a way that they would be helpful for the team to keep working on them as if one of the Viridians had worked on that and not some external person. Also being my work for “general purpose” it included documentation and examples that internal development wouldn’t invest on.
  
   Risk : Teams depended on are “off schedule” -that being late or early- in terms of the milestone forecast  Mitigation : This has happened in the past part of the grant. And ZCG and I could resolve this by anticipating work of future milestones or bringing in other work that was not originally included in the grant but that it was found to be of importance for the ecosystem. I have also worked with teams to define, scope and delimit the work I’ll be performing with them, and will continue to do so, to be fair to all teams I’m collaborating with. As it was done previously when needed, any deviations from the estimations that might affect my milestones, will be brought up to ZCG for advice.
- **Unintended Consequences:**
  An unintended consequence could be that the role becomes a single point of failure or a centralization point. The focus of this role should be supporting and empowering teams to align their particular developments with the interest of the general Zcash developer community and grow this role into a team of people that can outlive the interest of a single person.
- **Evaluation plan:**
  It would be a mix between completed pull requests and feedback from the development teams that require my services as community developer. Quoting the Zcash Ecosystem Security Lead grant proposal, Zcash community project developers should be asked how useful my outreach and support has been, and they should rate me as helpful, polite, and be willing to recommend working with me to other Zcash projects.

### Project Timeline

- **Project timeline determination:**
  The proposal entails providing community support and sustaining a presence within the ecosystem to build up and strengthen the role. Since some activities could consume the whole time allocation they will be time-boxed to estimate their impact in the overall schedule and milestones.
   Time-boxed Activity | time slot (hours/month) -- | -- Arborist call (two bi-weekly) | 3 Light Client working group (two bi-weekly calls + administrative) | ~6 LCWG Initiatives Lead | ~3 Community Forums (depending on activity) | ~6 R&D Discord (depending on activity) | ~6 Office Hours (per request but in fixed scheduled) | 8 hours Pull Request Reviews | ~6 total | 15 to 35 hours 
   
   I spoke with the different Zcash Development teams about their upcoming timelines and development support needs. I also factored in known seasonal elements and recent ecosystem announcements, like Grant updates from RedDev on the Zavax Bridge, and QEDIT for ZSAs and  from ECC to create this “grocery shopping list” of possible milestones.

### Milestone 1

- **Amount:**
  15000.0
- **Expected Completion Date:**
  5/31/2024

  - **Deliverables:**
    - ZconV Preparations, presentations, etc.
    - Wallet Response to exchange requirements
    - FROST: Human Computer Interaction aspects of FROST & Mobile PoC (ongoing)
    - Fixed time-boxed Allocations (see table)
    - Secondary: Mobile SDK Support for latest Darksidewalletd Tests Development Support for Orchard adoption and ZIP-315 compliance on Mobile SDK powered wallets ZAVAX Bridge wallet support preparations

### Milestone 2

- **Amount:**
  15000.0
- **Expected Completion Date:**
  6/30/2024

  - **Deliverables:**
    - ZIP-315 Initiative Lead (Ogoing):
    - Wallet Response to exchange requirements (wrap up)
    - Hardware Wallet (ledger) Support other wallets (start)
    - FROST: Human Computer Interaction aspects of FROST & Mobile PoC (wrap up)
    - Fixed time-boxed Allocations (see table)

### Milestone 3

- **Amount:**
  15000.0
- **Expected Completion Date:**
  7/31/2024

  - **Deliverables:**
    - ZIP-315 Initiative Lead (Ogoing)
    - Z|ECC Summit + debrief for the community
    - Hardware Wallet (ledger) Support other wallets (ongoing)
    - Fixed time-boxed Allocations (see table)

### Additional Milestones

- **Additional Milestones:**
  No

### Submission Date

- **Submission Date:**
  2024-04-02 19:53:02

### File Attachments


