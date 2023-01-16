---
sidebar_position: 1
---

# OpenSergo 控制面 (Control Plane)

[OpenSergo 控制平面 (Control Plane)](https://github.com/opensergo/opensergo-control-plane) 作为 OpenSergo CRD 的统一管控组件，承载服务治理配置转换与下发的职责。

![arch](https://user-images.githubusercontent.com/9434884/182856237-8ce85f41-1a1a-4a2a-8f58-db042bd4db42.png)

目前 OpenSergo 控制平面支持针对部署在 Kubernetes 集群中的应用进行统一管控，未来也规划支持非 K8s 环境。

## 在 Kubernetes 集群中安装 OpenSergo 控制平面

OpenSergo 提供开箱即用的控制平面部署方式，在 Kubernetes 集群中按照如下方式安装即可；该步骤可以在 Kubernetes 节点上进行，也可在非 Kubernetes 节点上进行。如果在非 Kubernetes 节点上进行，需要在操作环境配置好 `kubeconfig`，以便能够访问到 Kubernetes 集群。

### 方式一：脚本方式一键安装

OpenSergo 提供脚本方式部署控制面：

```shell
# 注意：采用此种方式进行，会在 $HOME/opensergo/opensergo-control-plane 下载相关资源

# 1. 初始化 OpenSergo 基础资源 (Namespace, CRD, RBAC 等)
wget --no-check-certificate https://raw.githubusercontent.com/opensergo/opensergo-control-plane/main/cmd/init/init.sh && chmod +x init.sh && ./init.sh

# 2. 部署 OpenSergo 控制面 workload
wget --no-check-certificate https://raw.githubusercontent.com/opensergo/opensergo-control-plane/main/cmd/install/k8s/deploy.sh && chmod +x deploy.sh && ./deploy.sh
```

### 方式二：手动安装 YAML

首先需要下载 [`opensergo-control-plane`](https://github.com/opensergo/opensergo-control-plane) 项目，然后通过 kubectl 手动在 Kubernetes 集群中安装 OpenSergo 控制面。

```shell
# 创建 opensergo-system 命名空间
kubectl apply -f opensergo-control-plane/k8s/namespace.yaml

# 安装 OpenSergo spec CRD
kubectl apply -f opensergo-control-plane/k8s/crd/bases/fault-tolerance.opensergo.io_circuitbreakerstrategies.yaml
kubectl apply -f opensergo-control-plane/k8s/crd/bases/fault-tolerance.opensergo.io_concurrencylimitstrategies.yaml
kubectl apply -f opensergo-control-plane/k8s/crd/bases/fault-tolerance.opensergo.io_faulttolerancerules.yaml
kubectl apply -f opensergo-control-plane/k8s/crd/bases/fault-tolerance.opensergo.io_ratelimitstrategies.yaml
kubectl apply -f opensergo-control-plane/k8s/crd/bases/fault-tolerance.opensergo.io_throttlingstrategies.yaml
kubectl apply -f opensergo-control-plane/k8s/crd/bases/traffic.opensergo.io_trafficerouters.yaml

# OpenSergo 控制面 RBAC 权限配置
kubectl apply -f opensergo-control-plane/k8s/rbac/rbac.yaml

# 部署 OpenSergo 控制面 workload
kubectl apply -f opensergo-control-plane/k8s/workload/opensergo-control-plane.yaml
```

### 注意事项

- Service 默认为 `ClusterIP` 类型。若希望将 OpenSergo 控制平面对集群外暴露端口（如本地应用测试），则需要修改 Service 类型为 `LoadBalancer`。
- Deployment 的 replicas 默认为 1，多副本高可用场景 社区还在验证中。

社区也在进一步完善 OpenSergo 控制平面的部署运维方式，未来会提供 Helm chart 的部署包。
