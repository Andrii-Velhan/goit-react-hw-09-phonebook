const getIsAuthenticated = state => state.auth.isAuthenticated;

const getUsername = state => state.auth.user.name;

const authSelectors = {
  getIsAuthenticated,
  getUsername,
};
export default authSelectors;
