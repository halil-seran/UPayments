import { createStore, combineReducers, applyMiddleware } from "redux";
import products from "./reducers/products";
import ReduxThunk from "redux-thunk";

const rootReducer = combineReducers({
  products: products,
});

const store = createStore(
  rootReducer,
  applyMiddleware(ReduxThunk) /*, composeWithDevTools()*/
); // for reactnative debugger tool

export default store;
