import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  //   const activeStyles = {
  //     fontWeight: "bold",
  //     textDecoration: "underline",
  //     color: "#161616"
  // }

  return (
    <div>
      <header>
        <Link to="/" className="logo-text">
          #VANLIFE
        </Link>
        <nav>
          <NavLink
            to="/host"
            className={({ isActive }) => (isActive ? "active-link" : null)}
          >
            Host
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? "active-link" : null)}
          >
            About
          </NavLink>
          <NavLink
            to="/Vans"
            className={({ isActive }) => (isActive ? "active-link" : null)}
          >
            Vans
          </NavLink>
        </nav>
      </header>
    </div>
  );
};

export default Header;
