/**
 * @generated SignedSource<<5a9e8aaf69ab6ea1c420657c248361b3>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type ProjectAreaEnum = "Core" | "GMCM" | "SRM" | "%future added value";
export type ReportStatusEnum = "Undefined" | "Review" | "Published" | "%future added value";
export type ScienceReportsPageQuery$variables = {};
export type ScienceReportsPageQuery$data = {
  readonly science_reports: {
    readonly ok: boolean | null;
    readonly reports: ReadonlyArray<{
      readonly topic: string | null;
      readonly area: ProjectAreaEnum | null;
      readonly title: string | null;
      readonly status: ReportStatusEnum | null;
      readonly notes: string | null;
      readonly report_number: string | null;
      readonly lead_author: {
        readonly name: string | null;
      } | null;
      readonly reviewers: ReadonlyArray<{
        readonly name: string | null;
      } | null> | null;
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
    "kind": "ScalarField",
    "name": "name",
    "storageKey": null
  }
],
v1 = [
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
            "name": "topic",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "area",
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
            "selections": (v0/*: any*/),
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "Person",
            "kind": "LinkedField",
            "name": "reviewers",
            "plural": true,
            "selections": (v0/*: any*/),
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
    "selections": (v1/*: any*/),
    "type": "QueryRoot",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "ScienceReportsPageQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "42fb49ddc4e5fe0a783ffdc04bd7804c",
    "id": null,
    "metadata": {},
    "name": "ScienceReportsPageQuery",
    "operationKind": "query",
    "text": "query ScienceReportsPageQuery {\n  science_reports {\n    ok\n    reports {\n      topic\n      area\n      title\n      status\n      notes\n      report_number\n      lead_author {\n        name\n      }\n      reviewers {\n        name\n      }\n      publication_date\n      bibliographic_ref\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "ba73c046b180d163ac8b941e4d506b93";

export default node;
