---
title: "Arti, a project to rewrite Tor in Rust: onion services and beyond!"
status: "Accepted"
amount: "666656.4"
submitter: "[REDACTED] [REDACTED]"
email: "[REDACTED]"
date: "2022-07-22 21:18:24"
project_name: "Arti, a project to rewrite Tor in Rust: onion services and beyond!"
summary: "In this project we will implement onion services for responder anonymity & make Arti a viable replacement for most users of the C tor client"
total_grant_value: "666656.0"
submitter_last_name: "[REDACTED]"
original_title: "Arti, a project to rewrite Tor in Rust: onion services and beyond!"
labels:
  - MILESTONE 1: COMPLETE
  - MILESTONE 3: COMPLETE
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
  Accepted
- **How did you learn about Zcash Community Grants:**
  From our community; we are also a previous grant recipient.
- **Original Title:**
  Arti, a project to rewrite Tor in Rust: onion services and beyond!

- **Labels:**
  - MILESTONE 1: COMPLETE
  - MILESTONE 3: COMPLETE
  - OPEN

### Project Overview

- **Project Name:**
  Arti, a project to rewrite Tor in Rust: onion services and beyond!
- **Last Updated:**
  2024-05-17 14:38:56
- **Sponsorship Request:**
  No
- **Project Image (Public Gallery):**
  twitter-avi.png
- **Project Summary:**
  In this project we will implement onion services for responder anonymity & make Arti a viable replacement for most users of the C tor client

### Project Description

- **Overview:**
  Tor provides robust network-level privacy for a huge variety of protocols, hiding their traffic among millions of active Tor users. Tor is available to use, well established, and well analyzed today, and works with almost any protocol that works over TCP. Our network’s performance and scalability have been improving over time, and we layer with an ecosystem of tools to circumvent different censorship regimes around the world. But the current Tor implementation bears the signs of its age. Tor is implemented in C, as a stand-alone network proxy. Because Tor is a stand-alone proxy, it’s cumbersome for third parties to embed it. And because Tor is written in C, it’s difficult to have the same confidence in its memory-safety as would be possible with a higher-level memory-safe language. Moreover, because C is unsafe and error-prone, our development requires more time and energy than it should, which slows us down when delivering improvements to our users. Here’s where Arti comes into play. Arti is a pure-Rust implementation of the Tor protocols designed from the ground up for easy embedding, straightforward maintenance, flexible deployment, and reasonably good performance. We believe Arti is the future of Tor: by using Rust, we get memory safety “for free,” and will eventually get compilation to WASM. Moreover, we get a codebase that others can maintain and adapt to fit with their projects, taking only the parts that they need to keep their binaries small for mobile or other restricted environments. Arti has the potential to benefit Zcash in many ways, both in the short term and the long term, as it resolves some existing pain points for using Tor for network privacy: (1) Arti makes Tor easier to embed, (2) Arti allows for more fine-grained control over Tor’s behavior, (3) Arti ensures Tor improvements can be developed faster, and (4) Arti improves Tor’s security. By adding a layer of communications privacy between wallet users and the Zcash network, we expect Arti to improve the overall privacy of Zcash by hiding which users are communicating to which servers and when, and thereby protecting users against a wider variety of traffic analysis and correlation attacks. Moreover, Arti’s communications privacy benefits other applications in the privacy space that Zcash users depend on. After all, it’s hard to use Zcash’s private transactions in a meaningful way if you cannot have private communications with your transaction partners. By improving the ecosystem around online private communications, Arti provides more opportunities for Zcash users to privately coordinate and communicate.
  
   What’s next for Arti?
   We’ve made significant progress bringing Arti to life in the first year of development, as can be seen in the Applicant Background section. When we end our year 1 grant, Arti should be production ready for at least some users and use-cases. But there is more work to do which we believe will bring benefit to the Zcash community. In year two, we have two major milestones planned. In 1.2.0 , we hope to be able to implement onion services for responder anonymity in Arti, and in 2.0.0 we plan to make Arti a viable replacement for most current users of the C tor client. You can read the issues we need to resolve in order to make it to that point , but the biggest are to stabilize the API and establish an upgrade path for control-port users. We’ll also learn more about what’s needed for a viable replacement from user feedback.
