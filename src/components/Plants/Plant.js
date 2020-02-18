import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export const Plant = ({ name, image, id }) => (
  <li>
    <Link to={`/plants/${id}`}>
      <h2>{name}</h2>
      <img src={image} />
    </Link>
  </li>
);

Plant.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired
};
