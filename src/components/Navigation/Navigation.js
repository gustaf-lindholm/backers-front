import React from 'react';
import { LanguageSwitcher } from '../Routing';
import { useIntl, FormattedMessage } from 'react-intl';
import { AppRoute, AppRouteTitles } from '../../const/app-routes';
import { Link } from 'react-router-dom';

export const Navigation = () => {
  const { formatMessage, locale } = useIntl();

  return (
    <header className="bg-white w-100 pb3 pb0-l shadow-5 fixed z-5">
      <div className="h2 absolute ph6-l top-0 right-0 pt2">
        <a href="tel:+358192461658" className="link ba-brown mr2">
          <i className="fas fa-phone-alt"></i> <FormattedMessage id="contact.phone" />
        </a>
        <a
          className="link h2 ba-brown"
          href="https://www.facebook.com/backersbaker/"
          target="_blank"
        >
          <i className="fa fa-facebook-f"></i>
        </a>
        <a
          className="link mh2 ba-brown"
          href="https://www.instagram.com/backers_baker/"
          target="_blank"
          rel="noopener"
        >
          <i className="mh2 fa fa-instagram"></i>
        </a>
      </div>
      <nav className="w-100 border-box ph6-l flex flex-row flex-wrap justify-between mt3 mt0-ns">
        <div className="w-100 w-40-l flex justify-center items-center">
          <Link title="Home" to="/">
            <img
              className="w4"
              alt="Backers Baker"
              src="https://res.cloudinary.com/babiluskus/image/upload/v1586975703/backers-simple-front/Backers_logo_transparent_liten.png"
            />
          </Link>
        </div>
        <div className="w-100 w-60-l flex flex-wrap flex-nowrap-ns justify-center items-center">
          {Object.keys(AppRoute).map((elem, key) => (
            <Link
              className="link dim dark-gray fw4 f4 f5-l mr3 mr4-l"
              key={key}
              to={localizeRouteKey(AppRoute[elem])}
            >
              {formatMessage({
                id: `${AppRouteTitles.get(AppRoute[elem])}` || '',
              })}
            </Link>
          ))}
          <div className="mt3 mt0-ns">
            <LanguageSwitcher />
          </div>
        </div>
      </nav>
    </header>
  );

  function localizeRouteKey(path) {
    return `/${locale}` + formatMessage({ id: path });
  }
};
