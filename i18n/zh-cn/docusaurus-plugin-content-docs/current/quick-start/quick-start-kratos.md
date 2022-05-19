---
sidebar_position: 2
---

# Kratos 快速接入 OpenSergo

## Kratos 简介
[Kratos](github.com/go-kratos/kratos) 是一套轻量级 Go 微服务框架，包含大量微服务相关框架及工具。

> 名字来源于:《战神》游戏以希腊神话为背景，讲述奎托斯（Kratos）由凡人成为战神并展开弑神屠杀的冒险经历。

## 在 Kratos中接入 OpenSergo

Kratos 的设计理念就是高度的可定制化，用户可以根据自己的需求引入不同的实现，所以我们接入OpenSergo只需要引入 OpenSergo contrib 即可将服务信息上报到 OpenSergo 中, 代码如下：
```
// ...

	app := kratos.New(
		kratos.Name(Name),
		kratos.Server(
			httpSrv,
			grpcSrv,
		),
	)
	osg, err := opensergo.New(opensergo.WithEndpoint("localhost:9090"))
	if err != nil {
		return
	}
	err = osg.ReportMetadata(context.Background(), app)
	if err != nil {
		return
	}
	if err := app.Run(); err != nil {
		log.Fatal(err)
	}
}
```

# 相关资料
- [Kratos 文档](https://go-kratos.dev/docs/)
- [OpenSergo 接入示例](https://github.com/go-kratos/examples/tree/main/opensergo)