import React from "react";
import Header from "components/Header";
import { BrowserRouter, Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Header />
      <BrowserRouter>
        <h1>app</h1>
      </BrowserRouter>
    </div>
  );
};

export default App;
