import React from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
  ToggleButton,
  ToggleButtonGroup,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { Se } from "../../localization/se";
import { Fi } from "../../localization/fi";

export default function Navigation(props) {
  const { handleLanguage, lang } = props;
  let cafe, home;
  switch (lang) {
    case "se":
      home = Se.home
      cafe = Se.cafe
      break;
    case "fi":
      home = Fi.home
      cafe = Fi.cafe
      break;
    default:
      break;
  }
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand><Link to ="/">Backers</Link></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/">Start</Nav.Link>
          <Nav.Link as={Link} to={cafe}>Kafe</Nav.Link>
          <NavDropdown title="Language">
            <ToggleButtonGroup
              name="language"
              type="radio"
              vertical
              onChange={handleLanguage}
              value={lang}
            >
              <ToggleButton block type="radio" value="se">
                Svenska
              </ToggleButton>
              <ToggleButton block type="radio" value="fi">
                Suomeksi
              </ToggleButton>
            </ToggleButtonGroup>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
