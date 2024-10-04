---
title: "Private Data Exchange"
status: "Declined"
amount: "350000.0"
submitter: "[REDACTED] [REDACTED]"
email: "[REDACTED]"
date: "2022-08-22 13:11:39"
project_name: "Private Data Exchange"
summary: "We build a privacy preserving market place for transaction data with full control of individual data and fair distribution of gains."
total_grant_value: "350000.0"
submitter_last_name: "[REDACTED]"
original_title: "Private Data Exchange"
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
  Zcash website
- **Original Title:**
  Private Data Exchange

- **Labels:**
  - OPEN

### Project Overview

- **Project Name:**
  Private Data Exchange
- **Last Updated:**
  2022-08-22 13:11:39
- **Sponsorship Request:**
  No
- **Project Image (Public Gallery):**
  cats.jpg
- **Project Summary:**
  We build a privacy preserving market place for transaction data with full control of individual data and fair distribution of gains.

### Project Description

- **Overview:**
  A centralized market is a market in which all buyers and sellers meet on a common platform and trade is facilitated by a market organizer. There are certain advantages of centralized marketplaces: they help consumers to save search costs (time and money) when searching for desirable goods and they facilitate the listing of products by sellers. In the past, typical “centralized” marketplaces were supermarkets and store chains. The shift to online retail markets organized by platform providers such as Amazon, eBay, Taobao, etc., has dramatically changed the retail landscape by allowing for lower search costs for buyers and unlimited listing capacity for sellers. However, such centralized marketplaces suffer from several inefficiencies: First, the market organizer can exert market power through its exclusive access to trading information generated on its platform. Second, trading such information puts either buyers or sellers at a disadvantaged position. Third, and most importantly, the platform can replace sellers once it has learned about the demand side and as a consequence completely capture the market by its own. Amazon is a typical example of a platform that takes advantage of using both consumers’ and sellers’ information. On the demand side, Amazon collects data from users when they navigate their website, such as the time spent browsing each page, as well as detailed information on consumer purchases. Furthermore, Amazon monitors what consumers look at, uses their shipping address (e.g., Amazon can take a surprisingly good guess at a consumer’s income level based on where the consumer lives), and information derived from reviews and feedback in case the user provides it. Amazon’s recommendation technology is based on collaborative filtering, which means that Amazon decides on what it thinks a consumer wants by creating a profile of the consumer, then offering the consumer products that people with similar profiles have purchased. On the supply side, Amazon uses sellers’ information to find and replace popular products and manage the prices of the products, i.e., offering discounts on similar best selling items, to attract more customers and to eventually increase the net profit. To mitigate this problems, several solutions have been developed recently, in light of development of decentralized applications as blockchains. Examples of privacy preserving transaction systems are ZCash, Tornado Cash, Panther Protocol, etc. Examples of data marketplaces are Ocean Protocol, DataPace, etc.
- **Proposed solution:**
  We propose to create a market place for buyers and sellers. After connecting buyers and sellers they continue their business on any (messaging) platform they wish, where they can agree on the terms of trade. Our platform has no control on price negotiation and other agreements between the buyer and the seller. In case that an agreement is reached, the buyer and the seller issue an encrypted transaction on a blockchain that provides privacy preserving transactions. A transaction includes information about the trade, and can be de-crypted either by the seller or by the buyer. Our platform only knows that a certain seller and a buyer have agreed on a trade, but does not know the terms of trade. Everyone monitoring the blockchain can obtain the same information as the platform and it therefore has no privileged access to information. Examples of decentralized exchange markets that can benefit from a platform such as ours are markets for digital goods and file exchange systems. These systems have been studied from a technological, and a game theoretical point of view, see Dziembowski et al. (2018). The authors propose that such markets can be organized without trusted third parties, using escrow mechanisms. References: Stefan Dziembowski, Lisa Eckey and Sebastian Faust, FairSwap: How To Fairly Exchange Digital Goods, Proceedings of the 2018 ACM SIGSAC Conference on Computer and Communications Security, CCS 2018, Toronto, ON, Canada, October 15-19, 2018, pp. 967--984, ACM, 2018
