---
title: "Zcash Wallet Community Developer"
status: "Accepted"
amount: "70778.0"
submitter: "[REDACTED] [REDACTED]"
email: "[REDACTED]"
date: "2023-07-15 02:19:21"
project_name: "Zcash Wallet Community Developer"
summary: "A “floating” wallet developer that contributes to different Zcash wallet teams and supports ZCG to articulate community-funded efforts"
total_grant_value: "70778.0"
submitter_last_name: "[REDACTED]"
original_title: "Zcash Wallet Community Developer"
labels:
  - APPROVED
  - GRANT COMPLETE
  - MILESTONE 1: COMPLETE
  - MILESTONE 2: COMPLETE
  - MILESTONE 3: COMPLETE
  - MILESTONE 4: COMPLETE
  - MILESTONE 5: COMPLETE
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
  I've basically been here working on Zcash for the last four years and I hope I can be contributing many more ❤️
- **Original Title:**
  Zcash Wallet Community Developer

- **Labels:**
  - APPROVED
  - GRANT COMPLETE
  - MILESTONE 1: COMPLETE
  - MILESTONE 2: COMPLETE
  - MILESTONE 3: COMPLETE
  - MILESTONE 4: COMPLETE
  - MILESTONE 5: COMPLETE
  - Start Up Funding COMPLETE

### Project Overview

- **Project Name:**
  Zcash Wallet Community Developer
- **Last Updated:**
  2023-07-15 02:19:21
- **Sponsorship Request:**
  No
- **Project Image (Public Gallery):**
  ZWCD.png
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
  The section above describes the overall picture that led me to write this grant proposal. Although it does not cover them all, since resolving these issues would require more than a single person. Hence, I propose an initial step towards addressing these points that is more suited to the current market conditions, that is more focused on delivering specific and tangible value quickly to the developer community.
  
  I propose to create the role of a Zcash Wallet Community Developer that can work to fill in the gaps on the different wallet teams and their articulation within the Zcash ecosystem. This would be a full-time role split between different tasks that support the Zcash Wallet Developer teams and the community. Wallet Development and Testing Part-time Wallet development for the different Zcash wallet teams  Provide wallet related Code Reviews  Developing general-purpose wallet integration testing tooling Ecosystem Outreach Moderate, expand and steer Light Client Working Group Attend Arborist Calls and the Zcash Ecosystem Spaces Office Hours of Technical support to Dev Teams requesting Grants or proposing RFPs Attend conferences and other events that are relevant to the role (funding will be evaluated independently with ZGC and ZF with different grants if more funds needed) Collaboration with ZCG Consulting sessions with ZGC on RFP or grant proposals RFP drafting and assessment
- **Solution Format:**
  Similarly to the Zcash Ecosystem Security Lead, the deliverables will be established on a monthly basis, agreed between the involved teams and ZCG, then informed to the whole community. I have contacted Zingo Labs and Nighthawk Apps to have a rough estimate on things they would need if I started today (July 2023) which I have outlined in the Schedule and Milestones sections. The outline is right in the spirit of most of the tasks outlined, but it will have to be refined and specified as-we-go since new teams are arriving (Yay!) and applying for grants. Also I believe that newcomers should be prioritized if they need guidance to foster a broader community and be welcoming. The initial grant application covers 5 months of full-time work from August 1st to December 31st 2023 with the possibility to extend to the whole year 2024.
- **Dependencies:**
  The nature of the work done should not need any further integrations beyond having my PRs accepted by the organizations I'm helping. It wouldn’t require involvement from ECC or ZF besides their regular business as usual community outreach. 
  I would need special involvement from ZF to set up some administrative things like calendars or Conference Call Venues for LCWG.
- **Technical approach:**
  My methodology will be similar to a Staff member of the teams I contribute to, where they would hand me well scoped tasks over their github repositories or other public means that the Zcash community or anyone can oversee. I will also be interacting more over community channels like the forums and R&D discord to communicate with other teams as needed.

### Requested Grant Amount

- **Amount:**
  70778.0

### Budget Breakdown

- **Hardware/Software budget:**
  2578.0
- **Hardware/Software justification:**
  The hardware budget accouts for the ZEC I had to pay to ECC in exchange for the computer I use everyday. I payed back  81 ZEC (2578USD) for it they told me they evaluated its depreciated cost.
- **Services budget:**
  0.0
- **Services justification:**
  N/A
- **Compensation budget:**
  70778.0
