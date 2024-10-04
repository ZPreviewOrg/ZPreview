---
title: "Elemental ZEC – Zcash UI Component Kit and Payment Processor"
status: "Accepted"
amount: "51144.0"
submitter: "[REDACTED] [REDACTED]"
email: "[REDACTED]"
date: "2023-01-24 11:40:16"
project_name: "Elemental ZEC – Zcash UI Component Kit and Payment Processor"
summary: "A set of open-source modular components and libraries for Zcash apps to use, including a minimal payment processor."
total_grant_value: "51144.0"
submitter_last_name: "[REDACTED]"
original_title: "Elemental ZEC – Zcash UI Component Kit and Payment Processor"
labels:
  - APPROVED
  - GRANT COMPLETE
  - MILESTONE 1: COMPLETE
  - MILESTONE 2: COMPLETE
  - MILESTONE 3: COMPLETE
  - MILESTONE 4: COMPLETE
  - MILESTONE 5: COMPLETE
  - MILESTONE 6: COMPLETE
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
  Zcash community
- **Original Title:**
  Elemental ZEC – Zcash UI Component Kit and Payment Processor

- **Labels:**
  - APPROVED
  - GRANT COMPLETE
  - MILESTONE 1: COMPLETE
  - MILESTONE 2: COMPLETE
  - MILESTONE 3: COMPLETE
  - MILESTONE 4: COMPLETE
  - MILESTONE 5: COMPLETE
  - MILESTONE 6: COMPLETE
  - OPEN

### Project Overview

- **Project Name:**
  Elemental ZEC – Zcash UI Component Kit and Payment Processor
- **Last Updated:**
  2023-04-15 20:36:57
- **Sponsorship Request:**
  No
- **Project Image (Public Gallery):**
  elemental-zcash-logo.png
- **Project Summary:**
  A set of open-source modular components and libraries for Zcash apps to use, including a minimal payment processor.

### Project Description

- **Overview:**
  Building a Zcash app is time consuming and a lot of work needs to be done from scratch. Node.js integrations with a light client currently need to be done manually; there should be ` npm` packages for this. This makes prototyping ideas and developing apps for Zcash harder. Also, there are currently no open-source solutions for a merchant to accept Zcash payments. There has been community interest in a BTCPayServer integration or fork that adds support to Zcash.
- **Proposed solution:**
  A set of open-source modular components and libraries for Zcash apps to use, including a minimal payment processor, compatible with BTCPayServer/BitPay API. The main users initially will be developers of existing and new Zcash apps. There will also be some example apps which can be used by ZEC holders, such as a Zcash donation app with a confirmation message or action, together with a demo Point of Sale app.
- **Solution Format:**
  Open-source, published to GitHub. React.js and Node.js component libraries published to ` npm` .
- **Dependencies:**
  N/A
- **Technical approach:**
  Agile methodology making use of GitHub for project management (Issues and Projects), with weekly sprints. Front-end components - Built with cross-platform React.js code: using `@react-platform` and `elemental-react` - Published as `elemental-zec` Back-end components (payment processing, light client integration) - Node.js libraries, including: - a watch-only wallet for payment processing (`elemental-pay`, exposing a BitPay compatible REST API) - ZECpages and memo.cash protocol support; decode action codes and messages, and cache/expose via Postgres and REST API. These could be integrated into wallets

### Requested Grant Amount

- **Amount:**
  51144.0

### Budget Breakdown

- **Hardware/Software budget:**
  0.0
- **Hardware/Software justification:**
  N/A
- **Services budget:**
  744.0
- **Services justification:**
  $57 / month (OVH Dedi) – $744 for 12 months
- **Compensation budget:**
  50400.0
- **Compensation justification:**
  ** Development ** | Time | Amount | | --------------- | --------- | | Hourly Rate | $100 / hr | | Hours Per Week | 21 hours | | Number of Weeks | 24 weeks | | ** Total ** | $50,400 |
