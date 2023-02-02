---
slug: opensergo-spring-cloud-alibaba-traffic
title: OpenSergo & Spring Cloud Alibaba 带来的服务治理能力
authors: [panxiaojun233,123liuziming]
tags: [SpringCloud,Traffic]
---

## Spring Cloud 应用为何需要服务治理

随着微服务技术的发展，微服务(MicroServices) 的概念早已深入人心，越来越多的公司开始使用微服务架构来开发业务应用。如果采用得当，微服务架构可以带来非常大的优势。微服务架构的最大好处是它可以提升开发效率和系统整体的稳定性：

- 开发和部署相对简单：单个微服务的功能可以更快地更改，因为可以独立部署、影响范围更小，启动和调试单个微服务的时间成本相比于单体应用也大大减少。
- 横向扩展简单：根据业务的高峰低谷周期快速的横向扩展非常简单，因为单个微服务通常很小，可以随着系统整体负载的变化更快地启动和停止。
- 架构升级灵活：单个微服务的“内部架构”可以迅速升级，因为微服务之间松散耦合的，只面向定义好的通讯接口进行编程。这使开发团队能够基于自身的技术背景和偏好灵活选择，而不会直接影响其他应用程序、服务或团队。
- 更好的容错性：微服务之间可以实现更好的故障隔离，单个服务内的内存泄露等故障不容易影响其他服务，相比单体应用一个组件故障会拖垮整个系统。

但是微服务在实施过程中，也很容易遇到一些难点。随着业务规模的增长，在这个过程中如果微服务得不到恰当的治理，不仅不能享受到微服务架构带来的好处，反而会因为微服务带来的系统复杂性，造成开发、运维部署的复杂度增加，进而影响开发迭代的速度，甚至影响系统的整体稳定性，比如：

* 服务之间使用远程调用进行通讯，这比进程内的直接调用复杂很多。由于通讯链路的复杂性，可能会出现很多不确定的问题，会出现远程调用不可用或者延迟较高的情况，开发人员需要能够处理这些偶发问题，避免影响业务。
* 随着业务的发展，微服务之间的拓扑图开始变得复杂，排查问题变得困难，搭建完整的开发测试环境成本也越来越大。
* 当功能涉及到多个微服务模块时，迭代时需要谨慎地协调多个开发团队的迭代排期，才能保证迭代能够按时交付，达到敏捷开发的效果。

因此， 微服务落地的成功与否，很大程度上取决于能否很好的对这些微服务进行治理，对于传统的 Spring Cloud 应用，并没有提供开箱即用的服务治理机制，用户只能通过自己去实现Spring Cloud中的各种扩展点来实现服务治理。相比起让用户费心费力去自己写代码实现扩展点，Spring Cloud Alibaba 选择了替用户做这些事情。用户只需导入 Spring Cloud Alibaba 中的 starter，即可快速给自己的 Spring Cloud 应用添加对应的微服务治理能力。

## Spring Cloud Alibaba 新版本服务治理能力预览

最新发布的 Spring Cloud Alibaba 2.2.10.RC1 新版本，基于社区 2.2.x 分支进行的构建发布，其中 2.2.10.RC1 版本通过首次给 Spring Cloud 生态带来了微服务治理能力，并给Spring Cloud Alibaba应用带来了Proxyless Mesh的能力，让Spring Cloud Alibaba应用更好的拥抱服务网格。详细的新版本预览内容如下：

