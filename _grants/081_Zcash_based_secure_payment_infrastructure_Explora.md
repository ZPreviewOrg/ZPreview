---
title: "Zcash based secure payment infrastructure (Exploratory Phase)"
status: "Accepted"
amount: "14600.0"
submitter: "[REDACTED] [REDACTED]"
email: "[REDACTED]"
date: "2023-04-06 01:17:09"
project_name: "Zcash based secure payment infrastructure (Exploratory Phase)"
summary: "Exploratory phase for a Zcash-based secure payment infrastructure for privacy-focused video-conferencing service"
total_grant_value: "14600.0"
submitter_last_name: "[REDACTED]"
original_title: "Zcash based secure payment infrastructure (Exploratory Phase)"
labels:
  - GRANT COMPLETE
  - MILESTONE 1: COMPLETE
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
  Zooko told us about it!
- **Original Title:**
  Zcash based secure payment infrastructure (Exploratory Phase)

- **Labels:**
  - GRANT COMPLETE
  - MILESTONE 1: COMPLETE
  - Start Up Funding COMPLETE

### Project Overview

- **Project Name:**
  Zcash based secure payment infrastructure (Exploratory Phase)
- **Last Updated:**
  2023-04-06 01:17:08
- **Sponsorship Request:**
  No
- **Project Image (Public Gallery):**
  birdIcon_-_AE6657_on_Transparent_-_with_censor_bar.png
- **Project Summary:**
  Exploratory phase for a Zcash-based secure payment infrastructure for privacy-focused video-conferencing service

### Project Description

- **Overview:**
  It’s easy for a cryptocurrency to function as a speculative investment vehicle. It’s harder for a cryptocurrency to become a real currency in society. We believe that a currency becomes real when you can use that currency to pay for the basic goods and services of daily life: food, rent, utilities, communications, and entertainment. Here at Birdcalls, we’re focusing on re-building basic communication services for society on the internet, this time with a foundational focus on privacy. Right now, all our payments go through Stripe, which is obviously not ideal from a privacy perspective. To further our privacy-as-a-given value system, we’d love to integrate a Zcash payment processing system onto our platform. And in the process, help improve Zcash’s basic utility as a real currency. We’ve made the internet’s phone booth. Now we want to add the phone booth’s coin slot! We’d love to partner with Zcash to do so. Also! As a company, Birdcalls values giving as well as taking. To give back to the Zcash community as a whole, we’d like to make it easier for other internet companies to integrate Zcash payment processing systems in the future. We’ll structure our integration so that we’re building on existing Zcash community documentation efforts.
- **Proposed solution:**
  The users and stakeholders for our payment system integration are: people making private calls on the internet who want to be able to pay for the service using privacy-focused currency. The users and stakeholders for our educational materials are: other internet businesses who want to integrate Zcash payment processing systems in the future.
- **Solution Format:**
  **Provide the Zcash community with a report detailing a comprehensive time and cost breakdown for the milestones and deliverables proposed in the original grant application materials.**
- **Dependencies:**
  None. If the existing btcpay option can’t be integrated, we have the skillset and are prepared to build it ourselves.