- **Startup funding required:**
  No
- **Total proposed grant value:**
  51144.0

### Team Members

- **Project Lead:**
  1337bytes
- **Background:**
  Software Engineer with 5 years’ experience working in web and app development. Extensive expertise in building full-stack apps, design systems and server management; experienced with JavaScript and Java. Founder of open-source organization Elemental Design: https://github.com/elemental-design Active member of the open-source community. [Contributor to](https://github.com/macintoshhelper?from=2019-12-01&to=2019-12-31&year_list=1): - `airbnb/react-sketchapp` – render React code to Sketch designs or component library - `react-figma` – render React code to Figma designs - `lona/xd-file` – Adobe XD file manipulation utility for Airbnb’s Lona - `styled-components` – one of the most-used React CSS-in-JS libraries - `commaai/explorer` – annotator for self-driving car video footage

### Funding History

- **Previous funding:**
  No
- **Other funding sources:**
  No

### Risks and Evaluation

- **Execution risks:**
  If a BTCPayServer fork is not ready by the project's completion, then the project may have to rely on a non-audited Node.js backend. Developers of existing Zcash apps may be keen to stick with the frameworks/languages they use currently, so cooperation and outreach will be needed.
- **Unintended Consequences:**
  Inexperienced developers could inadvertently introduce security holes while creating apps using the libraries, especially if working on payment processing apps; clear documentation will be needed to explain the risks of using certain approaches and the need for audits or using audited software for sensitive applications. There could also be performance issues with popular apps using the libraries. Clear contribution guidelines will be needed, together with the ability to easily debug issues and benchmark performance to make it easy to implement optimisations.
- **Evaluation plan:**
  Since the work will be on GitHub, repository stars, forks and community discussion in issues or GitHub Discussions will be useful metrics of usage. GitHub tracks usage of `npm` packages in open-source repositories, giving an insight into how many open-source projects are using the libraries. npm downloads can be tracked too. Community feedback can be collected via the Zcash forums, GitHub Discussions and Discord.

### Project Timeline

- **Project timeline determination:**
  Total timeline will be 24 weeks (5.6 months). Weekly sprints with deliverables for milestones (GitHub and `npm` releases, together with demos). The first month of the project will start out with defining specifications for the full scope of the libraries and designs.

### Milestone 1

- **Amount:**
  10228.8
- **Expected Completion Date:**
  12/9/2021

  - **Deliverables:**
    - Design + Specification (completed and paid Dec 9th, 2021)
    - Create designs and specifications for the `elemental-zec` component library. Publish spec on GitHub for feedback, together with Sketch/Figma designs for user testing (and JSX code on GitHub).

### Milestone 2

- **Amount:**
  8183.04
- **Expected Completion Date:**
  2/17/2022

  - **Deliverables:**
    - First elemental-zec npm Release  (completed and paid Feb 17th, 2022)
    - Publish first release of `elemental-zec` to GitHub and `npm`, with some example React.js projects.

### Milestone 3

- **Amount:**
  8183.04
- **Expected Completion Date:**
  6/8/2022

  - **Deliverables:**
    - Publish Minimal ZPublish App (completed and paid June 8th, 2022)
    - Publish an example project built with elemental-zec, ZPublish, a custom cross-platform ZECpages and Twitter client, with feedback and changes upstreamed to elemental-zec.

### Milestone 4

- **Amount:**
  8183.04
- **Expected Completion Date:**
  10/21/2022

  - **Deliverables:**
    - Create Elemental Pay With Donation App (completed and paid Oct 21st, 2022)
    - Publish Elemental Pay payment processor/notification library, with a minimal BitPay inspired API (swappable with BTCPayServer), together with a simple donation web app using it.

### Additional Milestones

- **Additional Milestones:**
  Yes

### Submission Date

- **Submission Date:**
  2023-01-24 11:40:16

### File Attachments


