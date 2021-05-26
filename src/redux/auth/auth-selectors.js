const getIsAuthenticated = state => state.auth.isAuthenticated;

const getUsername = state => state.auth.user.name;

const getError = state => state.auth.error;

const getToken = state => state.auth.token;

const getLoading = state => state.auth.loading;

const authSelectors = {
	getIsAuthenticated,
	getUsername,
	getError,
	getToken,
	getLoading
};
export default authSelectors;
