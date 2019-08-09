---
title: CPU Ready and Virtual Colocation
date: Fri, 04 Apr 2014 18:27:10 +0000
tags:
- Cloud
author: Leslie Gubish

---
So, you want to your increase virtual machine performance.  There is a perception that if you add vCPUs, this will automatically do the job.  In reality, doing so may actually have a negative performance on the virtual machine. 

Here are a few best practices to keep in mind when looking to increase virtual machine performance:

* If possible, start with a single vCPU
* Scale applications out instead of up
* Only assign multiple vCPUs to virtual machines hosting applications that run multithreaded processes
* Limit the number of vCPUs to the number of pCPUs of a single CPU socket

[Download the full report](http://bit.ly/1esD18w) on What You Should Know: CPU Ready and Virtual Colocation.