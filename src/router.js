import React from "react";
import Moviegrid from "./components/Moviegrid";
import Movie from "./components/Movie";
const routes = {
  "/": () => <Moviegrid />,
  "/movie": () => <Movie />
};

export default routes;
