import React from "react";
import { Nav, Navbar, Button, NavDropdown, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { LanguageContext } from "../context/LanguageContext";
import "../css/Navbar.css";
import { useLocation } from "react-router-dom";
import SearchInput from "./SearchInput";
import TranslateIcon from "@material-ui/icons/Translate";

function Header() {
  const languageContextAPI = React.useContext(LanguageContext);
  const [background, setBackground] = React.useState("");
  let location = useLocation();

  const { pathname } = location;
  console.log(`location : ${pathname}`);

  React.useEffect(() => {
    pathname === "/"
      ? setBackground("navbarBorder")
      : setBackground("navbarBorderr");
    console.log(background);
  }, [pathname, background]);

  return (
    <Navbar collapseOnSelect expand="lg" className={background}>
      <Navbar.Brand className="">
        <Link className="text-white navbar-logo ml-1 navtitle fs-2" to="/">
          <img
            width="64"
            height="64"
            className="mr-2"
            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgaWQ9IlhNTElEXzExN18iPjxnIGlkPSJYTUxJRF8xMThfIj48ZyBpZD0iWE1MSURfMTE5XyI+PGcgaWQ9IlhNTElEXzEyMF8iPjxnIGlkPSJYTUxJRF8xMjFfIj48ZyBpZD0iWE1MSURfMTIyXyI+PGcgaWQ9IlhNTElEXzEyM18iPjxnIGlkPSJYTUxJRF8xMjRfIj48ZyBpZD0iWE1MSURfMTI1XyI+PGcgaWQ9IlhNTElEXzEyNl8iPjxnIGlkPSJYTUxJRF8xMjdfIj48ZyBpZD0iWE1MSURfMTI4XyI+PGcgaWQ9IlhNTElEXzEyOV8iPjxnIGlkPSJYTUxJRF8xMzBfIj48Y2lyY2xlIGlkPSJYTUxJRF8xMzFfIiBjeD0iMjU2IiBjeT0iMjU2IiBmaWxsPSIjZDk1MzRmIiByPSIyNTYiIGRhdGEtb3JpZ2luYWw9IiNmZDk4MjciIHN0eWxlPSIiIGNsYXNzPSIiPjwvY2lyY2xlPjwvZz48L2c+PC9nPjwvZz48L2c+PC9nPjwvZz48L2c+PC9nPjwvZz48L2c+PC9nPjwvZz48L2c+PHBhdGggZD0ibTUxMiAyNTZjMC0yOS42NjQtNS4wNjMtNTguMTQyLTE0LjM0Mi04NC42MzhsLTEwNS42Ny0xMDUuNjY5cy03MS44MTggMjAuNDcxLTgzLjE1NSA1MC42NDFsLTQ2LjIwMi00NC40OC0yNi45NjUgMzUuMTUzLTM1LjI2Mi0zNS4xNTMtMjMuMjM4IDM1LjE1My0zOC4yNjItMzUuMTUzaC0zMi4yMjdsMzQuMzIzIDEyMC45MDJjMCAxOS42MjItMTEuNzU1IDQ5LjAzNC0xMS43NTUgNDkuMDM0bDMyLjkwNyAzMy4wNTkgMi44NjIgMTc3LjAwNSA1OC4wNDIgNTguMDQyYzEwLjc4NiAxLjM4NSAyMS43ODEgMi4xMDQgMzIuOTQ0IDIuMTA0IDE0MS4zODUgMCAyNTYtMTE0LjYxNSAyNTYtMjU2eiIgZmlsbD0iI2Q5NTM0ZiIgZGF0YS1vcmlnaW5hbD0iI2VhN2IwYyIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPjxnPjxnPjxwYXRoIGQ9Im0xNTEuNTI5IDI0Ny4zNTNoNjYuMjUxdjg3aC02Ni4yNTF6IiBmaWxsPSIjZmZlNzgwIiBkYXRhLW9yaWdpbmFsPSIjZmZlNzgwIiBzdHlsZT0iIj48L3BhdGg+PHBhdGggZD0ibTE4NC42NiAyNDcuMzVoMzMuMTJ2ODdoLTMzLjEyeiIgZmlsbD0iI2ZiYmUyYyIgZGF0YS1vcmlnaW5hbD0iI2ZiYmUyYyIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPjxwYXRoIGQ9Im0xODQuNjU1IDQ1OC4zMDdjLTE4LjI5NSAwLTMzLjEyNi0xNC44MzEtMzMuMTI2LTMzLjEyNnYtMTE5LjgyN2g2Ni4yNTF2MTE5LjgyOGMuMDAxIDE4LjI5NS0xNC44MyAzMy4xMjUtMzMuMTI1IDMzLjEyNXoiIGZpbGw9IiM2MDU1NTMiIGRhdGEtb3JpZ2luYWw9IiM2MDU1NTMiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD48cGF0aCBkPSJtMzI1LjczNyAyNDcuMzUzaDY2LjI1MXY4N2gtNjYuMjUxeiIgZmlsbD0iI2ZmZTc4MCIgZGF0YS1vcmlnaW5hbD0iI2ZmZTc4MCIgc3R5bGU9IiI+PC9wYXRoPjxwYXRoIGQ9Im0zNTguODYgMjQ3LjM1aDMzLjEzdjg3aC0zMy4xM3oiIGZpbGw9IiNmYmJlMmMiIGRhdGEtb3JpZ2luYWw9IiNmYmJlMmMiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD48cGF0aCBkPSJtMzU4Ljg2MyA0NTguMzA3Yy0xOC4yOTUgMC0zMy4xMjYtMTQuODMxLTMzLjEyNi0zMy4xMjZ2LTExOS44MjdoNjYuMjUxdjExOS44MjhjMCAxOC4yOTUtMTQuODMgMzMuMTI1LTMzLjEyNSAzMy4xMjV6IiBmaWxsPSIjNjA1NTUzIiBkYXRhLW9yaWdpbmFsPSIjNjA1NTUzIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+PHBhdGggZD0ibTM5MS45OSAzMDUuMzV2MTE5LjgzYzAgMTguMy0xNC44MyAzMy4xMy0zMy4xMyAzMy4xM3YtMTUyLjk2eiIgZmlsbD0iIzRjNDAzZiIgZGF0YS1vcmlnaW5hbD0iIzRjNDAzZiIgc3R5bGU9IiI+PC9wYXRoPjxwYXRoIGQ9Im0zOTEuOTg4IDI1Mi4zNTNoLTU1LjUxNmMtMjAuMjg4IDAtMzYuNzM0LTE2LjQ0Ny0zNi43MzQtMzYuNzM0di03MC4yNzZjMC00My45OSAzNS42NjEtNzkuNjUgNzkuNjUtNzkuNjVoMTIuNnoiIGZpbGw9IiNlZWY5ZmYiIGRhdGEtb3JpZ2luYWw9IiNlZWY5ZmYiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD48cGF0aCBkPSJtMjMwLjQwNSA3MS44NTN2ODRjMCA4LjI4NC02LjcxNiAxNS0xNSAxNS04LjI4NCAwLTE1LTYuNzE2LTE1LTE1di04NGgtMzEuNXY4NGMwIDguMjg0LTYuNzE2IDE1LTE1IDE1LTguMjg0IDAtMTUtNi43MTYtMTUtMTV2LTg0aC0zMi4yMjd2MTIwLjkwMmMwIDM1LjY3NiAyOC45MjEgNjQuNTk4IDY0LjU5OCA2NC41OThoMjYuNzU4YzM1LjY3NiAwIDY0LjU5OC0yOC45MjEgNjQuNTk4LTY0LjU5OHYtMTIwLjkwMnoiIGZpbGw9IiNlZWY5ZmYiIGRhdGEtb3JpZ2luYWw9IiNlZWY5ZmYiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD48cGF0aCBkPSJtMjYyLjYzIDcxLjg1djEyMC45MWMwIDI4Ljc4LTE4LjgzIDUzLjE3LTQ0Ljg1IDYxLjUxLTYuMjIgMi0xMi44NiAzLjA4LTE5Ljc1IDMuMDhoLTEzLjM3di0xODUuNWgxNS43NXY4NGMwIDguMjkgNi43MSAxNSAxNC45OSAxNWguMDFjOC4yOCAwIDE1LTYuNzEgMTUtMTV2LTg0eiIgZmlsbD0iI2QyZWJmZiIgZGF0YS1vcmlnaW5hbD0iI2QyZWJmZiIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPjwvZz48cGF0aCBkPSJtMjE3Ljc4IDMwNS4zNXYxMTkuODNjMCAxOC4zLTE0LjgzIDMzLjEzLTMzLjEyIDMzLjEzdi0xNTIuOTZ6IiBmaWxsPSIjNGM0MDNmIiBkYXRhLW9yaWdpbmFsPSIjNGM0MDNmIiBzdHlsZT0iIj48L3BhdGg+PHBhdGggZD0ibTM5MS45OSA2NS42OXYxODYuNjZoLTMzLjEzdi0xODMuOThjNi41NS0xLjc1IDEzLjQzLTIuNjggMjAuNTMtMi42OHoiIGZpbGw9IiNkMmViZmYiIGRhdGEtb3JpZ2luYWw9IiNkMmViZmYiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD48L2c+PC9nPjwvZz48L3N2Zz4="
            alt=""
          />
          Restaurant Searcher
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle className="" aria-controls="responsive-navbar-nav " />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ms-auto mr-5">
          <Link className="nav-link  mr-2" to="/">
            {languageContextAPI.t("navbar.1")}
          </Link>
          <Link className="nav-link  mr-2" to="/contact">
            {languageContextAPI.t("navbar.2")}
          </Link>
          <Link className="nav-link  mr-2" to="/about">
            {languageContextAPI.t("navbar.3")}
          </Link>
          <div
            className="btn-group"
            role="group"
            aria-label="Button group with nested dropdown"
          >
            <div className="btn-group" role="group">
              <button
                id="btnGroupDrop1"
                type="button"
                className="btn btn-secondary dropdown-toggle lang-button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <TranslateIcon />
                {languageContextAPI.lang}
              </button>
              <div className="dropdown-menu">
                <Button
                  className="dropdown-item "
                  aria-labelledby="btnGroupDrop1"
                  onClick={() => {
                    languageContextAPI.handleClick("tr");
                    languageContextAPI.setLang("TR");
                  }}
                >
                  Türkçe
                </Button>
                <Button
                  className="dropdown-item"
                  aria-labelledby="btnGroupDrop1"
                  onClick={() => {
                    languageContextAPI.handleClick("en");
                    languageContextAPI.setLang("ENG");
                  }}
                >
                  English
                </Button>
              </div>
            </div>
          </div>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
