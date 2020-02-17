import React from 'react';
import { fakeFlower } from '../fakeFlower';

export const Plants = () => {
  const plants = fakeFlower;

  const plantElemets = plants.map(plant => (
    <li key={plant._id}>
      <h2>{plant.commonName}</h2>
      <img src={plant.image} />
    </li>
  ));

  return (
    <ul>
      {plantElemets}
    </ul>);
};
