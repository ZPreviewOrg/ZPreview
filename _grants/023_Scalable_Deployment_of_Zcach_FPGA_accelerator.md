---
title: "Scalable Deployment of Zcach FPGA accelerator"
status: "Declined"
amount: "130000.0"
submitter: "[REDACTED] [REDACTED]"
email: "[REDACTED]"
date: "2022-06-30 09:07:51"
project_name: "Scalable Deployment of Zcach FPGA accelerator"
summary: "FPGA-based Zcash acceleration on FPGA clusters"
total_grant_value: "130000.0"
submitter_last_name: "[REDACTED]"
original_title: "Scalable Deployment of Zcach FPGA accelerator"
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
  from Zcash FPGA github
- **Original Title:**
  Scalable Deployment of Zcach FPGA accelerator

- **Labels:**
  - OPEN

### Project Overview

- **Project Name:**
  Scalable Deployment of Zcach FPGA accelerator
- **Last Updated:**
  2022-06-30 09:07:51
- **Sponsorship Request:**
  No
- **Project Image (Public Gallery):**
  logo-vertical1200px.png
- **Project Summary:**
  FPGA-based Zcash acceleration on FPGA clusters

### Project Description

- **Overview:**
  ZKP requires huge amount of processing power and FPGAs can be used to speedup the most complex algorithms like MSM and NTT. Zcash has already developed based on a grant 2 successful FPGA implementation FPGA SNARK Prover and Zcash FPGA github projects. https://github.com/ZcashFoundation/zcash-fpga However these projects show an example of a single application deployed on a single FPGA (f1.2x). How can someone scale this application to a cluster of FPGAs? FPGAs lack of an operating system, an abstraction layer and virtualization. Therefore currently it is not possible to allow multiple users to have access to a cluster of FPGAs. Only manual solutions allow to allocate one user/thread/process per FPGA. And also it does not allow scalable deployment on a cluster of FPGAs (e.g. aws f1.16x with 8 FPGAs or multiple FPGA cards)
- **Proposed solution:**
  InAccel has developed an abstraction layer that allows easy deployment, scaling and resource management of FPGA-based applications. By abstracting away the FPGA resources InAccel transforms any FPGA cluster to a single pool of accelerators, making feasible the utilization of FPGAs in any high-level distributed programming concept. That way, users can utilize the efficiency of the FPGAs without worrying about conflicts and restricted access to the FPGA hardware. In the same way the software code is time-multiplexed and serialized in the CPU pipelines, InAccel accelerator orchestrator schedules and distributes the requests for specific acceleration tasks based on the FPGA resource availability. Finally, InAccel enables the instant scaling of applications to multiple FPGAs. By eliminating the current multi-tenancy limitations, InAccel helps software programmers invoke their accelerated functions in any distributed programming model, meeting every application requirements, without adding overhead and complexity. That way, users can enjoy all the benefits of hardware accelerators without knowing anything about FPGAs. So far we have
- **Solution Format:**
  So far inaccel has integrated the FPGA Snark Prover with the inaccel resource manager providing world's first end2end FPGA integration with SNARK. We have developed a playground where anyone can test ZKP applications running on a cluster of FPGAs. We want to also integrate the Zcash FPGA project with the Inaccel framework to allow anyone to accelerate ZCash on a cluster of FPGAs. However, the integration of Zcash FPGA project is more complex than the SNARK prover since a custom interface has been used and not an OpenCL interface as it was used in FPGA Snark prover. We plan to develop a web-based GUI for accelerating Zcash on a cluster of FPGAs where anyone can experiment.
- **Dependencies:**
  No dependencies with other entities
