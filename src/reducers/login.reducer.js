const defaultState = {
  process: false,
  token: '',
  error: '',
};

const loginReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'USER_LOGIN_PROCESS':
      return {
        ...state,
        process: true,
        error: '',
      };
    case 'USER_LOGIN_FAIL':
      return {
        ...state,
        process: false,
        error: 'Unable to login a user',
      };
    case 'USER_LOGIN_SUCCESS':
      return {
        ...state,
        process: false,
        error: '',
        token: action.payload,
      };
    default:
      return state;
  }
};

export default loginReducer;
