import PropTypes from 'prop-types';

const Filter = (props) => {
  const { onChange, filter } = props;

  return (
    <div className="filter">
      Filter by:
      <label htmlFor="categories">
        Category
        <input
          type="radio"
          id="category"
          name="filter"
          onChange={onChange}
          value="categories"
          checked={filter === 'categories'}
        />
      </label>
      <label htmlFor="ingredients">
        Ingredient
        <input
          type="radio"
          id="ingredients"
          name="filter"
          onChange={onChange}
          value="ingredients"
          checked={filter === 'ingredients'}
        />
      </label>
    </div>
  );
};

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
  filter: PropTypes.string,
};

Filter.defaultProps = {
  filter: 'categories',
};

export default Filter;
