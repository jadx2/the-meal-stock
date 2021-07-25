import PropTypes from 'prop-types';

const Filter = (props) => {
  const { onChange, filter } = props;

  return (
    <>
      <label htmlFor="category">
        Category
        <input
          type="radio"
          id="category"
          name="filter"
          onChange={onChange}
          value="category"
          checked={filter === 'category'}
        />
      </label>
      <label htmlFor="ingredient">
        Ingredient
        <input type="radio" id="ingredient" name="filter" onChange={onChange} value="ingredient" />
      </label>
    </>
  );
};

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};

export default Filter;
