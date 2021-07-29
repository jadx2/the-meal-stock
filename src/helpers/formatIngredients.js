/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable function-paren-newline */
const formatIngredients = (meal) => {
  const ingredientsArr = Object.entries(meal).filter((key) =>
    /strIngredient/.test(key),
  );
  const measureArr = Object.entries(meal).filter((key) =>
    /strMeasure/.test(key),
  );

  const ingredients = [];

  for (let i = 0; i < ingredientsArr.length; i += 1) {
    const ingredient = ingredientsArr[i];
    const measure = measureArr[i];

    if (ingredient[1].length > 0) {
      ingredients.push({ ingredient: ingredient[1], measure: measure[1] });
    }
  }

  return ingredients;
};
/* eslint-enable */

export default formatIngredients;
