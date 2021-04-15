import axios from 'axios';

export const loginAction = (newUser) => async (dispatch) => {
  try {
    dispatch({
      type: 'USER_LOGIN_PROCESS',
    });
    const response = await axios.post(
      'https://vast-hollows-37440.herokuapp.com/auth/login',
      newUser,
    );
    localStorage.setItem('JWT', response.data.auth_token);
    dispatch({
      type: 'USER_LOGIN_SUCCESS',
      payload: response.data.auth_token,
    });
  } catch (error) {
    dispatch({
      type: 'USER_LOGIN_FAIL',
    });
  }
};

export const LOGOUT = () => ({
  type: 'LOGOUT',
});
