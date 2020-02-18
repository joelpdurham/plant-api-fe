import { SET_SESSION_LOADING, SET_SESSION, SET_SESSION_ERROR, SET_SESSION_DONE } from '../actions/authActions';

export default function reducer(state, action) {
  switch(action.type) {
    case SET_SESSION_LOADING:
      return { ...state, loading: true, error: null };
    case SET_SESSION:
      return { ...state, loading: false, user: action.payload };
    case SET_SESSION_ERROR:
      return { ...state, loading: false, user: action.payload }; 
    case SET_SESSION_DONE:
      return { ...state, loading: false };
    default:
      return state;
  }
}
