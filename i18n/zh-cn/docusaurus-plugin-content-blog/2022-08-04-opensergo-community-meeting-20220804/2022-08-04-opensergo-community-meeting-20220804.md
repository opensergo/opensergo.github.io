---
slug: opensergo-community-meeting-20220804
title: OpenSergo 社区双周会纪要（2022/08/04）
authors: [sczyh30]
tags: []
---

OpenSergo 社区会议每两周开展一次，时间为1小时左右。入会方式：

* 会议形式：钉钉会议
* OpenSergo 社区交流群（钉钉群）：34826335
* 电话呼入：+862281944261（中国大陆）+867388953916（中国大陆）
* 钉钉入会链接：dingtalk://dingtalkclient/action/open_mini_app?miniAppId=2018112162280005&ddMode=push&mainTask=true&keepAlive=false&newCalendar=1&page=pages%2Fdetail%2Findex%3FuniqueId%3DYU1YbnpXaFZaVXo2TUd4QXRoVUNIQT09%26recurrenceId%3D1653478200000%26inviter%3D181693639&fallback_url=dingtalk%3A%2F%2Fdingtalkclient%2Fpage%2Fcalendar_detail%3Fid%3D0%26uniqueId%3DYU1YbnpXaFZaVXo2TUd4QXRoVUNIQT09%26recurrenceId%3D1653478200000%26inviter%3D181693639

本次社区双周会（2022/08/04）的议程：

* 同步上一周期的进展，包括标准建设、社区生态接入等进展
* 讨论下一周期的规划和方向，一起讨论社区的一些 idea
* 社区分享：数据库治理 ideas

本周 OpenSergo 社区双周会纪要：

1. 与社区讨论了 OpenSergo SDK 与 operator 中间 gRPC 通信层传输的设计，介绍了 OpenSergo universal transport service 及 OpenSergo on xDS (ECDS) 两种方案。关于 OpenSergo on xDS (ECDS) 的可行性及复杂度，社区还在进行更多的探索。详情可参考：https://github.com/opensergo/opensergo-specification/issues/22
2. ShardingSphere && Database Mesh 社区同学分享了数据库治理的相关技术，及数据库治理 v1alpha1 spec 的整体设计，包含虚拟数据库、流量治理（负载均衡、读写分离、流控降级）、分库分表、访问控制等几大领域。社区同学正在整理相关标准，稍后会在社区提 proposal 进行讨论。
3. CloudWeGo Kitex, Kratos, Spring Cloud Alibaba 等社区都对全链路灰度等能力比较感兴趣，也有在做一些设计，欢迎各个社区一起来完善相关 spec，并落地到各个社区实现中。

GitHub discussion 记录：https://github.com/opensergo/opensergo-specification/discussions/21

欢迎社区同学参与讨论与分享。
