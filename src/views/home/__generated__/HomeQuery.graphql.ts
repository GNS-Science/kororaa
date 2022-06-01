/**
 * @generated SignedSource<<dcdec2dd7df3d7c1b058995a6305864c>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type HomeQuery$variables = {};
export type HomeQuery$data = {
  readonly about: string | null;
  readonly hazard_curves: {
    readonly ok: boolean | null;
    readonly curves: ReadonlyArray<{
      readonly loc: string | null;
      readonly imt: string | null;
      readonly agg: string | null;
      readonly curve: {
        readonly levels: ReadonlyArray<number | null> | null;
        readonly values: ReadonlyArray<number | null> | null;
      } | null;
    } | null> | null;
  } | null;
};
export type HomeQuery = {
  variables: HomeQuery$variables;
  response: HomeQuery$data;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "about",
    "storageKey": null
  },
  {
    "alias": null,
    "args": [
      {
        "kind": "Literal",
        "name": "aggs",
        "value": [
          "mean"
        ]
      },
      {
        "kind": "Literal",
        "name": "imts",
        "value": [
          "PGA",
          "SA(0.5)"
        ]
      },
      {
        "kind": "Literal",
        "name": "locs",
        "value": [
          "WLG",
          "AKL"
        ]
      },
      {
        "kind": "Literal",
        "name": "toshi_hazard_id",
        "value": "T3BlbnF1YWtlSGF6YXJkU29sdXRpb246MTAzMDEy"
      }
    ],
    "concreteType": "ToshiHazardCurveResult",
    "kind": "LinkedField",
    "name": "hazard_curves",
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
        "concreteType": "ToshiHazardResult",
        "kind": "LinkedField",
        "name": "curves",
        "plural": true,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "loc",
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
            "name": "agg",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "ToshiHazardCurve",
            "kind": "LinkedField",
            "name": "curve",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "levels",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "values",
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "storageKey": "hazard_curves(aggs:[\"mean\"],imts:[\"PGA\",\"SA(0.5)\"],locs:[\"WLG\",\"AKL\"],toshi_hazard_id:\"T3BlbnF1YWtlSGF6YXJkU29sdXRpb246MTAzMDEy\")"
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "HomeQuery",
    "selections": (v0/*: any*/),
    "type": "QueryRoot",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "HomeQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "a6c4f0125dd206416ccc3594fb3d5c82",
    "id": null,
    "metadata": {},
    "name": "HomeQuery",
    "operationKind": "query",
    "text": "query HomeQuery {\n  about\n  hazard_curves(toshi_hazard_id: \"T3BlbnF1YWtlSGF6YXJkU29sdXRpb246MTAzMDEy\", imts: [\"PGA\", \"SA(0.5)\"], locs: [\"WLG\", \"AKL\"], aggs: [\"mean\"]) {\n    ok\n    curves {\n      loc\n      imt\n      agg\n      curve {\n        levels\n        values\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "cbaf1e3cec97e8c128bc1a00ef07c84a";

export default node;
