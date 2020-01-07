import React from "react";
import { useIntl } from "react-intl";
import { AppRoute, AppRouteTitles } from "../../const/app-routes";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { LanguageSwitcher } from "../Routing";

export const Navigation = () =>  {
  const { formatMessage, locale } = useIntl();

  return (
    <header className="bg-black-90 fixed w-100 ph3 pv3 pv4-ns ph4-m ph5-l">
      <nav className="f6 fw6 ttu tracked">
          {Object.keys(AppRoute).map((elem, key) => (
              <Link className="link dim white dib mr3" key={key} to={localizeRouteKey(AppRoute[elem])}>
                {formatMessage({
                  id: `${AppRouteTitles.get(AppRoute[elem])}` || ""
                })}
              </Link>
          ))}
          <LanguageSwitcher />
      </nav>
    </header>

  );

  function localizeRouteKey(path) {
    return `/${locale}` + formatMessage({ id: path });
  }
}

    {/* <Navbar as="nav" bg="light" expand="lg">
      <Navbar.Brand>
        <Link to={localizeRouteKey(AppRoute["Home"])}>Backers</Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          {Object.keys(AppRoute).map((elem, key) => (
              <Nav.Link key={key} as={Link} to={localizeRouteKey(AppRoute[elem])}>
                {formatMessage({
                  id: `${AppRouteTitles.get(AppRoute[elem])}` || ""
                })}
              </Nav.Link>
          ))}
          <LanguageSwitcher />
        </Nav>
      </Navbar.Collapse>
    </Navbar> */}