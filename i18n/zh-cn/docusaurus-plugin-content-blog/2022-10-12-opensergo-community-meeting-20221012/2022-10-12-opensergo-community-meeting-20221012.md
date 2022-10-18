---
slug: opensergo-community-meeting-20221012
title: OpenSergo 社区双周会纪要（2022/10/12）
authors: [sczyh30]
tags: []
---

本次 OpenSergo 社区双周会（2022/10/12）的议程：

* 同步上一周期的进展，包括 spec 建设、Control Plane && SDK 进展、社区生态接入等进展
* 社区分享与讨论，包括 OpenSergo Go SDK 设计与实现讨论、Spring Cloud Alibaba + OpenSergo 流量路由 Demo 演示等

本周 OpenSergo 社区双周会纪要：

1. 社区同学 @贾江南 分享了近期贡献的 OpenSergo Go SDK 的设计与实现，并讨论了同个应用多个框架分别对接了 OpenSergo SDK 的情况下，client 的复用机制（[issue 见此处](https://github.com/opensergo/opensergo-java-sdk/issues/8)）。SDK 的很多细节实现以及可靠性设计还需要社区来完善，欢迎社区一起来 review 与完善。同时 Sentinel Go 社区也开始开展与 OpenSergo 流控降级与容错 spec 的对接，作为 Go 社区对接的范例，也欢迎更多的 Go 社区一起参与到对接与贡献中。

相关 issue/PR:

* OpenSergo Go SDK PR: https://github.com/opensergo/opensergo-go-sdk/pull/2
* Sentinel Go OpenSergo data-source PR (WIP): https://github.com/alibaba/sentinel-golang/pull/489

2. 社区演示了 Spring Cloud Alibaba 流量路由能力对接 OpenSergo 流量路由 spec 的设计与 demo，相关代码还在整理中，这部分对接模块预计11月初发布正式版；后续 Dubbo, Kratos, CloudWeGo 等社区也可以参考这一部分，一起参与到流量路由能力建设及 spec 对接中。

GitHub discussions: https://github.com/opensergo/opensergo-specification/discussions/47

---

OpenSergo 社区会议每两周开展一次，时间为1小时左右。入会方式：

* 会议形式：钉钉会议
* OpenSergo 社区交流群（钉钉群）：34826335
* 钉钉会议入会口令：244 801 51010

欢迎社区同学参与讨论与分享。
