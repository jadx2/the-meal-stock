import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getByIngredient } from '../actions';

const IngredientMeals = () => {
  const dispatch = useDispatch();
  const { ingredient } = useParams();
  const meals = useSelector((state) => state.meals.slice(0, 20));

  useEffect(() => {
    dispatch(getByIngredient(ingredient));
  }, []);

  useEffect(() => {
    console.log(meals);
  });

  return (
    <>
      <h1>Ingredient</h1>
    </>
  );
};

export default IngredientMeals;
