---
sidebar_position: 10
---

# How to Install Extensions

This guide explains what are extensions and how to use them in your Scaffold-Stylus project.

## What are Extensions?

Extensions are modular add-ons for Scaffold-Stylus that provide additional functionality or serve as examples for specific features.

:::info Info
Extensions can only be installed during the initial setup of a new Scaffold-Stylus project.
:::info Info

They offer several benefits:

- Seamless integration with the base Scaffold-Stylus project
- Quick addition of new features, pages, contracts, or components at project creation
- Compatibility with Scaffold-Stylus core updates and improvements

Extensions are compact packages containing specific code (such as a smart contract or UI component) that automatically integrate with the latest version of Scaffold-Stylus when initializing a new project via npx. They are starting points for your project, not finished products.

## Installing Extensions

To install an extension when creating a new Scaffold-Stylus project, run:

```bash
npx create-eth@latest -e {github-username}/{extension-repo-name}:{branch-name}
```

The `{branch-name}` is optional. If not specified, it uses the default branch.

E.g.: `npx create-eth@latest -e ChangoMan/charts-extension`

## Available Extensions

You can find a complete list of available extensions, including both curated (by BuidlGuidl) and community extensions, on [scaffold-eth website](https://scaffoldeth.io/extensions).