- **Compensation justification:**
  Accounts for 40h/week work during 5 calendar months and 4.5 weeks in total (I will not charge the time off in september or eventual support I might provide if needed.) 67500 USD in 4 payments of 15,000 USD and 1 payment of 7,500 81 ZEC to re-buy my computer from ECC  700 USD for Zcon 4 travel expenses that ZF invitation is not covering. Payment schedule assuming August 1st
  
  August 1st:
  15,000 USD + 81 ZEC 700 USD for Zcon 4 expenses September 1st to 14th: (assumes progress approval)
  7,500 USD
   October 1st: (assumes progress approval)
  15,000 USD
   November 1st: (assumes progress approval)
  15,000 USD
   December 1st: (assumes progress approval)
  15,000 USD
- **Startup funding required:**
  Yes
- **Startup funding explanation:**
  The harware budget and the Zcon4 stipends coincide both with the date the work would start. Also I've scheduled the payments to match the beginning of the month as any full-time engagement. Also I account for the time I've already invested in keeping up to speed with the latest developements of the ecosystem, interviewing with the different actors of the Zcash development scene to gather this proposal together and you might have also notice that I've run my own "pilot" of the grant by contributing already with PR reviews and developement for NightHawk and Zingo. Hardware requirements: 2578 Zcon 4 travel expenses: 700 First downpayment: 7500
- **Startup funding amount:**
  10778.0
- **Total proposed grant value:**
  70778.0

### Team Members

- **Project Lead:**
  Pacu
