import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import getCategories from '../actions';

const listHolder = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data);

  useEffect(() => {
    dispatch(getCategories());
  }, []);

  return (
    <>
      <ul>
        {data.map((item) => (
          <li key={item.idCategory}>{item.strCategory}</li>
        ))}
      </ul>
    </>
  );
};

export default listHolder;
