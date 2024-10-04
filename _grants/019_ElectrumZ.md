---
title: "ElectrumZ"
status: "Declined"
amount: "6500.0"
submitter: "[REDACTED] [REDACTED]"
email: "[REDACTED]"
date: "2022-06-11 00:56:40"
project_name: "ElectrumZ"
summary: "ElectrumZ: An implementation of Electrum Personal Server that offers support for NU5+HALO"
total_grant_value: "6500.0"
submitter_last_name: "[REDACTED]"
original_title: "ElectrumZ"
labels:
  - Cancelled
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
  Your forum...
- **Original Title:**
  ElectrumZ

- **Labels:**
  - Cancelled
  - OPEN

### Project Overview

- **Project Name:**
  ElectrumZ
- **Last Updated:**
  2022-07-04 20:59:51
- **Sponsorship Request:**
  No
- **Project Image (Public Gallery):**
  electrumz.svg
- **Project Summary:**
  ElectrumZ: An implementation of Electrum Personal Server that offers support for NU5+HALO

### Project Description

- **Overview:**
  The problem with wallets is they are often written with development tools that are not exactly the nimblest. Look at the reference wallet for bitcoin ("bitcoin-qt"): as solid as it is, it is usually lagging in keeping up with sought after changes. The electrum wallet uses qt for its interface, and as functional as the overall wallet is (for example: its ability to sweep dust, which the bitcoin reference wallet cannot do...), the qt it uses presents implementation and versioning challenges (not to mention that while it is functionally adequate, it's not exactly the slickest looking interface...) The strategy is to enhance Electrum Personal Server (which supports pruned nodes...) to also understand shielded addresses, as implemented on NU5. Being that Electrum is written in python, it offers much better turnaround time for developers. Some eschew python for its performance; but that's where implementation with cython could be introduced, to speed things up quite a bit -not as fast as native C, but a hell of a lot faster than python. And given that python has flexibility and faster development time, and is much easier to security audit (an extremely important thing for financial apps...) than C, it's a win-win. The protocols (RPC, zeromq) and software codebase (Electrum) used by this project are familiar ones known to the larger community of digital currency developers; use of these familiar standards would only serve as an easier on-ramp to aftermarket zcash developers, thus augmenting zcash's overall utility and thus the general interest of zcash adoption for the purchase and sales of goods and services. The most important plugin that could later be implemented for the planned "plugin server" is one for ELECTIVE decentralized identity, which would help zcash to be handled by more exchanges (a red-button issue for zcash, given the EU's passage of new KYC requirements and ones that are now taking shape in the United States...) This project would be a first step in implementing three other companion products: a "plugin" server that runs in conjunction with Electrum Personal Server and that can be accessed via REST/rpc/0mq endpoints. Note that this component is NOT part of this proposed grant. It would be governed by an MIT license, to provide an economic incentive for people to enhance and adopt the overarching wallet capabilities of this architecture, and possibly spark a new ecosystem for applications. a zcash wallet plugin for the plugin server. Note that this component is NOT part of this proposed grant. It would be governed by a BOSL license, and would be requisitioned under a separate grant. The code for this would basically be the electrum wallet without qt and with network publishing capabilities over REST/rpc/0mq. a browser app (ideally done as a "Progressive Web Application"...) designed to talk to the zcash wallet plugin that runs on the electrum plugin server. Note that this component is NOT part of this proposed grant. It would be governed by a BOSL license, and would be requisitioned under a separate grant. Electrum is a well-documented server; but given that there are slight differences to command extensions that would need to be supported by this server, I could compose a short supplemental sphinx document to outline them.
- **Proposed solution:**
  Not only would this provide another wallet option for zcash, but it would, once initially developed, offer faster turnaround times to accommodate future functional improvements as of yet not envisioned. The plugin server could sprout an ecosystem for useful products: a blockchain SQL ingester, specialized transaction auditing, etc.
- **Solution Format:**
  A debian linux package (to start?) that can facilitate its speedy trial and adoption.
- **Dependencies:**
  python, linux (debian 11, to start...); I would need to enlist a maintainer to sponsor the package for the debian repos; as mentioned above, budgeting for hacker1 bounties can provide a lot of buzz for ZEC (this would be an elective option, to be decided upon by ECC...)
- **Technical approach:**
  Architecture Diagram

### Requested Grant Amount

- **Amount:**
  6500.0

### Budget Breakdown

- **Hardware/Software budget:**
  0.0
- **Hardware/Software justification:**
  All open source...
- **Services budget:**
  500.0
- **Services justification:**
  This expense can be dispensed with; but I would like to suggest that you can get a lot of visibility and make a more secure product if you were to allocate this amount for a hacker1 bounty. If you see the publicity as being beneficial, perhaps even double this amount.
- **Compensation budget:**
  6500.0
- **Compensation justification:**
  Being that this is for an open source project (governed by the BOSL license...), I estimate a frugal rate of $50/hour, and an optimistic time allocation of 20 hours a week for a total of six weeks (though given that I am new to NU5, I can easily see that time estimate getting doubled!)
- **Startup funding required:**
  No
- **Total proposed grant value:**
  6500.0

### Team Members

- **Project Lead:**
  Steve Boriotti
- **Background:**
  I have been developing commercially for the New York digital currency community since 2012 (I prefer the use of "digital currency" over "crypto" -sounds less nefarious to a tech bystander...) I have a good grounding in bitcoind RPC processing, and securing a systemd service file for it. I also am a bit of a postgresql guru. I have extensive python, cython and C++ experience. I previously contributed to the open source community by running RATS exploit analysis analysis software on the C source code for the Cyrus IMAP server for CMU, and contributed quite a number of buffer overflow bugfixes for it. An area of great interest to me in digital currencies is [practical and effective] decentralized identity for KYC. (<joke>My favorite editor is emacs...</joke>) I have just finished enhancing Electrum Personal Server [which supports pruned nodes] to support multiple wallet connections. I feel this is a good proof of my abilities for the electrum oriented task I want to accomplish next for Zcash.

### Funding History

- **Previous funding:**
  No
- **Other funding sources:**
  No

### Risks and Evaluation

- **Execution risks:**
  I am new to NU5; it will in all likelihood be a timesuck to accomplish this (until I get facile with ZEC's blockhain...) FORTUNATELY there is an older electrum implementation for zcash that I could consult for hints. insufficient testing (the elective hacker1 option would cover this...)
- **Unintended Consequences:**
  Frankly, I see none. If one were to play a devil's advocate acting in bad faith, one might argue that it is not as simple as a single server (zcashd; Electrum Personal Server enhanced to understand NU5/Halo; and the plugin server...) But I don't find that to be a big deal nowadays. This greater complexity can be addressed by writing a very extensible install script that oversees the correct setup of the three server instances -I'm very good at install scripts on linux. ALSO: the advantage of having non-tightly coupled server instances is that they can be run on separate dedicated hardware servers, to make them more performant (but this would require additional non-trivial configuration...)
- **Evaluation plan:**
  I would need to set up a suite of endpoints in Insomnia that will prove that a gamut of electrum wallet commands work with the NU5 blockchain and its shielded addresses (note that keys would need to be passed to the PERSONAL electrum server by means of extensions to Electrum's command set; this is the significant design departure from Electrum Personal Server...). [The longer term goals of a plugin server, wallet plugin, and wallet browser app would need to be accomplished by the early Fall, and both the wallet plugin and wallet browser app would be contingent upon additional zcash grants -interfaces are very difficult, so I would expect the browser app to be a much bigger-ticket item. The wallet plugin could rely on a lot of existing code that the electrum wallet already uses.]

### Project Timeline

- **Project timeline determination:**
  To be honest: this is my first project working with ZEC. I always liked the principles of ZEC, but to date no opportunity came up for me to work with it. So given that I have little experience with ZEC (but it is similar in some ways to the bitcoin blockchain...), making an estimation is a bit of a guess on my part (for that matter: who is expert with NU5 except people already in Zcash?) I would like to rise to the challenge though...

### Milestone 1

- **Amount:**
  6000.0
- **Expected Completion Date:**
  8/15/2022

  - **Deliverables:**
    - An Electrum Personal Server that can interpret shielded addresses on NU5/Halo

### Submission Date

- **Submission Date:**
  2022-06-11 00:56:40

### File Attachments

- **electrum-readthedocs-io-en-latest.pdf**: [Additional documentation]

