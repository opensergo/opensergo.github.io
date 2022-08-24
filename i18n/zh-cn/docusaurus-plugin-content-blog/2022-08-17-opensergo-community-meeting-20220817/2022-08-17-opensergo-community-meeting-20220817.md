---
slug: opensergo-community-meeting-20220817
title: OpenSergo 社区双周会纪要（2022/08/17）
authors: [sczyh30]
tags: []
---

OpenSergo 社区会议每两周开展一次，时间为1小时左右。入会方式：

* 会议形式：钉钉会议
* OpenSergo 社区交流群（钉钉群）：34826335
* 电话呼入：+862281944261（中国大陆）+867388953916（中国大陆）
* 钉钉入会链接：dingtalk://dingtalkclient/action/open_mini_app?miniAppId=2018112162280005&ddMode=push&mainTask=true&keepAlive=false&newCalendar=1&page=pages%2Fdetail%2Findex%3FuniqueId%3DYU1YbnpXaFZaVXo2TUd4QXRoVUNIQT09%26recurrenceId%3D1653478200000%26inviter%3D181693639&fallback_url=dingtalk%3A%2F%2Fdingtalkclient%2Fpage%2Fcalendar_detail%3Fid%3D0%26uniqueId%3DYU1YbnpXaFZaVXo2TUd4QXRoVUNIQT09%26recurrenceId%3D1653478200000%26inviter%3D181693639

本次社区双周会（2022/08/17）的议程：

* 同步上一周期的进展，包括 spec 建设、Control Plane && SDK 进展、社区生态接入等进展
* 社区分享与讨论：
  * 流量路由 spec v1alpha1 细节讨论，PR: https://github.com/opensergo/opensergo-specification/pull/29
  * 数据库治理 spec v1alpha1 讨论，相关 issue: https://github.com/opensergo/opensergo-specification/issues/15

本周 OpenSergo 社区双周会纪要：

1. ShardingSphere && Database Mesh 社区同学分享了数据库治理 v1alpha1 spec 详细设计并进行了讨论。数据库治理 v1alpha1 spec 已提交至社区，本周社区将一起补充完善相关 spec，并补充原有流量路由、流控降级与容错 spec 使其支持数据库治理，计划8月底正式发布。欢迎社区一起参与讨论与完善：https://github.com/opensergo/opensergo-specification/issues/15
2. 社区分享了流量路由 v1alpha1 spec 的细化设计，该设计覆盖了更全面的流量 match、target destination、router chain 的细节设计，并结合流量路由的经典场景进行说明。CloudWeGo、Kratos、SOFA 等社区参与了相关讨论。欢迎大家一起 review 该 proposal: https://github.com/opensergo/opensergo-specification/pull/29
3. 社区介绍了 OpenSergo Control Plane 及 SDK 的进展，并讨论了传输层 proto 及 service 的设计。在传输层方面，社区经过尝试后，决定暂时采用自定义简单 gRPC 协议的方式（OpenSergo universal transport service）来实现；xDS ECDS 链路方式由于社区实践不成熟、client 实现成本高等原因，暂时保持观望。Control Plane 预计下周会形成初版，Java SDK 的 POC 实现已提交，可参考：https://github.com/opensergo/opensergo-java-sdk/pull/1 。Go SDK 设计可参考通用 SDK 设计，后续会和 Kratos、CloudWeGo 社区一起进行共建。

GitHub discussion 记录：https://github.com/opensergo/opensergo-specification/discussions/27

欢迎社区同学参与讨论与分享。
