const sectionSelector = (filter) => {
  switch (filter) {
    case 'categories':
      return ['c', 'strCategory'];
    case 'ingredients':
      return ['i', 'strIngredient'];
    default:
      return ['c', 'strCategory'];
  }
};

export default sectionSelector;
