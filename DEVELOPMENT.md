# Developer Project setup

This project uses the following:

- yarn 4 (not yarn classic).
- Vite - a replacement for react-create-app.
- Jest testing for basic features.
- Cypress testing for key cross-browser features.

The NSHM project https://github.com/GNS-Science/toshi-nest is a key dependency of Kororaa, providing reusable
UI React conponents. It is published in the github NPM registry, and is private, so the following steps are
required to get this dependency satisfied.

You will need to authenticate in order to install the `@gns-science/toshi-nest` dependency. For this:

## Create a Github Personal Access Token (PAT).

- follow guidance in the https://github.com/GNS-Science/toshi-nest README.md.
- make sure your Github Personal Access Token (PAT) lifetime is <= 90days.
- give the PAT, SSO access to GNS_Science when you create it

For more background, see the Github doc [#about-personal-access-tokens]
(https://docs.github.com/en/authentication/keeping-your-account-and-data-secure
/managing-your-personal-access-tokens#about-personal-access-tokens).

## Set up yarn

- first you need a PAT, as above
- edit your `~/.yarnrc.yml` file like so, using the PAT.
  ```
  npmScopes:
    "gns-science":
      npmAlwaysAuth: true
      npmRegistryServer: https://npm.pkg.github.com
      npmAuthToken: {YOUR-PAT-HERE}
  ```
- run

```bash
corepack enable
yarn set version berry
yarn install
```

See [README.md](./README.md) for development scripts.

