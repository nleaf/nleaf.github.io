---
title: The Differences Between Backups and Disaster Recovery
date: Thu, 27 Jun 2019 13:55:50 +0000
tags:
- Disaster Recovery
- managed services
author: Mike Garuccio
image: "/uploads/EXP-Garuccio_Blog--Backups-vs-DR_1.png"

---
## Backups and Disaster Recovery: What's the Difference?

Modern IT departments need to be able to protect their mission-critical data and quickly respond in the event of a problem in their environment.   This capability hinges on maintaining a strategy for both backups and disaster recovery.  These two capabilities [are often conflated with each other](https://www.expedient.com/blog/what-are-the-differences-between-backups-and-disaster-recovery/) but this blog post will explore the differences between the two and explain the situations they are needed for.

### Backups

Backups have been around almost as long as computers themselves and revolve around making point-in-time copies of all data on a given system.  A good backup solution should be capable of restoring anything from a single file to an entire system to a recently known-good state.  These backups are crucial in several situations:

* A developer accidentally drops a table from a production database and it needs to be restored.
* A user accidentally deletes a file from a shared drive.
* A single server fails due to a bad software update and must be restored to the state it was in prior to the change.
* A server is impacted by ransomware or other malware renders it unusable.

  #### Infrastructure Integrations

  Whether you’re running workloads on physical servers, a local hypervisor (vCenter) or in the cloud, your backup solution should work with the underlying infrastructure to leverage capabilities like snapshots, which will enable performant backups and rapid restores of entire systems.

  #### Application Compatibility

  Applications, particularly databases, often have their own requirements for performing successful backups and restores. Before settling on a backup solution, you should ensure that it is compatible with your existing applications and be aware of any special procedures that are required to perform successful backup that can be restored.

  #### RPO/RTO

  If any of the issues listed above occurs, how long of an outage is acceptable (defined by Recovery Time Objective (RTO)), and how much data loss is acceptable (defined by Recovery Point Objective (RPO)).

### Disaster Recovery

10 years ago, the disaster recovery plans of most organizations involved moving a set of their backup tapes off-site at the end of every week and calling it a day.  That is fine as long as the business is OK with the idea of potentially losing a week’s worth of work and being offline until a new data center is set up and all of the systems are restored.  Of course, most businesses in 2019 simply can’t survive that sort of operational disruption, so new solutions must be devised to deliver the desired level of IT availability. **Here are a few scenarios that your disaster recovery solution should be able to handle:**

**The obvious** – some disaster that physically damages/destroys the data center where your workloads exist, such as:

* Earthquake
* Water leak in some office that exists above the data center, causing a flood

**A full network outage** in your primary data center, so while the systems may still be running they are not accessible to your users.

* A long-term power outage at your office (assuming your infrastructure is in an office data center rather than a colocation facility).

Dealing with the issues above while maintaining the availability the business demands obviously requires a solution that goes beyond backups and includes a number of additional requirements, such as:

#### A “hot site”

* Basically, this entails a disparate location other than your data center where your workloads can be rapidly brought online and made available to your users.

#### Continuous replication

* To meet the aggressive RPO’s modern businesses demand in the event of a disaster, data needs to be continuously replicated to the hot-site so that data loss is minimal.
* This data replication feature is also incredibly useful [for migrating workloads](https://www.expedient.com/blog/cloud-migration-strategies-how-to-choose-the-right-one/) from one environment to another with minimal downtime.

#### Service Discovery

* After a fail-over takes place how do your users connect to the new environment? For smaller organizations this can be as simple as desktop engineers working with users to point their local machines to the new location, but for larger organizations, this needs to happen automatically.

The considerations for a DR platform are similar but slightly different than those for a backup solution. They include:

#### Infrastructure Integrations

* A DR solution needs to be natively compatible with both the infrastructure you are protecting and the environment you plan to recover to.
* IF you are planning to use a recovery site that is using a different hypervisor than your primary site (e.g. failing over to a hyperscale cloud or from a physical server into a VM) it is also important that your DR solution have a way of re-configuring the machine operating system to have the correct drivers and other software packages for the new environment.

#### RPO/RTO

* Many modern DR solutions enable near-real-time RPOs, however this is heavily dependent on your network link to the recovery site and your data change rate.
* Due to differences in how cloud providers work internally, different backup solutions offer a range of RTO’s on different platforms. It is important to look at the expected RTO for the source site/recovery site/DR software combination you plan to use and ensure that the RTO for this combination meets the requirements of your business.

#### Consistency requirements

* Unlike traditional backups, DR solutions are generally not aware of underlying applications like databases. This means that additional care must be taken to ensure that data is consistent across servers in the event of an unexpected failover.
* Some DR solutions incorporate the idea of a “**consistency group**” which ensures that a group of servers are always being restored to the exact same point in time to avoid inconsistency issues after a restore.

#### Service Discovery

* After a failover is completed, a full DR solution should take steps to ensure that users are able to reach their applications quickly and without direct intervention from IT staff.
* The traditional way of handling this is to reconfigure DNS entries to point to the new site, however this method of failover can take a long time to propagate to all users, particularly if they are globally distributed or if long TTL’s exist on the entries themselves. Whatever the case, make sure to account for this additional time in your RTO calculations.
* An alternate way of dealing with this problem is to fail over the entire networking stack with the compute resources and announce the same IP addresses from the new location. This requires a deep integration with the infrastructure of both the source and destination sites. By automating and orchestrating network failover, Expedient’s Push Button DR solution enables this failover approach, which enables real-time RPOs and RTOs measured in minutes.

While these DR capabilities are wonderful, it’s important to remember that as of right now most DR solutions are optimized for the recovery of VMs but are lacking in important backup features like the ability to rapidly restore a single file deleted by a user or bringing back a database table that was mistakenly dropped. Since your business will most likely require a combination of DR and backup functionality, a hybrid solution that supports both is typically recommended.

Need help translating business requirements into a cohesive business continuity strategy that addresses both backups and disaster recovery? Expedient Solution Architects are adept at creating custom IT resilience solutions to match the specific needs of your business. Feel free to [email me](mailto:mike.garuccio@expedient.com) and I can put you in touch with an Expedient SA.

_Mike Garuccio is a Product Strategy Engineer at Expedient focused on researching new software and hardware to find ways to productize this technology into new solutions for Expedient clients. As a ‘full stack’ engineer, Mike works with all layers of infrastructure architecture - from the hypervisor all the way up to front-end applications. Mike has played a leading role in the deployment and implementation of Expedient’s next-generation cloud platform, Expedient Enterprise Cloud. His professional interests include automation, containers, Kubernetes, CI/CD, and developer experience optimization. Follow Mike on_ [_Twitter_](https://twitter.com/mgaruccio)_._