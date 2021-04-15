const defaultState = {
  process: false,
  token: '',
  error: '',
};

const signupReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'USER_SIGNUP_PROCESS':
      return {
        ...state,
        process: true,
        error: '',
      };
    case 'USER_SIGNUP_FAIL':
      return {
        ...state,
        process: false,
        error: 'Unable to sign up a user',
      };
    case 'USER_SIGNUP_SUCCESS':
      return {
        ...state,
        process: false,
        error: '',
        token: action.payload,
      };
    case 'LOGOUT_AFTER_SIGNUP':
      return {
        ...state,
        process: false,
        error: '',
        token: '',
      };
    default:
      return state;
  }
};

export default signupReducer;
