import { GET_ERROR } from '../actions/types';

const errorReducer = (state = null, action) => {
  let newState = state;
  switch (action.type) {
    case GET_ERROR:
      newState = action.payload;
      return newState;
    default:
      return state;
  }
};

export default errorReducer;
