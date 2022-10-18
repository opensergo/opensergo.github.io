---
slug: opensergo-community-meeting-20220928
title: OpenSergo 社区双周会纪要（2022/09/28）
authors: [panxiaojun233]
tags: []
---

本次 OpenSergo 社区双周会（2022/09/28）的议程：

* 同步上一周期的进展，包括 spec 建设、Control Plane && SDK 进展、社区生态接入等进展
* 社区分享与讨论
  * OpenSergo Spec 配置接入流程介绍与演示
  * SLS iLogtail 社区分享日志实践

本周 OpenSergo 社区双周会纪要：

1. 社区分享并演示了 OpenSergo 的 Spec 如何从定义 CRD、proto 到下发给 OpenSergo SDK 的整个流程。
2. iLogtail 社区的 @迅飞 同学进行了日志采集、收集等实践的分享，也提出了在云原生场景下 iLogtail 的实践，对日志生产与采集的治理进行的一些展望，同时 @十眠 提出了日志治理与微服务治理结合的可能性，表示后续可以从微服务打印日志的场景入手，进行这一领域标准的抽象。欢迎社区一起思考未来对微服务日志治理的 ideas。
3. 社区针对 OpenSergo proto 文件及多语言 gRPC stub code 的管理方式进行了进一步的讨论，贾江南 在上周的基础上（[issue 见此处](https://github.com/opensergo/opensergo-proto/issues/3)）分享了 proto 文件的管理的统一的思考与看法，针对社区提出的三个解决方案进行了[对应的实现](https://github.com/opensergo/opensergo-proto/issues/5)，推荐了按照原生 protoc 方案管理 proto 的最佳实践，并建议将方案三利用 buf.build 的代码生成功能的方案作为可能的后续发展方向。

最后 @杨博源 提出并与社区探讨 OpenSergo 在服务跨集群，跨云场景下应用和配置等方面可能出现的问题，社区后续可以进行进一步的讨论。

GitHub discussion 记录：https://github.com/opensergo/opensergo-specification/discussions/44

---

OpenSergo 社区会议每两周开展一次，时间为1小时左右。入会方式：

* 会议形式：钉钉会议
* OpenSergo 社区交流群（钉钉群）：34826335
* 钉钉会议入会口令：244 801 51010

欢迎社区同学参与讨论与分享。
