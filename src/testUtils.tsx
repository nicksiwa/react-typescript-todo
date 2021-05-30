import React from "react";
import { render as rtlRender } from "@testing-library/react";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import reducer from "./reducers";

const render = (ui: any, initialStore = {}, options = {}) => {
  const store = createStore(reducer, initialStore, applyMiddleware(thunk));
  const Providers = ({ children }: any) => (
    <Provider store={store}>{children}</Provider>
  );
  return rtlRender(ui, { wrapper: Providers, ...options });
};

export * from "@testing-library/react";

export { render };
