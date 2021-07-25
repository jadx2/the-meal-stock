import { CHANGE_LOADED } from '../actions/types';

const loadedReducer = (state = false, action) => {
  let newState = state;

  switch (action.type) {
    case CHANGE_LOADED:
      newState = action.payload;
      return newState;
    default:
      return state;
  }
};

export default loadedReducer;
