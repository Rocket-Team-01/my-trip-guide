import React from "react";
import { Nav, Navbar, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { LanguageContext } from "../context/LanguageContext";

function Header() {
  const languageContextAPI = React.useContext(LanguageContext);

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand>
        <Link className="text-white navbar-logo" to="/">
          Restaurant Searcher
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ms-auto">
          <Link className="nav-link" to="/">
            {languageContextAPI.t("navbar.1")}
          </Link>
          <Link className="nav-link" to="/signup">
            {languageContextAPI.t("navbar.2")}
          </Link>
          <Link className="nav-link" to="/login">
            {languageContextAPI.t("navbar.3")}
          </Link>
          <Button
            className="mx-2 btn btn-primary btn-sm"
            onClick={() => languageContextAPI.handleClick("en")}
          >
            Eng
          </Button>
          <Button
            className="mx-2 btn btn-primary btn-sm"
            onClick={() => languageContextAPI.handleClick("tr")}
          >
            TR
          </Button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;

/* 

<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
    <Nav>
      <Nav.Link href="#deets">More deets</Nav.Link>
      <Nav.Link eventKey={2} href="#memes">
        Dank memes
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>

*/
