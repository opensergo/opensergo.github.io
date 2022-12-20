---
slug: opensergo-community-meeting-20221207
title: OpenSergo 社区双周会纪要（2022/12/07）
authors: [sczyh30]
tags: []
---

本次（2022/12/07）OpenSergo 与 Sentinel 社区会议合并进行，会议纪要：

## 议题讨论

1. @十眠 分享了 Spring Cloud Alibaba 流量路由基于 OpenSergo 新的流量路由 CRD 的演示与改造。目前 OpenSergo 流量路由 CRD 直接基于 Istio VirtualService/DestinationRule 进行扩展，传输链路 proto 基于 RDS 进行扩展，以便做到易理解、通用。欢迎社区一起 review SCA+OpenSergo 流量路由 spec 整合 PR：https://github.com/alibaba/spring-cloud-alibaba/pull/2921

2. @流士 介绍了无损上下线治理相关的技术与模型设计，并与 bilibili、小红书的同学进行了探讨。对于任何一个线上应用来说，发布、扩容、缩容、重启等操作不可避免。伴随微服务规模化和应用的云原生化，对业务频繁发布过程中流量损失的容忍度逐步降低，在应用部署阶段我们可以借助无损上下线治理解决变更态业务有损问题。模型设计可以参考 [OpenSergo 无损上下线治理之模型与原理篇](https://mp.weixin.qq.com/s/KBVrGBsYKtgcmvagNOfzqw) 这篇文章。

![image](https://user-images.githubusercontent.com/9434884/208599571-b71b3c85-fd92-4bc5-afbb-5602dde39b42.png)

3. @宿何(Eric) 介绍了从微服务框架的视角如何统一对接 Sentinel 2.0 流量治理能力。Sentinel 2.0 将升级为云原生的流量治理组件，在原有流量防护与自愈能力的基础上，新增流量路由调度、负载均衡策略、流量权重策略、流量染色等流量治理的核心能力。目前 Sentinel 社区还在进行骨架抽象，预计下次社区双周会可以分享 Sentinel 2.0 初版骨架的 POC。

## 其它社区进展同步

OpenSergo 社区关键进展：

* [OpenSergo Go SDK](https://github.com/opensergo/opensergo-go-sdk) 正式发布首个版本，具备各个 Go 框架与组件快速对接 OpenSergo 标准 CRD 的能力，进一步扩充多语言治理生态。后续社区将持续推进各主流微服务框架与 OpenSergo 生态的对接，并将流量治理核心能力沉淀到 Sentinel Go 2.0 中。

Sentinel 社区关键进展：

* 社区贡献的 Kubernetes operator for Sentinel dashboard 已合并，将作为 Sentinel 2.0 的周边配套组件一起发布。GitHub repo: https://github.com/sentinel-group/sentinel-dashboard-k8s-operator
* 社区正在讨论 Sentinel 适配模块支持 Spring Boot 3 (Spring 6) 的事项，欢迎社区一起参与讨论：https://github.com/alibaba/Sentinel/issues/2986

---

## 社区会议参与方式

OpenSergo 社区会议每两周开展一次（一般是每两周的周三晚），时间为1小时左右。入会方式：

* 会议形式：钉钉会议
* OpenSergo 社区交流群（钉钉群）：34826335
* 钉钉会议入会口令：244 801 51010

下一次社区会议为2022年度最后一次 Sentinel & OpenSergo 社区联合会议，时间为 2022/12/22（周四）晚 19:30，欢迎社区同学参与讨论与分享。
