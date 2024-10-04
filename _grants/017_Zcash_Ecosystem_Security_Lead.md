---
title: "Zcash Ecosystem Security Lead"
status: "Accepted"
amount: "204000.0"
submitter: "[REDACTED] [REDACTED]"
email: "[REDACTED]"
date: "2022-06-06 14:26:48"
project_name: "Zcash Ecosystem Security Lead"
summary: "I'll provide in-depth security and privacy analysis, outreach, and leadership for Zcash community projects."
total_grant_value: "204000.0"
submitter_last_name: "[REDACTED]"
original_title: "Zcash Ecosystem Security Lead"
labels:
  - GRANT COMPLETE
  - MILESTONE 1: COMPLETE
  - MILESTONE 10: COMPLETE
  - MILESTONE 11: COMPLETE
  - MILESTONE 12: COMPLETE
  - MILESTONE 2: COMPLETE
  - MILESTONE 3: COMPLETE
  - MILESTONE 4: COMPLETE
  - MILESTONE 5: COMPLETE
  - MILESTONE 6: COMPLETE
  - MILESTONE 7: COMPLETE
  - MILESTONE 8: COMPLETE
  - MILESTONE 9: COMPLETE
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
  From waaay back when the community was discussing ZIP 1014.
- **Original Title:**
  Zcash Ecosystem Security Lead

- **Labels:**
  - GRANT COMPLETE
  - MILESTONE 1: COMPLETE
  - MILESTONE 10: COMPLETE
  - MILESTONE 11: COMPLETE
  - MILESTONE 12: COMPLETE
  - MILESTONE 2: COMPLETE
  - MILESTONE 3: COMPLETE
  - MILESTONE 4: COMPLETE
  - MILESTONE 5: COMPLETE
  - MILESTONE 6: COMPLETE
  - MILESTONE 7: COMPLETE
  - MILESTONE 8: COMPLETE
  - MILESTONE 9: COMPLETE
  - OPEN

### Project Overview

- **Project Name:**
  Zcash Ecosystem Security Lead
- **Last Updated:**
  2022-11-05 00:59:23
- **Sponsorship Request:**
  No
- **Project Image (Public Gallery):**
  Zcash_Ecosystem_Security_Lead.png
- **Project Summary:**
  I'll provide in-depth security and privacy analysis, outreach, and leadership for Zcash community projects.

### Project Description

- **Overview:**
  Both ECC and ZF have strong security programs, with engineers focused on security and a reputation for regularly funding third-party audits of the software they build. Zcash community projects, like those funded by grants or built by volunteers in the community, are also in need of security support. It is too expensive to staff each project with a dedicated security engineer, and audits alone are insufficient, because they only evaluate the code at one point in time. Audit reports often come too late, after crucial design decisions have already been made, and projects can find themselves stuck with poor design choices that could have been prevented by having security support early on. Another problem with one-off audits is that you often get a different set of auditors each time, so the auditors don't have an opportunity to build up a long-term understanding of the project's goals and architecture. The Zcash community needs someone they can turn to for goal-oriented security advice, and someone who can provide security review based on a deep technical understanding of their projects' designs and code.
- **Proposed solution:**
  My proposal is to become a security engineer serving the wider Zcash ecosystem outside of ECC and ZF—at least as much of it as I reasonably can. Like any security engineer, I will provide regular security audits of ecosystem projects culminating in reports that will be published for the community to see. Going beyond audits—and this is crucial—I aim to build relationships with ecosystem project leaders and developers so that they feel comfortable asking me me for security advice, and so that I have an opportunity to help them strengthen their own internal security practices and designs.
