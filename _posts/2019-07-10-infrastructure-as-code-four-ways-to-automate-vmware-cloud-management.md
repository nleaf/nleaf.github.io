---
title: 'Infrastructure as Code: Four Ways to Automate VMware Cloud Management'
date: Wed, 10 Jul 2019 18:33:23 +0000
tags:
- Cloud Computing
- DevOps
author: Mike Garuccio
image: "/uploads/EXP-Social--infa-as-code (1).png"

---
For years, [IT infrastructure provisioning was a manual process](https://www.expedient.com/blog/on-premises-it-infrastructure/).  This made sense when deploying a new server meant placing a purchase order, waiting for gear to arrive, racking the new gear, and then finally applying a bespoke configuration to support a new workload.  However, now that most workloads are moving to the cloud, new VMs can be provisioned in seconds meaning that manual provisioning adds hours or days to the process, which creates additional friction with every new deployment.  Even if the additional time lag is not a factor for your business, every minute an engineer spends following a SOP to deploy a new machine is a minute they aren’t spending working to improve your environment and make it faster, improve its stability, or provide additional capabilities.

Worse than the time lost to provisioning toil is the potential for inconsistency introduced by relying on humans to apply configurations to every server by hand.  People make mistakes, and even if you have a robust QA process on every new machine (more valuable engineer time lost!), inevitably, some things will slip through the cracks.  Over time, these small deviations add up and eventually make it difficult or impossible to confidently describe the current state of your environment.

[Adopting an infrastructure as code approach](https://www.expedient.com/blog/expedient-cloud-evolution-a-vision-5-years-in-the-making/) enables the automation of rote provisioning operations, which will free up your engineers to work on improving your environment.  At the same time, you will be removing a major source of potential inconsistency or misconfiguration caused by human error, improving both the stability and security of your infrastructure.  Finally, having your infrastructure defined as code and managed in an SCM like Github means that you can always be certain of the current state of your environment and have total insight into all changes made.

Within VMware’s Cloud environment, there are various ways to implement an Infrastructure as Code approach.  For instance, [Expedient Enterprise Cloud](https://www.expedient.com/services/infrastructure-as-a-service/cloud/) (EEC) platform – which is based on VMware’s vCloud Director provisioning and management platform – offers a complete REST API to streamline integration with your existing automation tooling.  Continue reading for more detail on this ‘Infrastructure as Code’ approach and others.

#### 1) Directly using the REST API

The REST API can be interacted with directly from any programming language with HTTP support or tools like [Postman](https://www.getpostman.com/) or [Insomnia](https://insomnia.rest/).  There are some pitfalls with this approach, but we created a [Postman collection with documentation](https://apidocs.expedient.cloud/?version=latest) to assist in understanding the various API endpoints.

**Advantages**

* This is approach is highly flexible, supporting development in any language or automation tooling.
* Good for extending existing tooling with new features to complete your automation workflows
* Complete coverage – All capabilities exposed by vCD can be accessed via the REST API.

**Disadvantages**

* In general, this approach is less user friendly than other available options.
* More time-consuming than pre-made tooling or libraries when performing common operations

#### 2) Shell scripting with vCD-cli

[Vcd-cli](http://vmware.github.io/vcd-cli/) is a Python-based command-line utility that can be used to perform the most common administration tasks within vCD. Just remember that in order to access the vCloud command line interface (CLI), an up-to-date python installation is required.

**Advantages**

* On mac OS and Linux, installation is simple using [Python’s PIP package manager](https://realpython.com/what-is-pip/)
* The vCD-cli leverages common BASH scripting skills
* It is useful for performing one-off tasks from the command line such as VM deployments, hardware adjustments, and network connection changes.

**Disadvantages**

* Somewhat more complicated install on Windows platforms as that you will need [to install the Visual C++ build tools](https://visualstudio.microsoft.com/downloads/) in addition to Python
* BASH is not necessarily ideal for complex automation tasks when compared with other languages or configuration management tooling

#### 3) Using client libraries/SDKs

There are client libraries available for both [Python](https://github.com/vmware/pyvcloud) and [the Golang SDK for vCD](https://github.com/vmware/go-vcloud-director) that can be used to perform the vast majority of administration operations.

**Advantages**

* This approach is generally more user-friendly and facilitates faster development than the plain REST API.
* Capable of integrating with other software/processes as long as either Python or Go are supported
* Still retains good flexibility and covers most operations

**Disadvantages**

* Confined to two specific programming languages
* Some features exposed by the API are not yet accessible in the libraries.

#### 4) Using modern automation tooling

vCD is well supported by modern automation tooling such as [Ansible](https://www.ansible.com/) or [Terraform](https://www.terraform.io/).  These modules allow you to easily automate common operations like server deployment, network creation, and firewall rule adjustments using declarative configuration files.

**Advantages**

* This approach leverages existing expertise with configuration management tooling.
* Allows for declarative configuration
* Easier for non-programmers to read and modify
* Facilitates much faster time to market due with the ability to create simpler automation workflows
* Automation playbooks can be given to auditors in place of SOP documentation.

**Disadvantages**

* Requires learning new tooling if expertise does not already exist within the organization
* Often means increased support costs if not purely using the OSS projects
* Somewhat limited in scope compared with the number of operations that are exposed via the API and included in the SDKs

In conclusion, there are several different ways to automate the deployment, configuration and management of IT infrastructure within vCD. As I mentioned previously, an Infrastructure as Code approach to IT infrastructure management definitely has its benefits. Just make sure you choose the approach that is best for your business.

_Mike Garuccio is a Product Strategy Engineer at Expedient focused on researching new software and hardware to find ways to productize this technology into new solutions for Expedient clients. As a ‘full stack’ engineer, Mike works with all layers of infrastructure architecture - from the hypervisor all the way up to front-end applications. Mike has played a leading role in the deployment and implementation of Expedient’s next-generation cloud platform, Expedient Enterprise Cloud. His professional interests include automation, containers, Kubernetes, CI/CD, and developer experience optimization. Follow Mike on_ [_Twitter_](https://twitter.com/mgaruccio)_._