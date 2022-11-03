---
slug: opensergo-monthly-summary-202210
title: Go 生态支持、流量染色... OpenSergo 10月最新动态来啦！
authors: [sczyh30]
tags: []
---

OpenSergo 是开放通用的，覆盖微服务及上下游关联组件的微服务治理项目。OpenSergo 从微服务的角度出发，涵盖流量治理、服务容错、服务元信息治理、安全治理等关键治理领域，提供一系列的治理能力与标准、生态适配与最佳实践，支持 Java, Go, Rust 等多语言生态。

**Go 生态支持、流量染色最佳实践、流控降级与容错 spec 落地... OpenSergo 微服务治理社区 10月最新动态来啦，欢迎了解~**

## 微服务治理 Spec 演进

- **流量染色领域的最佳实践及 spec 设计正式透出**。流量染色，顾名思义将请求流量进行颜色标记，并且将标记跟随着链路一直传递下去。结合流量路由与流量染色能力，我们可以实现全链路灰度、多环境隔离等场景，实现“流量泳道”的能力。流量染色是流量治理领域非常重要的能力，期待大家一起来完善场景以及实现相关能力，后续社区公众号会出专题文章解析这一块的场景与技术原理。

## SDK/Control Plane 演进

- **OpenSergo Java SDK** 迎来了首个发布版本 0.1.0-beta1。
- 由社区主导贡献的 **OpenSergo Go SDK** 初版已形成，目前已初步具备流控降级与容错 spec 的对接能力。相关 PR: https://github.com/opensergo/opensergo-go-sdk/pull/2
- OpenSergo Rust SDK 也在与社区规划中，欢迎 Rust 大佬一起参与贡献~
- **性能与稳定性优化**：社区针对同个应用多个框架分别对接了 OpenSergo SDK 的情况下，gRPC client 的复用机制进行了一些讨论与设计，预计会在11月对 Java/Go SDK 的实现进行完善。相关讨论可见：https://github.com/opensergo/opensergo-java-sdk/issues/8

## 社区生态演进

- 社区**完成 Spring Cloud Alibaba 流量路由能力与 OpenSergo 流量路由 spec 的初步对接**，集成模块预计11月发布正式版；后续 Dubbo, Kratos, CloudWeGo 等社区也会一起参与到流量路由能力建设及 spec 对接中。
- 随着流量治理组件 Sentinel Java 1.8.6 版本正式发布，**Sentinel OpenSergo 流量治理数据源也迎来了首个版本**。借助 `sentinel-datasource-opensergo` 数据源模块，开发者可以很方便地将 Kubernetes 集群下的应用通过 Sentinel 接入到 OpenSergo 控制面，然后通过统一的 OpenSergo CRD 对异构化的服务进行统一的流控降级与容错治理，原生支持 20+ 框架集成。文档可以参考：https://sentinelguard.io/zh-cn/docs/opensergo-data-source.html
- 随着 OpenSergo Go SDK 初版成形，**Sentinel Go 集成 OpenSergo 的数据源模块也已形成初版**，目前支持流控、熔断、并发控制等规则 spec。该集成模块可作为 Go 框架对接 OpenSergo Go SDK 的指导示例，相关 PR 见：https://github.com/alibaba/sentinel-golang/pull/489

## 社区开发者

- **本月 OpenSergo 社区迎来了新的一位 committer 贾江南**（GitHub ID: [@jnan806](https://github.com/jnan806)）。贾江南同学在过去的一段时间，积极、活跃地参与到 OpenSergo 社区讨论与贡献中，从0到1完成了 OpenSergo Go SDK 的初版实现，并且在 Go 生态适配、proto 管理、Java SDK 等方面都有着不少贡献，符合社区对 committer 持续贡献的期望。恭喜江南，期待未来持续贡献！

---

**OpenSergo 开源贡献小组正在火热招募贡献者**。如果您有时间，有热情，有意愿，欢迎联系社区加入开源贡献小组，一起共同完善 OpenSergo 和 Sentinel；对于核心贡献者，我们会提名为 committer，一起主导微服务治理技术与标准演进，并且有持续的激励机制。Now let's start hacking!