- **Solution Format:**
  There are three components to what I'm proposing: outreach, security analysis, and remediation support. Outreach: I will offer regular "security office hours" to as many community projects as I can, within a timebox. Project leaders and developers will be able to join a private call with me to discuss where their project is headed, talk though security risks, get feedback on proposed designs, assistance with threat modeling, and so on. For example, this might look like a one-hour meeting each month per supported project, plus additional time for research and responding to questions over chat/email. The precise format of my outreach will adapt to what proves to work best. Security Analysis : Each month, I will perform an in-depth security audit of one Zcash ecosystem project (or part of one). The deliverable will be an audit report detailing the issues found, suggested bug fixes, and other security-focused comments on the designs and code. These audits will help uncover security bugs, preventing attacks on Zcash users, and will give the Zcash community insight into the security quality of the projects we decide to fund. I'm especially excited to audit the implementation of ZSAs, wallets like Nighthawk, and other projects built on Zcash like Zbay and hardware wallets. The projects I choose to audit will be at my discretion (where I think review is most needed based on usage and risk), with input taken from the community and the grant committee. I will also publish any tooling I build to assist with analysis (fuzzers, etc.) as long as it is safe to do so. Remediation Support : It is not enough to find and report security problems; developers often need advice on the best way of fixing a security issue, and someone needs to check that the patches really fix the bugs. In tandem with my outreach effort, I'll remain available to projects after delivering my reports in order to help with remediation. To be clear, in most cases this does not mean patching bugs myself, but rather educating the developers on what the fix should be and why.
- **Dependencies:**
  I expect to be able to meet the deliverables without direct assistance from ECC or ZF (aside from the funding!). As long as the designs and code are open, I'll be able to carry out the audits and make recommendations. I will be dependent upon project developers to fix critical bugs before the audit reports can safely be made public. I recommend following a maximum-90-day embargo policy, except in cases where it genuinely takes more than 90 days to fix the bug or if the risk is severe. Reports that detail minor unfixed bugs may be released prior to patching, since it's reasonable for projects to de-prioritize those fixes relative to other work. If an audit report is embargoed, it will still be delivered to the grant committee for evaluation so that my funding can be disbursed.
- **Technical approach:**
  My approach to outreach is based on trust-building. I aim to show project leaders that I am technically competent and understand their business goals , over time building up trust that my security recommendations are sound and prioritized correctly given the resources available to each project. I'll start by immediately opening up monthly "office hour" slots that anyone can attend to get help and ask questions. As I perform security assessments, I'll onboard those projects' developers into a private monthly call where we can discuss the project's direction, goals, and security strategy. I can talk all day about my security audit process, but I'll keep it brief here. I start by understanding what the target software or protocol does and brainstorming all the things that could possibly go wrong, as well as goals that an attacker might have and what security properties users value (i.e. a threat model). Then, I read as much of the relevant design docs and code as I can, keeping notes of anything that looks like a weakness or might be used in an unintended way. I make multiple passes over my notes and the code to try to confirm any noted weaknesses as real issues. Finally, I write up the report, noting the issues I found and making other comments, like suggesting code changes that would speed up future audits and tests that would be worthwhile to add. It's a creative process that involves both checking for well-known kinds of vulnerabilities and making attempts to break security in novel ways.

### Requested Grant Amount

- **Amount:**
  204000.0

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
  204000.0
- **Compensation justification:**
  My rate for security consulting is $1000USD/day. The industry standard is $500-$3000/day, the high-end of that range being common for cryptography-focused auditing. My budget breaks down into 12 months, each month being composed of: $10,000 for 10 days of in-depth security analysis applied to a specific Zcash community project, with a written report delivered to the project's developers and later published. $2,000 for remediation assistance overhead on average (2 day-equivalents). $5,000 for outreach efforts (5 days). This works out to 17 days per month at a cost of $17,000 USD per month, for a total commitment of $204,000 USD over a year. Each month's budget is only to be paid out after the work has been completed. The exact allocation of time may change slightly based on needs, for example it might turn out to be better to spend more time on outreach and less on auditing in a given month. Or, it might sometimes make more sense to do two shorter audits in a month rather than one large one. Any changes to what I've written here will be discussed with the grant committee.
- **Startup funding required:**
  No
- **Total proposed grant value:**
  204000.0

### Team Members

- **Project Lead:**
  Taylor Hornby
- **Background:**
  I've been working to secure Zcash-related infrastructure and codebases over the past four years as a senior security engineer at Electric Coin Co. In that time, I've developed a good understanding of the Zcash protocol, its cryptography, and the architecture of Zcash wallets. As a result of that knowledge and experience, I am well-positioned to offer my security services to a wider set of projects across the Zcash ecosystem. Before working on Zcash, I was an independent security consultant and researcher. I performed security audits of cryptography-focused software like encrypted filesystems, I presented my research on using cache side-channels to attack everyday programs at Black Hat USA, and I co-authored a popular PHP encryption library . For education, I have a BSc in Computer Science and a MMath in Quantum Information. You can find most of my public work and writing on https://defuse.ca/ .

