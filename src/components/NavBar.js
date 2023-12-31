import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function NavBar(props) {
  const btnBox = {
    cursor: "pointer",
  };
  
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          {props.title}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to='/'>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/about">
                About
              </Link>
            </li>
          </ul>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="/"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <div className="button btn btn-success">
                Select theme
              </div>
            </a>
            <ul className="dropdown-menu" style={btnBox}>
              <li style={{ backgroundColor: 'grey', borderRadius: "30px" }} onClick={() => props.toggleMode('grey')}>
                Dark
              </li>
              <li style={{ backgroundColor: 'white', borderRadius: "30px" }} onClick={() => props.toggleMode('white')}>
                Light
              </li>
              <li style={{ backgroundColor: 'green', borderRadius: "30px" }} onClick={() => props.toggleMode('green')}>
                Green
              </li>
              <li style={{ backgroundColor: 'violet', borderRadius: "30px" }} onClick={() => props.toggleMode('violet')}>
                Violet
              </li>
              <li style={{ backgroundColor: 'red', borderRadius: "30px" }} onClick={() => props.toggleMode('red')}>
                Red
              </li>
            </ul>
          </li>
        </div>
      </div>
    </nav>
  );
}

NavBar.propTypes = {
  title: PropTypes.string,
  mode: PropTypes.string.isRequired,
  toggleMode: PropTypes.func.isRequired,
};

NavBar.defaultProps = {
  title: "Sree",
};
