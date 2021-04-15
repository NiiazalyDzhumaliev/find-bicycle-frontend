import axios from 'axios';

export const signupAction = (newUser) => async (dispatch) => {
  try {
    dispatch({
      type: 'USER_SIGNUP_PROCESS',
    });
    const response = await axios.post('http://localhost:3000/signup', {
      user: {
        name: newUser.name,
        email: newUser.email,
        password: newUser.password,
      },
    });
    localStorage.setItem('JWT', response.data.auth_token);
    dispatch({
      type: 'USER_SIGNUP_SUCCESS',
      payload: response.data.auth_token,
    });
  } catch (error) {
    dispatch({
      type: 'USER_SIGNUP_FAIL',
    });
  }
};

export const LOGOUT_AFTER_SIGNUP = () => ({
  type: 'LOGOUT_AFTER_SIGNUP',
});
