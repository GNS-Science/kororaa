/**
 * @generated SignedSource<<47885a53138e3eabbf611f259fb0b60e>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type ContentFormatEnum = "Markdown" | "Raw" | "%future added value";
export type ContentStatusEnum = "Deprecated" | "Draft" | "Published" | "Undefined" | "%future added value";
export type TechInfoPageQuery$variables = Record<PropertyKey, never>;
export type TechInfoPageQuery$data = {
  readonly KORORAA_textual_content: {
    readonly content: ReadonlyArray<{
      readonly author: string | null | undefined;
      readonly content_type: ContentFormatEnum | null | undefined;
      readonly created: any | null | undefined;
      readonly index: string | null | undefined;
      readonly status: ContentStatusEnum | null | undefined;
      readonly tags: ReadonlyArray<string | null | undefined> | null | undefined;
      readonly text: string | null | undefined;
    } | null | undefined> | null | undefined;
    readonly ok: boolean | null | undefined;
  } | null | undefined;
};
export type TechInfoPageQuery = {
  response: TechInfoPageQuery$data;
  variables: TechInfoPageQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Literal",
        "name": "index",
        "value": "TECHINFO.md"
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
    "storageKey": "KORORAA_textual_content(index:\"TECHINFO.md\")"
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "TechInfoPageQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "TechInfoPageQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "97e29455aca8863debeee2f926589dd6",
    "id": null,
    "metadata": {},
    "name": "TechInfoPageQuery",
    "operationKind": "query",
    "text": "query TechInfoPageQuery {\n  KORORAA_textual_content(index: \"TECHINFO.md\") {\n    ok\n    content {\n      index\n      content_type\n      text\n      created\n      author\n      tags\n      status\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "6742b2b770c174ba72d03267f19633dd";

export default node;
