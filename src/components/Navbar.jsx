import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/auth.context";
import Nav from 'react-bootstrap/Nav';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import ImageSrc from "../images/classiceventlogo.png"; // Adjust the path as needed



function Navbar() {
  const { isLoggedIn, user, logOutUser } = useContext(AuthContext);

  return (
    <>

      <div>
        <Image src={ImageSrc} style={{ width: "200px", height: "150px" }} rounded />
      </div>
    
      <Nav className="justify-content-center" activeKey="/">
        <Nav.Item>
          <Nav.Link as={Link} to="/">
            Home
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={Link} to="/guests">
            Guests
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link as={Link} to="/guests/create">
              Create Guest
            </Nav.Link>
          </Nav.Item>
        <Nav.Item>
          <Nav.Link as={Link} to="/events">
            Events
          </Nav.Link>
        </Nav.Item>
        {isLoggedIn && (
          <Nav.Item>
            <Nav.Link as={Link} to="/events/create">
              Create Event
            </Nav.Link>
          </Nav.Item>
        )}
      </Nav>


      <Nav className="justify-content-end" activeKey="/">
        <Nav.Item>
          {isLoggedIn ? (
            <Nav.Link>
              Welcome, {user && user.name}
            </Nav.Link>
          ) : (
            <Nav.Link as={Link} to="/auth/signup">
              Sign Up
            </Nav.Link>
          )}
        </Nav.Item>
        <Nav.Item>
          {isLoggedIn ? (
            <Nav.Link onClick={logOutUser}>
              Logout
            </Nav.Link>
          ) : (
            <Nav.Link as={Link} to="/auth/login">
              Login
            </Nav.Link>
          )}
        </Nav.Item>

      </Nav>
    </>
  );
}

export default Navbar;
