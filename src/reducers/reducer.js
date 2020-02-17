import { FETCH_PLANTS } from "../actions/actions";

const initialState = {
  plants: null
};

export const reducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_PLANTS:
      return { ...state, plants: action.payload };

  }
}