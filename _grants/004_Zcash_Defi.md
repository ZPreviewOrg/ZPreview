---
title: "Zcash Defi"
status: "Declined"
amount: "345000.0"
submitter: "[REDACTED] [REDACTED]"
email: "[REDACTED]"
date: "2022-03-24 11:50:54"
project_name: "Zcash Defi"
summary: "Foster adoption of Zcash in the lending/borrow DeFi ecosystem"
total_grant_value: "345000.0"
submitter_last_name: "[REDACTED]"
original_title: "Zcash Defi"
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
  n/a
- **Original Title:**
  Zcash Defi

- **Labels:**
  - OPEN

### Project Overview

- **Project Name:**
  Zcash Defi
- **Last Updated:**
  2022-03-24 11:50:53
- **Sponsorship Request:**
  No
- **Project Image (Public Gallery):**
  Screen_Shot_2022-03-24_at_12.28.13.png
- **Project Summary:**
  Foster adoption of Zcash in the lending/borrow DeFi ecosystem

### Project Description

- **Overview:**
  We have people asking what they can do with their Zec, and the only answer we can give them is "not much". There's untapped opportunity to use DeFi markets for borrowing purposes and expand Zcash holders' financial horizon and foster adoption.
- **Proposed solution:**
  The solution is to allocate liquidity from the Zcash chain to DeFi native chain Fantom (FTM) and to leverage high quality DeFi partners. Fantom Opera (FTM) is a low fees top-tier EVM-compatible network, home of many innovative DeFi projects. Thanks to [Renlabs]( https://renproject.io/ ), we will mint 1:1 (minus fees) $renZec with $Zec and leverage DeFi partners [Spookyswap]( https://spookyswap.finance/ ) and [market.xyz]( https://www.market.xyz/ ). Renlabs is the leading inter-blockchain protocol, known for their famous $renBTC token (https://defillama.com/protocol/renvm) Spookyswap is the leading DEX on Fantom blockchain (https://defillama.com/protocol/spookyswap) Market.xyz is the leading borrow market on FTM, enabling growing marketcap projects like Zcash to benefit from DeFi. (https://fantom.market.xyz/) As you can see, all the infrastructure is already out there.
- **Solution Format:**
  The solution utilizes a DeFi primitive called "LP" for Liquidity Pool. All we need to do is to create a renZec/USDC LP with Spookyswap, and Market.xyz will enable $renZec holders to deposit their own assets and borrow stablecoin $MAI. The MAI token is pegged to the US Dollar and can be used to purchase any assets available on FTM.
- **Dependencies:**
  * Spookyswap * market.xyz * renlabs Involvement of Zcash community grants is not necessary, but recommended, see below : **Important : We do need a middleman to move money around and create the LP, but once the LP is created it needs to be attached to an FTM address obviously. That FTM address can be controlled by me or by the "Zcash Community Grants" (ZCG) team if they accept to take custody of it. In order to minimize risk to ZCG, we recommend the ZCG team take ownership of the LP, however, we request commitment that ZCG won't arbitrarily pull the LP as this would critically disrupt the whole project.**
- **Technical approach:**
  * Sell half of the Zec for USDC, possibly on OTC * Bridge $Zec to FTM network with renbridge and obtain $renZec tokens * Bridge $USDC to FTM network * With assistance from Spookyswap, create renZec/USDC LP and get the $renZec token whitelisted * Market.xyz will open a $renZec pool and allow any users to deposit $renZec as collateral and enable a stablecoin $MAI borrow market **Important : We do need a middleman to move money around and create the LP, but once the LP is created it needs to be attached to an FTM address obviously. That FTM address can be controlled by me or by the "Zcash Community Grants" (ZCG) team if they accept to take custody of it. In order to minimize risk to ZCG, we recommend the ZCG team take ownership of the LP, however, we request commitment that ZCG won't arbitrarily pull the LP as this would critically disrupt the whole project.** Here are 3 scenarios to explain the mechanisms of this project. ## Scenario 1 : liquidation Bill has some $renZec and wants to borrow against it. Bill deposits 1 $renZec token to market.xyz $renZec pool. This is his collateral and $ZEC currently trades at $100 on Coinbase. Now, Bill borrows $80 worth of $MAI stablecoin and do whatever he wants with his money. 2 days later, $ZEC trades at $80 on coinbase. Market.xyz liquidation engine noticed the price drop and needs to sell Bill's collateral to repay themselves with the $80 they lent to Bill. Market.xyz's routing engine knows there is a LP out there that accepts $renZec/$usdc transactions. Market.xyz will give Bill's collateral to the LP and take $80 from the LP. What happened to the LP ? The LP amount of $USDC decreased by 80, and the amount of $renZec increased by 1. ## Scenario 2 : Zec goes to the moon Zcash currently trades at $100 on coinbase. Barry is a Zcash bull and he owns 20 $renZec. Barry thinks Zcash is going to gain in the coming days. Barry deposits his $renZec in the market.xyz smart contract, and borrows $1000 $MAI. Then, Barry buys 1000 $USDC with his 1000 $MAI. With his loan, Barry decides to buy additional $renZec. Thanks to the LP, Barry is able to tap into this liquidy smoothly. What happened to the LP ? The LP amount of $USDC grew by 1000, and the amount of $renZec dropped by 10. Over the next few days, Zcash indeed gained 100%, and Barry wants to take some profits. Barry taps again into the LP and exchanges 5 $renZec for 1000 $USDC. Barry then sells his $1000 USDC for 1000 $MAI and repays his loan. What happened to the LP ? The LP amount of $USDC decreased by 1000, and the amount of $renZec increased by 5. ## Scenario 3 : Zec goes to zero This is an extreme and unlikely scenario that will help you understand the mechanics of an LP Zec suffers a critical bug, and price is plummeting on Coinbase. $renZec holders notice and decide to sell their $renZec to get some $USDC instead. What happened to the LP ? The LP will have its amount of $USDC tokens decrease quickly to Zero and the amount of $renZec grow by a lot very fast. ## The takeaway I hope with these 3 scenarios I explained to you what an LP is and what its purpose is. It is important to understand a LP with a deep liquidity pool is absolutely crucial to have a smooth experience in the DeFi world. Without a deep LP, market.xyz wouldn't be able to liquidate risky positions and their protocol would be unusable. In DeFi terminology, a deep LP can be seen as a *commitment* and a *strong signal* that we want to grow Zcash's usecases organically. The address owning the LP always remain in control of the funds, although the amount of tokens within the LP fluctuates over time as DeFi users taps into it.

### Requested Grant Amount

- **Amount:**
  345000.0

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
  345000.0
- **Compensation justification:**
  ## Main budget We request $300k worth of $Zec to seed liquidity for the sole purpose of bootstrapping the ecosystem. The deeper the liquidity, the better. Per the Spookyswap team, the absolute minimum to get $renZec token whitelisted is $100k but it is considered low quality liquidity. Great liquidity is in the $1M. Given the current state of DeFi w/ Zcash, we think $300k is a good compromise : it shows commitment while at the same time being modest; however, we are open to discussing this with the ZCG committee ## Liquidity Incentive budget To attract interest and liquidity outside of the liquidity provided by the ZCG, we want to incentivize token holders by offering rewards. Subject to a governance vote from Spookyswap, we will reward $40,000 worth of $ZEC vested over 60 days for Spookyswap $xBoo stakers. Additionally, Renlabs has the privilege to be a [Solidly]( https://solidly.exchange/ ) NFT owner, they kindly offer to incentivize Solidly's renZEC/USDC pool by voting for it. ## Marketing budget We also recognize the need to explain to Zcash holders what is DeFi, how they can participate and grow the number of $renZec holders. As such, we believe some marketing materials will be very useful. We propose to fund someone with video editing skills to create some video tutorials and some screens for youtube and other social medias. If this project gets funded, this is a major step for our community and we need the world to know about it. We request $5k to pay the content creator. It will involve **all the steps** required to participate in the market.xyz borrow market - Metamask installation - Acquiring $FTM token to perform some transactions - Bridging Zec with the renbridge - Depositing $renZec on market.xyz and borrow $MAI - Buy a random DeFi token on spookyswap with $MAI - Repay the loan - Bridging back $renZec to $ZEC
- **Startup funding required:**
  No
- **Total proposed grant value:**
  345000.0

### Team Members

- **Project Lead:**
  Zcash DeFi
- **Background:**
  I'm a long time Zcash holder, on the zcap, active on the Telegram Zcash community (where I am a moderator) and reddit r/zec (where I am a mod).

### Funding History

- **Previous funding:**
  No
- **Other funding sources:**
  No

### Risks and Evaluation

- **Execution risks:**
  * I do expect some KYC processes to slow down the delivery of the project. * Although it's not required, we need to find an OTC desk to perform a large Zec/USDC transaction without affecting the general market
- **Unintended Consequences:**
  * Users need to be aware that a borrowing market involves financial risks (liquidation)... * ... or smart-contracts risks (bugs)
- **Evaluation plan:**
  Market.xyz provides live dashboard and statistics about the $renZec pool utilization. An ideal scenario would be : - an increase of the number of addresses owning $renZec - more users contributing to growing the renZec/USDC LP - many users depositing $renZec and borrowing from it

### Project Timeline

- **Project timeline determination:**
  The marketing content (video and social media visuals) needs to be done after the DeFi product is delivered

### Milestone 1

- **Amount:**
  340000.0
- **Expected Completion Date:**
  4/7/2022

  - **Deliverables:**
    - Seed LP and liquidity incentive
    - Video and social medias marketing content

### Submission Date

- **Submission Date:**
  2022-03-24 11:50:54

### File Attachments

- **ZcashDeFi.pdf**: [Additional documentation]

