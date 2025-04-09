import React from "react";
import "./NavigationBar.css"; // Import the CSS file for styling
import { NavLink, useLocation } from "react-router";
import { useAnimalStore } from "./hooks/animals-Store/animals-store";

const NavigationBar = (): React.ReactNode => {
  const location = useLocation();
  const currentRoute = location.pathname; // Get the current route
  const {animals} = useAnimalStore();
  return (
    <div className="navigation-bar">
      <ul className="navigation-bar-links">
        <li>
          <NavLink
            to="/product"
            className={
              currentRoute === "/product" ? "navigation-link-active" : ""
            }
          >
            Products
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/developer"
            className={
              currentRoute === "/developer" ? "navigation-link-active" : ""
            }
          >
            Developers
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/enterprise"
            className={
              currentRoute === "/enterprise" ? "navigation-link-active" : ""
            }
          >
            Enterprise
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/pricing"
            className={
              currentRoute === "/pricing" ? "navigation-link-active" : ""
            }
          >
            Pricing
          </NavLink>
        </li>
        <li>
          Bears: {animals}
        </li>
      </ul>
    </div>
  );
};

export default NavigationBar;