- **Proposed solution:**
  Phases of Work Implementing onion services (Arti 1.2.0) The Tor client allows users to run onion services : a location-hidden server on the network that you can only connect to if you know its public key. For many users, running onion service is their main use case of tor. Some applications (such as Onionshare , Ricochet Refresh , cwtch , SecureDrop and more) rely on onion services as their primary transport for private communications. Some members of the Zcash community have also told us that onion services are a critical feature for meaningful integration with Zcash applications. To start the second year of Arti’s work, we plan to produce a complete implementation of the current (v3) onion service protocol , with support for both accessing and creating onion services. One part of this work includes implementing protections against Guard discovery and Guard confirmation attacks for onion services. A guard discovery attack enables an adversary to determine the guard node(s) that are in use by a Tor client and/or Tor onion service. Once the guard node is known, traffic analysis attacks that can de-anonymize an onion service (or onion service user) become easier. (See 2022 paper from: Oldenburg, Acar, and Diaz for recent research on these attacks). We have an approved proposal to mitigate guard discovery attacks with a design called Vanguards that we will implement with Zcash's support, meaning Arti will protect all Tor users against this kind of de-anonymization attack. We also plan to include a full range of Tor’s tools for security and denial-of-service improvements to onion services, to make them safer to run on the internet. As we go, we’ll incorporate ideas from existing research to try to produce the most secure onion service implementation possible. This is no small task: as you can see from the v3 onion services ticket , onion services require a complex set of subprotocols in addition to the main Tor implementation. We’ll be drawing on the experience we’ve gained in the past from building these protocols in C, and from designing Arti to support protocol extensions. Replacing the C tor client. (Arti 2.0.0) In time, we want Arti to become the primary Tor implementation, so that we can focus our efforts on a high-productivity, high-security program environment without all of the drawbacks of our old C implementation. But before we can do that, we need Arti to work well enough as a replacement for existing Tor users that they can migrate to it comfortably. In the second half of our second year, we will be “filling in the gaps” to make Arti 2.0.0 a better alternative to the C client implementation for nearly all users. This will include work on circuit padding , a stable C FFI , support for more proxy protocols , and whatever missing features users and developers judge to be most important. Once that’s done, we’ll be able to deprecate client usage of the C Tor implementation (though we’ll have to keep supporting it in maintenance mode for a couple of years, to give users and developers time to migrate). Documentation Throughout the project, we will update Arti's documentation on https://arti.torproject.org. Our goal is to make Arti easy to use for any project that would like to integrate Tor into their solution. After this project Although this is beyond the scope of our proposed grant, we want to share our plans for the future. Our long-term goal with Arti is to improve the pace of Tor development by breaking free from our legacy code and architecture, and from the dangers of the memory-unsafe world. Once we have parity with the C client implementation, we will switch our attention to implementing the relay and directory-authority parts of the Tor protocol. Once that is done, we’ll be able to deprecate our C implementation completely, and deploy new features and improvements to the protocol as “Rust only.” We’re at the early stages of estimating this work, but we think it should be something we can accomplish within one or two further years.
- **Solution Format:**
  At the end of this grant, Arti will be a set of well-documented Rust crates suitable for use as a freestanding proxy or for embedding in Rust and non-Rust software, with full support for onion services. This means that almost every team and developer that wants to use the Tor network for anonymous communications in their application should be able to do so. We’ll be principally adding new crates to implement onion service functionality, missing client functionality, and API layers for use in programming environments other than “async Rust.” These layers will also be tested, documented, and published on crates.io . Our documentation for each layer will include complete API-level explanations of all public and private APIs, along with examples for using Arti in applications, and user-facing reference documentation on configuration and operation.
- **Dependencies:**
  Arti will be most useful to the Zcash ecosystem if it is (eventually) integrated with existing servers and wallets; some exploratory work has been done in this area. We can and will incorporate any feedback from developers of Zcash and related projects: continuous evaluation, especially early in the development process will be critical to ensuring that our APIs are well suited for their needs. We have been connecting with several groups throughout the delivery of our original project, but welcome any additional support from the ZCF to ensure we are reaching important projects in the ecosystem. Arti will also have utility even as it is adopted by non-Zcash applications: the larger and healthier the internet privacy ecosystem is, the greater the opportunity for a private currency to thrive. (Or, conversely, it’s less useful to transact with a private currency if there is no way to communicate privately about those transactions.)
