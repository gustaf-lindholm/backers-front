import React from "react";
import { Container, Row } from "react-bootstrap";
import {Navigation} from "../Navigation/Navigation";
export default function Layout({children}) {
  return (
    <Container>
      <Row as="header">
        <Navigation />
      </Row>
      <Row as="main">{children}</Row>
    </Container>
  );
}
