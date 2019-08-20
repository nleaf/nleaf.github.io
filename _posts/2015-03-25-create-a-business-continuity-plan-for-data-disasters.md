---
title: Business Continuity Planning
date: Wed, 25 Mar 2015 15:22:07 +0000
tags:
- Disaster Recovery
author: Bryan Smith

---
## Preparing for Disasters: How to Create a Comprehensive Business Continuity Plan

The creation and implementation of a Disaster Recovery Plan (DRP) can be a complex undertaking; however, it doesn’t need to be. The necessary steps, which may seem overwhelming, are easily broken down into a basic process that’s applicable to any industry. Not having a DRP or worse, not implementing a DRP can be a catastrophic mistake to your business. The cost of downtime can be insurmountable, so creating and implementing an effective DRP should be a priority for any organization.

To illustrate, I’ll assume the role of CIO for an eCommerce firm responsible for managing the implementation of a DRP. This plan will be one component of my company’s overall Business Continuity Plan, with other teams working to establish procedures for facilities disasters, personnel disasters, and so forth.

**1) Establishing Data and Infrastructure Priorities**

My first priority will be to l work with each department in my company to determine what applications should be classified as mission critical. This allows me to focus my efforts on the environments required to ensure business continuity, and avoid the planning pitfalls that can arise when a company tries to save everything all at once.

A second step in this process includes the establishment of tiers of priority – with Tier 1 being the most critical, Tier 2, being second highest, and so on. During the classification of applications, discussions will be centered on correlating applications with specific tiers. As an example, the primary website applications will be classified as Tier 1 applications.

As an eCommerce company, our mission critical environments will likely include the website code, customer payment systems, accounts payable and receivable, inventory records, and vendor data, along with the applications used in those systems.

Next, my team will identify the hardware and infrastructure assets necessary to recover, replace, and protect the mission critical environment. This will most likely include servers, storage, load balancing and network infrastructure as well as replication technologies and the potential secondary site locations to host the DR environment.,

**2) Determining Recovery Objectives**

Now for each tier, we’ll need to decide what our Recovery Point Objective (RPO) is, which describes the maximum amount of data we’re willing to lose. This is usually expressed in hours, e.g., we can’t afford to lose more than 10 hours of data related to our customer and vendor transactions.

Then for each tier, we’ll choose our Recovery Time Objective (RTO), specifying the maximum amount of downtime we can tolerate before recovery is completed and normal operations resume.

**3) Choosing a Recovery Strategy**

Now my team will choose a strategy to recover and replace those assets. The first decision will be whether to pursue an internal recovery strategy, or a provider supported strategy. The process is the same for both, but internal recovery will require us to maintain our own backup facilities and equipment, as opposed to working with a third-party partner that will provide the secondary environment for us. Minimizing financial outlay for this plan is necessary, as such, we will choose a provider supported strategy, which curtails capital expenditures and reduces operating expenditures. We must then work with our partner to establish procedures for the following areas.

* **Replication -** What applications will we replicate, based on what tier, to what location and on what medium (our hardware, their public cloud, their private cloud, etc.)?
* **Failover -** Who is responsible for establishing the DR process, how does this occur and what is needed from the partner, and from us?
* **Network Failover -** Who is responsible for failing over the network elements, how does this occur and what is needed from the partner, and from us?
* **Testing -** What do we test, how often do we test and who controls the testing process?
* **Assigning Personnel and Procedures -** With the infrastructure decisions made, we need to integrate our company’s personnel into the process and establish the procedures they’ll follow during a disaster. This includes assigning personnel to monitor our systems, determining who has the authority to initiate the DRP, and finalizing each department’s responsibilities during the recovery.
* **Testing the Data Disaster Recovery Plan -** Once the DRP has been finalized, we’ll establish a schedule for regular tests of the DR procedures. This should include “mock disasters” where our company will simulate a disaster or service interruption, from monitoring and identification of affected assets, all the way through to recovery.

[_Bryan Smith_](https://www.linkedin.com/in/bryankeithsmith/) _serves as Chief Strategy Officer at Expedient and brings more than 21 years of experience in the Telecommunications and Technology industries to his role. He oversees strategic growth planning and business development for Expedient. Bryan was one of the initial employees of Expedient in 2001 and has been instrumental in identifying expansion/acquisition opportunities within the Pittsburgh, Boston, Columbus, and Memphis markets._