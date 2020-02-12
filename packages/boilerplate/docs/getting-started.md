# Getting started

## Clone boilerplate

Copy the boilerplate code into a new folder and open a terminal in that folder.

You can use the commands below. Create an empty repository at Github and replace
`YOUR_GIT_URL_HERE` below with the url of this empty repository.

```bash
git clone --depth 1 git@github.com:jaccomeijer/wheelroom.git your-site
cd your-site
git filter-branch --prune-empty --subdirectory-filter packages/boilerplate master
git remote set-url origin YOUR_GIT_URL_HERE
git push -u origin master
```

## Install node modules

```bash
npm install
```

## Setup Contentful tokens

Create a new `.env` by copying the template:

```bash
cp .env-template .env
```

Open `.env` in an editor and replace `paste_here` with the correct values. The
`CONTENTFUL_SPACE_ID` and `CONTENTFUL_DELIVERY_TOKEN` are found within the
Contentful web ui at `Settings -> API keys`. To obtain the
`CONTENTFUL_CMA_TOKEN`, you need to install the Contentful cli:

```bash
npm install -g contentful-cli
```

```bash
contentful login
```

You don't have to paste the token back in the terminal. Just having it in `.env`
is enough.

## Compile wheelroom config

Compile the config from typescript to javascript:

```bash
npm run compile-config
```

## Test config by listing all components

Wheelroom can now list the available models configured in [config-components.ts](../src/config/wheelroom/config-components.ts):

```bash
npm run wr:ls
```

## Create Contentul models

Create the configured models in your Contentful space and check the Contentful
web ui.

```bash
npm run wr:cm
```

## Create Contentful content set

Create a dummy image asset and the boilerplate content set found in
[content-sets.ts](../src/config/plugin-contentful/content-sets.ts).

```bash
npm run wr:cc
```

## Start development server

Start Gatsby and browse to: http://localhost:8000

```bash
npm run develop
```

## Next steps

- [Edit page template](./next-steps/page-template.md)
- [Change default locale](./next-steps/default-locale.md)
- [Add a new component](./next-steps/add-new-component.md)
- [Auto fix with linter](./next-steps/linter.md)

## More info

- [Getting started](./getting-started.md)
- [How it works](./how-it-works.md)
- [Roadmap](./roadmap.md)