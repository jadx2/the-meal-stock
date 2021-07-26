const getImage = (item, filter) => {
  switch (filter) {
    case 'categories':
      return `https://www.themealdb.com/images/category/${item.toLowerCase()}.png`;
    case 'ingredients':
      return `https://www.themealdb.com/images/ingredients/${item.replace(
        ' ',
        '%20',
      )}.png`;
    default:
      return `https://www.themealdb.com/images/category/${item.toLowerCase()}.png`;
  }
};

export default getImage;
