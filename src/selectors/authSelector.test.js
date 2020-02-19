import { getUser, isAuthenticated, isLoading } from './authSelectors';

describe('auth selectors', () => {
  it('can get a user from state', () => {
    const state = {
      loading: false,
      error: null,
      user: { _id: '1234', email: 'test@test.com' }
    };

    expect(getUser(state)).toEqual({
      _id: '1234',
      email: 'test@test.com'
    });
  });

  it('can tell if we are authenticated', () => {
    const authState = {
      loading: false,
      error: null,
      user: { _id: '1234', email: 'test@test.com' }
    };

    const unAuthState = {
      loading: false,
      error: null,
      user: null
    };

    expect(isAuthenticated(authState)).toBeTruthy();
    expect(isAuthenticated(unAuthState)).toBeFalsy();
  });

  it('selects the loading state', () => {
    const state = {
      loading: false,
      error: null,
      user: { _id: '1234', email: 'test@test.com' }
    };

    expect(isLoading(state)).toEqual(false);
  });
});