- **Technical approach:**
  Arti is designed as a series of logically independent Rust crates, with extension points for future protocol extensions. In the diagram we've uploaded with this proposal, we’ve provided a simplified view of Arti’s current module diagram (blue boxes), along with new extensions that we plan to build in year 2 (grey boxes). All modules above the top dotted line are user-visible and intended for widespread end-user or developer use. Items in the middle layer (between the dotted lines) provide the high-level Tor functionality, including background processes and more complicated stateful protocols. Items in the bottom layer provide the low-level functionality needed to use the Tor protocol, and mostly avoid state, timing, or asynchronous runtime dependencies. We anticipate that onion services will require the largest amount of new mid- and low-level functionality in this project. To implement onion services, the largest pieces we must deliver are: Missing message types used for the onion service protocol and its directory formats New low-level protocol features used to implement the parts of the core Tor protocols used by onion services A mid-level “connector” state machine for clients, to look up and connect to onion services A mid-level “provider” state machine that will provide and publish onion services A new high-level API to run, publish, maintain, and monitor a set of onion services. As part of this milestone, we will also implement the protection against guard discovery attacks with a design called Vanguards. To do this we must: Create separate instances of GuardMgr (or GuardSample) to track chosen vanguard sets. Select vanguards according to the specified rules; update them when they fail; rotate as appropriate. Persist vanguards to our state files. Implement circmgr settings to use vanguards as appropriate depending on circuit purposes, and build circuits with the right lengths. Investigate relay bandwidth reporting for our metrics services during flooding attacks. Improve handling of protocol-invalid cells in Arti so that these cases cannot be used for side-channels To replace the existing C Tor client , we’ll need to make sure that Arti can be embedded in more circumstances, including some not currently supported. The greater part of this work will take the form of several new higher-level APIs, including: A “blocking API” layer for use by applications that can’t or won’t interface with Rust’s async futures ecosystem. A “FFI layer” to expose Arti’s functionality in a form suitable for consumption by non-Rust applications. A “compatibility layer” to support drop-in replacement use of Arti for a limited set of legacy C Tor use-cases.

### Requested Grant Amount

- **Amount:**
  666656.4

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
  666656.0
- **Compensation justification:**
  PERSONNEL COSTS (full project) For each personnel listed below, the total payment for the project amount per person was determined by first estimating the time to complete each milestone and then projecting that effort into an estimated timeline. Both of these estimates are then used to determine the monthly salary amount to charge for each activity/milestone. For each activity/milestone that falls in the current fiscal year (July 2022 - June 2023), we use the staff member’s current monthly salary including benefits. For each activity/milestone that falls beyond the current fiscal year, we use a projected 5% salary increase plus benefits. Co-Founder and Chief Network Architect – $283,381 Lead Arti development. Network Developer – $128,334 Support Arti development. Network Developer – $115,501 Support Arti development. Network Product Manager & Developer – $28,710 Lead research related to Vanguard implementation. Network Health Team Lead – $12,250 Support research related to Vanguard implementation. Project Manager – $17,875.28 Coordinate execution of project from start to finish; ensure team is meeting project milestones. Technical Writer – $16,080 Write Arti documentation. Brand Designer – $3,000 Create branding, logos, templates for Arti’s documentation website. Fulfillment Coordinator – $920 Send Tor swag to Arti documentation volunteers. Project Sub-Total 606,051.28 Indirect (10%) 60,605.12 Project Total 666,656.40
- **Startup funding required:**
  No
- **Total proposed grant value:**
  666656.0

### Team Members

- **Project Lead:**
  The Tor Project
