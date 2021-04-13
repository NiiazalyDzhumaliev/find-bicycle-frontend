const defaultState = {
  loading: false,
  data: [],
  error: '',
};

const favouriteBicyclesReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'FAVOURITE_BICYCLES_LOADING':
      return {
        ...state,
        loading: true,
      };
    case 'FAVOURITE_BICYCLES_FAIL':
      return {
        ...state,
        loading: false,
        error: 'unable to get bicycles',
      };
    case 'FAVOURITE_BICYCLES_SUCCESS':
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: '',
      };
    default:
      return state;
  }
};

export default favouriteBicyclesReducer;
