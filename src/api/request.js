import axios from 'axios';

export const endpoint =
  'https://my-json-server.typicode.com/benirvingplt/products/products';

export async function getProducts() {
  try {
    return await axios.get(endpoint);
  } catch (error) {
    return { error };
  }
}

export async function getSingleProduct(id) {
  try {
    return await axios.get(`${endpoint}/${id}`);
  } catch (error) {
    return { error };
  }
}