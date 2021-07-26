import { GET_MEAL_BY_ID } from '../actions/types';

const mealReducer = (state = {}, action) => {
  let newState = state;
  switch (action.type) {
    case GET_MEAL_BY_ID:
      newState = action.payload;
      return newState;
    default:
      return state;
  }
};

export default mealReducer;
