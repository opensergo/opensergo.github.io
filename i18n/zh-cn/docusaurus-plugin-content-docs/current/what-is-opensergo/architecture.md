---
sidebar_position: 3
---

# OpenSergo 架构

OpenSergo 主要包含一下几部分：

* **OpenSergo Spec**：Spec 以统一的一套配置/DSL/协议定义服务治理规则，确保开发者可以用同一套标准对不同框架、不同协议、不同语言的微服务架构进行统一治理管控。
* **OpenSergo SDK/Agent**：OpenSergo 多语言 SDK/Agent 提供统一的 OpenSergo 适配层，供各个开源框架/组件接入到 OpenSergo 生态中。
* **数据面（各框架生态）** ：各个接入 OpenSergo 生态的微服务框架/组件，都可以通过统一的 OpenSergo CRD 进行服务治理管控。
* **控制面**：用户可以通过 CRD 或者 Dashboard 的方式查看、修改服务治理配置，并将这些管控信息下发到数据面。

