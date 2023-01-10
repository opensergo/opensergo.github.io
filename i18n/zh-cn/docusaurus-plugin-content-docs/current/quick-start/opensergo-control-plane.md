---
sidebar_position: 1
---

# OpenSergo 控制平面 (Control Plane)

[OpenSergo 控制平面 (Control Plane)](https://github.com/opensergo/opensergo-control-plane) 作为 OpenSergo CRD 的统一管控组件，承载服务治理配置转换与下发的职责。

![arch](https://user-images.githubusercontent.com/9434884/182856237-8ce85f41-1a1a-4a2a-8f58-db042bd4db42.png)

目前 OpenSergo 控制平面支持针对部署在 Kubernetes 集群中的应用进行统一管控，未来也规划支持非 K8s 环境。

## 在集群中安装 OpenSergo 控制平面

OpenSergo 提供开箱即用的控制平面部署方式，在 Kubernetes 集群中按照如下方式安装即可：

```shell
# 创建 opensergo-system 命名空间
kubectl apply -f opensergo-control-plane/k8s/namespace.yaml

# OpenSergo 控制面相关权限配置
kubectl apply -f opensergo-control-plane/k8s/rbac/role.yaml
kubectl apply -f opensergo-control-plane/k8s/rbac/rolebinding.yaml
kubectl apply -f opensergo-control-plane/k8s/rbac/serviceaccounts.yaml

# 安装 OpenSergo spec CRD
kubectl apply -f opensergo-control-plane/k8s/crd/bases/fault-tolerance.opensergo.io_circuitbreakerstrategies.yaml
kubectl apply -f opensergo-control-plane/k8s/crd/bases/fault-tolerance.opensergo.io_concurrencylimitstrategies.yaml
kubectl apply -f opensergo-control-plane/k8s/crd/bases/fault-tolerance.opensergo.io_faulttolerancerules.yaml
kubectl apply -f opensergo-control-plane/k8s/crd/bases/fault-tolerance.opensergo.io_ratelimitstrategies.yaml
kubectl apply -f opensergo-control-plane/k8s/crd/bases/fault-tolerance.opensergo.io_throttlingstrategies.yaml
kubectl apply -f opensergo-control-plane/k8s/crd/bases/traffic.opensergo.io_trafficerouters.yaml

# 部署 OpenSergo 控制平面 deployment
kubectl apply -f opensergo-control-plane/k8s/deployment.yaml

# 创建 OpenSergo 控制平面 Service (ClusterIP)
kubectl apply -f opensergo-control-plane/k8s/service.yaml
```

> 注意：若希望将 OpenSergo 控制平面对集群外暴露端口，则需要修改 Service 类型为 LoadBalancer。

社区也在进一步完善 OpenSergo 控制平面的部署运维方式，未来会提供 Helm chart 的部署包。

## 配置

| 配置项 | 配置类型 | 默认值 | 描述 |
| -------- | -------- | -------- | -------- |
| `opensergo.grpcEndpoint.port`     | uint32 |  10246  | 控制平面 gRPC server 端口     |

## 构建 OpenSergo 控制平面

构建 OpenSergo 控制面分为几个步骤：

- 前置生成逻辑（生成 CRD YAML 及相关代码）
- 构建二进制文件