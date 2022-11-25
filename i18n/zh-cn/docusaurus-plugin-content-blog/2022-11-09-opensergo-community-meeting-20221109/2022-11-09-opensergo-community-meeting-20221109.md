---
slug: opensergo-community-meeting-20221109
title: OpenSergo 社区双周会纪要（2022/11/09）
authors: [sczyh30]
tags: []
---

本次 OpenSergo 社区双周会（2022/11/09）的议程：

* 同步上一周期的进展，包括 spec 建设、Control Plane && SDK 进展、社区生态接入等进展
* 社区分享与讨论，包括 Spring Cloud Alibaba 流量染色 Demo 演示、OpenSergo 控制面设计优化讨论、开源贡献小组任务梳理与讲解等

本次 OpenSergo 社区双周会纪要：

1. @十眠 演示了 Spring Cloud Alibaba 集成 OpenSergo 流量染色 spec 的 demo，适配模块的代码预计近期提交 PR。流量染色是流量治理领域非常重要的能力，欢迎社区一起来 review 与完善流量染色 spec: https://github.com/opensergo/opensergo-specification/pull/52

2. 社区针对 OpenSergo 控制平面 (Control Plane) 现有的设计与问题进行了讨论。其中包括：

  - 控制平面取消订阅 (unsubscribe) 某个订阅分组的设计: https://github.com/opensergo/opensergo-control-plane/issues/7
  - 控制平面向 client 推送数据时针对超时的处理机制设计：https://github.com/opensergo/opensergo-control-plane/issues/8
  - 控制平面 CRD 事件处理 debounce 机制：https://github.com/opensergo/opensergo-control-plane/issues/24
  - 监听数据的版本管理机制

近期社区整理了很多 OpenSergo 控制平面相关的 good first issue，欢迎社区同学参与贡献：https://github.com/opensergo/opensergo-control-plane/issues

3. Committer @贾江南 分享了如何快速参与到 OpenSergo 社区贡献中，并进行操作演示。大家也可以参考[社区贡献指南](https://opensergo.io/zh-cn/docs/community/contribution-guidance/)进行入门：

GitHub discussions: https://github.com/opensergo/opensergo-specification/discussions/55

---

OpenSergo 社区会议每两周开展一次（一般是每两周的周三晚），时间为1小时左右。入会方式：

* 会议形式：钉钉会议
* OpenSergo 社区交流群（钉钉群）：34826335
* 钉钉会议入会口令：244 801 51010

欢迎社区同学参与讨论与分享。
