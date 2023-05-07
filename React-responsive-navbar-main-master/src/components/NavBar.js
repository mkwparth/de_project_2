import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

import { AccountCircle, Construction } from "@mui/icons-material";
import { Autocomplete, Grid, Input, Stack, TextField } from "@mui/material";
import Searchbr from "./Searchbr";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FreeSoloCreateOption from "./srchbar_auto";
import ComboBox from "./srchbar_auto";

function NavBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <nav
        className="navbar"
        // style={{ display: "flex", justifyContent: "space-between" }}
      >
        <div className="nav-container">
          <NavLink exact to="/" className="nav-logo mb-3">
            LabourLink
            <Construction sx={{ marginLeft: "10px", fontSize:"30px" }} />
          </NavLink>

          {/* <Searchbr /> */}
          <ComboBox />

          {/* <div class="input-group mb-3">
              <div class="input-group-prepend">
                <span class="input-group-text" id="basic-addon1">@</span>
              </div>
              <TextField type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
          </div> */}

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/about"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/blog"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Feedback
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/contact"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Contact
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/contact"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                <AccountCircle style={{fontSize:"30px"}}/>
              </NavLink>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
