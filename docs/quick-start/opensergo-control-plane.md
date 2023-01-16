---
sidebar_position: 1
---

# OpenSergo Control Plane

[OpenSergo control plane](https://github.com/opensergo/opensergo-control-plane) enables unified management for microservice governance under Kubernetes.

![arch](https://user-images.githubusercontent.com/9434884/182856237-8ce85f41-1a1a-4a2a-8f58-db042bd4db42.png)

## Install on your Kubernetes cluster

Install `OpenSergo Control Plane` contains 2 steps:
- Init OpenSergo in `Kubernetes cluster`
- Start the `OpenSergo Control Plane`

The above steps can be performed on the Kubernetes node or on the non-Kubernetes node.  
If you performance them on a non-Kubernetes node, you need to configure `kubeconfig` on the operating computer to access the Kubernetes cluster.  


### Install by scripts online

We provide some scripts to install OpenSergo Control Plane:

``` shell
 # NOTE：exec above command，will download the resources in directory `$HOME/opensergo/opensergo-control-plane`

 # 1. Install base resources of OpenSergo (Namespce, CRD, RBAC ...)
 wget --no-check-certificate https://raw.githubusercontent.com/opensergo/opensergo-control-plane/main/cmd/init/init.sh && chmod +x init.sh && ./init.sh

 # 2. Deploy workload of OpenSergo Control Plane 
 wget --no-check-certificate https://raw.githubusercontent.com/opensergo/opensergo-control-plane/main/cmd/install/k8s/deploy.sh && chmod +x deploy.sh && ./deploy.sh
```


### Install by YAML
In advance, we need to download [`opensergo-control-plane`](https://github.com/opensergo/opensergo.github.io), and then execute kubectl commands to install OpenSergo Control Plane.
``` shell
# Create Namespace for OpenSergo 
kubectl apply -f opensergo-control-plane/k8s/namespace.yaml

# Install OpenSergo spec CRDs
kubectl apply -f opensergo-control-plane/k8s/crd/bases/fault-tolerance.opensergo.io_circuitbreakerstrategies.yaml
kubectl apply -f opensergo-control-plane/k8s/crd/bases/fault-tolerance.opensergo.io_concurrencylimitstrategies.yaml
kubectl apply -f opensergo-control-plane/k8s/crd/bases/fault-tolerance.opensergo.io_faulttolerancerules.yaml
kubectl apply -f opensergo-control-plane/k8s/crd/bases/fault-tolerance.opensergo.io_ratelimitstrategies.yaml
kubectl apply -f opensergo-control-plane/k8s/crd/bases/fault-tolerance.opensergo.io_throttlingstrategies.yaml
kubectl apply -f opensergo-control-plane/k8s/crd/bases/traffic.opensergo.io_trafficerouters.yaml

# Install RBAC for OpenSergo Control Plane
kubectl apply -f opensergo-control-plane/k8s/rbac/rbac.yaml

# Deploy workload for OpenSergo Control Plane
kubectl apply -f opensergo-control-plane/k8s/workload/opensergo-control-plane.yaml
```

### Attentions
- `ClusterIP` is the default mode of Service, you can change mode to `NodePort` or `LoadBalancer` to expose this Service  
  - **Start by script online**, file to modify: `$HOME/opensergo/opensergo-control-plane/k8s/workload/opensergo-control-plane.yaml`
  - **Start by YAML**, file to modify: `opensergo-control-plane/k8s/workload/opensergo-control-plane.yaml`
- default value of `replicas` in Deployment is 1, do not modify it. Multiple-replicas mode is still in developing.

*We are improving start mode for OpenSergo control plane, and will provide Helm Chart deployment package in the future.*
