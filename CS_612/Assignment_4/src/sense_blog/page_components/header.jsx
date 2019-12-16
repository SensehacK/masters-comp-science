import React, { Component } from "react";
import { HashRouter, NavLink } from "react-router-dom";
class Header extends Component {
  state = {};
  render() {
    return (
      <HashRouter>
        <header>
          <ul className="social">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/post1">Post1</NavLink>
            </li>
            <li>
              <NavLink to="/post2">Post2</NavLink>
            </li>
            <li>
              <NavLink to="/post3">Post3</NavLink>
            </li>
          </ul>
        </header>
      </HashRouter>
    );
  }
}

export default Header;
