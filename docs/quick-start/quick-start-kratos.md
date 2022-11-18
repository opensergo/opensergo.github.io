---
sidebar_position: 2
---

# Use OpenSergo with Kratos

T.B.D.
---
sidebar_position: 2
---

# Use Opensergo with Kratos

## Kratos Overview
[Kratos](github.com/go-kratos/kratos) Kratos is a microservice-oriented governance framework implemented by Golang, which offers convenient capabilities to help you quickly build a bulletproof application from scratch.

> The name is inspired by the game God of War which is based on Greek myths, tells the adventures of Kratos who became a god of war from a mortal and launched a god-killing slaughter.

## Access OpenSergo in Kratos

Kratos design concept is highly customizable. Users can introduce different implementations according to their own needs. Therefore, when we access OpenSergo, we only need to introduce OpenSergo contrib to report the service information to OpenSergo. The code is as follows:
```
// ...
	app := kratos.New(
		kratos.Name(Name),
		kratos.Server(
			httpSrv,
			grpcSrv,
		),
	)
	osg, err := opensergo.New(opensergo.WithEndpoint("locahost:9090"))
	if err != nil {
		log.Fatal(err)
	}
	if err = osg.ReportMetadata(context.Background(), app); err != nil {
		log.Fatal(err)
	}
	if err := app.Run(); err != nil {
		log.Fatal(err)
	}
```

# References
- [Kratos docs](https://go-kratos.dev/docs/)
- [OpenSergo example](https://github.com/go-kratos/examples/tree/main/opensergo)