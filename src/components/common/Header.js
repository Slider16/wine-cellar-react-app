import React from "react";
// import { NavLink } from "react-router-dom";

function Header() {
  //   const activeStyle = { color: "orange" };
  return (
    <nav>
      <a href="/">Home</a> | <a href="/wines">Wines</a> |{" "}
      <a href="/editwines">Edit Wines</a> |<a href="/about">About</a>
    </nav>
  );
}

export default Header;
