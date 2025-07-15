/**
 * @generated SignedSource<<6c51e0a941788d32c45853d8c1fd44ba>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type ContentFormatEnum = "Markdown" | "Raw" | "%future added value";
export type ContentStatusEnum = "Deprecated" | "Draft" | "Published" | "Undefined" | "%future added value";
export type HazardChartsPageQuery$variables = Record<PropertyKey, never>;
export type HazardChartsPageQuery$data = {
  readonly textual_content:
    | {
        readonly content:
          | ReadonlyArray<
              | {
                  readonly author: string | null | undefined;
                  readonly content_type: ContentFormatEnum | null | undefined;
                  readonly created: any | null | undefined;
                  readonly index: string | null | undefined;
                  readonly status: ContentStatusEnum | null | undefined;
                  readonly tags: ReadonlyArray<string | null | undefined> | null | undefined;
                  readonly text: string | null | undefined;
                }
              | null
              | undefined
            >
          | null
          | undefined;
        readonly ok: boolean | null | undefined;
      }
    | null
    | undefined;
};
export type HazardChartsPageQuery = {
  response: HazardChartsPageQuery$data;
  variables: HazardChartsPageQuery$variables;
};

const node: ConcreteRequest = (function () {
  var v0 = [
    {
      alias: "textual_content",
      args: [
        {
          kind: "Literal",
          name: "index",
          value: "curves_help.md",
        },
      ],
      concreteType: "TextualContentResult",
      kind: "LinkedField",
      name: "KORORAA_textual_content",
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
      storageKey: 'KORORAA_textual_content(index:"curves_help.md")',
    },
  ];
  return {
    fragment: {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "HazardChartsPageQuery",
      selections: v0 /*: any*/,
      type: "Query",
      abstractKey: null,
    },
    kind: "Request",
    operation: {
      argumentDefinitions: [],
      kind: "Operation",
      name: "HazardChartsPageQuery",
      selections: v0 /*: any*/,
    },
    params: {
      cacheID: "05713ebf3afbbccd5c27eb8dfda108c4",
      id: null,
      metadata: {},
      name: "HazardChartsPageQuery",
      operationKind: "query",
      text: 'query HazardChartsPageQuery {\n  textual_content: KORORAA_textual_content(index: "curves_help.md") {\n    ok\n    content {\n      index\n      content_type\n      text\n      created\n      author\n      tags\n      status\n    }\n  }\n}\n',
    },
  };
})();

(node as any).hash = "d01f26237883c8be64aafdd50d5f970b";

export default node;
