---
sidebar_position: 3
---

# OpenSergo Architecture

OpenSergo mainly contains three modules:

* Control plane (responsible for receiving reported metadata and delivering service governance rules) : End users can view and modify service governance configurations through either the dashboard or through the kubernates CRD.
* Data plane (responsible for receiving and applying service governance configuration) : generally refers to various microservice frameworks, which can be divided into three main forms: SDK, Java Agent and Sidecar.
* Communication protocol: OpenSergo protocol is used to communicate between the control plane and data plane.
