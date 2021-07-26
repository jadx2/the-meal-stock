const pagination = (array) => {
  const size = 20;
  const pages = [];
  let index = 0;
  while (index < array.length) {
    pages.push(array.slice(index, size + index));
    index += size;
  }
  return pages[0];
};

export default pagination;
