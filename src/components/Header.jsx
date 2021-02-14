import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'

function Header() {
  return (
      <Navbar id='navbar' collapseOnSelect variant="dark">
        <Navbar.Brand className="">
          <Link className="text-white navbar-logo" to="/">
            Restaurant Searcher
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">         
              <Link className="nav-link" to="/">
                HomePage
              </Link>        
              <Link className="nav-link" to="/signup">
                Signup
              </Link>
              <Link className="nav-link" to="/login">
                Login
              </Link>
              <Link className="nav-link" to="/search">
                Search
              </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

  );
}

export default Header;
