import { FETCH_PLANTS } from '../actions/actions';
import { fakeFlower } from '../fakeFlower';

const initialState = {
  plants: fakeFlower
};

export const reducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_PLANTS:
      return { ...state, plants: action.payload };
    default:
      return state;
  }
};