- **Solution Format:**
  The solution format is a website and an application to be installed on different types of devices. Through the website and application, sellers and buyers meet and make transactions in both product and data markets.
- **Dependencies:**
  Besides the above listed systems, two additional dependencies are required: • The ZCash privacy preserving transaction system, in which only transaction owners can disclose transaction information. • A private-public key encryption system, in particular, for aggregating information on multiple transactions (e.g., all transactions of one user in some time interval).
- **Technical approach:**
  • Website: Javascript (frameworks: viewjs, react), CSS, PHP (e.g., for admin panel) and other front-end programming languages/frameworks. • Maintaining publicly available database, similar to e.g. Etherscan, using open source databases, e.g., MongoDB. • Web-services (JSON, XINS) and web protocols (TCP/IP, https). • Reading and recording from the blockchain, using custom made API, built with REST API.

### Requested Grant Amount

- **Amount:**
  350000.0

### Budget Breakdown

- **Hardware/Software budget:**
  0.0
- **Hardware/Software justification:**
  No justification needed.
- **Services budget:**
  50000.0
- **Services justification:**
  Admin Costs, transportation, and other operation costs $5K per month.
- **Compensation budget:**
  300000.0
- **Compensation justification:**
  2 Software Engineers (0-2 year experiences) $60 - 70K per year per person $120 - 140K 1 Software Engineer (4-6 year experiences) $100 - 120K per year per person $100 - 120K Interface Designer (0-2 year experiences) $50 - 60K per year per person $50 - 60K
- **Startup funding required:**
  No
- **Total proposed grant value:**
  350000.0

### Team Members

- **Project Lead:**
  kakia
- **Background:**
  We are team of three economists and computer scientists with academic backgrounds who work in faculty positions at different universities. One of us works in Applied Microeconomics, Business Economics, Digital Economy, Industrial Organization and has published extensively on these topics in leading academic journals in economics and marketing. He holds editorial positions at several journals. His responsibilities in the project are: – economics and econometrics modelling. – data analysis. One of us works on mechanism design and voting questions, often with applications to decentralized systems such as blockchains. He is a lead researcher for a web 3 company and regular participant of programming competitions, such as Google Hashcode, where he participated in several finals and obtained a 3rd prize. His responsibilities in the project are: -- technical architecture of the system. -- supervision of software developers. One of works on market design and related questions and has published his research in various economics and computer science outlets. His responsibilities in the project are – market design, seller and buyer reputation design, pricing

### Funding History

- **Previous funding:**
  No
- **Other funding sources:**
  No

### Risks and Evaluation

- **Execution risks:**
  • Speed of the system: scalability. With more users, the speed of the whole system may slow down (even) more than proportionally. Our goal is to keep the speed close to constant, which is usually achieved by parallelization of processes. • Privacy and security of the users’ metadata and users’ credentials. If the system grows and achieves a certain level of success, outside attacks will become more likely. • Website security: the same problem as before, but attacks can be directed to the functioning of the website.
- **Unintended Consequences:**
  The system, if successful, can disrupt the current centralized system. Therefore, it can become a target of attacks • technological: hack of the website, creation of decoy buyers/sellers, • economical: competition by cheaper alternatives, • legal compliance, from centralized marketplaces that own their users’ data, e.g., Amazon.
- **Evaluation plan:**
  During the project execution, we provide github link containing all repositories, that will give a quantitative measure of how much work is done. We provide user experience feedback as a qualitative measure.

### Project Timeline

- **Project timeline determination:**
  Based on past experience with research and product designs.

### Milestone 1

- **Amount:**
  100000.0
- **Expected Completion Date:**
  12/29/2022

  - **Deliverables:**
    - Market platform design and algorithm
    - Demo version of the website

### Submission Date

- **Submission Date:**
  2022-08-22 13:11:39

### File Attachments


