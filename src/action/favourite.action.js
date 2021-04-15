import axios from 'axios';

export const favouriteBicyclesAction = () => async (dispatch) => {
  try {
    dispatch({
      type: 'FAVOURITE_BICYCLES_LOADING',
    });
    const response = await axios.get(
      'https://vast-hollows-37440.herokuapp.com/favourites',
      {
        headers: {
          Authorization: localStorage.getItem('JWT'),
        },
      },
    );
    dispatch({
      type: 'FAVOURITE_BICYCLES_SUCCESS',
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: 'FAVOURITE_BICYCLES_FAIL',
    });
  }
};

export const REMOVE_FAVOURITE = (id) => ({
  type: 'REMOVE_FAVOURITE',
  payload: id,
});
