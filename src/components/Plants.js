import React from 'react';
import { useSelector } from 'react-redux';
import { toGetPlants } from '../selectors/selectors';

export const Plants = () => {
  const plants = useSelector(toGetPlants);

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
