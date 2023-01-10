---
sidebar_position: 1
---

# OpenSergo Control Plane

[OpenSergo control plane](https://github.com/opensergo/opensergo-control-plane) enables unified management for microservice governance under Kubernetes.

![arch](https://user-images.githubusercontent.com/9434884/182856237-8ce85f41-1a1a-4a2a-8f58-db042bd4db42.png)

## Install on your Kubernetes cluster

Deploy the OpenSergo control plane:

```shell
# Create namespace
kubectl apply -f opensergo-control-plane/k8s/namespace.yaml

# Apply RBAC
kubectl apply -f opensergo-control-plane/k8s/rbac/role.yaml
kubectl apply -f opensergo-control-plane/k8s/rbac/rolebinding.yaml
kubectl apply -f opensergo-control-plane/k8s/rbac/serviceaccounts.yaml

# Install OpenSergo CRDs
kubectl apply -f opensergo-control-plane/k8s/crd/bases/fault-tolerance.opensergo.io_circuitbreakerstrategies.yaml
kubectl apply -f opensergo-control-plane/k8s/crd/bases/fault-tolerance.opensergo.io_concurrencylimitstrategies.yaml
kubectl apply -f opensergo-control-plane/k8s/crd/bases/fault-tolerance.opensergo.io_faulttolerancerules.yaml
kubectl apply -f opensergo-control-plane/k8s/crd/bases/fault-tolerance.opensergo.io_ratelimitstrategies.yaml
kubectl apply -f opensergo-control-plane/k8s/crd/bases/fault-tolerance.opensergo.io_throttlingstrategies.yaml
kubectl apply -f opensergo-control-plane/k8s/crd/bases/traffic.opensergo.io_trafficerouters.yaml

# Install OpenSergo control plane workload
kubectl apply -f opensergo-control-plane/k8s/deployment.yaml
kubectl apply -f opensergo-control-plane/k8s/service.yaml
```

> NOTE: the community is working on Helm chart of the control plane.

## Configuration

(TBD...)