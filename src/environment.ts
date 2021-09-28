import {
  Environment,
  Network,
  RecordSource,
  Store,
  RequestParameters,
  Variables,
  Observable,
} from 'relay-runtime';
import { GraphQLError } from 'graphql';
import { createClient } from 'graphql-ws';

// Necessary for Hasura since the IDs are Ints by default.
// Additionally, Relay requires the IDs to be globally unique,
// this is not the case for Hasura default IDs.
function stringifyIds<T extends Record<string, any>>(data: T): T {
  for (const node in data) {
    if (node === 'id') {
      data[node] = data[node].toString();
      continue;
    }
    if (typeof data[node] === 'object') {
      stringifyIds(data[node]);
    }
  }
  return data;
}

// Relay passes a "params" object with the query name and text. So we define a helper function
// to call our fetchGraphQL utility with params.text.
async function fetchRelay(params: RequestParameters, variables: Variables) {
  const response = await fetch('https://my-beerdb.hasura.app/v1/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-hasura-admin-secret':
        'xTSP50a866ZstcTKRNNKtHyqM5NupTvQGJcnfMWYKoPfs4wIs4kKsC07LBtI9zFe',
    },
    body: JSON.stringify({
      query: params.text,
      variables,
    }),
  });
  const data = await response.json();
  return stringifyIds(data);
}

const wsClient = createClient({
  url: 'wss://my-beerdb.hasura.app/v1/graphql',
  connectionParams: () => {
    return {
      headers: {
        'x-hasura-admin-secret':
          'xTSP50a866ZstcTKRNNKtHyqM5NupTvQGJcnfMWYKoPfs4wIs4kKsC07LBtI9zFe',
      },
    };
  },
});

function fetchOrSubscribe(
  operation: RequestParameters,
  variables: Variables
): Observable<any> {
  return Observable.create((sink) => {
    if (!operation.text) {
      return sink.error(new Error('Operation text cannot be empty'));
    }
    return wsClient.subscribe(
      {
        operationName: operation.name,
        query: operation.text,
        variables,
      },
      {
        ...sink,
        next: (data) => sink.next(stringifyIds(data)),
        error: (err) => {
          if (err instanceof Error) {
            return sink.error(err);
          }

          if (err instanceof CloseEvent) {
            return sink.error(
              // reason will be available on clean closes
              new Error(
                `Socket closed with event ${err.code} ${err.reason || ''}`
              )
            );
          }

          return sink.error(
            new Error(
              (err as GraphQLError[]).map(({ message }) => message).join(', ')
            )
          );
        },
      }
    );
  });
}

// Export a singleton instance of Relay Environment configured with our network function:
export const environment = new Environment({
  network: Network.create(fetchRelay, fetchOrSubscribe),
  store: new Store(new RecordSource()),
});
