---
title: Should your organization’s applications influence which cloud platforms you
  use?
date: Mon, 15 Apr 2019 18:04:08 +0000
tags:
- Cloud Computing
- private cloud
- public cloud
- Multi-cloud
image: "/uploads/EXP_Social-Blog-OrgAppsCloud.png"
author: Doug Theis

---
Your software applications are the tools that enable your information technology to meet critical business requirements.  What applications you choose influences staff productivity, cost management, flexibility in customer service, business transformation, and more. And, for a growing number of companies, the list of applications used in the business, also known as **the application portfolio**, can provide strategic competitive advantage in the marketplace. Therefore, choosing which applications make up your portfolio is a critical success factor. In this post, I will discuss two business-critical components of an organization’s application portfolio – **software development tools** and **Line-of-Business (LOB) applications** – and how they influence cloud choices. 

#### Software Development Tools

These are application development environments and libraries that enable software developers to create new applications to meet business requirements. Many development teams are often building applications in clouds like AWS and Azure and using the native tools that accompany those **platforms as a service** (PaaS).  Sometimes referred to as “**smart apps on dumb hardware**,” these new “**cloud-born**” applications can take advantage of new cloud features such as scale and resilience but can force an organization to be locked in to running the application on a single cloud only. 

Modifications on existing home-grown applications tend to be split between company-owned servers, whether in colocation facilities or in-house, or cloud-based **infrastructure as a service** (IaaS).  Factors such as familiarity, performance, cost, and control all play a role in choosing a development environment. 

#### LOB Applications 

These applications are industry- or market-specific applications that help an organization create, deliver or support client needs. Examples are Enterprise Requirements Planning (ERP) applications for [manufacturers](https://www.expedient.com/who-we-help/industries/manufacturing/), Electronic Medical Records applications for [healthcare providers](https://www.expedient.com/who-we-help/industries/healthcare/), and warehousing and route management software for logistics and distribution. LOB applications are usually split between purchased applications and home-grown applications that are highly aligned with business processes.  These apps fall into the category of “**dumb apps on smart hardware**” because the applications are not platform-aware, and things like performance, scale, resilience, and network control all come from the underlying hardware that they are installed on. 

#### Where is the difficulty in choosing the right platform for each application? 

For software development tools, new cloud-born applications have some risk of lock-in, which may mean that changing platforms could involve huge redevelopment costs.  **Software tools that are platform-independent can minimize lock in**.  Make sure you’re evaluating performance and cost metrics for the cloud platforms you are considering before you choose. And again, make sure that your data is protected should the cloud provider have an outage. 

**LOB applications hold the most risk in choosing cloud platforms.**  Common characteristics that increase risk are:

* The application is based on years- or decades-old development efforts and may be unlikely to change to cloud-based applications
* The application performance is very sensitive to the speeds of the underlying hardware
* The application is lacking in software resiliency, and is dependent on the underlying hardware or services to be available in the event of an outage
* The application is chatty, moving lots of data back and forth between servers and end-users, which can drive some cloud platforms monthly costs up exponentially
* The software provider won’t support their application on some cloud platforms

So, what can you do to choose the right cloud platforms for your applications? **Start by asking yourself these questions:**

 1. What is the application type? (ERP, Billing, Electronic Health Record, CRM, Collaboration, Database, etc.)
 2. Is the application being developed from scratch or is it an existing application that is being migrated to the cloud?
 3. Is it off-the-shelf, customized third-party software, proprietary to your organization, or virtual desktop infrastructure (VDI) or Hosted Desktop (e.g., VMware, Citrix, Amazon, etc.)?
 4. What development or operating environment does the application require (Windows, Linux, Oracle, IBM, etc.)?
 5. Where is redundancy derived? At the software level, at the hardware level, or both?
 6. Does the application use virtual machines? If so, how many?
 7. How important is latency to the operational efficiency of the application?
 8. Is the usage of the application variable and unpredictable or persistent and predictable?
 9. Does the application have a tenancy requirement (shared vs. dedicated) due to security/compliance regulations or performance applications?
10. What current [cloud skill sets](https://www.expedient.com/blog/are-your-it-skill-sets-the-best-reason-for-selecting-enterprise-cloud-infrastructure/) does your operations team possess (e.g. Open Stack, Microsoft Hyper-V, VMware ESX, AWS PaaS, Azure PaaS, Google, PaaS, something else)?

**_Curious as to what the answers to these questions mean for your cloud choices?_** [**_Contact me_**](mailto:doug.theis@expedient.com) **_directly and we can discuss your situation._** 

**_Doug Theis_** _is the Director of Market Strategy in Expedient’s Indianapolis market focused on engaging with and improving the regional IT community through planning, sponsoring and attending community events, facilitating IT-focused continuing education opportunities, and sharing strategies, tactics, and research to help IT professionals stay abreast of best practices and industry trends. Follow Doug on_ [_Twitter_](https://twitter.com/dougtheis)_._