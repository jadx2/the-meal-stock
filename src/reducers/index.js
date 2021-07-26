import { combineReducers } from 'redux';
import dataReducer from './dataReducer';
import filterReducer from './filterReducer';
import loadedReducer from './loadedReducer';
import mealsReducer from './mealsReducer';
import mealReducer from './mealReducer';

const rootReducer = combineReducers({
  data: dataReducer,
  meals: mealsReducer,
  meal: mealReducer,
  filter: filterReducer,
  loaded: loadedReducer,
});

export default rootReducer;
