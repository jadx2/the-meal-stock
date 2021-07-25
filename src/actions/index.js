import axios from 'axios';
import { GET_SECTION, CHANGE_FILTER, CHANGE_LOADED } from './types';

const getSection = (query) => (dispatch) => {
  axios.get(`https://www.themealdb.com/api/json/v1/1/list.php?${query[0]}=list`).then((data) => {
    const { meals } = data.data;
    const mealsArr = meals.map((meal) => meal[query[1]]);
    dispatch({
      type: GET_SECTION,
      payload: mealsArr,
    });
  });
};

const changeFilter = (filter) => ({
  type: CHANGE_FILTER,
  payload: filter,
});

const changeLoaded = (loaded) => ({
  type: CHANGE_LOADED,
  payload: loaded,
});

export { getSection, changeFilter, changeLoaded };
