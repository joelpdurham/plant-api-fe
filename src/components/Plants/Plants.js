import React from 'react';
import { useSelector } from 'react-redux';
import { toGetPlants } from '../../selectors/selectors';
import { Plant } from './Plant';

export const Plants = () => {
  const plants = useSelector(toGetPlants);

  const plantElemets = plants.map(plant => (
    <Plant key={plant._id} name={plant.commonName} image={plant.image} />
  ));

  return (
    <ul>
      {plantElemets}
    </ul>);
};
