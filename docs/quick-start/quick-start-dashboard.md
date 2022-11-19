---
sidebar_position: 10
---

# OpenSergo Dashboard UI

This topic is about how to set up and use OpenSergo Dashboard UI.

## 1. Prerequisite

OpenSergo Dashbaord requires Java 8 && Maven >= 3.6.0.

## 2. Download Binary Package or Build from Source

There are two ways to get OpenSergo Dashboard.

### Download source code from Github

1. Clone code: `git clone https://github.com/opensergo/opensergo-dashboard.git`
2. specify mysql address in file `opensergo-dashboard-server/src/main/resources/application.yaml`
    * The table schema is from [schema.sql](https://github.com/opensergo/opensergo-dashboard/blob/main/opensergo-dashboard-server/src/main/resources/schema.sql)
3. build
    * `mvn clean package -Dmaven.test.skip=true`
4. start
    * `cd opensergo-dashboard-server/target/; java -jar opensergo-dashboard.jar`

### Download Binary Package

You could download [latest version](https://github.com/opensergo/opensergo-dashboard/releases) OpenSergo Dashboard as `opensergo-dashboard-${version}.zip`.

```sh
unzip opensergo-dashboard-$version.zip
cd opensergo-dashboard-$version
./bin/startup.sh
```

## 3. Access

You could visit `http://localhost:8080/` to access OpenSergo Dashboard。

## 4. Use OpenSergo with Microservices Framework

## 5. Shutdown

```sh
./bin/shutdown.sh
```

Or kill the Java process.
