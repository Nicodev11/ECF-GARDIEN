import React from "react";
import { NavLink } from "react-router-dom";
import '../assets/fonts/DancingScript-Regular.ttf'
import styled from "styled-components";

const Navigation = () => {
  return (
    <Nav className="navbar navbar-expand-lg p-3 mb-2">
        <div class="container-fluid">
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <NavLink className="nav-link" to="/">
                  Accueil
                </NavLink>
              </li>
              <li class="nav-item">
                <NavLink className="nav-link" to="/La-restaurant">
                  Le restaurant
                </NavLink>
              </li>
              <li class="nav-item">
                <NavLink className="nav-link" to="/La-carte">
                  La carte
                </NavLink>
              </li>
              <li class="nav-item">
                <NavLink className="nav-link" to="/contact">
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
    </Nav>
  );
};

const Nav = styled.div`

  position: absolute;
  background-color: #f0f8ff85;
  top: 0;
  width: 100%;
  z-index: 2;

  .navbar-brand {
    img {
      width: 250px;
    }
  }

  .navbar-nav {
    display: flex;
    width: 60%;
    margin: auto;
    justify-content: space-around;
  }

  .nav-link {
    font-family: 'fontMenu';
    font-size: 2.5rem;
    color: orange;
  }
  .nav-link.active {
    color: orange;
    border-bottom: 3px solid orange;
  }
`;

export default Navigation;
