import {
  DELETE_PRODUCT,
  CREATE_PRODUCT,
  GET_PRODUCTS,
} from "../actions/products";

const INITIAL_STATE = {
  products: [],
};

const Products = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return { ...state, products: action.payload };
    case CREATE_PRODUCT:
      return;
    case DELETE_PRODUCT:
      return;
    default:
      return state;
  }
};

export default Products;
