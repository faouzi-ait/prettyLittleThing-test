import {
  LOADING_PRODUCTS,
  GET_HOME_PAGE_PRODUCTS_SUCCESS,
  GET_HOME_PAGE_PRODUCTS_FAILURE,
  LOADING_PRODUCT,
  GET_SINGLE_PRODUCT_SUCCESS,
  GET_SINGLE_PRODUCT_FAILURE,
  ADD_ITEM,
  REMOVE_ITEM,
  ADD_ONE,
  REMOVE_ONE,
} from './constants';

const initialState = {
  products: null,
  errors: null,
  loading: false,
};

const singleProductState = {
  product: null,
  error: null,
  loading: false,
};

const basketState = {
  cart: [],
};

export const products = (state = initialState, action) => {
  switch (action.type) {
    case GET_HOME_PAGE_PRODUCTS_SUCCESS:
      return { ...state, products: action.payload };
    case GET_HOME_PAGE_PRODUCTS_FAILURE:
      return { ...state, errors: action.payload };
    case LOADING_PRODUCTS:
      return { ...state, loading: action.payload };
    default:
      return state;
  }
};

export const singleProduct = (state = singleProductState, action) => {
  switch (action.type) {
    case GET_SINGLE_PRODUCT_SUCCESS:
      return { ...state, product: action.payload };
    case GET_SINGLE_PRODUCT_FAILURE:
      return { ...state, error: action.payload };
    case LOADING_PRODUCT:
      return { ...state, loading: action.payload };
    default:
      return state;
  }
};

export const basket = (state = basketState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      const newBasket = [...state.cart];
      newBasket.push({ ...action.payload, quantity: 1 });
      return { ...state, cart: newBasket };
    case REMOVE_ITEM:
      const currentBasket = [...state.cart];
      const updatedBasket = currentBasket.filter(
        (item) => item.id !== action.payload
      );
      return { ...state, cart: updatedBasket };
    case ADD_ONE:
      let basket = [...state.cart];
      let item = basket.find((item) => item.id === action.payload);
      let indexOfItem = basket.indexOf(item);

      item.quantity = item.quantity + 1;
      basket.splice(indexOfItem, 1, item);

      return { ...state, cart: basket };
    case REMOVE_ONE:
      let cart = [...state.cart];
      const itemToUpdate = cart.find((item) => item.id === action.payload);
      let indexToRemove = cart.indexOf(itemToUpdate);

      if (itemToUpdate.quantity >= 1) {
        itemToUpdate.quantity = itemToUpdate.quantity - 1;
        cart.splice(indexToRemove, 1, itemToUpdate);
      }

      if (itemToUpdate.quantity === 0) {
        cart = cart.filter((item) => item.id !== action.payload);
      }

      return { ...state, cart };
    default:
      return state;
  }
};
