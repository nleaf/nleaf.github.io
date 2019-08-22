---
author: Mike Garuccio
title: Persistent Volume Options for Kubernetes Storage
seo_title: ''
description: ''
image: "/uploads/EXP-Social--volume_options_kubernetes.png"
banner_image: ''
date: 2019-08-13T16:20:00.000+00:00
tags:
- Cloud
featured: false
popular: false

---
## Persistent Volume Options for K8s Storage

Kubernetes was originally developed as a platform for stateless applications with persistent data stored elsewhere. As the project matured, many organizations wanted to also begin leveraging it for their stateful applications and so persistent volume management was added. At first, this was generally provisioned using cloud-provider-specific interfaces that linked directly to underlying block storage on a given cloud platform. More recently, options have been made available that are functional within any cloud provider and in some cases offer additional features or enhanced performance over the cloud-provider-specific offerings. Rather than develop an Expedient-specific storage solution we are encouraging clients to leverage the cloud-agnostic storage solution or solutions that meet their needs for performance, manageability, compliance, and cost. As the number and variety of available options available in this rapidly changing space can be daunting, an overview of the main options can be found below.

#### NFS

For workloads with relatively low performance requirements, simple NFS volumes can be a great option. In general, NFS is already well understood by IT teams and can offer “good enough” performance in most cases. In the past, relying on NFS meant losing access to dynamic provisioning of persistent volumes. However, with the release of the [NFS client provisioner](https://github.com/kubernetes-incubator/external-storage/tree/master/nfs-client), enabling dynamic provisioning is as easy as deploying a helm chart and pointing it at an existing NFS share. If your team would also like to avoid managing a separate NFS server the client provisioner is fully compatible with , which provides resource quota support, off-site replication, and basic reporting functionality.

**Pros:**

* Leverages existing skill-sets around NFS
* Easy to set up/configure
* Can be backed up using traditional backup utilities
* Inexpensive managed storage options are available

**Cons:**

* Not highly performant
* Not compatible with most k8s-native backup/DR solutions
* No snapshots (exception is [Expedient cloud file services](https://www.expedient.com/services/managed-services/cloud-storage/#file))
* Limited HA functionality (again this does not apply to the cloud file services)

**Good for:**

* “Warm” data that needs to be available at all times but is not frequently accessed.
* Batch-processing applications
* Log storage, especially as an archive tier

#### OpenEBS

[OpenEBS](https://openebs.io/) is a CNCF project supporting Container Attached Storage which creates a unique controller and replica POD for every volume and uses these to present storage from block devices available on individual nodes. This provides enhanced scalability and enables platform management entirely within Kubernetes itself via Custom Resource Definitions. This solution also provides copy-on-write snapshots and integrations with backup and restore tools such as VMWare’s [velero](https://github.com/heptio/velero).

**Pros:**

* Available as an open-source project at no cost (commercial support also available)
* Fully controllable via the k8s api and kubectl (via CRD’s)
* Snapshot functionality, allowing for use of standard backup/DR solutions like velero

**Cons:**

* Relatively new project (1.0.0 recently released)
* Fairly complex initial setup
* Some workloads will take a performance hit due to the fully distributed architecture, but OpenEBS is still significantly faster than NFS, particularly for latency-sensitive apps like databases

**Good for:**

* Applications with strict RPO and moderate RTO requirements
* Databases that do not require the absolute highest performance
* CI/CD Servers

#### Portworx

[Portworx](https://portworx.com/) is a storage solution that takes in block devices attached directly to your nodes and combines them into a cloud-native storage layer for your cluster. This option makes use of a custom scheduler to ensure that your stateful workloads run on the same node that houses the primary copy of the data they are operating on, providing a significant performance advantage that is further enhanced by the of Expedient Enterprise Cloud. Portworx also offers unique DR, management, and compliance features that enable many applications not generally considered well-suited for containerization to move to the cloud with ease. The DR orchestration capability in particular can offer extremely low RPO/RTO.

**Pros:**

* Highly performant
* Built-in redundancy options to deal with node failure
* Additional security controls beyond k8s RBAC to assist with security/compliance requirements
* Both synchronous and asynchronous replication options, enabling a variety of DR scenarios

**Cons:**

* More costly than other options
* Relatively high complexity - requires either [Hashicorp Consul](https://github.com/hashicorp/consul) or [etcd cluster](https://etcd.io/); requires provisioning block devices directly on nodes
* To get the most out of the platform, a custom scheduler should be used, which can make using pre-built manifests and helm charts a challenge
* Introduces additional tooling and interfaces (pxctl, lighthouse) that provide additional features but involve their own learning curve

**Good for:**

* Database servers (Postgres, MondgoDB, Cassandra) that need near-native performance
* Big data applications (Hadoop, Spark, Elastic)
* Any app with strict compliance requirements around data security
* Applications with low RPO/RTO DR requirements - RPOs of 15 minutes; RTOs of less than 1 minute

#### Rook

[Rook](https://rook.io/) is a CNCF project designed to provide an orchestration layer on top of other storage and database offerings, which allows management fully within Kubernetes via the addition of new Custom Resource Definitions. In addition to persistent volumes backed by NFS, EdgeFS (this can also be exposed outside of the cluster to provide a performant, geo-redundant filesystem), or Ceph Rook can provision and manage a Minio object store or databases backed by CockroachDB or Casssandra. The exact features that are available vary across the different providers, but via Ceph Rook is able to provide a relatively similar set of features as OpenEBS but with a slightly different architecture. The major advantage here is the ability to manage Persistent volumes, object stores, and databases from a single, Kubernetes-native, interface.

**Pros:**

* Free Open-Source CNCF project
* Management of multiple types of persistent volumes
* Solid performance via Ceph
* K8s-native S3-compatible Object store provisioning
* K8s-native database provisioning

**Cons:**

* Only the Ceph provisioner is considered stable, other provisioners are either in alpha or beta status
* No native snapshot or other DR support
* Limited commercial-support options

As you can see, a lot of options exist for Persistent storage inside your Kubernetes cluster, each with their own pros/cons. The information in this blog post can give you an idea of where to start your search for the solution that fits your company/workload. if you’d like to talk further about for bringing your workloads into Expedient’s Enterprise Cloud platform feel free to [email me](mailto:mike.garuccio@expedient.com) or talk to your Expedient Client Adviser.

_Mike Garuccio is a Product Strategy Engineer at Expedient focused on researching new software and hardware to find ways to productize this technology into new solutions for Expedient clients. As a ‘full stack’ engineer, Mike works with all layers of infrastructure architecture – from the hypervisor all the way up to front-end applications. Mike has played a leading role in the deployment and implementation of Expedient’s next-generation cloud platform, Expedient Enterprise Cloud. His professional interests include automation, containers, Kubernetes, CI/CD, and developer experience optimization. Follow Mike on_ [_Twitter_](https://twitter.com/mgaruccio)_._