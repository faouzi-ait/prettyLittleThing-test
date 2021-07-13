import {
  LOADING_PRODUCTS,
  LOADING_PRODUCT,
  GET_HOME_PAGE_PRODUCTS,
  GET_SINGLE_PRODUCT,
  GET_HOME_PAGE_PRODUCTS_SUCCESS,
  GET_SINGLE_PRODUCT_SUCCESS,
  GET_HOME_PAGE_PRODUCTS_FAILURE,
  GET_SINGLE_PRODUCT_FAILURE,
  RESET_SINGLE_PRODUCT,
  
  ADD_ITEM,
  ADD_ONE,
  REMOVE_ONE,
  REMOVE_ITEM,
  EMPTY_BASKET,
} from './constants';

// HOME PAGE LISTING ACTIONS
export const getHomePageProducts = (payload) => {
  return { type: GET_HOME_PAGE_PRODUCTS, payload };
};

export const getHomePageProductSuccess = (payload) => {
  return { type: GET_HOME_PAGE_PRODUCTS_SUCCESS, payload };
};

export const getHomePageProductFailure = (payload) => {
  return { type: GET_HOME_PAGE_PRODUCTS_FAILURE, payload };
};

export const loadingHomePageProducts = (payload) => {
  return { type: LOADING_PRODUCTS, payload };
};

// PRODUCT DETAILS PAGE LISTING ACTIONS
export const getSingleProduct = (payload) => {
  return { type: GET_SINGLE_PRODUCT, payload };
};

export const getSingleProductSuccess = (payload) => {
  return { type: GET_SINGLE_PRODUCT_SUCCESS, payload };
};

export const getSingleProductFailure = (payload) => {
  return { type: GET_SINGLE_PRODUCT_FAILURE, payload };
};

export const resetSingleProduct = () => {
  return { type: RESET_SINGLE_PRODUCT };
};

export const loadingSingleProduct = (payload) => {
  return { type: LOADING_PRODUCT, payload };
};

// BASKET ACTIONS
export const addOne = (payload) => {
  return { type: ADD_ONE, payload };
};

export const addItem = (payload) => {
  return { type: ADD_ITEM, payload };
};

export const removeOne = (payload) => {
  return { type: REMOVE_ONE, payload };
};

export const removeItem = (payload) => {
  return { type: REMOVE_ITEM, payload };
};

export const emptyBasket = (payload) => {
  return { type: EMPTY_BASKET, payload };
};
