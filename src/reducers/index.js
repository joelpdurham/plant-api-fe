import { combineReducers } from 'redux';
import { loadingReducer } from '../reducers/loadingReducer';
import { plantReducer } from '../reducers/plantReducer';
 
export default combineReducers({
  loadingReducer,
  plantReducer
});
