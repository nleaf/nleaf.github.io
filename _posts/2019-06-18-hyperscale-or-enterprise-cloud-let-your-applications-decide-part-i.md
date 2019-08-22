---
title: Hyperscale or Enterprise Cloud? Let Your Applications Decide – Part I
date: Tue, 18 Jun 2019 15:31:53 +0000
tags:
- Infrastructure as a service
- public cloud
- hybrid cloud
- Multi-cloud
- hyperscale cloud
author: Doug Theis
image: "/uploads/EXP-Social-Let-Your-Applications-Decide.png"

---
## Hyperscale vs. Enterprise Cloud

While many think buying cloud services is as easy as choosing between AWS or Azure, educated buyers explore all the options – both hyperscale and enterprise clouds - and choose the environment that will maximize application performance while optimizing cloud spend. Often, this best-of-breed approach [leads to complex multi-cloud and hybrid IT environments](https://www.expedient.com/blog/how-are-you-addressing-the-10-complexities-of-your-multi-cloud-environment/) that consist of hyperscale clouds, private hosted clouds, on-premises and colocated infrastructure. So, what’s the key to multi-cloud success? You guessed it – choosing the right IT infrastructure for each specific use case.

Taking a **Best Execution Venue (BEV)** approach to workload placement starts [with analyzing your applications](https://www.expedient.com/blog/should-your-organizations-applications-influence-which-cloud-platforms-you-use/) to determine which cloud(s) would work best for each application. In the first section of this two-part article, we will explore the types of applications best suited for the hyperscale cloud and review what factors you should consider when choosing a hyperscale cloud provider. [In the second part of this article](https://www.expedient.com/blog/hyperscale-or-enterprise-cloud-let-your-applications-decide-part-2/), I will consider applications that typically work best in enterprise cloud environments.

#### Smart Applications on Dumb Hardware

At Expedient, we commonly refer to applications that work best in the hyperscale cloud as “smart” applications running on “dumb” hardware. **Smart applications** are newer applications developed with specific hyperscale cloud infrastructure in mind. These applications are smart because they are written to leverage specific hyperscale cloud features to protect the application from hardware failures, network problems and malware attacks.  The underlying hardware of the hyperscale clouds are built using tens of thousands of simple servers, often in an over-subscription model, hence the term **dumb hardware**.  The dumb hardware has no capability to protect the application.  The smart application running on the dumb hardware handles high availability and resiliency, thus the best fit for smart applications on dumb hardware is typically a hyperscale cloud.

#### Hyperscale Cloud Considerations

When it comes to running virtual machines in the hyperscale cloud, there isn’t a whole lot of difference between the compute performance and per-instance pricing of the major hyperscale providers – AWS, Azure and Google Cloud Platform (GCP). For this reason, it makes sense that organizations gravitate toward the hyperscale provider that aligns best with their existing environment. For instance, organizations that already use Microsoft products will favor Azure as it will provide a better experience and cause fewer headaches for IT operations. Early on, AWS favored the open source development community, but now supports Windows development environments as well.

In the case of the global hyperscalers, differentiation really starts to occur further up the stack where specific use cases and purpose-built infrastructure dictate which provider is optimal in certain situations. As an example, if you’re doing machine learning with [TensorFlow](https://www.tensorflow.org/), then GCP is a better fit since it offers specialized hardware to run those workloads faster and at a lower cost. However, if you’re doing event-driven serverless development, then [AWS Lambda](https://aws.amazon.com/lambda/) is probably a better fit.

Outside of specific cloud use cases like the two described above, you’ll want to consider various factors when evaluating hyperscale cloud services:

* **Geographic availability** – One of the major selling points of the cloud is the ability to move workloads close to your users/customers, so it’s worth considering where your users are located and whether any of the hyperscale clouds have regions nearby that offer the services you plan to leverage.
* **Skillset** – Each of the hyperscale clouds offer a massive array of services and adoption will be much easier if your developers are already familiar with the particular set of services you plan to use to build your application.
* **Economics** – Depending on a workload’s requirements there may be large differences in pricing between different hyperscale clouds. As this pricing changes frequently, a **cloud management console** can be a huge help in evaluating this on a per-workload basis.
* **Regulations** – If you are in a regulated industry, it’s important to keep in mind that different cloud providers have different regulatory certifications, the lack of which may make them unsuitable for your application.
* **Additional Services** – The hyperscale clouds all have a range of managed services for things like databases and object stores… make sure to find out whether your developers plan to leverage any of these services.  If they do, it’s worth evaluating the differences between the hyperscale offerings on a few different points related to managed services.
* **Pricing** – This tends to be fairly competitive between the providers but, in some cases, they will use different models so it’s worth investigating the differences.
* **Availability** – SLAs for managed database services tend to be different than those for compute instances so make sure to double check the SLA and ensure that it’s sufficient for your planned use case.
* **Scaling** – the various hyperscalers offer different ways to scale performance on their managed services, it is important to ensure that the service you select can scale to meet your needs affordably.
* **Application architecture** – Different clouds encourage different ways of designing applications (although they tend to offer support for all models) and aligning your choice of provider to the way you plan to build your application can help avoid headaches down the line.
* **Unique offerings** – perhaps the most important factor that would lead you to choose one cloud over the other is unique offerings from a particular vendor as I previously illustrated with the TensorFlow and AWS Lambda examples.

[**_Read the second part of this post_**](https://www.expedient.com/blog/hyperscale-or-enterprise-cloud-let-your-applications-decide-part-2/) **_to learn about the best type of cloud for “dumb applications” that require “smart hardware.”_**

**_Doug Theis_** _is the Director of Market Strategy in Expedient’s Indianapolis market focused on engaging with and improving the regional IT community through planning, sponsoring and attending community events, facilitating IT-focused continuing education opportunities, and sharing strategies, tactics, and research to help IT professionals stay abreast of best practices and industry trends. Connect with Doug at_ [_doug.theis@expedient.com_](mailto:doug.theis@expedient.com) _and follow him on_ [_Twitter_](https://twitter.com/dougtheis)_._