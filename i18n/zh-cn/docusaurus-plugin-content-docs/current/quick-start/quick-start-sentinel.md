---
sidebar_position: 4
---

# 通过 Sentinel 快速接入 OpenSergo

[Sentinel](https://sentinelguard.io/zh-cn/) 是阿里巴巴开源的云原生流量治理组件，以流量为切入点，从流量控制、并发控制、熔断降级、热点防护、系统自适应保护等多个维度来帮助保障服务的稳定性，覆盖微服务框架、云原生网关、Service Mesh 等几大场景，支持 Java、Go、C++、Rust 等多种语言的异构微服务架构。

Sentinel 2.0 将原生支持 OpenSergo 流量治理相关 CRD 配置及能力，结合 Sentinel 提供的各框架的适配模块，让 Dubbo, Spring Cloud Alibaba, gRPC, CloudWeGo 等20+框架能够无缝接入到 OpenSergo 生态中，用统一的 CRD 来配置流量路由、流控降级、服务容错等治理规则。无论是 Java 还是 Go 还是 Mesh 服务，无论是 HTTP 请求还是 RPC 调用，还是数据库 SQL 访问，用户都可以用统一的容错治理规则 CRD 来给微服务架构中的每一环配置治理，来保障服务链路的稳定性。

Sentinel 社区提供对接 OpenSergo spec 的动态数据源模块 `sentinel-datasource-opensergo`，只需要按照 Sentinel 数据源的方式接入即可。Java 版本示例：

```java
OpenSergoDataSourceGroup openSergo = new OpenSergoDataSourceGroup(host, port, namespace, appName);
openSergo.start();
// Subscribe flow rules from OpenSergo control plane, and propagate to Sentinel rule manager.
FlowRuleManager.register2Property(openSergo.subscribeFlowRules());
```

![arch](https://user-images.githubusercontent.com/9434884/186125289-efb5e75a-0d6d-486c-a577-f986024ad911.png)

目前 Sentinel OpenSergo 数据源还在演进中，欢迎社区一起 review 相关实现：https://github.com/alibaba/Sentinel/pull/2842