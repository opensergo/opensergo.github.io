---
sidebar_position: 4
---

# Use OpenSergo with Sentinel

[Sentinel](https://sentinelguard.io/) is a cloud-native traffic governance component that takes "flow" as the breakthrough point and covers multiple fields including rate limiting, concurrency limiting, circuit breaking, and adaptive overload protection to guarantee the reliability of microservices.

Sentinel provides data-source module `sentinel-datasource-opensergo`, which provides integration with OpenSergo spec. An example:

```java
OpenSergoDataSourceGroup openSergo = new OpenSergoDataSourceGroup(host, port, namespace, appName);
openSergo.start();
// Subscribe flow rules from OpenSergo control plane, and propagate to Sentinel rule manager.
FlowRuleManager.register2Property(openSergo.subscribeFlowRules());
```

![arch](https://user-images.githubusercontent.com/9434884/186125289-efb5e75a-0d6d-486c-a577-f986024ad911.png)

Please refer https://github.com/alibaba/Sentinel/pull/2842 for the WIP version.