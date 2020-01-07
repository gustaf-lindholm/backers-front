import React from "react";
import { FormattedMessage } from "react-intl";
import { Container, Row } from "react-bootstrap";

export default function Bakery(props) {
  return (
    <Container>
      <FormattedMessage id="bakery.maincontent" />
    </Container>
  );
}
