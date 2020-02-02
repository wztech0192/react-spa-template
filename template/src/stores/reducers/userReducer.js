const defaultState = {
  username: '',
  userFullName: '',
  token: ''
};

export const userReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'ON_USER_LOGIN':
      return {
        ...action.payload
      };
    case 'ON_USER_LOGOUT':
      return {
        ...defaultState,
        username: state.username
      };
    case 'ON_USER_LOGIN_FAILED':
      return {
        ...defaultState,
        error: action.payload
      };
    default:
      return state;
  }
};

export const isAuthenticated = state => !!state.user.token;
