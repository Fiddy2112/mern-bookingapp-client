import React from "react";
import { Link } from "react-router-dom";
import { useProvider } from "../../context/StateProvider";
import "./Navbar.scss";

function Navbar() {
  const [dropdowns, setDropdowns] = React.useState(false);

  const [initialState, dispatch] = useProvider();
  const { user } = initialState;
  console.log("user", user);

  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/">
          <span className="logo">Booking App</span>
        </Link>
        <div className="navItems">
          <button href="#">Become a Host</button>
          <div className="navUsers" onClick={() => setDropdowns(!dropdowns)}>
            <i className="fa fa-bars icons" aria-hidden="true"></i>
            <i className="fa fa-user-circle icons" aria-hidden="true"></i>
          </div>
          {dropdowns && (
            <div className="dropDown">
              {user && (
                <p
                  style={{
                    marginTop: "10px",
                    textAlign: "center",
                    fontSize: "12px",
                    fontWeight: 400,
                    color: "#ff6b81",
                  }}
                >
                  Welcome to back {user.username}
                </p>
              )}
              {user ? (
                <Link>Logout</Link>
              ) : (
                <>
                  <Link to="/signup">Sign up</Link>
                  <Link to="/login">Login</Link>{" "}
                </>
              )}

              <Link to="#">Host your home</Link>
              <Link to="#">Host an experience</Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
