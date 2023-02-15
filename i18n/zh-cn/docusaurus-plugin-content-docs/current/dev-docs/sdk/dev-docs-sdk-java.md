---
sidebar_position: 1
---

# Java

OpenSergo 提供多语言 SDK 接入，本文仅阐述 JAVA SDK 的 使用说明。

首先我们在 Maven 中引入依赖：
``` xml
<dependency>
    <groupId>io.opensergo</groupId>
    <artifactId>opensergo-java-sdk</artifactId>
    <version>0.1.0</version>
</dependency>
```

启动 OpenSergoClient
``` java 
// 创建 OpenSergoClient 实例, 
// 参数依次为：OpenSergo Control Plane 的 host、port
OpenSergoClient openSergoClient = OpenSergoClientManager.get().getOrCreateClient(host, port);
// 启动 OpenSergoClient
openSergoClient.start();
```

向 OpenSergoClient 中添加关注的配置
``` java 
// 创建 SubscribeKey (即关注的配置信息，SubscribeTarget)
// 参数依次为：Kubernetes 中 CR 的 namespace, metadata.labels.app, 以及关注的配置项
SubscribeKey subscribeKey = new SubscribeKey("default", "foo-app", ConfigKind.FAULT_TOLERANCE_RULE);
// 向 OpenSergoClient 中发起订阅请求
openSergoClient.subscribeConfig(subscribeKey, new OpenSergoConfigSubscriber() {
    @Override
    public boolean onConfigUpdate(SubscribeKey subscribeKey, Object data) {
        // TODO 添加订阅到配置后的业务逻辑
        return true;
    }
});
```

从 OpenSergoClient 中移除关注的配置
``` java 
// 创建 SubscribeKey (即关注的配置信息，SubscribeTarget)
// 参数依次为：Kubernetes 中 CR 的 namespace, metadata.labels.app, 以及关注的配置项
SubscribeKey subscribeKey = new SubscribeKey("default", "foo-app", ConfigKind.FAULT_TOLERANCE_RULE);
// 向 OpenSergoClient 中发起订阅请求
openSergoClient.unsubscribeConfig(subscribeKey);
```