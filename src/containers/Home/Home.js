import React from "react";
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
      <div>
        <div>HERO</div>
        <div>INFO</div>
        <div>KARTA</div>
        <div>PRODUKTER</div>
      </div>
    </>
  );
}
