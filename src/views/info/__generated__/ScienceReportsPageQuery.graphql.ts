/**
 * @generated SignedSource<<c9e3a67e07ee6ac6d9e1172f6526ace1>>
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
    "alias": null,
    "args": null,
    "concreteType": "ScienceReportResult",
    "kind": "LinkedField",
    "name": "science_reports",
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
    "cacheID": "a769dbccb2cc557f6c46a97a49771ae3",
    "id": null,
    "metadata": {},
    "name": "ScienceReportsPageQuery",
    "operationKind": "query",
    "text": "query ScienceReportsPageQuery {\n  science_reports {\n    ok\n    reports {\n      filename\n      title\n      status\n      notes\n      report_number\n      lead_author {\n        name\n      }\n      publication_date\n      bibliographic_ref\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "72d0cacb7d19bb5eef619e7db69ac78b";

export default node;
