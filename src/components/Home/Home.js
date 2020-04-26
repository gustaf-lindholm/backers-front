import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';
import InfoCard from '../Cards/InfoCard';

export default function Home(props) {
  const background = {
    backgroundImage: 'url(https://res.cloudinary.com/babiluskus/image/upload/v1586975703/backers-simple-front/backers_bageri_leipomo_ekologiskt_luomu.jpg)',
  };

  return (
    <>
      {/* <Helmet>
        <title>Backers Baker - Ekologiskt bröd</title>
      </Helmet> */}
      <div className="vh-50 cover bg-center" style={background}></div>
      <article className="bg-white">
        <div className="ph4 ph5-m ph6-l">
          <div className="pv5 f4 f2-ns measure center">
            <h1 className="f2 lh-copy">
              <FormattedMessage id={`bakery.maintitle`} />
            </h1>
            <p className="db lh-copy black-70 serif fw1 mv0 f4 f3-m f2-l measure baskerville">
              <FormattedMessage id={`bakery.maincontent`} />
            </p>
          </div>
        </div>
        <div className="flex flex-wrap ph4 ph5-m ph6-l">
          <InfoCard image="backers_cafe_ekologiskt_luomu" messageId="home.cafe.info" />
          <InfoCard image="backers_bröd_eko_luomu_blandat" messageId="home.slogan" />
          <InfoCard image="backers_butik_ekologiskt_luomu" messageId="home.cafe.hours.weekdays" />
          <InfoCard image="backers_bageri_leipomo_ekologiskt_luomu" messageId="home.contactinfo" />
        </div>
      </article>
    </>
  );
}
