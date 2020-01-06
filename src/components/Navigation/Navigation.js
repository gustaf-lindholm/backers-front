import React from "react";
import { useIntl, FormattedMessage } from "react-intl";
import { AppRoute, AppRouteTitles } from "../../const/app-routes";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { LanguageSwitcher } from "../Routing";

export const Navigation = () =>  {
  const { formatMessage, locale } = useIntl();

  return (
    <Navbar as="nav" bg="light" expand="lg">
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
    </Navbar>
  );

  function localizeRouteKey(path) {
    return `/${locale}` + formatMessage({ id: path });
  }
}
