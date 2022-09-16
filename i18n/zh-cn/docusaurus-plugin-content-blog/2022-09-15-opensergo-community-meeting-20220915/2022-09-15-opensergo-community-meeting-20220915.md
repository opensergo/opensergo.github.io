---
slug: opensergo-community-meeting-20220915
title: OpenSergo 社区双周会纪要（2022/09/15）
authors: [sczyh30]
tags: []
---

本次 OpenSergo 社区双周会（2022/09/15）的议程：

* 同步上一周期的进展，包括 spec 建设、Control Plane && SDK 进展、社区生态接入等进展
* 社区分享与讨论
  * OpenSergo Control Plane 讨论
  * proto 文件及 stub code 的管理方式讨论
  * 数据库治理 spec 正式发布
  * 开源贡献流程与协作讨论

本周 OpenSergo 社区双周会纪要：

1. [OpenSergo Control Plane POC 版本](https://github.com/opensergo/opensergo-control-plane/tree/initial-version)正式对外透出，社区简单介绍了 OpenSergo 控制面的核心设计与代码结构，目前 OpenSergo 控制面项目还处于初期阶段，有非常多的完善与优化的空间，欢迎大家一起来 review 及贡献代码。相关 PR: https://github.com/opensergo/opensergo-control-plane/pull/5
2. 社区很高兴地宣布，OpenSergo 社区与 ShardingSphere、Database Mesh 社区合作共建的[数据库治理 spec v1alpha1 版本](https://github.com/opensergo/opensergo-specification/blob/main/specification/zh-Hans/database.md)已正式发布，后续社区会进一步开展 spec 的对接以及在 ShardingSphere 社区的落地。感谢 ShardingSphere、Database Mesh 社区同学的支持与合作，也欢迎社区同学积极参与到数据库治理 spec 及实现的贡献。
3. 社区针对 [opensergo-proto 项目](https://github.com/opensergo/opensergo-proto)及多语言 gRPC stub code 的管理方式进行了讨论，@jnan806 同学在 [issue](https://github.com/opensergo/opensergo-proto/issues/3) 里面提供了自动CI、submodule 等思路，同时 Kratos 社区的同学也分享了 bilibili 的一些最佳实践（结合 [bufbuild/buf 项目](https://github.com/bufbuild/buf))，后续社区会参考这几种思路来优化 proto 的管理方式。
4. 关于流量路由 spec 的落地，目前社区还需要设计流量路由规则对应的 proto 形态；接下来社区会完成流量路由 spec 在 Java SDK 的对接，并与 Spring Cloud Alibaba、Dubbo 等社区进行对接落地。
5. 向社区介绍了如何快速参与到 OpenSergo 项目中，后续社区也会整理一些指南。

GitHub discussion 记录：https://github.com/opensergo/opensergo-specification/discussions/41

---

OpenSergo 社区会议每两周开展一次，时间为1小时左右。入会方式：

* 会议形式：钉钉会议
* OpenSergo 社区交流群（钉钉群）：34826335
* 钉钉会议入会口令：244 801 51010
* 电话呼入：+862281944261（中国大陆）+867388953916（中国大陆）
* 钉钉入会链接：dingtalk://dingtalkclient/action/open_mini_app?miniAppId=2018112162280005&ddMode=push&mainTask=true&keepAlive=false&newCalendar=1&page=pages%2Fdetail%2Findex%3FuniqueId%3DYU1YbnpXaFZaVXo2TUd4QXRoVUNIQT09%26recurrenceId%3D1653478200000%26inviter%3D181693639&fallback_url=dingtalk%3A%2F%2Fdingtalkclient%2Fpage%2Fcalendar_detail%3Fid%3D0%26uniqueId%3DYU1YbnpXaFZaVXo2TUd4QXRoVUNIQT09%26recurrenceId%3D1653478200000%26inviter%3D181693639

欢迎社区同学参与讨论与分享。
