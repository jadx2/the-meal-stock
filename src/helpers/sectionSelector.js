const sectionSelector = (filter) => {
  switch (filter) {
    case 'category':
      return ['c', 'strCategory'];
    case 'ingredient':
      return ['i', 'strIngredient'];
    default:
      return ['c', 'strCategory'];
  }
};

export default sectionSelector;
