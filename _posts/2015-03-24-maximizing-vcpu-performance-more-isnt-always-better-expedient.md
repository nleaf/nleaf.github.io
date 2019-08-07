---
title: 'Maximizing vCPU Performance: More Isn’t Always Better'
date: Tue, 24 Mar 2015 12:41:52 +0000
tags:
- Cloud Computing
author: Brent Meadows

---
## Maximizing vCPU Performance: When More Isn’t Automatically Better

No matter what you’re purchasing, you want to get the highest return on your dollar. In a recent [study](https://www.expedient.com/cloud-performance-study/), Cloud Spectator evaluated the virtual machines (VMs) being offered by several public cloud providers. The study focused primarily on how well the VMs performed in relation to their price tag, known as the price-performance ratio. 

To gauge the performance, each VM was evaluated based on its virtual servers, virtual central processing units (CPUs), memory, disk performance and internal networks. The study included Amazon Web Services (AWS), Microsoft Azure and Expedient for the comparison.

### A higher cost doesn’t always equal better vCPU performance

Before beginning the comparisons, each VM chosen for the study contained four vCPUs as its virtual core. After testing these vCPUs, the performance evaluation was then compared to the VM’s price to complete the price-performance ratio. (See the [report](http://bit.ly/1FhJQrR) for details regarding how tests were carried out and scores were calculated.)

### More vCPUs don’t always add up to more power or better performance

In a virtualized environment, the VM serves as an abstraction layer between your business’s software and the underlying physical machine it’s running on. That VM has memory, disk space and (at least) one vCPU allocated. The virtualization management layer considers all of these VM resources in order to manage and distribute them. The virtualization layer also has to manage any allocated resources that remain idle, and this adds more overhead to the hardware underneath. As you anticipate and plan for future growth, you might be inclined to purchase additional vCPUs to meet your projected needs. Adding more resources before you need them places an unnecessary load on the hardware, which ends up being counter-productive. The result is not an increase in your environment’s performance, but rather a reduction. To maximize vCPU performance, you must take a different approach to getting the best performance from this resource.

### Best practices for increasing performance

The [“CPU Ready and Virtual Colocation”](http://bit.ly/1esD18w) white paper explains in more detail how resource allocation works and ways in which to maximize vCPU performance. 

The white paper also offers recommended best practices, including these two, which can help you get started thinking about effective ways to get the most out of a vCPU:

* Start with a single vCPU and closely monitor its usage. If the usage is consistently using more than 80% of the vCPU, assign an additional vCPU and continue to monitor usage. Add more vCPUs only as they’re needed.
* Scale applications _out_ (or horizontally, across multiple VMs) instead of scaling them _up_ (or vertically, which in this case, would involve adding more vCPUs to a VM). If a particular VM is consuming all of the assigned vCPUs, scaling applications across VMs can offer a bigger boost to performance than adding more vCPUs to the VM. Plus, some providers will force you to add more disk space and memory if you want to add a vCPU.

When it comes to business decisions, such as choosing the most cost-effective cloud provider, doing research to find which provider is the best fit for your business is a critical part of the decision-making process. The Cloud Spectator study provides valuable insights that can help you make the most informed and best decision. 

This post is the first in a four-part series discussing the performance of Expedient virtual machines compared to the offerings of several public cloud providers. Click [here](https://www.expedient.com/cloud-based-persistent-storage-that-outperforms-top-brands/ "Cloud-based Persistent Storage That Outperforms Top Brands") to read part 2.