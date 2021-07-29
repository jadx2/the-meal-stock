import { GET_SECTION } from '../actions/types';

const dataReducer = (state = [], action) => {
  let newState = [...state];

  switch (action.type) {
    case GET_SECTION:
      newState = action.payload;

      return newState;

    default:
      return state;
  }
};

export default dataReducer;
