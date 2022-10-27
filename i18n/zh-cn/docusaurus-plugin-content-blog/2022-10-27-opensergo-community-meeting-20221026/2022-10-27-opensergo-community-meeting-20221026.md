---
slug: opensergo-community-meeting-20221026
title: OpenSergo 社区双周会纪要（2022/10/26）
authors: [sczyh30]
tags: []
---

本次 OpenSergo 社区双周会（2022/10/26）的议程：

* 同步上一周期的进展，包括 spec 建设、Control Plane && SDK 进展、社区生态接入等进展
* 宣布 Committer 晋升动态
* 社区分享与讨论，包括流量染色 spec 与实践分享、Sentinel+OpenSergo 展望、多语言生态讨论等

本周 OpenSergo 社区双周会纪要：

1. 经过全体 committer 提名与讨论，社区很高兴地宣布，贾江南（GitHub ID: @jnan806）正式晋升为 OpenSergo 社区 committer。贾江南同学在过去的一段时间，积极、活跃地参与到 OpenSergo 社区讨论与贡献中，从0到1完成了 OpenSergo Go SDK 的初版实现，并且在 Go 生态适配、proto 管理、Java SDK 等方面都有着不少贡献，符合社区对 committer 持续贡献的期望。恭喜江南，期待未来持续贡献！

2. @宿何 分享 Sentinel 近期社区动态及 Sentinel 2.0+OpenSergo 的演进。本周随着 Sentinel 1.8.6 版本正式发布，Sentinel OpenSergo 流量治理数据源也迎来了首个版本。借助 sentinel-datasource-opensergo 数据源模块，开发者可以很方便地将 Kubernetes 集群下的应用通过 Sentinel 接入到 OpenSergo 控制面，然后通过统一的 OpenSergo CRD 对异构化的服务进行统一的治理规则管控。后续社区会出专题教程来指导大家接入，简短文档可以参考：https://sentinelguard.io/zh-cn/docs/opensergo-data-source.html

3. OpenSergo Java SDK 也迎来了首个发布版本 0.1.0-beta1: https://github.com/opensergo/opensergo-java-sdk/releases/tag/v0.1.0-beta1

4. @十眠 分享了流量染色这一块领域的最佳实践及 spec 设计。流量染色，顾名思义将请求流量进行颜色标记，并且将标记跟随着链路一直传递下去。结合流量路由与流量染色能力，我们可以实现全链路灰度、多环境隔离等场景，实现“流量泳道”的能力。流量染色是流量治理领域非常重要的能力，社区正在形成初版文档，稍后会提交 PR 请大家一起进行完善。

5. 社区对 OpenSergo 多语言生态进行简短的讨论。除了 Java 和 Go 生态之外，Rust 生态也是社区未来期望建设的重要生态，期待大家一起共建 Rust SDK。


GitHub discussions: https://github.com/opensergo/opensergo-specification/discussions/50

---

OpenSergo 社区会议每两周开展一次，时间为1小时左右。入会方式：

* 会议形式：钉钉会议
* OpenSergo 社区交流群（钉钉群）：34826335
* 钉钉会议入会口令：244 801 51010

欢迎社区同学参与讨论与分享。
