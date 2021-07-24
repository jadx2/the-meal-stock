import axios from 'axios';
import { GET_CATEGORIES } from './types';

/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable function-paren-newline */
const getCategories = () => (dispatch) => {
  axios.get('https://www.themealdb.com/api/json/v1/1/categories.php').then((data) =>
    dispatch({
      type: GET_CATEGORIES,
      payload: data.data.categories,
    }),
  );
};
/* eslint-enable */
export default getCategories;
