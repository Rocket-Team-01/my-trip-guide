import React from "react";
import { Nav, Navbar, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { LanguageContext } from "../context/LanguageContext";
import "../css/Navbar.css";
import { useLocation  } from "react-router-dom";
function Header() {
  const languageContextAPI = React.useContext(LanguageContext);
  const [background, setBackground] = React.useState("");
  let location = useLocation();

  const { pathname } = location;
  console.log(`location : ${pathname}`)

  const [lang, setLang] = React.useState("Choose");
  React.useEffect(() => {
    pathname === '/'
      ? setBackground("navbarBorder")
      : setBackground("navbarBorderr");
    console.log(background);
  }, [pathname,background]);

  return (
    <Navbar collapseOnSelect expand="lg" className={background}>
      <Navbar.Brand className="py-3">
        <Link className="text-white navbar-logo ml-5" to="/">
          Restaurant Searcher
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ms-auto mr-5">
          <div
            className="btn-group"
            role="group"
            aria-label="Button group with nested dropdown"
          >
            <div className="btn-group" role="group">
              <button
                id="btnGroupDrop1"
                type="button"
                className="btn btn-secondary dropdown-toggle"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                {lang}
              </button>
              <div className="dropdown-menu">
                <Button
                  className="dropdown-item"
                  aria-labelledby="btnGroupDrop1"
                  onClick={() => {
                    languageContextAPI.handleClick("tr");
                    setLang("Türkçe");
                  }}
                >
                  TR
                </Button>
                <Button
                  className="dropdown-item"
                  aria-labelledby="btnGroupDrop1"
                  onClick={() => {
                    languageContextAPI.handleClick("en");
                    setLang("English");
                  }}
                >
                  Eng
                </Button>
              </div>
            </div>
          </div>
          <Link className="nav-link text-white mr-2" to="/">
            {languageContextAPI.t("navbar.1")}
          </Link>
          <Link className="nav-link text-white mr-2" to="/signup">
            {languageContextAPI.t("navbar.2")}
          </Link>
          <Link className="nav-link text-white mr-2" to="/login">
            {languageContextAPI.t("navbar.3")}
          </Link>
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
