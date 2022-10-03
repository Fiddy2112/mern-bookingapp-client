import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [dropdowns, setDropdowns] = React.useState(false);
  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/">
          <span className="logo">Booking App</span>
        </Link>
        <div className="navItems" onClick={() => setDropdowns(!dropdowns)}>
          <button href="#">tro Thanh chu nha</button>
          <div className="navUsers">
            <i className="fa fa-bars icons" aria-hidden="true"></i>
            <i class="fa fa-user-circle icons" aria-hidden="true"></i>
          </div>
          {dropdowns && (
            <div className="dropDown">
              <Link>Sign up</Link>
              <Link>Login</Link>
              <hr />
              <Link>Sign up</Link>
              <Link>Login</Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
