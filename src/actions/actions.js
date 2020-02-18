import { getPlants } from '../services/getPlants';
import { turnLoadingOn, turnLoadingOff } from './loadingActions';

export const FETCH_PLANTS = 'FETCH_PLANTS';

export const fetchResults = search => dispatch => {
  dispatch(turnLoadingOn());
  return getPlants(search)
    .then(plants => {
      dispatch({ type: FETCH_PLANTS, payload: plants });
      return dispatch(turnLoadingOff());
    });
};
