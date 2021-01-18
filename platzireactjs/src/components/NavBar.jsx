import React from "react";
import { Link } from "react-router-dom";
import PlatziLogo from "../images/PlatziLogo.png";
import "../pages/styles/BadgeNew.scss";
class NavBar extends React.Component {
  render() {
    return (

      <nav className="navbar navbar-dark bg-dark">
        <Link to="/badges">
          <img
            src={PlatziLogo}
            alt="PlatziLogo"
            width="50"
            height="50"
            className="d-inline-block align-top"
          ></img>
            <span className="font-weight-light">Platzi</span>
            <span className="font-weight-bold">Conf</span>
        </Link>
      </nav>
    );
  }
}

export default NavBar;
