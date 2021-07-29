import getImage from '../../helpers/getImage';

describe('Returns the base URL according to the filter', () => {
  it('Returns the URL for the categories section', () => {
    expect(getImage('breakfast', 'categories')).toStrictEqual(
      'https://www.themealdb.com/images/category/breakfast.png',
    );
  });
  it('Returns the URL for the ingredients section', () => {
    expect(getImage('chicken breast', 'ingredients')).toStrictEqual(
      'https://www.themealdb.com/images/ingredients/chicken%20breast.png',
    );
  });
  it('Returns the URL for the categories section as default', () => {
    expect(getImage('breakfast', 'breakfast')).toStrictEqual(
      'https://www.themealdb.com/images/category/breakfast.png',
    );
  });
});
