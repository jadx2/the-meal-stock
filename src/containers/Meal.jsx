import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getMealById } from '../actions';

const Meal = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const meal = useSelector((state) => state.meal);

  useEffect(() => {
    dispatch(getMealById(id));
  }, []);

  useEffect(() => {
    console.log(meal);
  });

  return (
    <div>
      <h1>Meal</h1>
    </div>
  );
};

export default Meal;
