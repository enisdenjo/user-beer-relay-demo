/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type BeerSubscriptionVariables = {
    id: number;
};
export type BeerSubscriptionResponse = {
    readonly beer_by_pk: {
        readonly " $fragmentRefs": FragmentRefs<"Beer_beer">;
    } | null;
};
export type BeerSubscription = {
    readonly response: BeerSubscriptionResponse;
    readonly variables: BeerSubscriptionVariables;
};



/*
subscription BeerSubscription(
  $id: Int!
) {
  beer_by_pk(id: $id) {
    ...Beer_beer
  }
}

fragment Beer_beer on beer {
  id
  name
  image
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "id"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "id"
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "BeerSubscription",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "beer",
        "kind": "LinkedField",
        "name": "beer_by_pk",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "Beer_beer"
          }
        ],
        "storageKey": null
      }
    ],
    "type": "subscription_root",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "BeerSubscription",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "beer",
        "kind": "LinkedField",
        "name": "beer_by_pk",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "id",
            "storageKey": null
          },
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
            "name": "image",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "6b3455712497b8cbecfc78e51c0a2161",
    "id": null,
    "metadata": {},
    "name": "BeerSubscription",
    "operationKind": "subscription",
    "text": "subscription BeerSubscription(\n  $id: Int!\n) {\n  beer_by_pk(id: $id) {\n    ...Beer_beer\n  }\n}\n\nfragment Beer_beer on beer {\n  id\n  name\n  image\n}\n"
  }
};
})();
(node as any).hash = '351e2701792e91ddae172aaec3daac2f';
export default node;
