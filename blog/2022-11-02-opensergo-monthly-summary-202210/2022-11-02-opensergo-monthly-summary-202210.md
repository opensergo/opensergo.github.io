---
slug: opensergo-monthly-summary-202210
title: Monthly summary of OpenSergo (Oct 2022)
authors: [sczyh30]
tags: []
---

In October, we're making progress on cool features including Go SDK, traffic coloring (tagging) and integrations with fault-tolerance components.

## Specification

- We've proposed draft of traffic coloring (tagging) specification.

## SDK and control plane

- **OpenSergo Java SDK** v0.1.0-beta1 has been released.
- We're making rapid progress on the initial version of **OpenSergo Go SDK**. See https://github.com/opensergo/opensergo-go-sdk/pull/2

## Integrations with frameworks and components

- Spring Cloud Alibaba + OpenSergo traffic-routing spec integration has been preview-available.
- Sentinel OpenSergo data-source has been beta-available (`com.alibaba.csp:sentinel-datasource-opensergo:0.1.0-beta`), which enables developers to configure Sentinel rules with OpenSergo fault-tolerance CRD in a unified way (under Kubernetes, with OpenSergo control plane).

## Developers

- We're glad to announce that Jiangnan Jia (GitHub ID: @jnan806) has been promoted to OpenSergo committer by virtue of his nice contribution for OpenSergo Go SDK, proto management and Sentinel Go OpenSergo data-source.
