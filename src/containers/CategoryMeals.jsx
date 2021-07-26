import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getByCategory } from '../actions';
import Card from '../components/Cards';

const CategoryMeals = () => {
  const dispatch = useDispatch();
  const { category } = useParams();
  const meals = useSelector((state) => state.meals.slice(0, 20));

  useEffect(() => {
    dispatch(getByCategory(category));
  }, []);

  // useEffect(() => {
  //   console.log(meals);
  // });

  return (
    <div className="container">
      <div className="cards">
        {meals.map((meal) => (
          <Card
            key={meal.idMeal}
            name={meal.strMeal}
            image={meal.strMealThumb}
            endPoint={`/meal/${meal.idMeal}`}
          />
        ))}
      </div>
    </div>
  );
};

export default CategoryMeals;
