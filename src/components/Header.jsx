import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand className="ms-5">
          <Link className="text-white nav-link" to="/">
            React-Bootstrap
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto me-5">
            <Nav.Link>
              <Link className="nav-link" to="/">
                HomePage
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link className="nav-link" to="/signup">
                signup
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link className="nav-link" to="/login">
                login
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Header;
