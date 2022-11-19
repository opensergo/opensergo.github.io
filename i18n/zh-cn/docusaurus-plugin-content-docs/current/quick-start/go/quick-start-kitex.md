---
sidebar_position: 3
---

# CloudWeGo Kitex 快速接入 OpenSergo

## Kitex 简介

[Kitex](https://github.com/cloudwego/kitex) [kaɪt'eks] 是字节跳动内部的 Golang 微服务 RPC 框架，具有高性能、强可扩展的特点。
如果对微服务性能有要求，又希望定制扩展融入自己的治理体系，Kitex 会是一个不错的选择。
Kitex 是 CloudWeGo 的子项目, 想要了解更多信息可以访问 CloudWeGo [官网](https://www.cloudwego.io/).

## 在 Kitex 中接入 OpenSergo

Kitex 提供了较多的扩展接口以及默认扩展实现，使用者也可以根据需要自行定制扩展。例如, 你可以往 Kitex 里面注入自定义 logger.

想要在 OpenSergo Dashboard 中获得服务元信息，我们需要做的也是非常简单。

```go
package main

import (
	...
	"github.com/cloudwego/kitex/server"
	"github.com/kitex-contrib/opensergo/metainfo"
	...
)

func main() {
	...
	r, err := metainfo.NewDefaultMetaReporter()
	if err != nil {
		panic(err)
	}
	svr := hello.NewServer(
		new(HelloImpl),
	)
	server.RegisterStartHook(func() {
		if err = r.ReportMetaInfo(svr.GetServiceInfo()); err != nil {
			klog.Error(err)
		}
	})
	...
}
```

# 相关资料
- [Kitex docs](https://www.cloudwego.io/docs/kitex/)
- [Kitex-contrib/opensergo](https://github.com/kitex-contrib/opensergo)