- **Technical approach:**
  The slides provides more details on the abstraction layer that we have developed. By abstracting away the FPGA resources InAccel transforms any FPGA cluster to a single pool of accelerators, making feasible the utilization of FPGAs in any high-level distributed programming concept. That way, users can utilize the efficiency of the FPGAs without worrying about conflicts and restricted access to the FPGA hardware. In the same way the software code is time-multiplexed and serialized in the CPU pipelines, InAccel accelerator orchestrator schedules and distributes the requests for specific acceleration tasks based on the FPGA resource availability. The FPGA Snark Prover github project was using OpenCL interface for the communication with the FPGA. Therefore, it was easy to integrate it with our resource manager that is based on top of OpenCL. However, the Zcash FPGA project uses a custom interface for the communication with the FPGAs. This prevent multiple users to use it and it also prevents scalable deployment on a cluster of FPGAs. The grant will be used to develop a custom runtime for the Zcash FPGA project that will enable multi-tenant deployment of Zcash FPGA project to a cluster of FPGAs. We will also develop the web-based GUI playground that will allow anyone to test Zcash acceleration on a cluster of FPGAs.

### Requested Grant Amount

- **Amount:**
  130000.0

### Budget Breakdown

- **Hardware/Software budget:**
  20000.0
- **Hardware/Software justification:**
  2 Alveo U200 FPGA cards 2 AgileX intel FPGA cards
- **Services budget:**
  10000.0
- **Services justification:**
  Access to AWS f1 FPGA instances
- **Compensation budget:**
  100000.0
- **Compensation justification:**
  NRE cost for the integration 1 Senior FPGA Engineer full time for 6 months (50k) 1 Senior Software Develop/DevOps full time for 6 months (50k)
- **Startup funding required:**
  No
- **Total proposed grant value:**
  130000.0

### Team Members

- **Project Lead:**
  Chris Kachris
- **Background:**
  InAccel’s mission is to offer to the software community the advantages of the hardware accelerators (high throughput, low latency and energy efficiency) without any additional effort. By providing the foundation for the seamless utilization of FPGAs, InAccel offers significant speedup in application domains like machine learning, data analytics, genomics, financial services and HPC workloads. InAccel FPGA Operator has been developed keeping in mind that users look for a path to FPGA application acceleration with no code or tool changes and the minimum possible learning curve. InAccel’s one of a kind solution automates the deployment, scaling and resource management of FPGA clusters, helping companies accelerate applications, optimize the FPGA infrastructure and productize accelerators faster. InAccel FPGA Operator is a cloud-native method to standardize and automate the deployment of all the necessary components for provisioning FPGA-enabled Kubernetes systems. FPGA Operator delivers a universal accelerator orchestration and monitoring layer, to automate scalability and lifecycle management of containerized FPGA applications on any Kubernetes cluster. The FPGA operator also allows cluster admins to manage their remote FPGA-powered servers the same way they manage CPU-based systems, but also regular users to target particular FPGA types and explicitly consume FPGA resources in their workloads. This makes it easy to bring up a fleet of remote systems and run accelerated applications without additional technical expertise on the ground.

### Funding History

- **Previous funding:**
  No
- **Other funding sources:**
  No

### Risks and Evaluation

- **Execution risks:**
  We have managed to implement similar integration for applications like machine learning, computer vision, genomics and financial applications. We do not foresee to significant risks for this integration.
- **Unintended Consequences:**
  Zcash uses will have the chance to evaluate the power of the FPGAs for Zcash acceleration.
- **Evaluation plan:**
  We will provide results on the total speedup on the cluster of FPGAs for the Zcash tasks and we will also allow evaluation on different kind of FPGA cards together with techno-economic study for each FPGA card.

### Project Timeline

- **Project timeline determination:**
  Based on the expected development time of integration of ZCASH FPGA with our resource manager and the web based front end playground

### Milestone 1

- **Amount:**
  50000.0
- **Expected Completion Date:**
  10/31/2022

  - **Deliverables:**
    - Integration of Zcash FPGA project with Inaccel resource manager for scalable FPGA deployment

### Milestone 2

- **Amount:**
  50000.0
- **Expected Completion Date:**
  11/30/2022

  - **Deliverables:**
    - Scalable Deployment on  cluster of 4 FPGAs

### Milestone 3

- **Amount:**
  3000.0
- **Expected Completion Date:**
  12/31/2022

  - **Deliverables:**
    - Web-based playground of Zcash FPGA accelerators on a cluster of FPGAs

### Additional Milestones

- **Additional Milestones:**
  No

### Submission Date

- **Submission Date:**
  2022-06-30 09:07:51

### File Attachments

- **ZKAccel_-_Zcash.pdf**: [Additional documentation]

