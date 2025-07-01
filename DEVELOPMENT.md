
# Developer Project setup

This project uses the following:
 - yarn classic (not yarn modern).
 - Vite - a replacement for react-create-app.
 - Jest testing for basic features.
 - Cypress testing for key cross-browser features. 

The NSHM project https://github.com/GNS-Science/toshi-nest is a key dependency of Kororaa, providing resuable 
UI React conponenets. It is published in the github NPM registry, and is provate, so the following steps are 
required to get this dependency satisfied.

You will need to authenticate in order to install the `@gns-science/toshi-nest` dependency. For this:

## Create a Github Personal Access Token (PAT).
 - follow guidance in the https://github.com/GNS-Science/toshi-nest README.md.
 - make sure your Github Personal Access Token (PAT) lifetime is <= 90days.
 - give the PAT, SSO access to GNS_Science when you create it

For more background, see the Github doc [#about-personal-access-tokens](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens#about-personal-access-tokens).

## Using yarn-classic yarn@1.22
 - create the PAT as above, then
 - either: 
     a) login to the github NPM registry manually using:
        `npm login --scope=@GNS-Science --registry=https://npm.pkg.github.com`
         you must supply your github usename AND the PAT. (This will update your `~/.npmrc` file.)
    b) edit your `~/.npmrc` file like so, using the PAT.
        ```
        //npm.pkg.github.com/:_authToken={YOUR-PAT-HERE}
        @GNS-Science:registry=https://npm.pkg.github.com/
        ```
 - now you can run `yarn` and it will use the npm credentials for the scope `@gns-science`

## Using yarn-modern

 - first you need a PAT, as above
 - edit your `~/.yarnrc.yml` file like so, using the PAT.
    ```
    npmScopes:
      "gns-science":
        npmAlwaysAuth: true
        npmRegistryServer: https://npm.pkg.github.com
        npmAuthToken: {YOUR-PAT-HERE}
    ```
 - run `yarn` et voila!  

## A from-scratch example

_checked on MACOSX 15.5 chrisbc_

To use either yarn ....

```
npm install -g corepack
```

### To use yarn classic
```
corepack use yarn@1.22
mkdir babyui2
cd babyui2
yarn init
yarn add @gns-science/toshi-nest
```

## GHA uncertainty (TODO: resolve this)

CBC: I _think_ that the project `.npmrc` file could be needed for GHA build/deployments ???

In this environment the TOKEN is supplied as a Github secret, but npm needs
`.npmrc` to define the relationship between the scope and the github npm regsitry.

However the scripts use `actions/setup-node@v3` and this may make the .npmrc file redundant. 
