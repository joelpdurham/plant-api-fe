import React from 'react';
import PropTypes from 'prop-types';

export const Plant = ({ name, image }) => (
  <li>
    <h2>{name}</h2>
    <img src={image} />
  </li>
);

Plant.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
};
