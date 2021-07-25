const getImage = (item, filter) => {
  switch (filter) {
    case 'category':
      return `https://www.themealdb.com/images/category/${item.toLowerCase()}.png`;
    case 'ingredient':
      return `https://www.themealdb.com/images/ingredients/${item.replace(' ', '%20')}.png`;
    default:
      return `https://www.themealdb.com/images/category/${item.toLowerCase()}.png`;
  }
};

export default getImage;
