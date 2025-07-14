/**
 * @generated SignedSource<<ec0ddee19c42d39a2c2c3a79f11e7cd3>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from "relay-runtime";
export type ContentFormatEnum = "Raw" | "Markdown" | "%future added value";
export type ContentStatusEnum = "Undefined" | "Draft" | "Published" | "Deprecated" | "%future added value";
export type ModelVersionsPageQuery$variables = {};
export type ModelVersionsPageQuery$data = {
  readonly textual_content: {
    readonly ok: boolean | null;
    readonly content: ReadonlyArray<{
      readonly index: string | null;
      readonly content_type: ContentFormatEnum | null;
      readonly text: string | null;
      readonly created: any | null;
      readonly author: string | null;
      readonly tags: ReadonlyArray<string | null> | null;
      readonly status: ContentStatusEnum | null;
    } | null> | null;
  } | null;
};
export type ModelVersionsPageQuery = {
  variables: ModelVersionsPageQuery$variables;
  response: ModelVersionsPageQuery$data;
};

const node: ConcreteRequest = (function () {
  var v0 = [
    {
      alias: null,
      args: [
        {
          kind: "Literal",
          name: "index",
          value: "CHANGELOG.md",
        },
      ],
      concreteType: "TextualContentResult",
      kind: "LinkedField",
      name: "textual_content",
      plural: false,
      selections: [
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "ok",
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          concreteType: "TextualContent",
          kind: "LinkedField",
          name: "content",
          plural: true,
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "index",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "content_type",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "text",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "created",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "author",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "tags",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "status",
              storageKey: null,
            },
          ],
          storageKey: null,
        },
      ],
      storageKey: 'textual_content(index:"CHANGELOG.md")',
    },
  ];
  return {
    fragment: {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "ModelVersionsPageQuery",
      selections: v0 /*: any*/,
      type: "QueryRoot",
      abstractKey: null,
    },
    kind: "Request",
    operation: {
      argumentDefinitions: [],
      kind: "Operation",
      name: "ModelVersionsPageQuery",
      selections: v0 /*: any*/,
    },
    params: {
      cacheID: "9ed40e13e9a2bc9ab393683ceb4c9048",
      id: null,
      metadata: {},
      name: "ModelVersionsPageQuery",
      operationKind: "query",
      text: 'query ModelVersionsPageQuery {\n  textual_content(index: "CHANGELOG.md") {\n    ok\n    content {\n      index\n      content_type\n      text\n      created\n      author\n      tags\n      status\n    }\n  }\n}\n',
    },
  };
})();

(node as any).hash = "f63900efc08c7075ee7e29ef29f704ad";

export default node;
