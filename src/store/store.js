import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

const initialState = {
  data: [],
  meals: [],
  meal: {},
  filter: 'categories',
  loaded: false,
  error: null,
};

/* eslint-disable no-underscore-dangle */
/* eslint-disable operator-linebreak */
const store = createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__(),
  ),
);
/* eslint-enable */

export default store;
