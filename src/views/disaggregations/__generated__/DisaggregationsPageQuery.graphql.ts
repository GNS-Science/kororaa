/**
 * @generated SignedSource<<fe12a8b8af2188ee6f43b2fcd88c2fc1>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type ContentFormatEnum = "Markdown" | "Raw" | "%future added value";
export type ContentStatusEnum = "Deprecated" | "Draft" | "Published" | "Undefined" | "%future added value";
export type DisaggregationsPageQuery$variables = Record<PropertyKey, never>;
export type DisaggregationsPageQuery$data = {
  readonly disaggregation_reports: {
    readonly reports: ReadonlyArray<{
      readonly imt: string | null | undefined;
      readonly inv_time: number | null | undefined;
      readonly location: {
        readonly code: string | null | undefined;
        readonly key: string | null | undefined;
        readonly lat: number | null | undefined;
        readonly lon: number | null | undefined;
        readonly name: string | null | undefined;
      } | null | undefined;
      readonly poe: number | null | undefined;
      readonly report_url: string | null | undefined;
      readonly vs30: number | null | undefined;
    } | null | undefined> | null | undefined;
  } | null | undefined;
  readonly textual_content: {
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
export type DisaggregationsPageQuery = {
  response: DisaggregationsPageQuery$data;
  variables: DisaggregationsPageQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "alias": "disaggregation_reports",
    "args": null,
    "concreteType": "DisaggregationReportResult",
    "kind": "LinkedField",
    "name": "KORORAA_disaggregation_reports",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "DisaggregationReport",
        "kind": "LinkedField",
        "name": "reports",
        "plural": true,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "HazardCodedLocation",
            "kind": "LinkedField",
            "name": "location",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "name",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "key",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "code",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "lat",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "lon",
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "vs30",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "inv_time",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "poe",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "imt",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "report_url",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "storageKey": null
  },
  {
    "alias": "textual_content",
    "args": [
      {
        "kind": "Literal",
        "name": "index",
        "value": "disagg_help.md"
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
    "storageKey": "KORORAA_textual_content(index:\"disagg_help.md\")"
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "DisaggregationsPageQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "DisaggregationsPageQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "1f632c68cdf7354b9b087b86ff3d1d96",
    "id": null,
    "metadata": {},
    "name": "DisaggregationsPageQuery",
    "operationKind": "query",
    "text": "query DisaggregationsPageQuery {\n  disaggregation_reports: KORORAA_disaggregation_reports {\n    reports {\n      location {\n        name\n        key\n        code\n        lat\n        lon\n      }\n      vs30\n      inv_time\n      poe\n      imt\n      report_url\n    }\n  }\n  textual_content: KORORAA_textual_content(index: \"disagg_help.md\") {\n    ok\n    content {\n      index\n      content_type\n      text\n      created\n      author\n      tags\n      status\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "4ea262e142b0a8f3e2dc383285ef9943";

export default node;
