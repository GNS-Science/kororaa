/**
 * @generated SignedSource<<a144bbcd46620130626ca99eb0611ed3>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type ComboInfoPanelComponentQuery$variables = {
  fault_system: string;
  model_id: string;
  rupture_index: number;
};
export type ComboInfoPanelComponentQuery$data = {
  readonly SOLVIS_composite_rupture_detail: {
    readonly __typename: "CompositeRuptureDetail";
    readonly area: number | null | undefined;
    readonly fault_surfaces: any | null | undefined;
    readonly length: number | null | undefined;
    readonly magnitude: number | null | undefined;
    readonly rake_mean: number | null | undefined;
    readonly rate_count: number | null | undefined;
    readonly rate_max: number | null | undefined;
    readonly rate_min: number | null | undefined;
    readonly rupture_index: number | null | undefined;
  } | null | undefined;
};
export type ComboInfoPanelComponentQuery = {
  response: ComboInfoPanelComponentQuery$data;
  variables: ComboInfoPanelComponentQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "fault_system"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "model_id"
},
v2 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "rupture_index"
},
v3 = [
  {
    "fields": [
      {
        "kind": "Variable",
        "name": "fault_system",
        "variableName": "fault_system"
      },
      {
        "kind": "Variable",
        "name": "model_id",
        "variableName": "model_id"
      },
      {
        "kind": "Variable",
        "name": "rupture_index",
        "variableName": "rupture_index"
      }
    ],
    "kind": "ObjectValue",
    "name": "filter"
  }
],
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "magnitude",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "length",
  "storageKey": null
},
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "area",
  "storageKey": null
},
v8 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "rupture_index",
  "storageKey": null
},
v9 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "rate_max",
  "storageKey": null
},
v10 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "rate_min",
  "storageKey": null
},
v11 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "rate_count",
  "storageKey": null
},
v12 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "rake_mean",
  "storageKey": null
},
v13 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "fault_surfaces",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/),
      (v2/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "ComboInfoPanelComponentQuery",
    "selections": [
      {
        "alias": null,
        "args": (v3/*: any*/),
        "concreteType": "CompositeRuptureDetail",
        "kind": "LinkedField",
        "name": "SOLVIS_composite_rupture_detail",
        "plural": false,
        "selections": [
          (v4/*: any*/),
          (v5/*: any*/),
          (v6/*: any*/),
          (v7/*: any*/),
          (v8/*: any*/),
          (v9/*: any*/),
          (v10/*: any*/),
          (v11/*: any*/),
          (v12/*: any*/),
          (v13/*: any*/)
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v1/*: any*/),
      (v2/*: any*/),
      (v0/*: any*/)
    ],
    "kind": "Operation",
    "name": "ComboInfoPanelComponentQuery",
    "selections": [
      {
        "alias": null,
        "args": (v3/*: any*/),
        "concreteType": "CompositeRuptureDetail",
        "kind": "LinkedField",
        "name": "SOLVIS_composite_rupture_detail",
        "plural": false,
        "selections": [
          (v4/*: any*/),
          (v5/*: any*/),
          (v6/*: any*/),
          (v7/*: any*/),
          (v8/*: any*/),
          (v9/*: any*/),
          (v10/*: any*/),
          (v11/*: any*/),
          (v12/*: any*/),
          (v13/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "id",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "7585a7d3f63b0335abbb0f4901aea075",
    "id": null,
    "metadata": {},
    "name": "ComboInfoPanelComponentQuery",
    "operationKind": "query",
    "text": "query ComboInfoPanelComponentQuery(\n  $model_id: String!\n  $rupture_index: Int!\n  $fault_system: String!\n) {\n  SOLVIS_composite_rupture_detail(filter: {model_id: $model_id, fault_system: $fault_system, rupture_index: $rupture_index}) {\n    __typename\n    magnitude\n    length\n    area\n    rupture_index\n    rate_max\n    rate_min\n    rate_count\n    rake_mean\n    fault_surfaces\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "46e62712a4fb776657cddada4fc1d695";

export default node;
