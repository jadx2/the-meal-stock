import GET_RECIPES from '../actions/types';

const recipesReducer = (state = [], action) => {
  let newState = [...state];

  switch (action.type) {
    case GET_RECIPES:
      newState = {
        recipes: action.payload,
      };

      return newState;

    default:
      return state;
  }
};

export default recipesReducer;
