# OCP Madness Ansible Collection

The repo is for ansible collections for my OpenShift setups

# Additional purpose - example collection dev

The goal is to automate the full development cycle of an Ansible Collection,
including code linting, testing and collection build, publishing, semantic release.

## Tools used in the demo

- pre-commit 3.4.0
- OpenShift 4.13.12
- Ansible
- OpenShift Pipelines 1.12.0
- Semantic Release v22.0.6

## Setup pre-commit

Install [pre-commit](https://pre-commit.com/) on your local (virtual)
machine: `pip3 install pre-commit==<version>`

In your repo path, please run: `pre-commit install`,

If you want to use your own pre-commit config, please do:
`pre-commit install -c <your-config>`

### For commitlint pre-commit hook

Following the instruction from [commitlint pre-commit hook](https://github.com/alessandrojcm/commitlint-pre-commit-hook)
for the setup.

## Setup Pipeline As Code

This demo uses GitHub webhook as an example, but you can refer to
[pipeline as code](https://pipelinesascode.com/) for other configurations.

By default, OpenShift Pipelines enables the pipeline as code.

Following the [instruction](https://pipelinesascode.com/docs/install/github_webhook/)
to configure GitHub webhook for the repo.

After that, create a new namespace for the demo in your cluster and create the resouces
in `.tekton/pac/` in the corresponding namespace with the correct values.

## Set up semantic-release

[semantic-release](https://github.com/semantic-release/semantic-release) is used for automating
the whole package release workflow. If you want to test it locally, please follow the steps:

- [install](https://github.com/semantic-release/semantic-release/blob/4711a381965986ef2e27828c75146261e2cddd6f/docs/usage/installation.md#installation) semantic release
- install the plugins by running `npm clean-install` in the repo path
- configure [authentication](https://github.com/semantic-release/semantic-release/blob/4711a381965986ef2e27828c75146261e2cddd6f/docs/usage/ci-configuration.md#authentication) for semantic-release, in this case, we need `GITHUB_TOKEN`, which one can create in the developer setting from your GitHub account.
- By defining the `release.config.js` in the repo, semantic-release will use it as the configuration for generating/publishing the next release
- You can run `npx semantic-release` or with `--dry-run` flag to start the semantic-release

In this example, semantic-release is included in Tekton pipeline, there are other [CI configuration examples](https://github.com/semantic-release/semantic-release/blob/4711a381965986ef2e27828c75146261e2cddd6f/docs/recipes/ci-configurations/README.md) for setting up semantic-release in your CI environment.

## Tekton Pipelines Architecture

The pipeline consists of the tasks showed below:

![figure](./assets/ansible-collection-pipeline.png)
