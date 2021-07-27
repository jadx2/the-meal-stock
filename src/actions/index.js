import axios from 'axios';
import {
  GET_SECTION,
  CHANGE_FILTER,
  CHANGE_LOADED,
  GET_BY_CATEGORY,
  GET_BY_INGREDIENT,
  GET_MEAL_BY_ID,
  GET_ERROR,
} from './types';

const getSection = (query) => (dispatch) => {
  axios
    .get(`https://www.themealdb.com/api/json/v1/1/list.php?${query[0]}=list`)
    .then((data) => {
      const { meals } = data.data;
      const mealsArr = meals.map((meal) => meal[query[1]]);
      dispatch({
        type: GET_SECTION,
        payload: mealsArr,
      });
    })
    .catch((error) => ({ type: GET_ERROR, error }));
};

const getByCategory = (category) => (dispatch) => {
  axios
    .get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
    .then((data) => {
      const { meals } = data.data;
      dispatch({
        type: GET_BY_CATEGORY,
        payload: meals,
      });
    })
    .catch((error) => ({ type: GET_ERROR, error }));
};

const getByIngredient = (ingredient) => (dispatch) => {
  axios
    .get(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`)
    .then((data) => {
      const { meals } = data.data;
      dispatch({
        type: GET_BY_INGREDIENT,
        payload: meals,
      });
    })
    .catch((error) => ({ type: GET_ERROR, error }));
};

const getMealById = (id) => (dispatch) => {
  axios
    .get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
    .then((data) => {
      dispatch({
        type: GET_MEAL_BY_ID,
        payload: data.data.meals[0],
      });
    })
    .catch((error) => ({ type: GET_ERROR, error }));
};

const changeFilter = (filter) => ({
  type: CHANGE_FILTER,
  payload: filter,
});

const changeLoaded = (loaded) => ({
  type: CHANGE_LOADED,
  payload: loaded,
});

export {
  getSection,
  changeFilter,
  changeLoaded,
  getByCategory,
  getByIngredient,
  getMealById,
};