2.2.10.RC1 是在 Spring Cloud Hoxton.SR12、Spring Cloud 2.3.12.RELEASE 的基础上，支持 Istio 以及OpenSergo 控制面下发的服务治理规则，对 Spring Cloud 生态中的 Ribbon 负载均衡器以及 Spring MVC, Spring WebFlux 的各种拦截器做了增强，实现了服务治理的部分能力，属于一个重大特性发布的[新版本](https://github.com/alibaba/spring-cloud-alibaba/releases)。

2.2.10 RC1版本主要支持了标签路由与鉴权这两种服务治理的能力，并且支持对接多种控制平面的实现，除了目前服务网格的事实标准 Istio，新版本也支持社区最新推出的 OpenSergo 控制平面以及服务治理生态，详细的能力如下所示：

### 流量路由

我们可以基于流量路由标准来实现各种业务场景，如标签路由、金丝雀发布、同机房优先路由等。
- 标签路由
  标签路由是按照标签为维度对目标负载进行划分，符合条件的流量匹配至对应的目标，从而实现标签路由的能力。当然基于标签路由的能力，赋予标签各种含义我们就可以实现各种流量路由的场景化能力。
- 金丝雀发布
  金丝雀发布是一种降低在生产中引入新软件版本的风险的技术，方法是在将更改推广到整个基础架构并使其可供所有人使用之前，缓慢地将更改推广到一小部分用户。金丝雀发布是一种在黑与白之间，能够平滑过渡的一种发布方式。让一部分用户继续用旧版本，一部分用户开始用新版本，如果用户对新版本没有什么反对意见，那么逐步扩大范围，把所有用户都迁移到新版本上面来。一直都有听说，安全生产三板斧的概念：可灰度、可观测、可回滚。那么灰度发布能力就是帮助企业软件做到快速迭代验证的必备能力。在K8s中金丝雀发布的最佳实践如下：第一步：新建灰度 Deployment，部署新版本的镜像，打上新版本的标签。第二步：配置针对新版本的标签路由规则。第三步：验证成功，扩大灰度比例。第四步：若验证成功，将稳定版本的应用更新成最新镜像；若验证失败，把灰度的 Deployment 副本数调整到 0 或删除该 Deployment。
- 全链路灰度
  当企业的发展，微服务的数量会逐渐增多。在有一定规模的一定数量的微服务情况下，一次发版可能涉及到的服务数量会比较多，微服务链路也相当较长。全链路灰度可以保证特定的灰度流量可以路由到所有涉及到的灰度版本中。
- 同可用区优先路由
  当企业的对稳定性的要求变高时，企业的应用会选择部署在多个可用区中提高应用的可用性，避免某个可用区出现问题后导致影响应用的可用性。当应用在不同的可用区部署时，应用间跨可用区调用可能会被因为远距离调用造成的网络延迟影响，同可用区优先路由会让我们的 Consumer 应用优先调用当前可用区内 的Provider 应用，可以很好地减少这种远距离调用造成的影响，同时当某个可用区出现问题后，我们只需在流量入口处将当前可用区的流量隔离掉，其他可用区的流量不会访问至当前可用区的节点，可以很好地控制某个可用区出现问题后的影响面。

### 服务鉴权
正常生产场景，微服务应用都具有安全要求，不会让任意的服务都可直接调用。因此需要对调用该应用的上游应用进行服务鉴权，保证应用自身的安全。

## 通过 OpenSergo 探索治理能力的标准化

OpenSergo 是开放通用的，覆盖微服务及上下游关联组件的微服务治理项目，是阿里巴巴微服务治理的最佳实践。OpenSergo 从微服务的角度出发，涵盖**流量治理、服务容错、服务元信息治理、安全治理**等关键治理领域，提供一系列的治理能力与标准、生态适配与最佳实践，支持 Java, Go, Rust 等多语言生态。
![image](https://user-images.githubusercontent.com/43985911/216290765-1c857f59-a1b3-483c-b688-24fc75957d23.png)

OpenSergo 控制平面 (Control Plane) 作为 OpenSergo CRD 的统一管控组件，承载服务治理配置转换与下发的职责。
1. 安装K8s环境，请参考K8s的[安装工具](https://kubernetes.io/zh-cn/docs/tasks/tools/)小节
2. 在K8s上安装并启用 OpenSergo Control Plane，请参考 OpenSergo 官方提供的 [OpenSergo 控制面安装文档](https://opensergo.io/zh-cn/docs/quick-start/opensergo-control-plane/)
   ![image](https://user-images.githubusercontent.com/43985911/216290938-9c63758e-54e9-442a-8e63-4728a4711ee6.png)
3. Spring Cloud Alibaba 应用集成 OpenSergo
   **注意 本章节只是为了便于您理解接入方式，本[示例代码](https://github.com/alibaba/spring-cloud-alibaba/tree/2.2.x/spring-cloud-alibaba-examples/governance-example/label-routing-example)中已经完成接入工作，您无需再进行修改。**
   首先，修改pom.xml 文件，引入`spring-cloud-starter-alibaba-governance-routing`依赖。同时引入Spring Cloud Alibaba的`spring-cloud-starter-opensergo-adapter`模块
```XML
<dependency>
   <groupId>com.alibaba.cloud</groupId>
   <artifactId>spring-cloud-starter-alibaba-governance-routing</artifactId>
</dependency>
<dependency>
   <groupId>com.alibaba.cloud</groupId>
   <artifactId>spring-cloud-starter-opensergo-adapter</artifactId>
</dependency>
```
在application.properties配置文件中配置OpenSergo控制面的相关信息
```
# OpenSergo 控制面 endpoint
spring.cloud.opensergo.endpoint=127.0.0.1:10246
```
4. Spring Cloud Alibaba 应用启动
   启动三个模块的启动类，分别为OpenSergoConsumerApplication，两个ProviderApplication，将其注入到Nacos注册中心中。
5. 通过 OpenSergo 控制面也定义了特定的流量路由规则 [TrafficRouter](https://github.com/opensergo/opensergo-specification/blob/main/specification/zh-Hans/traffic-routing.md) 。TrafficRouter 将特定特征的流量映射至特定特征所对应的工作负载上，社区目前的设计TrafficRouter主要是基于 Istio VirtualService 进行补充与扩展。

如下是一个 OpenSergo 控制面对应的流量路由规则：
```
kubectl apply -f - << EOF
apiVersion: traffic.opensergo.io/v1alpha1
kind: TrafficRouter
metadata:
  name: service-provider
  namespace: default
  labels:
    app: service-provider
spec:
  hosts:
    - service-provider
  http:
    - match:
        - headers:
            tag:
              exact: v2
      route:
        - destination:
            host: service-provider
            subset: v2
            fallback:
              host: service-provider
              subset: v1
    - route:
        - destination:
            host: service-provider
            subset: v1
EOF
```

这条[TrafficRouter](https://github.com/opensergo/opensergo-specification/blob/main/specification/zh-Hans/traffic-routing.md) 指定了一条最简单的流量路由规则，将请求头tag为v2的HTTP请求路由到v2版本，其余的流量都路由到v1版本。如果v2版本没有对应的节点，则将流量fallback至v1版本。
### 效果演示
发送一条不带请求头的 HTTP 请求至 OpenSergoConsumerApplication
```
curl --location --request GET '127.0.0.1:18083/router-test'
```
因为请求头不为 v2，所以请求将会被路由到v1版本，返回如下
```
Route in 30.221.132.228: 18081,version is v1.
```
之后发送一条请求头tag为 v2 的HTTP请求
```
curl --location --request GET '127.0.0.1:18083/router-test' --header 'tag: v2'
```
因为满足路由规则，所以请求会被路由至 v2 版本
```
Route in 30.221.132.228: 18082,version is v2.
```
停止 v2 版本的 ProviderApplication 后，继续发送一条请求头tag为 v2 的 HTTP 请求
```
curl --location --request GET '127.0.0.1:18083/router-test' --header 'tag: v2'
```
因为 v2 版本没有服务提供者，因此流量被 fallback 至 v1 版本。
```
Route in 30.221.132.228: 18081,version is v1.
```


上述详细示例代码可以在社区Github上[示例代码](https://github.com/alibaba/spring-cloud-alibaba/tree/2.2.x/spring-cloud-alibaba-examples/governance-example/label-routing-example)中获取。

## OpenSergo 总结与展望
在 Java 生态中， OpenSergo 紧接着会支持 Apache Dubbo 的流量路由与全链路灰度场景，同时 Sentinel2 会做一个能力的升级，能力实现从流量防护场景升级至支持微服务治理场景。在多语言生态中，OpenSergo 后续会探索 Dubbo、Kratos、CloudWego 以及 Mesh 等更多场景的治理能力支持与覆盖，与企业与社区共建微服务治理的最佳实践。
![image](https://user-images.githubusercontent.com/43985911/216291123-324d065e-8ab1-4f7e-a076-c82e7436dfe1.png)

OpenSergo 社区现在处于高速发展阶段，从微服务治理标准定义，到 Control Plane 的实现，再到 Java/Go/C++/Rust 等多语言 SDK 与治理功能的实现，再到各个微服务生态的整合与落地、最佳实践，都还有大量的演进工作，欢迎社区一起参与标准完善与代码贡献。
![image](https://user-images.githubusercontent.com/43985911/216291202-f498f728-1099-4fcf-ad5f-b63ba42b3860.png)

OpenSergo 开源贡献小组正在火热招募贡献者。如果您有时间，有热情，有意愿，欢迎联系社区加入开源贡献小组，一起共同完善 OpenSergo 和 Sentinel，一起主导微服务治理技术与标准演进。Now let's start hacking!
