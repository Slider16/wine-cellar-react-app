import React from "react";
// import { NavLink } from "react-router-dom";

function Header() {
  //   const activeStyle = { color: "orange" };
  return (
    <nav>
      <a href="/">Home</a> | <a href="/wines">Wines</a> |{" "}
      <a href="/about">About</a>
    </nav>

    // <nav>
    //   <NavLink activeStyle={activeStyle} exact to="/">
    //     Home
    //   </NavLink>
    //   {" | "}
    //   <NavLink activeStyle={activeStyle} to="/courses">
    //     Courses
    //   </NavLink>
    //   {" | "}
    //   <NavLink activeStyle={activeStyle} to="/about">
    //     About
    //   </NavLink>
    // </nav>
  );
}

export default Header;
