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
    <div className="container">
      <h2 className="meal-title">{meal.strMeal}</h2>
      <div className="meal-overview">
        <figure className="meal-img">
          <img src={meal.strMealThumb} alt="" />
        </figure>
        <Table ingredients={formatIngredients(meal)} />
      </div>
      <p className="instructions">{meal.strInstructions}</p>
      <a
        href={meal.strSource}
        className="source"
        target="_blank"
        rel="noreferrer"
      >
        Original Recipe
      </a>
    </div>
  );
};

export default Meal;
