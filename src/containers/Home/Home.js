import React from "react";
// import { Helmet } from "react-helmet-async";
import { FormattedMessage } from "react-intl";
// import { ReactComponent as LocalCafeIcon } from "../../assets/icons/local_cafe-24px.svg";
// import { ReactComponent as ClockIcon } from "../../assets/icons/access_time-24px.svg";
// import { ReactComponent as MapIcon } from "../../assets/icons/map-24px.svg";
// import { ReactComponent as InfoIcon } from "../../assets/icons/info-24px.svg";
import styled from "styled-components";
import InfoCard from "../../components/Cards/InfoCard";

export default function Home(props) {
  const background = {
    backgroundImage: "url(https://dummyimage.com/1000x1000.jpg)"
  };

  const FlexContainer = styled.div.attrs({
    className: "flex flex-wrap items-center"
  })``;

  return (
    <>
      {/* <Helmet>
        <title>Backers Baker - Ekologiskt bröd</title>
      </Helmet> */}
      <article className="bg-white">
        <div className="vh-25 cover bg-center" style={background}></div>
        <section className="cf ph6-l">
          <InfoCard image="fikabröd" messageId="home.cafe.info"/>
          <InfoCard image="ekologisk_maltlimpa" messageId="home.slogan"/>
          <InfoCard image="ekologisk_smörgås" messageId="home.cafe.hours.weekdays"/>
          <InfoCard image="ekologiskt_bröd" messageId="home.contactinfo"/>
        </section>
      </article>
    </>
  );
}