- **Background:**
  The Tor network is the most widely used network of its kind, and is a foundational piece of technology for many privacy and censorship circumvention applications: Tor Browser, Brave’s private tab with Tor (used by 20% of active users), SecureDrop, GlobaLeaks, and more. The New York Times, BBC, Mada Masr, Deutsche Welle, and many other global news organizations use Tor to offer privacy and circumvention features to their users. The Tor Project has been improving privacy and circumvention online through the development and distribution of innovative internet freedom tools since 2006. We are a remote organization with 41 staff: our teams are made up of privacy and circumvention experts, engineers, researchers, designers, and community organizers. Nick Mathewson, co-founder of the Tor Project and Network Chief Architect, will lead this project. He is one of the original designers of Tor and is an expert in implementing anonymity technologies. He began volunteering to program Tor in 2002, became the principal developer in 2007, and became the lead software architect in 2012. Nick was instrumental in writing Tor’s comprehensive protocol specifications, which have enabled researchers to base their work on a solid foundation and have enabled multiple independent implementations of the Tor protocols. As an organization, we have 15 years of experience delivering on large-scale human rights, privacy, and anti-censorship projects in collaboration with funders and partners, including the U.S. Department of State’s Bureau of Democracy, Human Rights, and Labor; the Swedish International Development Cooperation Agency (Sida); Ford Foundation; Sloan Foundation; Open Technology Foundation; and the National Science Foundation (NSF). We are also in the process of successfully delivering on a grant with Zcash Community Grants (formerly ZOMG) to improve Tor for Zcash’s privacy story–as a communications privacy layer–by rewriting its code in Rust. Progress of our current grant with ZCF Since we started our project, we’ve put out a number of releases, making Arti more secure, more stable, and more embeddable. You can read the details in our announcement posts for each of the versions we’ve released: Arti 0.0.1 with basic anonymity support. CHANGELOG Arti 0.0.2 with API groundwork and lots of refactoring. CHANGELOG Arti 0.0.3 with better configuration support, predictive circuits, and anonymity improvements. CHANGELOG Arti 0.0.4 with support for Rustls, and bootstrap status reporting. CHANGELOG Arti 0.1.0 with a somewhat stable API. CHANGELOG Arti 0.2.0 with performance improvements, a dns_port feature, and a “dormant mode” API. CHANGELOG Arti 0.3.0 with improved configuration builder API, improved tolerances to network failure CHANGELOG Arti 0.4.0 with improved tolerances to network failure in the directory manager CHANGELOG Arti 0.5.0 with more cryptographic acceleration, reachable-address filtering and detection for failed directory bootstrapping CHANGELOG For people who like statistics: since we started this grant, Arti has grown by about 50,000 lines of code, and our test coverage remains above 80%. Now we’re focusing on the missing features needed to use Arti in production. When we release version 1.0.0 in a few months, we intend for Arti to be ready for at least some production use. This will require implementing important security features , tolerating more kinds of network failures , and converging on even more stable APIs . In August and September, we’ll focus on censorship resistance in Arti 1.1.0 , making sure that Arti can take advantage of Tor’s current bridge relays and pluggable transports to avoid censorship on the internet. When we finish 1.1.0, we will have finished the work laid out in our original grant with ZCF. Arti in the wild 
  At least three projects have already tried using Arti experimentally. In one, a group of researchers developing a COVID-19 contact-tracing app adapted Arti to anonymize their client-server communications for added privacy. In another, an internal team of developers at Tor is using Arti to construct a new cross-platform mobile-friendly Tor-based VPN application. Both groups have reported that using Arti was, for them, far easier than trying to embed the C Tor implementation. The third project is Zebra : @teor added experimental Tor support using Arti 0.0.2, and reported the results .

### Funding History

- **Previous funding:**
  Yes
- **Previous funding details:**
  We are in the process of successfully delivering on a grant with Zcash Community Grants (formerly ZOMG) to improve Tor for Zcash’s privacy story–as a communications privacy layer–by rewriting its code in Rust.
- **Other funding sources:**
  No

### Risks and Evaluation

- **Execution risks:**
  We anticipate a fairly straightforward development process: after all, these are protocols that we have already built and specified once before, and a software platform that we have designed specifically for high-quality development. Nonetheless, there are always risks to consider. First, we are a small team, within a small organization. If any one of us were to become unable to work on this software, our capacity would be significantly reduced while we had to recruit and onboard a replacement. Second, Rust is a (relatively) young programming language. Although its popularity has grown steadily over the last decade since its introduction, there is nevertheless a risk that the language could become niche in the next 10-20 years, which would present a difficulty for us finding tools and maintainers in the future. Third, although we have done our best to specify Tor’s protocols in the past, there is a risk that we have unknowingly left gaps or inconsistencies in those specifications, or mismatches between those specifications and our implementation. If we find significant problems, we will have to take the time to fix them, and work around any implementation bugs we find in order to achieve compatibility. Our work in this project is usable independently of its adoption by other projects; Arti can work on its own as a proxy for other tools. We also have plans internally at Tor to use Arti as the basis of future Tor Browser development, and work on VPN-style software, both of which will benefit privacy-sensitive users on the internet. In order to be most useful for the Zcash community, it would be best if it were incorporated by as many wallet and node implementations as possible.
