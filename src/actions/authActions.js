export const SET_SESSION_LOADING = 'SET_SESSION_LOADING';
export const setSessionLoading = () => ({
  type: SET_SESSION_LOADING
});

export const SET_SESSION = 'SET_SESSION';
export const setSession = (user) => ({
  type: SET_SESSION,
  payload: user
});

export const SET_SESSION_DONE = 'SET_SESSION_DONE';
export const setSessionDone = () => ({
  type: SET_SESSION_DONE
});

export const SET_SESSION_ERROR = 'SET_SESSION_ERROR';
export const setSessionError = (err) => ({
  type: SET_SESSION_ERROR,
  payload: err
});
