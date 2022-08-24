---
slug: opensergo-community-meeting-20220804
title: Summary of the OpenSergo community meeting (Aug 4th, 2022)
authors: [sczyh30]
tags: []
---

Summary of the OpenSergo community biweekly meeting (Aug 4th, 2022):

1. We've discussed the design of the gRPC transport protocol between the OpenSergo SDK and the operator, and introduced two designs: OpenSergo universal transport service and OpenSergo on xDS (ECDS). For details, please refer to: https://github.com/opensergo/opensergo-specification/issues/22
2. Developers from the Database Mesh community shared the overall design of database governance v1alpha1 spec, including virtual database, traffic governance (load balancing, read-write separation, rate limiting), sharding, access control and other major areas. The spec proposal will be submitted soon.
3. Communities including CloudWeGo Kitex, Kratos, and Spring Cloud Alibaba are interested in capabilities such as traffic routing (gray). It's welcome to work together to improve the relevant specs and integrate them with the components.

GitHub discussion: https://github.com/opensergo/opensergo-specification/discussions/21
