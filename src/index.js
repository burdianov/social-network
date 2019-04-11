import "./index.css";
import * as serviceWorker from "./serviceWorker";
import store from "./redux/reduxStore";

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

const rerenderEntireTree = state => {
  ReactDOM.render(
    <BrowserRouter>
      <App state={state} dispatch={store.dispatch.bind(store)} store={store} />
    </BrowserRouter>,
    document.getElementById("root")
  );
};

rerenderEntireTree(store.getState());

store.subscribe(() => {
  const state = store.getState();
  rerenderEntireTree(state);
});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
