import React from "react";

import "./NavLinks.css"

const NavLinks = props => {
    return   <ul className="nav-links">
        <li>
            <NavLinks to="/">ALL USERS</NavLinks>
        </li>
        <li>
            <NavLinks to="/">MY PLACES</NavLinks>
        </li>
        <li>
            <NavLinks to="/">ADD PLACE</NavLinks>
        </li>
        <li>
            <NavLinks to="/">AUTHENTICATE</NavLinks>
        </li>
    </ul>
  };
  export default NavLinks;