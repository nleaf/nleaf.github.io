---
title: Cloud Migration Strategies - How to Choose the Right One
date: Tue, 21 May 2019 16:30:50 +0000
tags:
- Cloud Computing
- VMware
image: "/uploads/EXP_Social-Blog-CloudMigration.png"
author: Mike Garuccio

---
## Choosing the Right Cloud Migration Strategy

There are several different ways to migrate workloads to the cloud. As with everything in life, each approach has its own pros and cons, and works best in certain scenarios. The strategies described below are based on my experience in migrating client workloads to the [**Expedient Enterprise Cloud**](https://www.expedient.com/services/infrastructure-as-a-service/cloud/) (EEC), which is a cloud platform based on VMware’s software-defined data center (SDDC). The goal of this post is to provide you with a useful foundation by which to select the cloud migration strategy that will work best for each workload in your application ecosystem. While these cloud migration strategies are described by using EEC as an example, they can generally be applied to all other VMware-based clouds.

#### Cloud Migration Planning

First, you will need to map out your environment and group together services that are dependent upon one another. As part of this planning process, be sure to work with each department in your organization to determine acceptable outage windows for each line-of-business application. Application performance monitoring tools such as [Xi Epoch from Nutanix](https://www.nutanix.com/products/epoch) streamline this process by highlighting dependencies with its auto-discover application maps feature. During the planning process, you’ll also want to consider:

* What is the business impact of a service being offline? Are there specific times of day when this impact is greater?
* What is the change rate of important data on the server under consideration? For application servers, the change rate could effectively be zero after the application is installed if data is stored externally.
* Can services that depend on each other be run successfully from separate data centers on a temporary basis?

#### Choosing a Cloud Migration Strategy

Once you’ve identified groups of servers that will need to be moved in a unit – or determined that they can successfully operate with components in different datacenters – and determined acceptable outage windows for each application, you’re ready to select a cloud migration strategy that works best for the servers in question.

**1) Export and Upload** – Export an existing virtual machine (VM) as an OVA file and upload it to EEC.

**Advantages**

* With the export and upload method, no extra tooling is required. Just export the server and import it back.

**Disadvantages**

* The entire server needs to be moved at once meaning that you won’t have the ability to sync changes made after the export.
* Data must be fully exported and then uploaded through the web interface.
  * Both of these disadvantages generally mean a long outage window.

**Use Cases**

* The export and upload strategy will work best with servers whose state does not frequently or unexpectedly change, such as web servers and application servers relying on an external database;
* As well as with servers where a long outage is acceptable.

  **2) Rebuild and Restore Data** – Build new servers within EEC, install applications, and then sync or restore application data.

**Advantages**

* Applications are deployed on new servers and don’t bring along unwanted/unnecessary cruft from the old environment.
* If the amount of data to be restored is small or can be actively synced from the old server, this method facilitates a quick cutover from the old servers to the new environment.

**Disadvantages**

* This approach requires building a large number of servers.
* Each app migration is unique and must be planned for separately.

**Use Cases**

* The Rebuild and Restore Data approach will work best for apps with a built-in sync or migration capability;
* Stateless application servers;
* Servers on OS versions which are nearing end of support.

  **3) vCloud Availability** – use [the new vCloud Availability](https://www.vmware.com/products/vcloud-availability.html) (vCAV) offering from VMware to migrate servers.

**Advantages**

* vCAV is largely a self-service tool.
* It allows for syncing of data and cutting over to a new environment when appropriate (short outage window).

**Disadvantages**

* VMware-specific
* Requires hypervisor access which is not always available.

**Use Cases**

* VMware-only infrastructures
* Situations where there is a large rate of data change that must be synced.

  **4) Custom Migration Tools** – Work with Expedient to use migration tools like [**Carbonite**](https://www.carbonite.com/products/cloud-migration), [**Zerto**](https://www.zerto.com/simplify/)**,** or [**Cohesity**](https://www.cohesity.com/products/data-protect/) to sync data between your on-prem environment and the cloud. Cut over to your new environment when appropriate.

**Advantages**

* Data can be continuously synced up until cutover, which allows for very short outage windows.
* This approach supports the vast majority of migration scenarios, including migration from physical servers and public cloud providers.
* Initial data export can be placed on external drives or storage arrays and shipped to the data center, allowing it to serve as the seed to which change data can be synched. This approach could drastically reduce overall migration time.

**Disadvantages**

* Requires software to be installed either on each VM or onto the underlying vSphere infrastructure.
* Requires a high-bandwidth upstream connection

**Use Cases**

* This approach is good for servers lacking proper documentation, which would make a rebuild difficult; and
* Large migrations with short timetables.

Once a workload’s applications and data have been migrated you will need to update your DNS records to point to the new IP address. In situations where all services behind an IP address are being moved, this step can be avoided by moving the IP itself from your local environment and into the Expedient cloud. I hope that you found the information in this article helpful. Feel free to [email me](mailto:Mike.Garuccio@expedient.com) anytime with your cloud migration questions.

_Mike Garuccio is a Product Strategy Engineer at Expedient focused on researching new software and hardware to find ways to productize this technology into new solutions for Expedient clients. As a ‘full stack’ engineer, Mike works with all layers of infrastructure architecture - from the hypervisor all the way up to front-end applications. Mike has played a leading role in the deployment and implementation of Expedient’s next-generation cloud platform, Expedient Enterprise Cloud. His professional interests include automation, containers, Kubernetes, CI/CD, and developer experience optimization. Follow Mike on_ [_Twitter_](https://twitter.com/mgaruccio)_._