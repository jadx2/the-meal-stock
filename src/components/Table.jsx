import PropTypes from 'prop-types';

const Table = (props) => {
  const { ingredients } = props;

  return (
    <table>
      <thead>
        <tr>
          <td>Ingredient</td>
          <td>Measurement</td>
        </tr>
      </thead>
      <tbody>
        {ingredients.map((ingredient, i) => (
          <tr key={`${ingredient + i}`}>
            <td>{ingredient.ingredient}</td>
            <td>{ingredient.measure}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

Table.propTypes = {
  ingredients: PropTypes.arrayOf(
    PropTypes.shape({
      ingredient: PropTypes.string,
      measure: PropTypes.string,
    }),
  ).isRequired,
};

export default Table;
