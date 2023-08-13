/**
 * @generated SignedSource<<84ddaeb211108024682fabb9b570e606>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type ContentFormatEnum = "Raw" | "Markdown" | "%future added value";
export type ContentStatusEnum = "Undefined" | "Draft" | "Published" | "Deprecated" | "%future added value";
export type HazardChartsPageQuery$variables = {};
export type HazardChartsPageQuery$data = {
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
export type HazardChartsPageQuery = {
  variables: HazardChartsPageQuery$variables;
  response: HazardChartsPageQuery$data;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "alias": "textual_content",
    "args": [
      {
        "kind": "Literal",
        "name": "index",
        "value": "curves_help.md"
      }
    ],
    "concreteType": "TextualContentResult",
    "kind": "LinkedField",
    "name": "KORORAA_textual_content",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "ok",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "TextualContent",
        "kind": "LinkedField",
        "name": "content",
        "plural": true,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "index",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "content_type",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "text",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "created",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "author",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "tags",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "status",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "storageKey": "KORORAA_textual_content(index:\"curves_help.md\")"
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "HazardChartsPageQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "HazardChartsPageQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "05713ebf3afbbccd5c27eb8dfda108c4",
    "id": null,
    "metadata": {},
    "name": "HazardChartsPageQuery",
    "operationKind": "query",
    "text": "query HazardChartsPageQuery {\n  textual_content: KORORAA_textual_content(index: \"curves_help.md\") {\n    ok\n    content {\n      index\n      content_type\n      text\n      created\n      author\n      tags\n      status\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "d01f26237883c8be64aafdd50d5f970b";

export default node;
