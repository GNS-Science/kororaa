// relay.config.js
module.exports = {
  // ...
  // Configuration options accepted by the `relay-compiler` command-line tool and `babel-plugin-relay`.
  language: "typescript",
  src: "./src",
  schema: "./schema.graphql",
  exclude: ['**/node_modules/**', '**/__mocks__/**', '**/__generated__/**'],
  // artifactDirectory: "./src/__generated__/relay",
  // persistConfig: {
  //   file: "./__generated__/relay/queries.json"
  // }
};
