import axios from 'axios';

const bicyclesAction = () => async (dispatch) => {
  try {
    dispatch({
      type: 'BICYCLES_LOADING',
    });
    const response = await axios.get(
      'https://vast-hollows-37440.herokuapp.com/bicycles',
      {
        headers: {
          Authorization: localStorage.getItem('JWT'),
        },
      },
    );
    dispatch({
      type: 'BICYCLES_SUCCESS',
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: 'BICYCLES_FAIL',
    });
  }
};

export default bicyclesAction;
