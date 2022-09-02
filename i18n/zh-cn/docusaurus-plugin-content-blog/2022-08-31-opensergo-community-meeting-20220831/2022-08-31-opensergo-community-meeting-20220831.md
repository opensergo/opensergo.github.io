---
slug: opensergo-community-meeting-20220831
title: OpenSergo 社区双周会纪要（2022/08/31）
authors: [sczyh30]
tags: []
---

OpenSergo 社区会议每两周开展一次，时间为1小时左右。入会方式：

* 会议形式：钉钉会议
* OpenSergo 社区交流群（钉钉群）：34826335
* 电话呼入：+862281944261（中国大陆）+867388953916（中国大陆）
* 钉钉入会链接：dingtalk://dingtalkclient/action/open_mini_app?miniAppId=2018112162280005&ddMode=push&mainTask=true&keepAlive=false&newCalendar=1&page=pages%2Fdetail%2Findex%3FuniqueId%3DYU1YbnpXaFZaVXo2TUd4QXRoVUNIQT09%26recurrenceId%3D1653478200000%26inviter%3D181693639&fallback_url=dingtalk%3A%2F%2Fdingtalkclient%2Fpage%2Fcalendar_detail%3Fid%3D0%26uniqueId%3DYU1YbnpXaFZaVXo2TUd4QXRoVUNIQT09%26recurrenceId%3D1653478200000%26inviter%3D181693639

本次社区双周会（2022/08/31）的议程：

* 同步上一周期的进展，包括 spec 建设、Control Plane && SDK 进展、社区生态接入等进展
* 社区分享与讨论
  * OpenSergo Control Plane 及 SDK 整体方案介绍
  * OpenSergo + Sentinel Java 演示
  * 其它社区分享讨论

本周 OpenSergo 社区双周会纪要：

1. 社区同学 @xzd1621 分享了 OpenSergo Control Plane、SDK 的整体设计，并分享了控制面与数据面之间 gRPC 协议的详细设计。Control Plane 的初版代码还在整理中，整理完成后将正式开源透出。

* OpenSergo universal transport service gRPC 协议设计：https://github.com/opensergo/opensergo-proto/issues/1
* Control Plane 设计：https://github.com/opensergo/opensergo-specification/discussions/36#discussioncomment-3517830

![cp](https://user-images.githubusercontent.com/30654585/187685459-eee43b2c-92ea-450f-8566-1571d0470e68.png)

2. 社区通过 Sentinel (Java) + OpenSergo 的示例，演示了从拉起控制面，到应用通过 Sentinel 数据源接入 OpenSergo 控制面，再到通过控制面配置流控降级与容错 CRD 使得接入应用可以生效限流 整个流程。目前 OpenSergo Java SDK 及 Sentinel 数据源均已完成初版，可以作为社区接入的参考，欢迎社区一起来 review。

* Initial version of OpenSergo Java SDK: https://github.com/opensergo/opensergo-java-sdk/pull/1
* Sentinel OpenSergo data-source (Java): https://github.com/alibaba/Sentinel/pull/2842

![image](https://user-images.githubusercontent.com/9434884/186125289-efb5e75a-0d6d-486c-a577-f986024ad911.png)

3. 社区进行了一些细节的讨论，包括 spec 的扩展性、控制面与数据面之间通信协议的扩展性，以及未来可以落地的生态。社区欢迎各个开发者、社区与企业一起来完善 OpenSergo spec，共同扩充微服务治理标准与场景；同时对于 SDK 及 Control Plane 的扩展性，欢迎社区一起参与设计和代码贡献。
4. 数据库治理 spec 方面，ShardingSphere && Database Mesh 社区同学正在进行最终的整理，预计下周形成终稿，作为 v1alpha1 版本正式对外发布。

GitHub discussion 记录：https://github.com/opensergo/opensergo-specification/discussions/36

欢迎社区同学参与讨论与分享。
