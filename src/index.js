import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";

import store from "redux/store";

import Header from "components/Header";
import News from "components/News";

import "./index.css";

ReactDOM.render(
  <Provider store={store}>
    <>
      <Header />
      <BrowserRouter>
        <Route path="/" component={News} />
      </BrowserRouter>
    </>
  </Provider>,
  document.getElementById("root")
);
