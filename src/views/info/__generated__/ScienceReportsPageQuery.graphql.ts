/**
 * @generated SignedSource<<c36b1429a4281d28fa9323b5c029b7f4>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type ReportStatusEnum = "Undefined" | "Review" | "Published" | "%future added value";
export type ScienceReportsPageQuery$variables = {};
export type ScienceReportsPageQuery$data = {
  readonly science_reports: {
    readonly ok: boolean | null;
    readonly reports: ReadonlyArray<{
      readonly filename: string | null;
      readonly title: string | null;
      readonly status: ReportStatusEnum | null;
      readonly notes: string | null;
      readonly report_number: string | null;
      readonly lead_author: {
        readonly name: string | null;
      } | null;
      readonly publication_date: any | null;
      readonly bibliographic_ref: string | null;
    } | null> | null;
  } | null;
};
export type ScienceReportsPageQuery = {
  variables: ScienceReportsPageQuery$variables;
  response: ScienceReportsPageQuery$data;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "alias": "science_reports",
    "args": null,
    "concreteType": "ScienceReportResult",
    "kind": "LinkedField",
    "name": "KORORAA_science_reports",
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
        "concreteType": "ScienceReport",
        "kind": "LinkedField",
        "name": "reports",
        "plural": true,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "filename",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "title",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "status",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "notes",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "report_number",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "Person",
            "kind": "LinkedField",
            "name": "lead_author",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "name",
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "publication_date",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "bibliographic_ref",
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
    "name": "ScienceReportsPageQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "ScienceReportsPageQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "35abbaf27ff7e061b08e5067455a99d6",
    "id": null,
    "metadata": {},
    "name": "ScienceReportsPageQuery",
    "operationKind": "query",
    "text": "query ScienceReportsPageQuery {\n  science_reports: KORORAA_science_reports {\n    ok\n    reports {\n      filename\n      title\n      status\n      notes\n      report_number\n      lead_author {\n        name\n      }\n      publication_date\n      bibliographic_ref\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "ed0ecf7189d6af3b7678b2055f36fed6";

export default node;
