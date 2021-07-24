import axios from 'axios';
import GET_RECIPES from './types';

const getRecipes = (dispatch) => {
  axios
    .get('https://www.themealdb.com/api/json/v1/1/random.php')
    .then((res) => res.json())
    .then((recipe) =>
      dispatch({
        type: GET_RECIPES,
        payload: recipe,
      }),
    );
};

export default getRecipes;
