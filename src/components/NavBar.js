import React from "react";
import { NavLink } from "react-router-dom";
import Directors from "./Directors";
import Home from "./Home";
import Movies from "./Movies";

function NavBar() {
  return <div>
    <nav>
    <NavLink exact to="/">Home</NavLink>
    <NavLink to="/movies">Movies</NavLink>
    <NavLink to="/directors">Directors</NavLink>
    <NavLink to ="/actors">Actors</NavLink>
      </nav>
  </div>;
}

export default NavBar;
