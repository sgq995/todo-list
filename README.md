# Turborepo starter

This is an official Yarn v1 starter turborepo.

## What's inside?

This turborepo uses [Yarn](https://classic.yarnpkg.com/lang/en/) as a package manager. It includes the following packages/apps:

### Apps and Packages

- `api`: a [fastify](https://www.fastify.io) API
- `web`: a [Next.js](https://nextjs.org) app
- `ui`: a stub React component library including [Storybook](https://storybook.js.org)
- `eslint-config-custom`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`)
- `tsconfig`: `tsconfig.json`s used throughout the monorepo

Each package/app is 100% [TypeScript](https://www.typescriptlang.org).

## Setup

### Install
To install the dependencies, run the following command:
```
node tools.js install
```

### Develop

To develop all apps and packages, run the following command:

```
yarn run dev
```
