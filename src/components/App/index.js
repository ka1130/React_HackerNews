import React from "react";
import Header from "components/Header";
import { BrowserRouter, Route } from "react-router";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <h1>app</h1>
      </BrowserRouter>
    </div>
  );
};

export default App;