### Funding History

- **Previous funding:**
  No
- **Other funding sources:**
  No

### Risks and Evaluation

- **Execution risks:**
  If I spread my attention too thinly across too many projects, each one might not get the in-depth attention it needs. I can avoid that by prioritizing high-user-count or community-suggested projects, being clear about audit scope in each audit report, and timeboxing my audits and outreach efforts for each project. There are some kinds of cryptography and code that I'm not qualified to audit. In particular, I don't understand zero-knowledge proof protocols very well, nor the in-depth elliptic curve math, so I would not feel qualified to audit an implementation of Halo and some kinds of circuit optimizations. Whenever I encounter something that I don't feel qualified to audit, I'll make a note of that in my report and do the best that I can, taking it as a learning opportunity. Since this project relies on relationship-building between myself and community projects, if I were to be hit by a bus, the built-up trust would need to be rebuilt by whoever takes over this project. If this project proves to be a success, I am hoping to expand it to include more people; a kind of "Project Zero" for the Zcash ecosystem.
- **Unintended Consequences:**
  The public audit reports will reveal bugs in Zcash community software, and this might be misconstrued by detractors to discredit Zcash projects' security. This would be in error, because all projects have bugs, and finding and fixing them shows that the security program is working. Reports will be written as carefully as I can to avoid misquoting. A common error in security is to be too alarmist and to shut down progress rather than providing safe paths forward. That's why it's important that I meet with project developers to understand their goals and tailor my advice to the level of resources they have, with an understanding of their users' threat models.
- **Evaluation plan:**
  The community should expect to see audit results published on a monthly cadence (these may be embargoed for 90 days in case of unresolved critical bugs). The content of the audit reports should convince the developers and any security engineer that I understood and thoroughly evaluated the designs/code that were in scope of the audit. Zcash community project developers should be asked how useful my outreach and support has been, and they should rate me as helpful, polite, and be willing to recommend working with me to other Zcash projects. I based the formal deliverables below on audit reports being completed; I'm open to ideas from the community for other ways to formally track progress on the outreach efforts. Additional requirements: Monthly 	milestone payments shall be adjusted based on work completed in a given month, not to exceed the overall approved grant funding cap. Grantee shall participate in a monthly call with the ZCG committee before billing the current month’s work to discuss the following:
  Proof of work to be billed for the current month.
  Work planned for the next month.
  Prioritization of future work with input accepted from the ZCG and broader Zcash community.
  Relationship building accomplished within the community. Grantee shall work with ecosystem developers and partners via their preferred communication channels. Grantee shall follow responsible bug disclosure best practices, and when available, adhere to the disclosure policies and channels of the 	organization in which they are supporting. All testing software, hardware, and other expenses related to the work performed under this grant shall be the responsibility of the grantee. Grant start date is September 1, 2022.

### Project Timeline

- **Project timeline determination:**
  Audits are intensive work, so one per month is a reasonable cadence for a lone security engineer. I'm asking for a commitment to funding at least a full year of these audits and outreach—as long I keep delivering great work—because I am not trying to sell 12 individual audits, I want this to be a forward-looking security program for the Zcash ecosystem. A long time horizon will allow me to build up a deep understanding of projects' tech stacks and solidify the relationships that are crucial for this project to be a success. To take on this role, I'll also have to relinquish my responsibilities at ECC, and that's only a reasonable step for me to take if I know that I have funding secured for at least a year.

### Milestone 1

- **Amount:**
  17000.0
- **Expected Completion Date:**
  10/31/2022

  - **Deliverables:**
    - Audit Report #1

### Milestone 2

- **Amount:**
  17000.0
- **Expected Completion Date:**
  11/30/2022

  - **Deliverables:**
    - Audit Report #2

### Milestone 3

- **Amount:**
  17000.0
- **Expected Completion Date:**
  12/31/2022

  - **Deliverables:**
    - Audit Report #3 (...and similar for audit reports #4 through #12)

### Additional Milestones

- **Additional Milestones:**
  No

### Submission Date

- **Submission Date:**
  2022-06-06 14:26:48

### File Attachments


