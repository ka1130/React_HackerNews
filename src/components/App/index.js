import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Header from "components/Header";
import News from "components/News";

import styles from "./App.module.scss";

const App = () => {
  return (
    <div className={styles.container}>
      <Header />
      <BrowserRouter>
        <Route path="/" component={News} />
      </BrowserRouter>
    </div>
  );
};

export default App;
