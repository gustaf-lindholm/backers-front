import React from "react";
import { Container, Row } from "react-bootstrap";
import { Helmet } from "react-helmet";
import { useIntl} from "react-intl";

export default function Home(props) {
  // const {messages} = useIntl();
  // console.log(messages)
  return (
    <>
      <Helmet>
        {/* <title>{intl.formatters.getMessageFormat({id: "home.pagetitle"})}</title> */}
        <meta name="description" content="Backers Backer - Ekologiskt bröd" />
      </Helmet>
      <Container>
        <Row>HERO</Row>
        <Row>INFO</Row>
        <Row>KARTA</Row>
        <Row>PRODUKTER</Row>
      </Container>
    </>
  );
}
