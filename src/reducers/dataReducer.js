import { GET_CATEGORIES } from '../actions/types';

const dataReducer = (state = [], action) => {
  let newState = [...state];

  switch (action.type) {
    case GET_CATEGORIES:
      newState = action.payload;

      return newState;

    default:
      return state;
  }
};

export default dataReducer;
