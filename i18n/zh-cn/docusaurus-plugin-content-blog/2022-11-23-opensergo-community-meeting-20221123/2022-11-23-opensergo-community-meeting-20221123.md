---
slug: opensergo-community-meeting-20221123
title: OpenSergo 社区双周会纪要（2022/11/23）
authors: [sczyh30]
tags: []
---

本次（2022/11/23）OpenSergo 与 Sentinel 社区会议合并进行，议程如下：

* 同步上一周期的进展，包括微服务治理 spec 建设、Control Plane && SDK 进展、社区生态接入，以及 Sentinel 社区进展。
* 社区分享与讨论，包括 Sentinel 2.0 新模型及流量治理骨架设计讨论、OpenSergo 与 Istio 生态结合的方案讨论等。

会议纪要：

## 议题讨论

1. 社区分享了 Sentinel 2.0 新模型及流量治理骨架设计。Sentinel 2.0 将升级为流量治理组件并作为 OpenSergo 流量治理能力与标准实现，其中重点设计包括：

* Sentinel 2.0 SDK 新模型：https://github.com/alibaba/Sentinel/issues/2845
* Sentinel 2.0 流量治理骨架抽象：https://github.com/alibaba/Sentinel/issues/2943
* Sentinel 2.0 自适应策略抽象：https://github.com/alibaba/Sentinel/issues/1889

欢迎大家一起参与 Sentinel 2.0 Java/Go 版本的共建~

2. 社区分享了 OpenSergo 与 Istio 生态结合的方案，同时分享了 OpenSergo 流量路由 spec 订正思路。

* 关于 OpenSergo 与 Istio 生态结合的方案，有两种情况（1）OpenSergo 控制平面具备 CRD 转换的能力，支持将 OpenSergo 流量路由/染色 CRD 受限转换为 Istio VirtualService/DestinationRule 以及 EnvoyFilter（按需）。这样可以做到开箱即用，但 CRD 转换受限于 Istio/Envoy 本身的能力，只能配置最基本的 OpenSergo 治理能力（2）OpenSergo 控制面将 CRD 转为 low-level config 后由 OpenSergo 自身的链路进行配置下发，通过 Envoy WASM plugin 或 SDK 生效（后者即框架本身支持 OpenSergo），这种场景支持全部的 OpenSergo 治理能力。
* 基于通用性、理解成本等考虑，社区提出了 OpenSergo 流量路由 spec 的另一种思路：直接基于 Istio VirtualService/DestinationRule 进行字段扩展，重新定义了 `TrafficRouter` 与 `VirtualWorkload`。稍后社区将提交新的 PR 来进行详细描述。
* 基于以上两点，全链路灰度在 OpenSergo 生态中的实现方式：`TrafficLane` CRD 按需生成 TrafficRouter/VirtualWorkload CRD（OpenSergo 体系，走 OpenSergo 链路下发与生效）或 VirtualService/DestinationRule + EnvoyFilter（纯 Istio+xDS 体系）。

![image](https://user-images.githubusercontent.com/9434884/203909968-cd375190-2f81-43ed-83ee-e1f7239fe31f.png)

同时社区针对 Istio 控制平面存在的问题进行了讨论。

## 其它社区进展同步

OpenSergo 社区关键进展：

* 本周社区对 OpenSergo Go SDK 整体做了几轮 review，并进行代码重构与完善完善。预计本周可以合并并发布初版，PR: https://github.com/opensergo/opensergo-go-sdk/pull/2

Sentinel 社区关键进展：

* 近期社区开发者贡献了 Kubernetes operator for Sentinel dashboard，欢迎大家一起 review: https://github.com/sentinel-group/sentinel-dashboard-k8s-operator/pull/1
* 社区正在梳理并处理 Sentinel 2.0 milestone issues，欢迎社区添加感兴趣的 feature/enhancement：https://github.com/alibaba/Sentinel/milestone/18

---

## 社区会议参与方式

OpenSergo 社区会议每两周开展一次（一般是每两周的周三晚），时间为1小时左右。入会方式：

* 会议形式：钉钉会议
* OpenSergo 社区交流群（钉钉群）：34826335
* 钉钉会议入会口令：244 801 51010

欢迎社区同学参与讨论与分享。
