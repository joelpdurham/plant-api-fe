import React, { createContext, useReducer, useEffect, useContext } from 'react';
import reducer from '../reducers/authReducer';
import { getSignup, getLogin, getVerify } from '../services/auth';
import { setSession, setSessionError, setSessionLoading, setSessionDone } from '../actions/authActions';
import { isAuthenticated, isLoading } from '../selectors/authSelectors';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {
    loading: true,
    user: null,
    error: null
  });

  useEffect(() => {
    dispatch(setSessionLoading());
    getVerify()
      .then(user => {
        dispatch(setSession(user));
      })
      .catch(() => dispatch(setSessionDone()));
  }, []);

  const signup = (email, password) => {
    dispatch(setSessionLoading());
    return getSignup(email, password)
      .then(user => {
        dispatch(setSession(user));
      })
      .catch(err => {
        dispatch(setSessionError(err));
      });
  };

  const login = (email, password) => {
    dispatch(setSessionLoading());
    return getLogin(email, password)
      .then(user => {
        dispatch(setSession(user));
      })
      .catch(err => {
        dispatch(setSessionError(err));
      });
  };

  return (
    <AuthContext.Provider value={{ state, signup, login }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useSignup = () => {
  const { signup } = useContext(AuthContext);
  return signup;
}

export const useLogin = () => {
  const { Login } = useContext(AuthContext);
  return Login;
}

export const useIsAuthenticated = () => {
  const { state } = useContext(AuthContext);
  return isAuthenticated(state);
}

export const useIsLoading = () => {
  const { state } = useContext(AuthContext);
  return isLoading(state);
}