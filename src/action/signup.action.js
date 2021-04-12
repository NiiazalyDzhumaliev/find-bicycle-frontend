import axios from 'axios';

const signupAction = (newUser) => async (dispatch) => {
  try {
    dispatch({
      type: 'USER_SIGNUP_PROCESS',
    });
    const response = await axios.post('http://localhost:3000/signup', newUser);
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

export default signupAction;
