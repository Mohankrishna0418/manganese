import React from "react";
import "./NavigationBar.css"; // Import the CSS file for styling
import { NavLink } from "react-router";

const NavigationBar = (): React.ReactNode => {
  return (
    <div className="navigation-bar">
      <ul className="navigation-bar-links">
        <li>
          <NavLink to="/product">Products</NavLink>
        </li>
        <li>
          <NavLink to="/developer">developers</NavLink>
        </li>
        <li>
          <NavLink to="/enterprise">Enterprise</NavLink>
        </li>
        <li>
          <NavLink to="/pricing">Pricing</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default NavigationBar;
