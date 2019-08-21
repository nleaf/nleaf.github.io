---
title: Four Ways to Deploy Kubernetes on VMware
date: Tue, 11 Jun 2019 19:25:43 +0000
tags:
- containers
- digital transformation
- VMware
- Kubernetes
- DevOps
author: Mike Garuccio
image: "/uploads/EXP-Social-Four-Ways-to-Deploy-K8s-on-VMware.jpg"

---
Kubernetes (k8s) is quickly becoming the de facto standard for container orchestration because it provides an effective framework to operate applications built using microservices architecture. Also known as application “containerization,” this approach enables development teams to be more agile, employ continuous delivery practices, and ultimately bring new business applications to market faster.

**k8s streamlines the management of containerized applications at scale.** Because of k8s, migrating production workloads from VMs to containers makes practical sense from a business perspective in many situations. However, using k8s for container orchestration will not be second nature for your application engineers. It requires learning several new skills, such as:

* **Declarative config (yaml)**
* **Service discovery and publishing**
* **Reverse Proxys/Ingress controllers**
* **New monitoring methodologies, like** [**Prometheus**](https://github.com/coreos/prometheus-operator)

Also, as you will learn, multiple different approaches can be taken to solve the same problem in k8s.

#### Load Balancing

For example, there are multiple different ingress controllers you can use for load balancing such as NGINX, HAProxy, Envoy, and Traefik. To learn about each method, check out [this article](https://kubedex.com/ingress/).

#### Logging

Collecting, viewing, managing and analyzing Kubernetes logs are crucial to the successful operation of your containerized application. [Elasticsearch](https://www.elastic.co/elasticsearch-kubernetes), [Datadog](https://www.datadoghq.com/log-management/), and [vRealize LogInsight](https://www.vmware.com/products/vrealize-log-insight.html) are all useful tools in this area. A shameless, yet related product plug – Expedient offers a [managed Log Insight service](https://www.expedient.com/services/managed-services/compliance-security/unified-log-management/) to make it easy for clients use it for BI purposes. Check it out when you have time.

#### Deploying Kubernetes

Even deploying a k8s cluster is a relatively complex task as k8s is actually several components (kubelet, api server, proxy, dns server, etc) that work together and must be deployed across multiple nodes and configured to communicate with each other. There are several tools available to simplify this process depending on your needs – such as Kubeadm, Kubespray, and [Rancher](https://rancher.com/what-is-rancher/how-is-rancher-different/) – and they each work best in specific scenarios. [This blog from Altoros](https://www.altoros.com/blog/a-multitude-of-kubernetes-deployment-tools-kubespray-kops-and-kubeadm/) provides some great context on Kubeadm and Kubespray. More on Rancher later...

#### Application Monitoring

To ensure that your application is fulfilling its intended purpose and staying within budget, keeping tabs on application performance and resource utilization after deployment is a must. Prometheus, [netdata](https://docs.netdata.cloud/), and [Sensu](https://sensu.io/solutions/container-monitoring) are examples of monitoring tools with native k8s support.

#### Distributions

Like Linux, the base k8s offering is augmented by various vendors and open-source projects. It’s possible to run ‘upstream’ k8s by deploying your master cluster [with kubeadm](https://kubernetes.io/docs/setup/independent/create-cluster-kubeadm/) or a tool that relies on it. There are a number of other k8s distributions available from various vendors as well.

#### Deploying Kubernetes on VMware – Four Approaches

With the Kubernetes intro in the rear view, we can now talk about the fun stuff. Over the last year, Expedient’s Product Strategy and Information Systems teams have collaborated to deploy several containerized applications on the [Expedient Enterprise Cloud](https://www.expedient.com/services/infrastructure-as-a-service/cloud/) (EEC) platform, which is based on vCloud Director v9.5. As you know from my k8s intro above, there are several different ways to achieve similar results when deploying containerized applications on k8s. However, there are advantages and disadvantages to each approach:

#### 1) Manual creation and management with kubeadm

Deploy servers as you normally would and [use kubeadm to bootstrap a kubernetes cluster](https://kubernetes.io/docs/setup/independent/create-cluster-kubeadm/)

**Advantages**

* Pure upstream Kubernetes, guaranteeing compatibility with any k8s workload and immediate availability of new versions
* Fewest new tools to learn
* Allows customization of effectively any cluster feature

**Disadvantages**

* Provides a very bare-bones installation - No GUI; No network overlay (this is easy to apply but still an extra step)
* All lifecycle control is manual
* Nodes need to be set up separately from the running of the kubeadm command, requiring either multiple steps or custom automation

#### 2) Ansible-based deployment with kubespray

Deploy servers manually and use the [ansible playbooks provided by the kubespray project](https://github.com/kubernetes-sigs/kubespray) to bootstrap and manage the cluster.

**Advantages**

* Based on kubeadm so k8s is fully upstream with quick availability of new versions
* Leverages existing ansible skills and infrastructure (if present)
* Provides options for deploying additional features like the network overlay
* Provides basic lifecycle control automation
* Cluster still highly customizable

**Disadvantages**

* Difficult to use if ansible is a new tool for the team
* Nodes still need to be set up manually - This is partially alleviated [by using Tower workflows](https://docs.ansible.com/ansible-tower/latest/html/userguide/workflows.html) to both deploy nodes and bootstrap clusters but still requires setup

#### 3) Use the Container Service Extension (CSE) for vCD

[Use the CSE extension of vcd-cli to deploy clusters](https://vmware.github.io/container-service-extension/CLUSTER_ADMIN.html#example).

**Advantages**

* Bootstraps both nodes and cluster so new cluster deployment can happen from a single CLI command
* Allows creation and deletion of worker nodes with a single command
* Deploys a working network overlay
* Based on kubeadm so Kubernetes is fully upstream

**Disadvantages**

* Relatively slow version updates compared with other options
* Minimal lifecycle management capability (worker node creation/deletion only)
* Kubeadm base means cluster is fairly bare-bones

**Side Note**: Read [this blog post](https://www.expedient.com/blog/deploy-kubernetes-clusters-alongside-virtual-machines-with-expedient-enterprise-cloud/) from John White, Expedient’s Chief Innovation Officer, for more on CSE for vCD.

#### 4) Rancher

Deploy an instance of [Rancher's open source cluster management tool](https://rancher.com/products/rancher/) and use that for cluster creation/management

**Advantages**

* Deploys a more complete platform - RBAC (Role-based access control); Easily enabled monitoring and logging; Helm configured to make app deployment easier
* Full lifecycle management of nodes (cluster k8s version can be updated with a few clicks in web UI)
* Complete GUI for monitoring and managing the cluster

**Disadvantages**

* Currently still requires manually creating nodes and adding them to the cluster
* Additional tool to manage (Rancher itself)
* Uses a fork of Kubernetes called the [Rancher Kubernetes engine](https://github.com/rancher/rke) - Still certified compatible but potential for incompatibility is still higher than upstream; Updates tend to be slightly behind the upstream (typically by a month or two)

As you can see, there are many ways to get k8s up and running in a VMware-based cloud like EEC. If you would like more information on the approaches described above or k8s in general, feel free to email me at [mike.garuccio@expedient.com](mailto:mike.garuccio@expedient.com).

_Mike Garuccio is a Product Strategy Engineer at Expedient focused on researching new software and hardware to find ways to productize this technology into new solutions for Expedient clients. As a ‘full stack’ engineer, Mike works with all layers of infrastructure architecture - from the hypervisor all the way up to front-end applications. Mike has played a leading role in the deployment and implementation of Expedient’s next-generation cloud platform, Expedient Enterprise Cloud. His professional interests include automation, containers, Kubernetes, CI/CD, and developer experience optimization. Follow Mike on_ [_Twitter_](https://twitter.com/mgaruccio)_._