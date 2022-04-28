---
sidebar_position: 2
---

# OpenSergo Concepts

## Glossary

* Application - Represents a microservice, typically standalone deployed, that may provide one or more services for the provider to invoke.
* Service - A collection of interfaces with explicit business semantics that can be invoked by consumers, usually containing one or more interfaces.
* Interface - Used to represent an identified interface, usually with an explicit interface description, call parameter definition, and return value definition.
* Node - Indicates the hardware resource where an application is deployed. Multiple nodes can form a cluster.
* Cluster - A cluster defines a group of nodes where an application is deployed, for example, a K8S cluster. A group of virtual machines can also form a cluster.
* Environment - The combination of a set of resources on which an application is deployed and run. Common environment definitions include test, daily, staging, and production. An environment can contain multiple clusters.
* Tag - An application can be composed of multiple nodes. The nodes of the same application can be divided into different groups according to their functions. The nodes that meet certain conditions can be selected through tags.
