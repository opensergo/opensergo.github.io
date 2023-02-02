---
slug: opensergo-community-meeting-20230201
title: OpenSergo 社区双周会纪要（2023/02/01）
authors: [sczyh30]
tags: [OpenSergo, Sentinel, Istio]
---

本次（2023/02/01）OpenSergo 与 Sentinel 社区会议为兔年新春第一次社区会议，会议纪要：

1. @十眠 详细分享了 [Sentinel 2.0 流量路由模块的设计、代码流程与实现](https://github.com/alibaba/Sentinel/issues/3023)，以及 Dubbo 接入 Sentinel 流量路由模块的方案，并演示了 Dubbo + Sentinel 2.0 + OpenSergo 流量路由能力的 demo。Sentinel 2.0 抽象了 RouterFilter、LoadBalancer 等流量治理的基础接口与实现，并对接了 OpenSergo 流量路由 spec，欢迎社区一起 review 实现，并一起将更多的框架生态对接到新的 Sentinel 2.0 生态中。
  - 整体设计：https://github.com/alibaba/Sentinel/issues/3023
  - Sentinel PR: https://github.com/alibaba/Sentinel/pull/3024
  - Dubbo 适配模块 PR: https://github.com/apache/dubbo-spi-extensions/pull/192
2. @宿何 分享了 [OpenSergo 统一控制面](https://github.com/opensergo/opensergo-control-plane)最新的进展，以及 OpenSergo 体系与 Istio 的对比。目前 OpenSergo 统一控制面正在尝试以多种方式支持 Istio 生态，以标准方式 覆盖多语言生态、Mesh 生态。我们期望最终的形态是，OpenSergo 控制面既可以自成一体，又可以作为 Istio 的插件配合使用。欢迎社区参与 Istio 生态集成相关讨论：https://github.com/opensergo/opensergo-control-plane/issues/52
3. 社区针对以下问题进行了详细讨论：
  - Sentinel 2.0 里面流量治理新能力（如流量路由、负载均衡调权等）的模块组织形式，目前社区同学倾向于单独模块划分的方案。相关 issue：https://github.com/alibaba/Sentinel/issues/3025
  - Sentinel Go 中，社区计划将 OpenSergo spec 支持作为 Sentinel 默认实现的一部分，让开发者可以低成本接入统一的 OpenSergo spec 与控制面。相关 issue: https://github.com/alibaba/sentinel-golang/issues/503
  - 同个应用进程多个框架对接 OpenSergo SDK 时 OpenSergo client 复用与管理的方案，社区初步确定了相关方案：https://github.com/opensergo/opensergo-java-sdk/issues/8

GitHub discussions: https://github.com/opensergo/opensergo-specification/discussions/74

---

## 社区会议参与方式

OpenSergo 社区会议每两周开展一次（一般是每两周的周三晚），时间为1小时左右。入会方式：

* 会议形式：钉钉会议
* OpenSergo 社区交流群（钉钉群）：34826335
* 钉钉会议入会口令：244 801 51010
