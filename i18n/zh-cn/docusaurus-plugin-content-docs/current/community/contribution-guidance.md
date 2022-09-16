---
sidebar_position: 2
---

# OpenSergo 社区贡献指南

欢迎来到 OpenSergo 的世界！本文档作为基本指南来为您指引如何向 OpenSergo 社区进行贡献。

## 准备工作

### 了解 OpenSergo 项目结构

在参与贡献前，请先了解 [OpenSergo 整体的项目结构](https://opensergo.io/zh-cn/docs/what-is-opensergo/architecture/)。OpenSergo 项目对应的技术栈可供参考：

* OpenSergo SDK：多语言 SDK，Java/Go/Rust/C++/Node.js 等语言均可。目前已有项目：
  * [opensergo-java-sdk](https://github.com/opensergo/opensergo-java-sdk)
  * [opensergo-go-sdk](https://github.com/opensergo/opensergo-go-sdk)
* [OpenSergo Control Plane](https://github.com/opensergo/opensergo-control-plane)：Go + Kubernetes 生态
* OpenSergo 框架生态：各种微服务相关的框架、组件均可

## 贡献

我们随时都欢迎任何贡献，无论是简单的错别字修正，BUG 修复还是增加新功能、完善现有治理标准。请踊跃提出问题或发起 PR。我们同样重视文档以及与其它开源项目的整合，欢迎在这方面做出贡献。

### 从哪里入手？

如果您是初次贡献，可以先从每个 repo 的 `good first issue` 或 `help wanted` issue 列表中认领一个比较小的任务来快速参与社区贡献。OpenSergo 所有生态项目均有 `good first issue` label。您可以直接在相应 issue 中回复参与意愿，然后参照下面的 GitHub 工作流指引解决 issue 并按照规范提交 PR，通过 review 后就会被 merge 到主分支。

### GitHub 工作流

我们使用 `main` (`master`) 分支作为我们的开发分支，这代表它是不稳定的分支。每个版本区间（如 0.1.x）都会创建一个 release 分支（如 `release-0.1`）作为稳定的发布分支。每发布一个新版本都会将其合并到对应的 release 分支并打上对应的 tag。

下面是开源贡献者常用的工作流（workflow）：

1. 将仓库 fork 到自己的 GitHub 下
2. 将 fork 后的仓库 clone 到本地
3. 创建新的分支，在新的分支上进行开发操作（**请确保对应的变更都有测试用例或 demo 进行验证**）
4. 保持分支与远程主分支一致（通过 `fetch` 和 `rebase` 操作）
5. 在本地提交变更（**注意 commit log 保持简练、规范**），**注意提交的 email 需要和 GitHub 的 email 保持一致**
6. 将提交 push 到 fork 的仓库下
7. 创建一个 pull request (PR)

提交 PR 的时候请参考 PR 模板。在进行较大的变更的时候请确保 PR 有一个对应的 Issue。

若您是初次提交 PR，**请先签署 CLA**（PR 页面会有自动回复指引）。在提交 PR 后，系统会自动运行持续集成，请确保所有的 CI 均为 pass 状态。一切就绪后，我们会为 PR 分配一个或多个 reviewer。Reviewer 会对提交的代码进行 review。

在合并 PR 的时候，请保持最终的提交信息需要保证简练、规范。如果有过多的冗余 commit，可以 squash 成一个 commit 来提交。

### 创建 Issue / PR

我们使用 [GitHub Issues](https://github.com/opensergo/opensergo-specification/issues) 以及 [Pull Requests](https://github.com/opensergo/opensergo-specification/pulls) 来管理/追踪问题。

如果您发现了文档中有表述错误，或者代码发现了 BUG，或者希望开发新的特性，或者希望提建议，可以[创建一个 Issue](https://github.com/opensergo/opensergo-specification/issues/new)。请参考 Issue 模板中对应的指导信息来完善 Issue 的内容，来帮助我们更好地理解您的 Issue。

如果您想要贡献代码，您可以参考上面的 [GitHub 工作流](#github-工作流)，提交对应的 PR。若是对当前开发版本进行提交，则目标分支为 `main`。如果您的 PR 包含非常大的变更，比如模块的重构或者添加新的组件，请**务必先提出相关 issue/proposal，发起详细讨论，达成一致后再进行变更**，并为其编写详细的文档来阐述其设计、解决的问题和用途。注意一个 PR 尽量不要过于大。如果的确需要有大的变更，可以将其按功能拆分成多个单独的 PR。

### Code review

所有的 spec 及代码都需要经过 committer 进行 review。以下是我们推荐的一些原则：

- 可读性：代码遵循我们的开发规约，重要代码需要有详细注释和文档
- 优雅性：代码简练、复用度高，有着完善的设计
- 测试：重要的代码需要有完善的测试用例（单元测试、集成测试），对应的衡量标准是测试覆盖率