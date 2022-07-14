---
sidebar_position: 3
---

# Use OpenSergo with Kitex

## Kitex Overview

[Kitex](https://github.com/cloudwego/kitex) [kaɪt'eks] is a high-performance and strong-extensibility Golang RPC framework that helps developers build microservices. 
If the performance and extensibility are the main concerns when you develop microservices, Kitex can be a good choice.
Kitex is a subproject of CloudWeGo, for more details please visit CloudWeGo [website](https://www.cloudwego.io/).

## Access OpenSergo in Kitex

Kitex provides many interfaces with default implementation for users to customize. You can extend or inject them into Kitex to fulfill your needs. For example, you can inject a customized logger into Kitex.

To get metainfo available in OpenSergo Dashboard, what we need to do is also quite simple.

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

# References
- [Kitex docs](https://www.cloudwego.io/docs/kitex/)
- [Kitex-contrib/opensergo](https://github.com/kitex-contrib/opensergo)
