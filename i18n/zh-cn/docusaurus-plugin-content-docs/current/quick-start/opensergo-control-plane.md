---
sidebar_position: 1
---

# OpenSergo 控制平面 (Control Plane)

[OpenSergo 控制平面 (Control Plane)](https://github.com/opensergo/opensergo-control-plane) 作为 OpenSergo CRD 的统一管控组件，承载服务治理配置转换与下发的职责。

![arch](https://user-images.githubusercontent.com/9434884/182856237-8ce85f41-1a1a-4a2a-8f58-db042bd4db42.png)

目前 OpenSergo 控制平面支持针对部署在 Kubernetes 集群中的应用进行统一管控，未来也规划支持非 K8s 环境。

## 在集群中安装 OpenSergo 控制平面

TODO: helm chart

## 配置

| 配置项 | 配置类型 | 默认值 | 描述 |
| -------- | -------- | -------- | -------- |
| `opensergo.grpcEndpoint.port`     | uint32 |  10246  | 控制平面 gRPC server 端口     |

## 构建 OpenSergo 控制平面