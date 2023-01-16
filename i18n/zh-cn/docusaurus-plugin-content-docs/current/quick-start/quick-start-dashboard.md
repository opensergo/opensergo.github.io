---
sidebar_position: 10
---

# OpenSergo 控制台 UI

这个快速开始手册是帮忙您快速在您的电脑上，下载、安装并使用 OpenSergo Dashboard（UI 控制台）。

## 1. 环境准备

OpenSergo Dashbaord 依赖 Java 环境来运行。如果您是从代码开始构建并运行 OpenSergo Dashboard，还需要为此配置 Maven 环境，请确保是在以下版本环境中安装使用:

1. 64 bit OS，支持 Linux/macOS/Windows，推荐选用 Linux/macOS。
2. 64 bit JDK 1.8+；推荐使用 JDK 11。
3. Maven >= 3.6.0。

## 2. 下载源码或安装包

你可以通过源码和发行包两种方式来获取 OpenSergo Dashboard。

### 从 Github 上下载源码方式

1. 下载代码：`git clone https://github.com/opensergo/opensergo-dashboard.git`
2. 在 `opensergo-dashboard-server/src/main/resources/application.yaml` 中指定 MySQL 的实例地址，需要准备好对应的 MySQL 实例及表结构。
    * MySQL 的表结构见 [schema.sql](https://github.com/opensergo/opensergo-dashboard/blob/main/opensergo-dashboard-server/src/main/resources/schema.sql)
3. 构建
    * `mvn clean package -Dmaven.test.skip=true`
4. 启动
    * `cd opensergo-dashboard-server/target/; java -jar opensergo-dashboard.jar`

### 下载编译后压缩包方式

您可以从 [最新稳定版本](https://github.com/opensergo/opensergo-dashboard/releases) 下载 `opensergo-dashboard-${version}.zip` 包。

```sh
unzip opensergo-dashboard-$version.zip
cd opensergo-dashboard-$version
./bin/startup.sh
```

> 注意：需要准备好对应的 MySQL 实例及表结构。

## 3. 访问

访问 `http://localhost:8080/` 即可访问 OpenSergo Dashboard。

## 4. 现有框架接入

## 5. 关闭服务器

```sh
./bin/shutdown.sh
```

或者直接结束对应的 Java 进程。
