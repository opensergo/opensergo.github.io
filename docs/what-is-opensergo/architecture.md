---
sidebar_position: 3
---

# OpenSergo Architecture

OpenSergo mainly contains these modules:

* OpenSergo Spec: the universal specification for microservice governance.
* OpenSergo SDK: data planes may leverage the OpenSergo SDK to subscribe and retrieve OpenSergo config.
* OpenSergo Control Plane (responsible for receiving reported metadata and delivering service governance rules) : End users can view and modify service governance configurations (OpenSergo CRD) via the OpenSergo control plane.
* Data plane (responsible for receiving and applying service governance configuration) : generally refers to various microservice frameworks that have integrated with OpenSergo.
