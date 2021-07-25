import { combineReducers } from 'redux';
import dataReducer from './dataReducer';
import filterReducer from './filterReducer';
import loadedReducer from './loadedReducer';

const rootReducer = combineReducers({
  data: dataReducer,
  filter: filterReducer,
  loaded: loadedReducer,
});

export default rootReducer;
