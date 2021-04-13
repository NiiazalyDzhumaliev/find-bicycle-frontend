import axios from 'axios';

const loginAction = (newUser) => async (dispatch) => {
  try {
    dispatch({
      type: 'USER_LOGIN_PROCESS',
    });
    const response = await axios.post(
      'http://localhost:3000/auth/login',
      newUser,
    );
    console.log(response);
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

export default loginAction;
