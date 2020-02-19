import {
  setSessionLoading,
  SET_SESSION_LOADING,
  setSession,
  SET_SESSION,
  setSessionError,
  SET_SESSION_ERROR
} from './authActions';

describe('auth actions', () => {
  it('creates a session loading action', () => {
    const action = setSessionLoading();

    expect(action).toEqual({
      type: SET_SESSION_LOADING
    });
  });

  it('creates a set session action', () => {
    const action = setSession({ _id: '1234', email: 'test@test.com' });

    expect(action).toEqual({
      type: SET_SESSION,
      payload: { _id: '1234', email: 'test@test.com' }
    });
  });

  it('creates a session error action', () => {
    const action = setSessionError('Oops!');

    expect(action).toEqual({
      type: SET_SESSION_ERROR,
      payload: 'Oops!'
    });
  });
});
