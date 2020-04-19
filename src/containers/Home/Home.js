import React from "react";
import { Helmet } from "react-helmet-async";
import { FormattedMessage } from "react-intl";
import styled from "styled-components";
import InfoCard from "../../components/Cards/InfoCard";

export default function Home(props) {
  const background = {
    backgroundImage: "url(https://res.cloudinary.com/babiluskus/image/upload/v1586975703/backers-simple-front/backers_band_eko_luomu.jpg)"
  };

  return (
    <>
      {/* <Helmet>
        <title>Backers Baker - Ekologiskt bröd</title>
      </Helmet> */}
      <article className="bg-white">
        {/* <div className="vh-25 cover bg-center" style={background}></div> */}
        <section className="cf ph6-l">
          <InfoCard image="backers_cafe_ekologiskt_luomu" messageId="home.cafe.info"/>
          <InfoCard image="backers_bröd_eko_luomu_blandat" messageId="home.slogan"/>
          <InfoCard image="backers_butik_ekologiskt_luomu" messageId="home.cafe.hours.weekdays"/>
          <InfoCard image="backers_bageri_leipomo_ekologiskt_luomu" messageId="home.contactinfo"/>
        </section>
      </article>
    </>
  );
}
