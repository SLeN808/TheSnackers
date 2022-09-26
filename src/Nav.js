import React from "react";
import "./Nav.css";

function Nav() {
  return (
    <div className="nav">
      <div className="nav_left">
        <h1>
          The<span className="span_brand">Snackers</span>
        </h1>
      </div>
      <div className="nav_right">
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>FAQ's</li>
          <li>Menu</li>
          <li>Register</li>
        </ul>
      </div>
    </div>
  );
}

export default Nav;
