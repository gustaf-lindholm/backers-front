import React, { useState } from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
  ToggleButton,
  ButtonGroup,
  ToggleButtonGroup,
  DropdownButton,
  Dropdown
} from "react-bootstrap";
import "./Navbar.css";

export default function Navigation(props) {
  const { handleLanguage, lang } = props;
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">Link</Nav.Link>
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
