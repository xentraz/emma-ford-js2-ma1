async function fetchProducts(url) {
  try {
      const response = await fetch(url);
      const data = await response.json();
      const array = data;
      console.log(array);

      return array;
  } catch (error) {
      console.log(error);
  }
}

export default fetchProducts;

