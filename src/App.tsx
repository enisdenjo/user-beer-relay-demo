import React from 'react';

import graphql from 'babel-plugin-relay/macro';
import { useLazyLoadQuery } from 'react-relay';
import { AppQuery } from './__generated__/AppQuery.graphql';

import { Beer } from './Beer';

export const App: React.FC = () => {
  const data = useLazyLoadQuery<AppQuery>(
    graphql`
      query AppQuery($limit: Int!) {
        beer(limit: $limit) {
          __id
          ...Beer_beer
        }
      }
    `,
    {
      limit: 20,
    }
  );

  return (
    <main
      style={{
        padding: '0 50px',
        maxWidth: 512,
        margin: '0 auto',
        border: '1px solid lightgrey',
      }}
    >
      <h3>Beers</h3>
      <ol>
        {data.beer.map((beer) => (
          <li key={beer.__id}>
            <Beer beer={beer} />
          </li>
        ))}
      </ol>
    </main>
  );
};
