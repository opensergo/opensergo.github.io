---
sidebar_position: 5
---

# Use OpenSergo with Spring Cloud Alibaba

[Spring Cloud Alibaba](https://spring.io/projects/spring-cloud-alibaba)作为一种一站式的微服务解决方案，通过基于 Spring Cloud 微服务标准为用户提供了微服务应用构建过程中的如服务注册与发现、限流降级、分布式事务与分布式消息等在内的完整微服务解决方案。过去几年被国内大量中小企业所采用，帮助大量企业更加方便地拥抱微服务。

Spring Cloud Alibaba 社区提供对接 OpenSergo 的模块 `spring-cloud-starter-opensergo-adapter`。以 Spring Cloud Alibaba 的流量路由能力为例，首先我们需要导入Spring Cloud Alibaba 2.2.10-RC1版本下的流量路由以及 OpenSergo 对接模块的相关依赖，我们在 Maven 中引入依赖：

```xml
	<dependencyManagement>
    <dependencies>
        <dependency>
            <groupId>com.alibaba.cloud</groupId>
            <artifactId>spring-cloud-alibaba-dependencies</artifactId>
            <version>2.2.10-RC1</version>
            <type>pom</type>
            <scope>import</scope>
        </dependency>
    </dependencies>
</dependencyManagement>

<dependencies>
    <dependency>
        <groupId>com.alibaba.cloud</groupId>
        <artifactId>spring-cloud-starter-alibaba-governance-routing</artifactId>
    </dependency>
    <dependency>
        <groupId>com.alibaba.cloud</groupId>
        <artifactId>spring-cloud-starter-opensergo-adapter</artifactId>
    </dependency>
</dependencies>
```

在`application.properties`配置文件给消费者配置 OpenSergo 控制面以及 Nacos 注册中心的相关信息:

```yaml
spring.application.name=service-consumer
server.port=18083
management.endpoints.web.exposure.include=*
spring.cloud.nacos.discovery.server-addr=127.0.0.1:8848
spring.cloud.nacos.discovery.fail-fast=true
spring.cloud.nacos.username=nacos
spring.cloud.nacos.password=nacos
spring.cloud.opensergo.endpoint={opensergo-control-plane}:10246
```

启动应用后，即可编写 TrafficRouter 等 CR YAML 来动态配置流控容错规则，通过 kubectl apply 到集群中即可生效。