- **Background:**
  I’m Pacu. I’m a Software Developer. I have a Master’s Degree in Software Engineering and I’ve been proudly working as a Zcash wallet developer for the last four years at Electric Coin Company, until this last May 24th.  I didn’t interact in the forums as much as I would have wanted, so many might not know me well or at all! Anyhow, I’m pretty sure that most of you might have interacted with the code I worked on. Disclaimer: I don’t like self-indulgence. The intent of this section is to recollect my participation and contributions to the Zcash space so you all can evaluate whether I have the necessary skills for the role I propose or not. My overall experience I always liked to work on stuff that people could take into their own hands. I’ve been developing software since 2008. First as a retro-porter at Gameloft where I learned to move around a myriad of code bases and game engines to fit popular games into low-end JavaME mobile phones, since then I’ve been dedicated to mobile-first applications. I’m not a “grasshopper” kind of developer, so in these last 16 years of experience I’ve had 3 or 4 jobs at most. Nonetheless I’ve been able to work in Corporations, Unicorns, freelance gigs and start ups; from publishing, to Investment Firms, Entertainment Corporations, Travel and Leisure companies and lastly decentralizing finance and fighting for the right to privacy. But always within the last mile of the software chain from the server to people’s fingertips. In my last big corp gig I worked with more than 60 developers serving millions of users in LATAM for the biggest online travel agency. I can say that I have the experience of walking into a bar and knowing that everyone there has your app on their phones. My hope is that we can achieve that with our Zcash applications.  My journey as a Zcash Dev  First I started as an iOS Developer contractor for ECC and then as a full-time iOS Engineer, where I built the iOS Zcash SDK (https://github.com/zcash/ZcashLightClientKit/) and the first ECC reference wallet using SwiftUI ( https://github.com/zcash/zcash-ios-wallet ), shipped publicly as NightHawk Wallet by Nighthawk Apps.  I didn’t do this by myself. I had my ECC colleagues who helped me all the way. It is necessary to understand a lot of how Zcash works to effectively develop a mobile SDK that can be a “drop-in” kind of tool for developers around the world. This led me to have a good understanding of the Zcash light-client protocol, and “the protocol” itself. I worked back to back with Kevin Gorham, my Android counterpart, since I started the SDK as a “port” from the Android PoC which also let me actively contribute every now and then to that codebase as well. Later on I would have to onboard other great developers to our codebase. So I did end up learning a lot of Kotlin along the way. 
  
  Wallets are an interdisciplinary work. Inevitably, I ended up picking up some Rust Lang skills which helped me be a more effective contributor all across the tech stack by contributing to the Rust backend: LibRustZcash ( https://github.com/zcash/librustzcash/pulls?q=is%3Apr+is%3Aclosed+author%3Apacu ). One of my most cherished PRs is this one that implements the principles of autoshielding; I had a great collaboration with ECC’s Core Team to guide me through this implementation which ended up being the backbone for “shielding by default” in our native mobile platforms ( https://github.com/zcash/librustzcash/pull/341 ).  Security and Testing were always priorities for our team. Taylor Hornby and Larry Ruane co-created a set of RPCs in lightwalletd that let developers create a local ZIP-307 compliant synthetic compact blockchain and write integration tests that can reproduce blockchain edge cases. I kind of became the “darksidewalletd guy”. We called this suite “Darksidewalletd Tests” and their first implementation was carried out on ZcashLightClientKit ( https://github.com/zcash/ZcashLightClientKit/tree/main/Tests/DarksideTests ). This helped our team to develop on solid grounds knowing that our SDK would react properly to chain re-orgs. Working on these tests also had me working a bit in Go Lang ( https://github.com/zcash/lightwalletd/pulls?q=is%3Apr+is%3Aclosed+author%3Apacu ) when I caught bugs in Lightwalletd itself. Going down memory lane, one of my earliest work in tandem with @earthrise was finding a safe native library for BIP-39 for the Swift programming language. We conducted a survey of existing implementations of BIP-39, forked the one that best suited our SWOT analysis and created MnemonicSwift. https://github.com/zcash-hackworks/MnemonicSwift and even got it listed in the Bitcoin wiki page. https://en.bitcoin.it/wiki/BIP_0039 Building a Legacy 
  One of the goals I always had is to build a legacy. Projects that others can take over to the finish line. This entails setting up code conventions, contributing guidelines, abiding by industry standards, setting up coding guidelines, and more. Carter Jernigan and I worked hard on making that possible over the past year. The last wallet project I worked on at ECC is the Secant wallet. It has a lot of that. It is being actively developed by ECC and Nighthawk Apps in different forks. It was designed to be iterative, fast-paced, testable, rock-solid, and more importantly, end-user-facing. We aimed to base Secant on tech stacks that would be not only relevant in the present but also future-proof. We developed Secant in the open since day one. Anyone following the commits will be able to see its many iterations, different faces, and phases. Secant in its two forms, is actively built by great developers in two teams with different product plans and design approaches that will get ZEC into the hands of thousands and hopefully millions of users across the globe. Ecosystem Outreach work 
  One of the things I enjoyed a lot was working with the different teams on the Zcash Ecosystems. Whenever I was given a chance I tried to reach out to other teams to know about their work, and think about how I could make the SDK more useful to them. In May 2020, the wallet team co-hosted and also participated in the “Protect Privacy” Gitcoin hackathon ( https://bounties.gitcoin.co/hackathon/privacy/prizes/?org=zcash ). One of the teams participating ended up becoming the Nighthawk Apps team! They had the bravery and the talent to take the ECC Reference Wallet down to the finish line to be launched at the Apple and Google Stores (and also Fdroid!). Since then I’ve been collaborating very frequently with Nighthawk Apps and their team. Our work together, ended up creating the “Light-Client Working Group” or “Zcash Mobile Dev Calls” which have been held bi-weekly for quite some time now (see https://github.com/zcash/lcwg ) Another great partner and supporters of the Zcash cause are the folks at Unstoppable wallet. They have amazing multi-coin native applications for Android and iOS. It took me less than a day to draft a PoC integration to their iOS wallet. That is how modular their code is, pretty awesome. Obviously they took the baton and implemented the whole thing themselves and I helped occasionally as you can see in a few PRs ( https://github.com/horizontalsystems/unstoppable-wallet-ios/pulls?q=is%3Apr+author%3Apacu .
  
  I had the chance to briefly work with Paul and the EDGE wallet team, but to be honest, they mostly did everything and I just provided some guidance and incorporated their feedback into our codebase. They are an awesome team and are fully committed to the values of financial privacy that Zcash embraces. I hope if I get this grant I can collaborate with them more.
  
  One of my latest collaborations was with ZingoLabs, to bring darksidewalletd tests to their Zingo wallet by creating a PoC in Rust on how they could leverage this powerful tool ( https://github.com/zingolabs/zingolib/pulls?q=is%3Apr+is%3Aclosed+author%3Apacu ). I use Zingo Lib for some personal projects of mine and for educational purposes when teaching in college. Zancas and team are very engaged with the whole idea of integration tests for wallets and it seems they plan to take it to the next level.
  
   RFP and ZIP collaboration  Like many other Zcash developers I contributed to ZIPs and RFPs of great relevance to the Ecosystem like ZIP-317: Proportional Transfer Fee Mechanism or ZIP-316: Unified Addresses and Unified Viewing Keys . I also helped draft the Zcash UniFFI Library RFP Seminars and talks Although these appearances were not a part of my job, I participated in many twitter spaces, conferences and podcasts related to Zcash and privacy. 
  
   Hello decentralization Conference : In February 2021 I participated in a workshop session at “Hello Decentralization” where I did a “code along” session where attendees could build a Point of Sale proof of concept app with ZcashLightClientKit and Swift UI. The session was called “We accept Zcash! building a PoS App with Zcash Viewing keys”. The site of the conference unfortunately is down. I could find this link ( https://www.crowdcast.io/e/hello-decentralization/register?navlinks=false&embed=true ) and the repository with the code-along material can be found here ( https://github.com/zcash-hackworks/we-accept-zcash-ios ). 
  
   Zcon4 : “The once and future ECC wallet”. In this talk we covered the past, current and future roadmap for ECC Wallet.  
   Podcast Appearances : “Hacia Afuera” podcast. A podcast about latin american professionals making great contributions from the region to all the world. Link: https://open.spotify.com/episode/5msJJcTCXrnpdV0P1xKvYJ Research and Education Unrelated to blockchain but relevant to the tech stack we use here, I taught Introduction to Programming with C from 2009 to 2018 as an assistant professor in different private universities in Buenos Aires. 
  
  Teaching gives people a unique experience where one can learn differently, because “those who teach learn twice”. I like creating documentation, presentations and classes that aim to be appealing and motivating to students.
  
  Back in my undergrad college days I also worked in research and development and published different papers about soft computing and text mining. This helped me polish formal aspects of written English and also technical and scientific writing that definitely helped me grasp the protocol and all the ZIPs Zcash has.  When I say that I’ve dedicated these last 4 years to Zcash and the privacy space, I really mean it. I graduated from the Software Engineering Master Degree program of the National University of La Plata with a Thesis that studied Privacy Coin mobile wallets and their architecture. I described a framework of software patterns based on reverse engineering requirement analysis of existing non-custodial privacy coin wallet applications. (link in Spanish) https://doi.org/10.35537/10915/137845 
   This work derived into a research paper on wallet software design patterns presented at the Pattern Languages of Programs conference of 2022 an early draft can be found here . According to conference chairs, the paper will be listed in the ACM Library soon.  I’m currently also working as an Assistant Professor in the “Introduction to Blockchain” course at the Faculty of Informatics of the National University where I use tools such as Zingo-cli to explain how Zcash works

### Funding History

- **Previous funding:**
  No
- **Other funding sources:**
  No

### Risks and Evaluation

- **Execution risks:**
  One risk could be that the workload is too much for a single person and that I’m spread too thin to be effective. The opposite would be that teams can’t organize to delegate manageable pieces of work that I can deliver without causing them more overhead than the off-load that would mean that I could take on those tasks for them. Adding people to teams does mean that they have to dedicate some time to accommodate the new team members so they can be productive and on par with the rest of the team. A way to mitigate this would be to create such onboarding processes as part of my work so they can use those processes for augmenting their teams and onboarding new team members or receiving open source contributions from independent developers. I will also work with teams to define, scope and delimit the work I’ll be performing with them so that I can be fair with all teams. Any deviations from the estimations that might affect my milestones, will be brought up to ZCG if needed for advice
- **Unintended Consequences:**
  An unintended consequence could be that the role becomes a single point of failure or a centralization point. The focus of this role should be supporting and empowering teams to align their particular developments with the interest of the general Zcash developer community and grow this role into a team of people that can outlive the interest of a single person.
- **Evaluation plan:**
  It would be a mix between completed pull requests and feedback from the development teams that require my services as community developer. Quoting the Zcash Ecosystem Security Lead grant proposal, Zcash community project developers should be asked how useful my outreach and support has been, and they should rate me as helpful, polite, and be willing to recommend working with me to other Zcash projects.

### Project Timeline

- **Project timeline determination:**
  The proposal entails providing community support and sustaining a presence within the ecosystem to build up and strengthen the role. Since some activities could consume the whole time allocation they will be time-boxed to estimate their impact in the overall schedule and milestones. Time-boxed Activitytime slot (hours/month) Arborist call (two bi-weekly). 3 hours  Zebra Community calls (estimated two bi-weekly) ~2 hours Light Client working group (two bi-weekly calls + administrative) ~6 hours Community Forums (depending on activity)~6  R&D Discord (depending on activity) ~6 Office Hours (per request but in fixed scheduled)8 hours total 15 to 30 hours I had a vacation trip already planned during the second half of September 2023 so we’ll consider my availability being through Sept 1st to 14th. I’m not sure If I’ll be able to have good reception but I’ll try to do my best to be “on-call” if something comes up that needs my attention. 
  
  I spoke with both Zingo and NightHawk Apps about their upcoming timelines and development support needs. I also factored in known seasonal elements and recent ecosystem announcements from ECC to create this “grocery shopping list” of possible milestones.  Note: These items in the milestones are subject to change with consent of ZCG and feedback from the developer teams. Depending on the teams’ priorities and other teams like Eiger, Ywallet or ZC Grantees requesting additional support. During the time I was drafting this proposal and gathering feedback from different members of the ecosystem, many things changed and priorities were adjusted accordingly, some tasks were repurposed, and other were prioritized differently.
  
   Milestone 1:  (Assuming August 1st 2023 as first day) NightHawk Apps: Support and Review Pull Requests for DAG Sync adoption and customizations in the new Nighthawk Wallet architecture based on Secant. (ongoing) Zingo Labs: General support and Integration tests with Darksidewalletd (ongoing) Zcon4 activities LCWG re-launch: take ownership of the call schedule (Is ECC’s), coordinate with ZF to set up seminar or similar call with a public schedule and per-invite participation. Attend Arborist Call, present myself and announce the position. Milestone 2: (September 1st to 14th) Zingo Labs: pull request review and support development Prepare For ECC’s announced mobile development pause  Coordinate with affected parties on the roadmap ahead Analyze decentralization of Mobile SDKs and co-maintenance with other teams ... other tasks depending on the definition of “pause”. Preparations for needed updates for iOS 17 public release usually mid september  Nighthawk Apps: Pull request reviews Ecosystem outreach: Support partners (Unstoppable and Edge) adopting ECC’s SDKs (which will be paused)  Fixed time-boxed Allocations (see table) Milestone 3: (October 2023) iOS 17 release preparations Support ZingoLabs on iOS 17 issues Support Nighthawk on iOS 17 issues Support Zcash iOS SDK and other affected applications that might report issues. Zingo Labs: Pull request reviews Nighthawk Apps: Pull request reviews Fixed time-boxed Allocations (see table) Milestone 4: (November 2023) Nighthawk Apps: Support for ZIP-321  Zingo Labs: General support and Integration tests with Darksidewalletd (ongoing) Nighthawk Apps: Pull request reviews Zcash mobile SDKs Maintenance Fixed time-boxed Allocations (see table) Milestone 5: (December 2023) Nighthawk Apps: Development Support for Orchard adoption and ZIP-315 compliance on NightHawk wallet (ongoing) Zingo Labs: Wrap-Up and presentation of Integration tests with Darksidewalletd to the wider-community Zingo Labs: Pull request reviews Zcash mobile SDKs: Maintenance Darksidewalletd integration testing updates Fixed time-boxed Allocations (see table)

### Milestone 1

- **Amount:**
  7500.0
- **Expected Completion Date:**
  8/31/2023

  - **Deliverables:**
    - NightHawk Apps: Support and Review Pull Requests for DAG Sync adoption and customizations in the new Nighthawk Wallet architecture based on Secant. (ongoing)
    - Zingo Labs: General support and Integration tests with Darksidewalletd (ongoing)
    - Zcon4 activities
    - LCWG re-launch: take ownership of the call schedule (Is ECC’s), coordinate with ZF to set up seminar or similar call with a public schedule and per-invite participation.
    - Attend Arborist Call, present myself and announce the position.

### Milestone 2

- **Amount:**
  7500.0
- **Expected Completion Date:**
  9/14/2023

  - **Deliverables:**
    - Zingo Labs: pull request review and support development
    - Prepare For ECC’s announced mobile development pause
    - Preparations for needed updates for iOS 17 public release usually mid september
    - Nighthawk Apps: Pull request reviews
    - Ecosystem outreach: Support partners (Unstoppable and Edge) adopting ECC’s SDKs (which will be paused)
    - Fixed time-boxed Allocations (see section below)

### Milestone 3

- **Amount:**
  15000.0
- **Expected Completion Date:**
  10/31/2023

  - **Deliverables:**
    - iOS 17 release preparations. Support the different teams on this matter
    - Zingo Labs: Pull request reviews
    - Nighthawk Apps: Pull request reviews
    - Fixed time-boxed Allocations (see section below)

### Milestone 4

- **Amount:**
  15000.0
- **Expected Completion Date:**
  11/30/2023

  - **Deliverables:**
    - Nighthawk Apps: Support for ZIP-321
    - Zingo Labs: General support and Integration tests with Darksidewalletd (ongoing)
    - Zcash mobile SDKs Maintenance
    - Fixed time-boxed Allocations (see table)

### Additional Milestones

- **Additional Milestones:**
  Yes

### Submission Date

- **Submission Date:**
  2023-07-15 02:19:21

### File Attachments