- **Technical approach:**
  How we will build the payment portal for our company’s needs Here’s how we would normally build a payment processing system like this: Run a separated server Which is connected to internet only via tor Each transaction reconnects to a new tor circuit to avoid transaction grouping / profiling So there’s no way to tie the transactions together Birdcalls’s Zcash public hierarchical key goes to the web server When someone wants to pay for something the web server uses the hierarchical public key to generate a unique address to that user and that transaction The zcash server sits and watches for new transactions, when an address it knows about receives funds, a signed postback is made to the web server to notify it that a payment of a certain value has been deposited to that address Then pings the web server and says here’s the received address amount Web server can then look up the account / transaction that this address was assigned to and mark it as paid User is then notified that their payment has been received Every transaction gets a new address But, we did our research! We discovered that the Zcash community has already funded a Zcash integration for btcpay. We’ll want to assess further, but we think that this integration should be sufficient for our needs. Thus, our new set of steps will be: Assess the btcpay Zcash integration Set up btcpay Zcash integration Configure btcpay Zcash integration To Add To Zcash Community Educational Materials: So that it’s easier for other online businesses to integrate Zcash payments in the future, here’s how we’ll contribute to the Zcash ecosystem: Take the existing Zcash functionality that’s already been added to btcpay Make sure it still works If it doesn’t work, we’ll fix it Create documentation for it, in the same way that other alt coins are documented (c.f. https://docs.btcpayserver.org/FAQ/Altcoin/#which-coins-does-btcpay-server-support ) Including a proper written setup guide A proper written config guide Set up the documentation as a GitHub repository that anyone can contribute to We’ll maintain the documentation repository for at least 1 year

### Requested Grant Amount

- **Amount:**
  14600.0

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
  14600.0
- **Compensation justification:**
  We’re dividing out the exploratory phase simply according to Individual hours billed at a standard short term contractor rate for our levels of expertise, $200 USD/hr/person Team collaborative hours billed at a lower rate, $100/hr/person We’ve also wrapped in the hours our team has already spent researching & strategizing this collaboration. BUDGETARY BREAKDOWN Architect has already spent 15 hrs research; $3000 USD Architect estimates 16-24 hrs more, we’ll bill for 20; $4000 Sunny already spent 10 hrs research/management/strategy; $2000 Full team meetings 5 heads, 2 hours per meeting, 4 meetings; $4000 Sunny estimates 8 hrs more research/management/strategy; $1600 Total: $14,600
- **Startup funding required:**
  Yes
- **Startup funding explanation:**
  This is for the initial exploratory phase - is this okay ? We need to start paying the developer for the hours already spent on this.
- **Startup funding amount:**
  6000.0
- **Total proposed grant value:**
  14600.0

### Team Members

- **Project Lead:**
  BirdCalls
- **Background:**
  BirdCalls is a diverse team of industry veterans with a combined 86+ years of technically relevant software experience, 25+ years financial experience, and 30+ years branding and marketing experience. As a team, we follow ‘Lapsed Anarchist’ Business principles. To us, this means we care deeply about open-source, but pragmatically we also care about making money to keep ourselves fed and housed, and our investors happy. This also means that we function by setting up a vision together of where the company is headed, agreeing on our corporate values, and then leaving each individual the freedom to decide their own path to get there. BirdCalls is a privacy-first company. This means we collect as little information as we can about our users, and we keep the identities of some of our own staff private as well. Sunny Allen is a serial entrepreneur with 10+ years managing software projects (and whipping up a shell script when needed) along with 15+ years branding, marketing, and entrepreneurial project management experience. Open source, biotech, sensor frameworks. [see link to linkedin in comments, link stripped for community first post guidelines] Dr. Aeron Tynes Hammack is a scientist and software engineer with 25+ years programming and systems architecture experience, with a focus on quantum computing physics and bioinformatics as well as copious amounts of entrepreneurial experience. [see link to linkedin in comments, link stripped for community first post guidelines] The Architect is a software designer with 32+ years programming experience. They are a pragmatic street smarts privacy and security professional who has built a custom bitcoin payment system using the bitcoin core API on the company’s own hardware (for a previous company). The Banker is a finance expert with 25+ years experience in international finance and lending with bulge bracket and boutique investment banks, as well as asset management firms. ████ is a software architect with 25+ years programming experience, who is so obsessed with privacy that it’s almost impossible to work with him, we never know where he is, and only one of us even knows his real name. What other kind of personality would we want in this role? Pattie is a brand architect and creative writer focusing on marketing strategies for startups and feminist business practices. She has 12 years of experience in small business building across the travel, tech, and chemical industries. Make a free two-person call at: The Internet Phone Booth [see link in comments, link stripped for new community post guidelines] Unlock full paid calling capabilities at: [see link in comments, link stripped for new community post guidelines] Our main site for more information: [see link in comments, link stripped for new community post guidelines] Our Gitlab: [see link in comments, link stripped for new community post guidelines]

### Funding History

- **Previous funding:**
  No
- **Other funding sources:**
  No

### Risks and Evaluation

- **Execution risks:**
  One of our developers has already set up a bitcoin payment server in the manner described above (Technical Approach Section) so he’s not particularly worried about his ability to execute this set of tasks. It just takes time.
- **Unintended Consequences:**
  Additional customer support resources and public facing documentation will be required to support customers paying with zcash. Basically, unless we’re careful, supporting Zcash payments could actually cost us more money than it makes us. Which could lead to a problem with the whole paying-for-the-roofs-over-our-heads thing.
- **Evaluation plan:**
  **The success metric here will be that we'll successfully communicate a more comprehensive breakdown of the proposed project**

### Project Timeline

- **Project timeline determination:**
  Based on an hourly breakdown.Allocation of resources of our developers’ time on this versus other internal projects, along with sufficient time to ramp up and iterate on customer adoption strategies

### Milestone 1

- **Amount:**
  8600.0
- **Expected Completion Date:**
  4/30/2023

  - **Deliverables:**
    - Provide the Zcash community with a report detailing a comprehensive time and cost breakdown for the milestones and deliverables proposed in the original grant application materials.

### Submission Date

- **Submission Date:**
  2023-04-06 01:17:09

### File Attachments


