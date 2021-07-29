import sectionSelector from '../../helpers/sectionSelector';

describe('it returns an array according to the paramater', () => {
  it('Returns an array with items "c" and "strCategory"', () => {
    expect(sectionSelector('categories')).toStrictEqual(['c', 'strCategory']);
  });
  it('Returns an array with item "i" and "strIngredient"', () => {
    expect(sectionSelector('ingredients')).toStrictEqual([
      'i',
      'strIngredient',
    ]);
  });
  it('Returns an array with items "c" and "strCategory" as default', () => {
    expect(sectionSelector('beef')).toStrictEqual(['c', 'strCategory']);
  });
});
