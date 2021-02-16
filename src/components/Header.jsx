import React from "react";
import { Nav, Navbar, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import i18next from "i18next";
import { useTranslation } from "react-i18next";

function Header() {
  const { t } = useTranslation();

  function handleClick(lang) {
    i18next.changeLanguage(lang);
    console.log(lang);
  }

  return (
    <Navbar id="navbar" collapseOnSelect variant="dark" className="fixed-top">
      <Navbar.Brand>
        <Link className="text-white navbar-logo" to="/">
          Restaurant Searcher
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ms-auto">
          <Link className="nav-link" to="/">
          {t("navbar.1")}
          </Link>
          <Link className="nav-link" to="/signup">
          {t("navbar.2")}
          </Link>
          <Link className="nav-link" to="/login">
          {t("navbar.3")}
          </Link>
          <Button
            className="mx-2 btn btn-primary btn-sm"
            onClick={() => handleClick("en")}
          >
            Eng
          </Button>
          <Button
            className="mx-2 btn btn-primary btn-sm"
            onClick={() => handleClick("tr")}
          >
            TR
          </Button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
