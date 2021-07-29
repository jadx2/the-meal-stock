import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {
  CHANGE_FILTER,
  GET_BY_CATEGORY,
  GET_BY_INGREDIENT,
  GET_MEAL_BY_ID,
  GET_SECTION,
} from '../../actions/types';
import {
  getByCategory,
  getSection,
  changeFilter,
  getByIngredient,
  getMealById,
} from '../../actions/index';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

let initialState = {
  data: [],
  meals: [],
  meal: {},
  filter: 'categories',
  error: null,
};

describe('It should modify the state values', () => {
  let store;
  beforeEach(() => {
    store = mockStore(initialState);
  });

  afterEach(() => {
    initialState = {
      data: [],
      meals: [],
      meal: {},
      filter: 'categories',
      error: null,
    };
  });

  it('Should retrieve the sections', () => {
    store
      .dispatch(getSection(['c', 'strCategory']))
      .then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual(GET_SECTION);
      })
      .catch((err) => err);
  });
  it('Should retrieve the meals by category', () => {
    store
      .dispatch(getByCategory('Breakfast'))
      .then(() => {
        const actions = store.getActions();
        expect(actions[1].type).toEqual(GET_BY_CATEGORY);
      })
      .catch((err) => err);
  });
  it('Should retrieve the meals by ingredient', () => {
    store
      .dispatch(getByIngredient('Chicken'))
      .then(() => {
        const actions = store.getActions();
        expect(actions[2].type).toEqual(GET_BY_INGREDIENT);
      })
      .catch((err) => err);
  });
  it('Should retrieve the meal details by id', () => {
    store
      .dispatch(getMealById('52874'))
      .then(() => {
        const actions = store.getActions();
        expect(actions[3].type).toEqual(GET_MEAL_BY_ID);
      })
      .catch((err) => err);
  });
  it('Should change the filter', () => {
    const filterAction = store.dispatch(changeFilter('categories'));
    expect(filterAction.type).toEqual(CHANGE_FILTER);
  });
});
