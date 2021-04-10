import { render as rtlRender } from "@testing-library/react";
import React from "react";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";

import { rootReducer } from "../redux/store";

/* eslint-disable @typescript-eslint/no-explicit-any */
const render = (
  ui: React.ReactElement<
    any,
    | string
    | ((
        props: any
      ) => React.ReactElement<
        any,
        string | any | (new (props: any) => React.Component<any, any, any>)
      > | null)
    | (new (props: any) => React.Component<any, any, any>)
  >,
  {
    route = "/",
    initialState,
    store = createStore(rootReducer, initialState, applyMiddleware(thunk)),
    ...renderOptions
  }: any = {}
) => {
  window.history.pushState({}, "Test page", route);
  const Wrapper: React.FC = ({ children }) => {
    return <Provider store={store}>{children}</Provider>;
  };
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
};
/* eslint-enable @typescript-eslint/no-explicit-any */

// re-export everything
export * from "@testing-library/react";
// override render method
export { render };
