/**
 * @generated SignedSource<<29338adf0788bb9c6f1529d202ec1733>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
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
};
export type DisaggregationsPageQuery = {
  variables: DisaggregationsPageQuery$variables;
  response: DisaggregationsPageQuery$data;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "DisaggregationReportResult",
    "kind": "LinkedField",
    "name": "disaggregation_reports",
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
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "DisaggregationsPageQuery",
    "selections": (v0/*: any*/),
    "type": "QueryRoot",
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
    "cacheID": "85ad3a60693c201d41eb78fa93d60ca1",
    "id": null,
    "metadata": {},
    "name": "DisaggregationsPageQuery",
    "operationKind": "query",
    "text": "query DisaggregationsPageQuery {\n  disaggregation_reports {\n    reports {\n      location {\n        name\n        key\n        code\n        lat\n        lon\n      }\n      vs30\n      inv_time\n      poe\n      imt\n      report_url\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "a1139539100c82766ca6340c07dd46e6";

export default node;
