import React, {useEffect, useState} from "react";
// import { BiMenuAltRight } from "react-icons/bi";
import logo from "../../images/dog-logo.png";
import logoTranspirent from "../../images/dog-logo2.png";
import {Link, useNavigate} from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";
import "./navbar.scss";

function Navbar({minimal, authToken, setShowModel, showModel}) {
  const handleClick = (e) => {
    e.preventDefault();
    setShowModel(true);
  };
  return (
    <nav>
      <div className="logo-container">
        <img className="logo" src={minimal ? logo : logoTranspirent} />
      </div>
      {!authToken && (
        <button
          className="nav-button"
          onClick={handleClick}
          disabled={showModel}
        >
          Log In
        </button>
      )}
    </nav>
  );
}

export default Navbar;
