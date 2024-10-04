---
title: "ZGo - The Zcash Register"
status: "Accepted"
amount: "114200.0"
submitter: "[REDACTED] [REDACTED]"
email: "[REDACTED]"
date: "2022-05-27 22:29:21"
project_name: "ZGo - The Zcash Register"
summary: "ZGo will enable vendors and merchants to accept Zcash as payment in a simple, affordable way."
total_grant_value: "114200.0"
submitter_last_name: "[REDACTED]"
original_title: "ZGo - The Zcash Register"
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
  Zcash Community Forums
- **Original Title:**
  ZGo - The Zcash Register

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
  - Start Up Funding COMPLETE

### Project Overview

- **Project Name:**
  ZGo - The Zcash Register
- **Last Updated:**
  2022-05-27 22:29:20
- **Sponsorship Request:**
  No
- **Project Image (Public Gallery):**
  logo-new.png
- **Project Summary:**
  ZGo will enable vendors and merchants to accept Zcash as payment in a simple, affordable way.

### Project Description

- **Overview:**
  Current electronic payment solutions are centralized, costly and take custody of the funds paid to vendors for some period of time. It is becoming more common to see vendors and merchants add surcharges for electronic payment processing fees, passing the costs to consumers. The alternative proposed by the United States Federal Reserve raises multiple concerns regarding surveillance and custody of funds. Even though Zcash can provide a seamless payment experience, there is no application currently available for merchants to implement Zcash payments easily. One of the key components of mass-adoption of Zcash is the ability to transact with it on a day to day basis, and this is the gap we aim to fill.
- **Proposed solution:**
  ZGo is a private point-of-sale platform that leverages Zcash shielded memos to link a device to the vendor's Zcash address and a ZGo shop. The vendor then purchases a session, using ZEC, enabling the full functionality of the app for a set period of time. A ZGo shop allows a vendor to create a list of items available for sale, and set their prices in the reference fiat currency and their description. The vendor then can add these items and amounts to an order for a customer. The vendor can now prompt the customer for direct payment using a QR code and offer the customer a digital receipt. If the sale is not in a retail setting, the vendor also has the option to generate an invoice based on the order, creating a URL that can be sent to the customer via e-mail, SMS, or other direct messaging apps. This URL prompts the customer for payment using a QR code. We intend to integrate ZGo with major invoicing platforms, to allow businesses to leverage existing systems to provide the option of Zcash payments.
- **Solution Format:**
  ZGo aims to provide a smooth, private experience for vendors and merchants to accept payments in Zcash with a point-of-sale web app that is: - *Non-custodial*. Funds go directly from the customer to the vendor's wallet via shielded transactions. - *Mobile-friendly*. The app works on desktops, mobile devices and supports small screens. - *Device agnostic*. The app works regardless of the operating system, all that is required is a modern web browser. - *Flexible*. The app supports multiple points-of-sale for a single vendor and has a flexible price structure for vendors that may only need the service seasonally. - *Integrated*. The app integrates with common business systems (CRMs, e-commerce).
- **Dependencies:**
  ## Zcash Wallets ZGo generates QR codes compliant with @zip321, a wallet that supports this standard is required for the best experience with the application. Currently, *Nighthawk* and *ZecWallet* support it on Android devices. *Unstoppable* does not, we have reached out to them and received a response that they would look into implementing ZIP-321 after they are done with updates related to NU5. ZGo implementation of Unified Addresses is also dependent on wallets making this new functionality available. Incorporating other future changes in the Zcash protocol into ZGo will also depend on wallets in the ecosystem making the corresponding upgrades. ## ZEC Price feed ZGo currently uses CoinGecko API to obtain ZEC prices. If the availability of this API changes, ZGo may need to switch to a different service to keep up-to-date prices.
