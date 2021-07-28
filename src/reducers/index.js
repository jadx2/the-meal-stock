import { combineReducers } from 'redux';
import dataReducer from './dataReducer';
import filterReducer from './filterReducer';
import mealsReducer from './mealsReducer';
import mealReducer from './mealReducer';
import errorReducer from './errorReducer';

const rootReducer = combineReducers({
  data: dataReducer,
  meals: mealsReducer,
  meal: mealReducer,
  filter: filterReducer,
  error: errorReducer,
});

export default rootReducer;
