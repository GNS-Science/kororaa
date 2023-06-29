/**
 * @generated SignedSource<<a96eefd4881c2d5623c841dbb3d47f65>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type ComboRuptureMapPageControlsQuery$variables = {
  radiiSetId: number;
  locationListId: string;
};
export type ComboRuptureMapPageControlsQuery$data = {
  readonly SOLVIS_get_radii_set: {
    readonly radii: ReadonlyArray<number | null> | null;
  } | null;
  readonly SOLVIS_get_location_list: {
    readonly locations: ReadonlyArray<{
      readonly name: string | null;
      readonly location_id: string | null;
    } | null> | null;
  } | null;
  readonly SOLVIS_get_parent_fault_names: ReadonlyArray<string | null> | null;
};
export type ComboRuptureMapPageControlsQuery = {
  variables: ComboRuptureMapPageControlsQuery$variables;
  response: ComboRuptureMapPageControlsQuery$data;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "locationListId"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "radiiSetId"
},
v2 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "radii_set_id",
        "variableName": "radiiSetId"
      }
    ],
    "concreteType": "RadiiSet",
    "kind": "LinkedField",
    "name": "SOLVIS_get_radii_set",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "radii",
        "storageKey": null
      }
    ],
    "storageKey": null
  },
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "list_id",
        "variableName": "locationListId"
      }
    ],
    "concreteType": "LocationList",
    "kind": "LinkedField",
    "name": "SOLVIS_get_location_list",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Location",
        "kind": "LinkedField",
        "name": "locations",
        "plural": true,
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
            "name": "location_id",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "storageKey": null
  },
  {
    "alias": null,
    "args": [
      {
        "kind": "Literal",
        "name": "fault_system",
        "value": "CRU"
      },
      {
        "kind": "Literal",
        "name": "model_id",
        "value": "NSHM_v1.0.4"
      }
    ],
    "kind": "ScalarField",
    "name": "SOLVIS_get_parent_fault_names",
    "storageKey": "SOLVIS_get_parent_fault_names(fault_system:\"CRU\",model_id:\"NSHM_v1.0.4\")"
  }
];
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "ComboRuptureMapPageControlsQuery",
    "selections": (v2/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v1/*: any*/),
      (v0/*: any*/)
    ],
    "kind": "Operation",
    "name": "ComboRuptureMapPageControlsQuery",
    "selections": (v2/*: any*/)
  },
  "params": {
    "cacheID": "75048ae3868ac45476da61cda5ab2fd9",
    "id": null,
    "metadata": {},
    "name": "ComboRuptureMapPageControlsQuery",
    "operationKind": "query",
    "text": "query ComboRuptureMapPageControlsQuery(\n  $radiiSetId: Int!\n  $locationListId: String!\n) {\n  SOLVIS_get_radii_set(radii_set_id: $radiiSetId) {\n    radii\n  }\n  SOLVIS_get_location_list(list_id: $locationListId) {\n    locations {\n      name\n      location_id\n    }\n  }\n  SOLVIS_get_parent_fault_names(model_id: \"NSHM_v1.0.4\", fault_system: \"CRU\")\n}\n"
  }
};
})();

(node as any).hash = "6ca95a3ba67b2b24551a9653271dad1e";

export default node;
