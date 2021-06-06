import { render as rtlRender } from "@testing-library/react";
import { createStore, applyMiddleware } from "redux";
import * as ReactRedux from "react-redux";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import reducer from "./reducers";

const middleware: any = [thunk];
const mockStore = configureStore(middleware);

const render = (ui: any, initialStore = {}, options = {}) => {
  const store = createStore(reducer, initialStore, applyMiddleware(thunk));
  const Providers = ({ children }: any) => (
    <ReactRedux.Provider store={store}>{children}</ReactRedux.Provider>
  );
  return rtlRender(ui, { wrapper: Providers, ...options });
};

export * from "@testing-library/react";

export { render, mockStore };
