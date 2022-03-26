import React from "react";
import { Navigation } from "./navigation";
import { Provider } from "react-redux";
import store from "./store/store";

export default function App({ route }) {
  return (
    <>
      <Provider store={store}>
        <Navigation />
      </Provider>
    </>
  );
}
