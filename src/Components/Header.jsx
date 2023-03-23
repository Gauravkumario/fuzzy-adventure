import React from "react";
import { Link, NavLink } from "react-router-dom";
import profileIcon from "../assets/images/profile-icon.png";
import LogoutIcon from "../../src/assets/images/logout.svg";

const Header = () => {
  //   const activeStyles = {
  //     fontWeight: "bold",
  //     textDecoration: "underline",
  //     color: "#161616"
  // }

  function fakeLogOut() {
    localStorage.removeItem("loggedin");
  }

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
          <Link to="login" className="loginLink">
            <img src={profileIcon} alt="profile" className="loginIcon" />
          </Link>
          <button onClick={fakeLogOut} className="navbar-logout-btn">
            <img src={LogoutIcon} alt="logout" />
          </button>
        </nav>
      </header>
    </div>
  );
};

export default Header;
