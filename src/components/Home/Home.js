import React, { useState } from 'react';
import { useIntl, FormattedMessage } from 'react-intl';
// import { Helmet } from 'react-helmet-async';
import FrontPageArticle from '../ArticleComponents/FrontPageArticle';
import { AppRoute, AppRouteTitles } from '../../const/index';
import { Link } from 'react-router-dom';

const Home = (props) => {
  const background = {
    backgroundImage:
      'url(https://res.cloudinary.com/babiluskus/image/upload/v1586975703/backers-simple-front/Backer_vappen_wienermunk.jpg)',
  };
  const { formatMessage, locale } = useIntl();

  function localizeRouteKey(path) {
    return `/${locale}` + formatMessage({ id: path });
  }

  return (
    <>
      <div
        className="vh-50 mt0-ns cover bg-center flex justify-center items-center"
        style={background}
      >
        <img
          className="h5-ns"
          src="https://res.cloudinary.com/babiluskus/image/upload/v1586975703/backers-simple-front/Backers_logo_vit_transparent.png"
          alt="backers logo"
        />
      </div>
      <section className="mw7 center">
        <article className="bg-white mb5">
          <div className="">
            <div className="f2-ns measure center">
              <h1 className="f1-ns f2-m f3 lh-copy">
                <FormattedMessage id={`bakery.maintitle`} />
              </h1>
              <p className="db lh-copy black-70 serif fw1 mv0 f4 f3-m f2-l measure baskerville">
                <FormattedMessage id={`bakery.maincontent`} />
              </p>
            </div>
          </div>
        </article>
        <FrontPageArticle
          headerId="home.bakeryShop.info"
          introTextId="home.bakeryShop.hours.weekdays"
          image="backers_cafe_ekologiskt_luomu"
          topBorder
        />
        <FrontPageArticle headerId="home.slogan" image="backers_bröd_eko_luomu">
          <Link to={localizeRouteKey(AppRoute.Stores)}>
            {' '}
            {formatMessage({
              id: `${AppRouteTitles.get(AppRoute.Stores)}` || '',
            })}
          </Link>
        </FrontPageArticle>
      </section>
    </>
  );
};

export default Home;
