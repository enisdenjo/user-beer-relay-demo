import React from 'react';

import graphql from 'babel-plugin-relay/macro';
import { useFragment } from 'react-relay';
import { Beer_beer$key } from './__generated__/Beer_beer.graphql';

export interface BeerProps {
  beer: Beer_beer$key;
}

export const Beer: React.FC<BeerProps> = ({ beer: beerKey }) => {
  const beer = useFragment(
    graphql`
      fragment Beer_beer on beer {
        id
        name
        image
      }
    `,
    beerKey
  );

  return (
    <div>
      <h5>{beer.name}</h5>
      <img width="128px" alt={beer.name} src={beer.image} />
    </div>
  );
};
