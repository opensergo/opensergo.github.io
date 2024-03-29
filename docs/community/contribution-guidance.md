---
sidebar_position: 2
---

# Contributor Guidance

Welcome to OpenSergo community! This document is a guideline about how to contribute to OpenSergo.
If you find something incorrect or missing, please leave comments / suggestions.

## Contributing

We are always very happy to have contributions, whether for typo fix, bug fix or big new features.
Please do not ever hesitate to ask a question or send a pull request.

We strongly value documentation and integration with other projects.
We are very glad to accept improvements for these aspects.

### GitHub workflow

We use the `main` (`master`) branch as the development branch, which indicates that this is a unstable branch.

Here are the workflow for contributors:

1. Fork to your own
2. Clone fork to local repository
3. Create a new branch and work on it
4. Keep your branch in sync
5. Commit your changes (make sure your commit message concise)
6. Push your commits to your forked repository
7. Create a pull request

Please follow the pull request template. Please make sure the PR has an associated issue.

After creating a PR, one or more reviewers will be assigned to the pull request.
The reviewers will review the code.

Before merging a PR, squash any fix review feedback, typo, merged, and rebased sorts of commits.
The final commit message should be clear and concise.

### Open an issue / PR

We use [GitHub Issues](https://github.com/opensergo/opensergo-specification/issues) and [Pull Requests](https://github.com/opensergo/opensergo-specification/pulls) for trackers.

If you find a typo in document, find a bug in code, or want new features, or want to give suggestions,
you can [open an issue on GitHub](https://github.com/opensergo/opensergo-specification/issues/new) to report it.
Please follow the guideline message in the issue template.

If you want to contribute, please follow the [contribution workflow](#github-workflow) and create a new pull request.
If your PR contains large changes, e.g. component refactor or new components, please write detailed documents
about its design and usage.

Note that a single PR should not be too large. If heavy changes are required, it's better to separate the changes
to a few individual PRs.

### Code review

All code should be well reviewed by one or more committers. Some principles:

- Readability: Important code should be well-documented. Comply with our code style.
- Elegance: New functions, classes or components should be well designed.
- Testability: Important code should be well-tested (high unit test coverage).