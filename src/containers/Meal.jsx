import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getMealById } from '../actions';
import formatIngredients from '../helpers/formatIngredients';
import Table from '../components/Table';

const Meal = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const meal = useSelector((state) => state.meal);

  useEffect(() => {
    dispatch(getMealById(id));
  }, []);

  return (
    <div>
      <h1>{meal.strMeal}</h1>
      <div>
        <figure>
          <img src={meal.strMealThumb} alt="" />
        </figure>
        <Table ingredients={formatIngredients(meal)} />
      </div>
      <p>{meal.strInstructions}</p>
    </div>
  );
};

export default Meal;
