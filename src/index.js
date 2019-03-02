import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";

import store from "redux/store";

import Header from "components/Header";
import Stories from "components/Stories";
import User from "components/User";

import "./index.css";

ReactDOM.render(
  <Provider store={store}>
    <>
      <Header />
      <BrowserRouter>
        <>
          <Route exact path="/" component={Stories} />
          <Route path="/user/:id" component={User} />
        </>
      </BrowserRouter>
    </>
  </Provider>,
  document.getElementById("root")
);