- **Unintended Consequences:**
  After Arti is ready to replace the C tor client, There will be a transition period during which both the C and the Rust codebase need to be supported and maintained. We expect that as Arti gains its missing features and gets integrated into more downstream codebases, the support burden for Arti will increase. At the same time, the support burden for the C codebase will not lessen until it finally reaches end-of-life. Tor is a living protocol, and we make improvements all the time in order to improve its robustness, performance, and security. Such protocol improvements are difficult when we need to maintain two separate codebases: until the C relay implementation is finally deprecated, we will need to slow the scope of our technological change to what is really necessary. On the other hand, once our C code is finally deprecated, we expect that protocols implemented in Arti will be easier and safer to extend and improve than our C implementation ever was. In the long run, once the C codebase is completely unsupported, there is a risk for “code rot” in older applications that depend on the C Tor implementation, especially if they depend on unstable internal APIs or the legacy controller interface. If the maintainers of these applications no longer have time to update their code, it will eventually become unusable and/or insecure. As a final consequence: we do hope that work on Arti, along with other development efforts at Tor, will help to increase the number of Tor users and relays. Increasing these numbers will necessarily require the network to scale, which will come with its own set of challenges.
- **Evaluation plan:**
  We’ll consider ourselves successful if we deliver all intended features on-time in well-documented, well-tested code. We’ll continue to report feature-by-feature progress, along with changes in our test coverage. As we work on the 2.0.0 milestone of “feature parity with C”, we’ll draw up a list of C Tor’s existing APIs and configuration options, and we’ll track the fraction of these that have an equivalent in Arti. We do not expect to reach 100%: some C Tor features were never a good idea, or make no sense in Rust, or never acquired a significant user base. When we decide that a feature should _not_ be implemented in Arti, we’ll describe why, and track the fraction of features that are so deprecated. To help track quality-in-practice as Arti begins to get more users, we’ll use the number of downloads of our crates from crates.io, along with the number of reported bugs over time. We’ll also continue to track the number of external contributors for each release, to ensure that our development practices and software quality remain accessible to the wider open-source privacy community. Qualitatively, we’ll stay engaged with downstream developers inside and outside the Zcash community, and report what we have heard about their overall satisfaction with Arti.

### Project Timeline

- **Project timeline determination:**
  Each milestone above is derived from milestones we have established in GitLab, which you can see here: https://gitlab.torproject.org/tpo/core/arti/-/milestones . Each milestone is made up of individual tickets. We estimate the time required to complete each ticket, and from there, establish milestone timelines. We also used our experience during the first year of this project to hone our estimations.

### Milestone 1

- **Amount:**
  176404.0
- **Expected Completion Date:**
  2/29/2024

  - **Deliverables:**
    - Onion Services: Arti has client and service support for Onion Services.

### Milestone 2

- **Amount:**
  323712.0
- **Expected Completion Date:**
  2/1/2025

  - **Deliverables:**
    - Parity with C tor client: all relevant non-deprecated C Tor client features are present.
    - Full embedding support: Arti exposes a set of APIs sufficient for developing applications that use it in Rust and non-rust languages.

### Milestone 3

- **Amount:**
  144540.0
- **Expected Completion Date:**
  4/2/2024

  - **Deliverables:**
    - Vanguard design for protection against guard discovery attacks is implemented in Arti.

### Milestone 4

- **Amount:**
  22000.0
- **Expected Completion Date:**
  2/1/2025

  - **Deliverables:**
    - Documentation updated on https://arti.torproject.org

### Additional Milestones

- **Additional Milestones:**
  Yes

### Submission Date

- **Submission Date:**
  2022-07-22 21:18:24

### File Attachments

- **Simplified_Arti_Diagram_-_Modules_Extensions.pdf**: [Additional documentation]

