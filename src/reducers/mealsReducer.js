import { GET_BY_CATEGORY, GET_BY_INGREDIENT } from '../actions/types';

const mealsReducer = (state = [], action) => {
  let newState = [...state];
  switch (action.type) {
    case GET_BY_CATEGORY:
      newState = action.payload;
      return newState;

    case GET_BY_INGREDIENT:
      newState = action.payload;
      return newState;
    default:
      return state;
  }
};

export default mealsReducer;
