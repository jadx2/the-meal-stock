import formatIngredients from '../../helpers/formatIngredients';

describe('Returns an array of objects of the occurrances of the key pair values gien in the object', () => {
  it('Returns the array of objects', () => {
    const meal = {
      strMealThumb:
        'https://www.themealdb.com/images/media/meals/020z181619788503.jpg',
      strIngredient1: 'Chicken Thighs',
      strIngredient2: 'Challots',
      strIngredient3: 'Ginger',
      strIngredient4: 'Garlic Clove',
      strIngredient5: 'Cayenne Pepper',
      strIngredient6: 'Turmeric',
      strIngredient7: 'Cumin',
      strIngredient8: 'Coriander',
      strIngredient9: 'Fennel',
      strIngredient10: 'Tamarind Paste',
      strIngredient11: 'Coconut Milk',
      strIngredient12: 'Sugar',
      strIngredient13: 'Water',
      strIngredient14: '',
      strIngredient15: '',
      strIngredient16: '',
      strIngredient17: '',
      strIngredient18: '',
      strIngredient19: '',
      strIngredient20: '',
      strMeasure1: '6',
      strMeasure2: '16',
      strMeasure3: '1 1/2 ',
      strMeasure4: '6',
      strMeasure5: '8',
      strMeasure6: '2 tbs',
      strMeasure7: '1 1/2 ',
      strMeasure8: '1 1/2 ',
      strMeasure9: '1 1/2 ',
      strMeasure10: '2 tbs',
      strMeasure11: '1 can ',
      strMeasure12: '1 tsp ',
      strMeasure13: '1 cup ',
      strMeasure14: ' ',
      strMeasure15: ' ',
      strMeasure16: ' ',
      strMeasure17: ' ',
      strMeasure18: ' ',
      strMeasure19: ' ',
      strMeasure20: ' ',
    };
    const result = [
      { ingredient: 'Chicken Thighs', measure: '6' },
      { ingredient: 'Challots', measure: '16' },
      { ingredient: 'Ginger', measure: '1 1/2 ' },
      { ingredient: 'Garlic Clove', measure: '6' },
      { ingredient: 'Cayenne Pepper', measure: '8' },
      { ingredient: 'Turmeric', measure: '2 tbs' },
      { ingredient: 'Cumin', measure: '1 1/2 ' },
      { ingredient: 'Coriander', measure: '1 1/2 ' },
      { ingredient: 'Fennel', measure: '1 1/2 ' },
      { ingredient: 'Tamarind Paste', measure: '2 tbs' },
      { ingredient: 'Coconut Milk', measure: '1 can ' },
      { ingredient: 'Sugar', measure: '1 tsp ' },
      { ingredient: 'Water', measure: '1 cup ' },
    ];

    expect(formatIngredients(meal)).toStrictEqual(result);
  });
});
