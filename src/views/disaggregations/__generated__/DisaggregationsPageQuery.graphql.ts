/**
 * @generated SignedSource<<46b0d9b42eaa95db24b97b5e332c8eb2>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type ContentFormatEnum = "Raw" | "Markdown" | "%future added value";
export type ContentStatusEnum = "Undefined" | "Draft" | "Published" | "Deprecated" | "%future added value";
export type DisaggregationsPageQuery$variables = {};
export type DisaggregationsPageQuery$data = {
  readonly disaggregation_reports: {
    readonly reports: ReadonlyArray<{
      readonly location: {
        readonly name: string | null;
        readonly key: string | null;
        readonly code: string | null;
        readonly lat: number | null;
        readonly lon: number | null;
      } | null;
      readonly vs30: number | null;
      readonly inv_time: number | null;
      readonly poe: number | null;
      readonly imt: string | null;
      readonly report_url: string | null;
    } | null> | null;
  } | null;
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
export type DisaggregationsPageQuery = {
  variables: DisaggregationsPageQuery$variables;
  response: DisaggregationsPageQuery$data;
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
