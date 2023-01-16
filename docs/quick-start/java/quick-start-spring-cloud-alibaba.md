---
sidebar_position: 5
---

# Use OpenSergo with Spring Cloud Alibaba

Spring Cloud Alibaba provides module `spring-cloud-starter-opensergo-adapter` for integration with OpenSergo traffic routing and fault-tolerance spec.

```xml
<dependencyManagement>
    <dependencies>
        <dependency>
            <groupId>com.alibaba.cloud</groupId>
            <artifactId>spring-cloud-alibaba-dependencies</artifactId>
            <version>2.2.10-RC1</version>
            <type>pom</type>
            <scope>import</scope>
        </dependency>
    </dependencies>
</dependencyManagement>

<dependencies>
    <dependency>
        <groupId>com.alibaba.cloud</groupId>
        <artifactId>spring-cloud-starter-alibaba-governance-routing</artifactId>
    </dependency>
    <dependency>
        <groupId>com.alibaba.cloud</groupId>
        <artifactId>spring-cloud-starter-opensergo-adapter</artifactId>
    </dependency>
</dependencies>
```