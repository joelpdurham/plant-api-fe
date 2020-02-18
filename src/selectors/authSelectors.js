export const getUser = state => state.user;
export const isAuthenticated = state => !!getUser(state);
export const isLoading = state => state.loading;
