---
sidebar_position: 5
---

# FAQ

## 通用问题

### 框架组件如何对接 OpenSergo？

各个框架组件通过 OpenSergo SDK 直接对接治理标准；特别地，对于流量治理能力与标准，也可以直接对接 [Sentinel](https://sentinelguard.io/zh-cn/)。

### OpenSergo 与 Sentinel 的关系？

OpenSergo 作为开放、统一的微服务治理项目，提供一系列的微服务治理标准、对接标准配置的 SDK 及统一控制平面。OpenSergo 本身不提供微服务治理能力的实现，[Sentinel 2.0](https://sentinelguard.io/zh-cn/docs/opensergo-data-source.html) 将作为 OpenSergo 流量治理能力（流量路由与染色、流量防护与容错）的默认标准实现，同时原生对接 OpenSergo 流量治理标准。

### OpenSergo 与 Istio 等 Service Mesh 的关系？

### OpenSergo 与 Dapr 的关系？

## OpenSergo SDK 相关问题

### OpenSergo 支持的多语言生态有哪些？

目前社区已提供 [Java SDK](https://github.com/opensergo/opensergo-java-sdk) 和 [Go SDK](https://github.com/opensergo/opensergo-go-sdk)。其它语言（如 Rust, Node.js）社区也在规划中，欢迎社区开发者一起贡献。

### OpenSergo SDK 是否包含服务治理的能力实现？

OpenSergo SDK 目前仅包含 OpenSergo 治理标准配置的订阅对接能力，用于对接到框架组件已有的实现中，不包含具体实现。[Sentinel 2.0](https://github.com/alibaba/Sentinel/issues/2943) 会承接 OpenSergo 流量治理（流量路由与染色、流量防护与容错）能力的抽象与实现，同时默认对接 OpenSergo 流量治理标准。

## 控制平面相关问题

OpenSergo 控制平面 (Control Plane) repo: https://github.com/opensergo/opensergo-control-plane

### OpenSergo 控制平面支持哪些部署形态？

OpenSergo 控制平面目前暂时仅支持 Kubernetes 环境，后续社区也计划支持 VM (ECS) 等部署架构。

### OpenSergo 控制平面与 Istio 控制面的关系？

OpenSergo 控制平面作为 OpenSergo 服务治理 CRD 统一管控与下发组件，其设计目标是足够简单、轻量、组件化、可扩展。基于以上考虑，我们并未直接基于 Istio 控制面扩展。未来 OpenSergo 控制平面本身可作为独立模块，作为插件嵌入到 Istio 控制面中。

## 框架生态问题

### 目前各个框架组件对接 OpenSergo 的状态是怎样的？