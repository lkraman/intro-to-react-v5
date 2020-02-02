import React from "react";
import { render } from "react-dom";
import Company from "./Company";

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "T&B Solution"),
    React.createElement(Company, {
      companyName: "Mushroom Express",
      owner: "Javier Gonzales",
      location: "Kennett Square, PA"
    }),
    React.createElement(Company, {
      companyName: "Cafe Americana",
      owner: "Manuel Olivares",
      location: "Kennett Square, PA"
    }),
    React.createElement(Company, {
      companyName: "Cafe Bistro",
      owner: "Sal Smith",
      location: "Kennett Square, PA"
    })
  ]);
};

render(React.createElement(App), document.getElementById("root"));

//name = companyName
//animal = owner
//breed = location
