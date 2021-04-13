const defaultState = {
  loading: false,
  data: [],
  error: '',
};

const bicyclesReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'BICYCLES_LOADING':
      return {
        ...state,
        loading: true,
      };
    case 'BICYCLES_FAIL':
      return {
        ...state,
        loading: false,
        error: 'unable to get bicycles',
      };
    case 'BICYCLES_SUCCESS':
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

export default bicyclesReducer;