- **Technical approach:**
  ZGo is a libre software app and includes: - Web front end built on *AngularJS*. - API server built on Haskell, providing both monitoring of relevant blockchain information, ZEC price data and interfacing with the ZGo database. - Zcash full node. - MongoDB database for storage. ZGo leverages the Zcash shielded memo field to identify a shop as well as individual devices acting as points-of-sale for the shop as shown in Figure 1. Figure 2 shows the basic flow for a retail sale, where the vendor uses ZGo to put an order together, ZGo uses the latest available prices from CoinGecko to calculate the total ZEC amount for the order and then creates a ZIP-321-compliant QR code that the customer can use to pay, ensuring that the correct address for the shop and the correct amount of ZEC is pre-populated in the customer's wallet. ZGo also includes the order ID in the shielded memo, allowing the shop owner to match payments in their wallet with orders in ZGo. One of the identified future improvements to this flow is having ZGo confirm the payment of the order for vendors that provide a viewing key for their business shielded address. Figure 3 shows the flow for a vendor that may not be doing business in a retail setting and can then send an invoice to a client for payment. ZGo allows the customer to use a URL to view the invoice and the corresponding ZIP-321-compliant QR code for payment. This flow will also benefit from the automated payment confirmation via viewing key mentioned above. Another benefit of ZGo for vendors is keeping track of all the orders for later review. ZGo records the ZEC amount of the order, the contents of the order as well as the ZEC price at the time the order was closed, making this information available to the vendor for accounting purposes, while maintaining the customer's privacy. ZGo currently supports multiple fiat currencies for conversion, including U.S. dollars(USD), Euros (EUR), British pounds (GBP), Australian dollars (AUD) and Canadian dollars (CAD). The code for ZGo is maintained in GitLab and available under the *Bootstrap Open Source License* in our [Front End repo](https://gitlab.com/pitmutt/zgo) and our [Back End repo](https://gitlab.com/pitmutt/zgo-backend). Feature requests, bugs and discussions are tracked in GitLab. Our main website contains guides and demos of using the app successfully. ## Feature Roadmap The features we have currently identified for implementation are: - Payment confirmation, using a provided viewing key. - Support for Unified Addresses. - Integration with CRM tools like QuickBooks. - Spanish UI translation. - Data export. - Adding tips to orders. - Adding a tax line to orders. - UX enhancements. - Referral program.

### Requested Grant Amount

- **Amount:**
  114200.0

### Budget Breakdown

- **Hardware/Software budget:**
  2100.0
- **Hardware/Software justification:**
  This includes $600 dollars for an iPad to enable feature testing on iOS and $1500 for licensing of CRM tools like Quickbooks and Xero to develop and test integrations
- **Services budget:**
  6500.0
- **Services justification:**
  This includes $1500 for hosting services and $5,000 for legal services to review and develop the legal agreements needed for a successful operation.
- **Compensation budget:**
  105600.0
- **Compensation justification:**
  This includes a budget of 12 months of user support, at 10 hours per month. It also includes a budget for 12 months of feature development at 100 hours per month. The hourly rate is $80. The work will be performed by both Rene Vergara Larrea and Rene Vergara Araque.
- **Startup funding required:**
  Yes
- **Startup funding explanation:**
  The funding for the hardware, software, and hosting services would allow to secure the platform for further development. Additionally, $5000 for retaining fees for the law firm would allow us to begin the process of getting the necessary legal framework for the operation of ZGo.
- **Startup funding amount:**
  8600.0
- **Total proposed grant value:**
  114200.0

### Team Members

- **Project Lead:**
  Vergara Technologies LLC
- **Background:**
  Vergara Technologies LLC was founded in 2021 to support the creation, development and operation of ZGo. We are a father-and-son team with decades of combined experience in technology consulting, project management, digital product management in South America and the United States. - Rene Vergara Larrea, MSc, PMP - Senior Technical Product Owner for a Fortune 50 insurance firm in the US, working with Java, ReactJS and MongoDB. - Creator and Developer of ZGo. - Rene Vergara Araque, MBA, MPM - Developer for ZGo - Creator of [GeoVSU](https://www.tecproval.com/geovsu.php), a GIS-enabled web application for the real estate market in Ecuador. - Creator of the [educational videos](https://www.youtube.com/watch?v=1kwbLY8CkjY) for GeoVSU. - Former CEO of AT&S Consultores, a technology consulting firm in Quito, Ecuador.

### Funding History

- **Previous funding:**
  No
- **Other funding sources:**
  No

### Risks and Evaluation

- **Execution risks:**
  ## Legal Risks As a platform that enables people to sell goods and services, ZGo needs to have very solid *Terms of Use* that allows for a safe, sustainable operation for the users and for Vergara Technologies LLC. Given that Zcash is global, the legal framework for the operation of ZGo needs to be compatible with multiple jurisdictions. One of the goals of this grant proposal is to obtain the funding and support to have the appropriate legal documents reviewed and updated by a reputable experienced legal firm to mitigate this risk. ## Technical Risks As a web platform, ZGo is exposed to the @owasp . To mitigate these risks, the app uses TLS for the external communications to the server, both for the UI and the API. The UI is designed as a Single-Page Application (SPA) to minimize opportunities for injection attacks. The authentication of users relies on the strong privacy provided by Zcash shielded memos to transmit information and the assurance that only the owner of the wallet with access to the private keys could complete sign-up.
- **Unintended Consequences:**
  A large adoption of ZGo may create some pressure on wallet developers to implement ZIP-321 to leverage the app.
- **Evaluation plan:**
  The impact of ZGo in the Zcash ecosystem can be measured by: - Number of shops opened - Number of active shops - Number of orders processed - ZEC transaction volume These metrics would only be reported in the aggregate, eliminating any potentially identifiable information.

### Project Timeline

- **Project timeline determination:**
  The project timeline was determined based on the work done so far on the ZGo application and the feature requests received from the community.

### Milestone 1

- **Amount:**
  17600.0
- **Expected Completion Date:**
  7/31/2022

  - **Deliverables:**
    - Payment Confirmations using viewing keys.

### Milestone 2

- **Amount:**
  17600.0
- **Expected Completion Date:**
  9/30/2022

  - **Deliverables:**
    - Unified Addresses support

### Milestone 3

- **Amount:**
  17600.0
- **Expected Completion Date:**
  11/30/2022

  - **Deliverables:**
    - First integration available in test server
    - Spanish translation available in test server

### Milestone 4

- **Amount:**
  17600.0
- **Expected Completion Date:**
  1/31/2023

  - **Deliverables:**
    - Spanish translation complete in Production
    - Data Export in Production
    - First CRM Integration in Production

### Additional Milestones

- **Additional Milestones:**
  Yes

### Submission Date

- **Submission Date:**
  2022-05-27 22:29:21

### File Attachments

- **fig1.png
fig2.png
fig3.png
proposal.pdf**: [Additional documentation]

