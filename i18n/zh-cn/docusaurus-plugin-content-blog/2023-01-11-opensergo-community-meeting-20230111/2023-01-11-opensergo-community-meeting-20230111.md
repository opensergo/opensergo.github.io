---
slug: opensergo-community-meeting-20230111
title: OpenSergo 社区双周会纪要（2023/01/11）
authors: [sczyh30]
tags: []
---

本次（2023/01/11）OpenSergo 与 Sentinel 社区会议合并进行，会议纪要：

## 议题讨论

1. @屿山 详细分享了 OpenSergo 控制面 Go 扩展性的技术方案及业界调研。OpenSergo Control Plane 作为统一服务治理控制面，期望提供低侵入、灵活的扩展机制，以便支持配置监听/转换、策略预计算等模块可插拔扩展。欢迎社区一起参与讨论与设计：https://github.com/opensergo/opensergo-control-plane/issues/46
2. @Jason 详细分享并讨论了事件/消息治理 proto 相关的设计，Apache EventMesh 等社区同学参与了讨论完善。该设计还在进一步完善中，欢迎大家参与完善：https://github.com/opensergo/opensergo-specification/issues/62

## 其它社区进展同步

OpenSergo 社区关键进展：

- **Java 社区落地**：[Spring Cloud Alibaba 正式发布 2.2.10.RC1 版本支持服务治理相关能力并支持 OpenSergo 流量路由 spec](https://github.com/alibaba/spring-cloud-alibaba/blob/2.2.x/spring-cloud-alibaba-examples/governance-example/label-routing-example/readme-zh.md#集成opensergo)，欢迎社区体验。

Sentinel 社区关键进展：

- Sentinel 社区近期在验证 GraalVM 下流量防护能力时遇到了一些问题，欢迎社区一起解决：https://github.com/alibaba/Sentinel/issues/3012
- Sentinel Go OpenSergo data-source 完成代码重构与结构完善：https://github.com/alibaba/sentinel-golang/pull/489

---

## 社区会议参与方式

OpenSergo 社区会议每两周开展一次（一般是每两周的周三晚），时间为1小时左右。入会方式：

* 会议形式：钉钉会议
* OpenSergo 社区交流群（钉钉群）：34826335
* 钉钉会议入会口令：244 801 51010

本次社区会议是春节前的最后一次社区会议，社区在此预祝各位开发者新年快乐~
