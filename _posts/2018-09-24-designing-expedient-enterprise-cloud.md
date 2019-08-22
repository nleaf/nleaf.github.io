---
title: Designing Expedient Enterprise Cloud
date: Mon, 24 Sep 2018 14:05:13 +0000
tags:
- cloud computing
- IaaS
- public cloud
- VMware
author: John White
image: "/uploads/EXP-Enterprise-Sticker.png"

---
## Designing Expedient Enterprise Cloud

September 2018 marks a milestone for Expedient. The release of [**Expedient Enterprise Cloud**](https://www.expedient.com/services/infrastructure-as-a-service/cloud/) is the culmination of thousands of hours in evaluations, education, training, beta testing, product roadmap shaping, advisory boards, design sessions, and acceptance testing from Expedient Support and Delivery engineers.  As I reflect on the past several years of work, I want to provide perspective on the challenges we were having, the design process, and our end state, of course without giving away all the secret sauce.

#### Challenge

Offering virtualization since 2007, Expedient was running into challenges running its virtualization platform at scale and meeting new customer demand. Larger customers and workloads were driving the need for larger PODs of infrastructure. New security and compliance demands were requiring granular borders and firewalling between machines inside of a customer’s environment. Role-based access control policies we utilized to multi-tenant vCenter were being deprecated in upcoming releases. More customers were purchasing two or more sites for services and having individual access to each site was becoming cumbersome for daily management. Customers wanted to use deployment tools to build infrastructure via code, and needed a rich API to do so.  Managed Services like OS Management and [DRaaS](https://www.expedient.com/services/managed-services/disaster-recovery/) were growing the platform at a 24% CAGR, requiring new levels of scale.

This prompted a complete reevaluation of every element of cloud services including both software and hardware. Expedient has enjoyed strong partnerships with Dell, VMware, and Juniper, who are the incumbent vendors of our existing virtualization product and the selected vendors for Expedient Enterprise Cloud.

#### Design Details - Hardware

The existing environment used a traditional three-tier architecture consisting of Dell R740 servers with dual 12 core processors and 384GB of RAM, Juniper 10Gb spine and leaf switching, and Dell Compellent 7020 SANs consisting of 30 3.84TB SSD drives. The scope of this POD was 20 hosts, n+n switch stack, and 2 storage units creating a POD of 480 pCPUs, 7,680 GB of RAM, and 230TB of storage.

* **Processor and RAM** – With the release of Intel’s Skylake processor line we saw increased performance in virtualization workloads, larger processors, and greater selection of processors than before. Two studies were done to help us pick the correct processor and combination of CPU vs RAM. First, all 59 processor options were evaluated based on watts and cost per GHz and CPU. Second, a study was done across all existing public and private workloads running at Expedient to understand a relationship of how much RAM was being consumed per CPU core. Using that information, the selected ideal combination for a new cloud was 32 pCPUs and 768GB of RAM per host.
* **Storage** – The benefits introduced by running all SSD arrays far outweigh any cost concessions running hybrid storage systems, so the scope was set to compare all SSD options. A study was done across all existing workloads to determine read/write ratios and existing deduplication and compression ratios. This data analysis determined that Read Intensive drives would be the best option for cost and performance. Existing deduplication ratios were relatively low in the industry and we did not expect to see an increase unless we dramatically increased the size of the pool or utilized technology like Erasure Coding to become more efficient.
* **Network –** Four 10Gb ports have been provisioned per host and SAN since Gen 6 architecture. These ports, for the most part, remain sub 2Gb the majority of the time, with peaks during backup activity. At this point it was not necessary to do a full traffic study; however, 25Gb port options would be part of the analysis in further designs.

#### Design Details - Software

The existing platform utilized ESXi for the hypervisor, proprietary management, and monitoring tools for the SAN and Network, and vRealize Operations, Automation, and Log Insight.

* **Management** – The vRealize suite of services provides Expedient engineers with the automation and management tools needed to operate the environment efficiently and effectively. Our customers, however, must rely on Expedient for reports and changes, as vRealize is not exposed to the end customer. By introducing vCloud Director, those tools will now have the ability to become multi-tenant and serviceable by the customer. Expedient has worked closely with the vCloud Director product management team during beta testing and design sessions to understand and promote the features needed to service our customers’ needs, and will deliver this interface at launch.
* **Hypervisor –** The hypervisor’s role in the cloud stack remains extremely important, even though it is often forgot about. ESXi has served us well and for this environment was not reevaluated.
* **Network –** With Expedient’s deep networking background, software-defined networking was one of the first components Expedient started researching and testing. NSX-V was used in its Private Cloud product to offer stretched layer 2 networking between the customer’s premises and an Expedient data center. The capabilities have continued to evolve and simplify complex networking, as well as enable new security points leveraging the distributed firewall and micro-segmentation. With the introduction of NSX-T and its focus on containers and public cloud providers, NSX was the natural selection moving forward.
* **Storage –** software-defined storage has evolved as a scalable, cost-effective, and reliable alternative to traditional SAN arrays. Expedient Product Strategy engineers did extensive research on all the leading options. Intricacies exist in all platforms, with fairly similar features in each option. In the end, vSAN was selected as the technology of choice based on the completion of the VMware ecosystem. It was easier to manage, monitor, provision vSAN as it was natively built into the tools.

#### End State - Expedient Enterprise Cloud

The final platform consists of a full VMware stack of products **providing a single ecosystem simplifying management, monitoring, and support**. This includes ESXi as the hypervisor, NSX-V for the software defined network, vSAN for the storage layer, vCloud Director as a management console, and the vRealize suite of services consisting of Operations, Automation, and Log Insight. This software is deployed on 64 node clusters of Dell R740xd hardware. Each server contains dual Intel 6140 processors, 768GB of memory, and 12 1.92TB SSD drives.

Getting [Expedient Enterprise Cloud](https://www.expedient.com/services/infrastructure-as-a-service/cloud/) to this point was a critical first step toward the future of Expedient services. Managed service customers will continue to be deployed and eventually migrated to this cloud as well as new cloud workloads that don’t fit the constraints of hyperscale public clouds. The ease of use, API extensibility, and portability of the platform are poised to keep pace with rival cloud service providers and deliver on our local and high touch key differentiators as we set off toward a multi-cloud world.

**To learn more about the vision behind Expedient Enterprise Cloud,** [**read this blog post**](https://www.expedient.com/blog/expedient-cloud-evolution-a-vision-5-years-in-the-making/) **by John White.**

_As Chief Innovation Officer, John White is the lead executive at Expedient responsible for the company’s product and technology vision. In addition to leading Expedient’s product strategy, John also serves as the lead technology evangelist for the company, works closely with the sales team on closing complex/high brand deals, and acts as Expedient’s primary interface with existing technology partners. Follow him on_ [_Twitter_](https://twitter.com/johna_white)_._