import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/auth.context";

function Navbar() {
  const { isLoggedIn, user, logOutUser } = useContext(AuthContext);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
        <Link className="navbar-brand" to="/">
          Classic Event
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
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/guests">
                Guests
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/guests/create">
                Create Guest
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/events">
                Events
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/events/create">
                Create Event
              </Link>
            </li>
          </ul>
          <div className="navbar-text">
            {isLoggedIn ? (
              <div className="d-flex align-items-center">
                <span className="text-light mr-2">Welcome, {user && user.name}</span>
                <button
                  className="btn btn-outline-light"
                  onClick={logOutUser}
                >
                  Logout
                </button>
              </div>
            ) : (
              <div className="d-flex">
                <Link to="/auth/signup" className="btn btn-success mr-2">
                  Sign Up
                </Link>
                <Link to="/auth/login" className="btn btn-info">
                  Login
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
