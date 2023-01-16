---
sidebar_position: 1
---

# OpenSergo 控制面 (Control Plane)

[OpenSergo 控制平面 (Control Plane)](https://github.com/opensergo/opensergo-control-plane) 作为 OpenSergo CRD 的统一管控组件，承载服务治理配置转换与下发的职责。

![arch](https://user-images.githubusercontent.com/9434884/182856237-8ce85f41-1a1a-4a2a-8f58-db042bd4db42.png)

目前 OpenSergo 控制平面支持针对部署在 Kubernetes 集群中的应用进行统一管控，未来也规划支持非 K8s 环境。

# 在 Kubernetes 集群中安装 OpenSergo 控制平面

OpenSergo 提供开箱即用的控制平面部署方式，主要分以下几步：
- Kubernetes 集群中初始化 OpenSergo 环境
- 启动 控制平面（OpenSergo Control Plane）

以上步骤可以在 Kubernetes 节点上进行，也可在非 Kubernetes 节点上进行。  
如果在非 Kubernetes 节点上进行，需要在操作的电脑上配置好 `kubeconfig`, 以便能够访问到 Kubernetes 集群。


## step1: Kubernetes 集群中初始化 OpenSergo 环境
社区提供 *两种* 初始化方式：
- 手动初始化
- 在线初始化

### *手动初始化* 方式, 需要先下载源码
>``` shell
> # 安装 OpenSergo spec CRD
> kubectl apply -f opensergo-control-plane/k8s/crd/bases/fault-tolerance.opensergo.io_circuitbreakerstrategies.yaml
> kubectl apply -f opensergo-control-plane/k8s/crd/bases/fault-tolerance.opensergo.io_concurrencylimitstrategies.yaml
> kubectl apply -f opensergo-control-plane/k8s/crd/bases/fault-tolerance.opensergo.io_faulttolerancerules.yaml
> kubectl apply -f opensergo-control-plane/k8s/crd/bases/fault-tolerance.opensergo.io_ratelimitstrategies.yaml
> kubectl apply -f opensergo-control-plane/k8s/crd/bases/fault-tolerance.opensergo.io_throttlingstrategies.yaml
> kubectl apply -f opensergo-control-plane/k8s/crd/bases/traffic.opensergo.io_trafficerouters.yaml
>
> # 创建 opensergo-system 命名空间
> kubectl apply -f opensergo-control-plane/k8s/namespace.yaml
>
> # OpenSergo 控制面 RBAC 权限配置
> kubectl apply -f opensergo-control-plane/k8s/rbac/rbac.yaml
>```

### *在线初始化* 方式，直接执行如下命令
>``` shell
> wget --no-check-certificate https://raw.githubusercontent.com/opensergo/opensergo-control-plane/main/cmd/init/init.sh && chmod +x init.sh && ./init.sh
>```
> 注意：采用此种方式进行，会在 `$HOME/opensergo/opensergo-control-plane` 下载相关资源

## step2: 启动 OpenSergo 控制平面
社区提供 *多种方式* 来启动 控制平面，

本章节仅阐述:
- 运行 **Kubernetes workload(deployment+service)** 方式启动
- 运行 **Helm Chat** 方式启动

启动完成后， OpenSergo 控制平面 默认 grpc 端口 为 **10246**

### 运行 **Kubernetes workload** 方式启动
> 社区提供 *两种* 初始化方式：
>
> > **手动启动** 方式, 需要先下载源码
> > ``` shell
> > kubectl apply -f opensergo-control-plane/k8s/workload/opensergo-control-plane.yaml
> > ```  
>  > **在线启动** 方式, 直接执行如下命令：
>  > ``` shell
>  > wget --no-check-certificate https://raw.githubusercontent.com/opensergo/opensergo-control-plane/main/cmd/install/k8s/deploy.sh && chmod +x deploy.sh && ./deploy.sh
>  > ```
>  > 采用此种方式进行，会在 `$HOME/opensergo/opensergo-control-plane` 下载相关资源
>
> 注意：
> - Service 默认为`ClusterIP`, 若希望将 OpenSergo 控制平面对集群外暴露端口，则需要修改 Service 类型为 `NodePort` 或 `LoadBalancer`
    >   - **手动启动**, 修改路径: `opensergo-control-plane/k8s/workload/opensergo-control-plane.yaml`
>   - **在线启动**, 修改路径: `$HOME/opensergo/opensergo-control-plane/k8s/workload/opensergo-control-plane.yaml`
> - Deployment 的 replicas 默认为 1, 请勿修改，因为当前版本 多副本模式会引起 data版本重置问题，社区后期会进行修复

### 运行 **Helm Chat** 方式启动
>
> *社区也在进一步完善 OpenSergo 控制平面的部署运维方式，未来会提供 Helm chart 的部署包。*
