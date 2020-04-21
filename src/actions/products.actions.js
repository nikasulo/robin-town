import { API, types } from "./components";

const recieveProducts = (products, productType) => ({
  type: types.RECIEVE_PRODUCTS,
  productType,
  products,
})

export const fetchProducts = (limit, type) => async(dispatch) => {
  const parameters = {
    "country": "US",
    "currency": "USD",
    "sort": "freshness",
    "lang": "en-US",
    "sizeSchema": "US",
    "offset": "0",
    "categoryId": "4209",
    limit,
    "store": "US"
  }

  try {
    const { data } = await API.get('/products/v2/list', {params: parameters})
    const { products } = data;
    dispatch(recieveProducts(products, type));
  } catch(error) {
    console.log(error)
  }
};