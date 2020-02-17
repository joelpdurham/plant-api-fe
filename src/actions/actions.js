

export const FETCH_PLANTS = 'FETCH_PLANTS';

export const fetchResults = search => dispatch => {
  return getPlants(search)
    .then(plants => {
      return dispatch({ type: FETCH_PLANTS, payload: plants });
    });
};
