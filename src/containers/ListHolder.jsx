import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getSection, changeFilter } from '../actions';
import sectionSelector from '../helpers/sectionSelector';
import getImage from '../helpers/getImage';
import Card from '../components/cards';
import Filter from '../components/Filter';

const ListHolder = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data);
  const filter = useSelector((state) => state.filter);

  useEffect(() => {
    dispatch(getSection(sectionSelector(filter)));
  }, [filter]);

  const handleFilterChange = (e) => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <main className="main">
      <div className="container">
        <div className="filter">
          <Filter onChange={handleFilterChange} filter={filter} />
        </div>
        <div className="cards">
          {data.map((item) => (
            <Card key={item} name={item} image={getImage(item, filter)} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default ListHolder;
