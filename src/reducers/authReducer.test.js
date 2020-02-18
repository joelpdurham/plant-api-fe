import reducer from './authReducer';
import { setSessionLoading, setSession, setSessionError } from  '../actions/authActions';

describe('auth reducer', () => {
  it('returns currentState when it does not understand action type', () => {
    const state = {
      loading: true,
      user: null,
      error: null
    };

    const newState = reducer(state, { type: 'Bogus' });

    expect(newState).toEqual(state);
  });

  it('handles the session loading action', () => {
    const action = setSessionLoading();
    const state = {
      loading: false,
      user: null,
      error: null
    };

    const newState = reducer(state, action);

    expect(newState).toEqual({
      loading: true,
      user: null,
      error: null
    });
  });

  it('handles the set session action', () => {
    const action = setSession({ _id: '1234', email: 'test@test.com' });
    const state = {
      loading: true,
      user: null,
      error: null
    };

    const newState = reducer(state, action);

    expect(newState).toEqual({
      loading: false,
      user: { _id: '1234', email: 'test@test.com' },
      error: null
    });
  });

  it('handles the set session error action', () => {
    const action = setSessionError('Oops!');
    const state = {
      loading: true,
      user: null,
      error: null
    };

    const newState = reducer(state, action);

    expect(newState).toEqual({
      loading: false,
      user: null,
      error: 'Oops!'
    });
  });

  it('handles the loading case when there is a previous error', () => {
    const action = setSessionLoading();
    const state = {
      loading: false,
      error: 'Oops',
      user: null
    };

    const newState = reducer(state, action);

    expect(newState).toEqual({
      loading: true,
      error: null,
      user: null
    });
  });
});
