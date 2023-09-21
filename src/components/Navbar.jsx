import { Link } from "react-router-dom";

import { useContext } from "react";
import { AuthContext } from "../context/auth.context";
// import "bootstrap/dist/css/bootstrap.min.css";

function Navbar() {
  const { isLoggedIn, user, logOutUser } = useContext(AuthContext);
  console.log("halooooo from the navbar")
  console.log("isLoggedIn", isLoggedIn)
  // console.log("user", user)

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          EventVue
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link " to="/guests">
                Guests
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link "
                aria-current="page"
                to="/guests/create"
              >
                Create Guest
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link " to="/events">
                Events
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link "
                aria-current="page"
                to="/events/create"
              >
                Create Event
              </Link>
            </li>
          </ul>
          <div className="col d-flex justify-content-end align-items-center gap-3">
            {isLoggedIn && (
              <>
                <Link to="/events">
                  <button>My Events</button>
                </Link>

                <span>{user && user.name}</span>
                <button onClick={logOutUser}>Logout</button>
              </>
            )}
            {!isLoggedIn && (
              <>
                <Link to="/auth/signup">
                  {" "}
                  <button className="btn btn-primary">Sign Up</button>{" "}
                </Link>
                <Link to="/auth/login">
                  {" "}
                  <button className="btn btn-success">Login</button>{" "}
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
