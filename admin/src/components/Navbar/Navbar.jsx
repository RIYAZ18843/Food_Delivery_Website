import React from "react";
import {Link} from 'react-router-dom'
import "./Navbar.css";
import { assets } from "../../assets/assets";

const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/">
        <span className="logo-text">Riyaz.</span>
      </Link>

      <img className="profile" src={assets.profile_image} alt="" />
    </div>
  );
};

export default Navbar;
