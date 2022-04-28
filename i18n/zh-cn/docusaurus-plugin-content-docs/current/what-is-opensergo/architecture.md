---
sidebar_position: 3
---

# OpenSergo 架构

OpenSergo 主要包含三大部分：

* **控制面**：用户可以通过 CRD 或者 Dashboard 的方式查看、修改服务治理配置，并将这些管控信息下发到数据面。

* **数据面** ：Java Agent、Servcie Mesh、各个接入 OpenSergo 的微服务框架都能够接收到服务治理配置，并应用到当前的业务流量中。各个数据面都能够认可OpenSergo规定的服务治理配置、流量标签等信息，确保降低开发者理解成本。

* **OpenSergo Spec**：Spec 规定了控制面和数据面的通信约定，确保用户使用一种 Spec 即可描述不同框架、不同协议、不同语言的微服务架构，让开发者不再需要关注底层差异。
