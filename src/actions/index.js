import axios from 'axios';
import {
  GET_SECTION,
  CHANGE_FILTER,
  GET_BY_CATEGORY,
  GET_BY_INGREDIENT,
  GET_MEAL_BY_ID,
  GET_ERROR,
} from './types';

const getSection = (query) => async (dispatch) => {
  try {
    const res = await axios.get(
      `https://themealdb.com/api/json/v1/1/list.php?${query[0]}=list}`,
    );

    const { meals } = res.data;
    const mealsArr = meals.map((meal) => meal[query[1]]);

    dispatch({
      type: GET_SECTION,
      payload: mealsArr,
    });
  } catch (error) {
    dispatch({ type: GET_ERROR, error });
  }
};

const getByCategory = (category) => async (dispatch) => {
  try {
    const res = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`,
    );
    dispatch({
      type: GET_BY_CATEGORY,
      payload: res.data.meals,
    });
  } catch (error) {
    dispatch({ type: GET_ERROR, error });
  }
};

const getByIngredient = (ingredient) => async (dispatch) => {
  try {
    const res = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`,
    );
    dispatch({
      type: GET_BY_INGREDIENT,
      payload: res.data.meals,
    });
  } catch (error) {
    dispatch({ type: GET_ERROR, error });
  }
};

const getMealById = (id) => async (dispatch) => {
  try {
    const res = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`,
    );
    dispatch({
      type: GET_MEAL_BY_ID,
      payload: res.data.meals[0],
    });
  } catch (error) {
    dispatch({ type: GET_ERROR, error });
  }
};

const changeFilter = (filter) => ({
  type: CHANGE_FILTER,
  payload: filter,
});

export {
  getSection,
  changeFilter,
  getByCategory,
  getByIngredient,
  getMealById,
};
