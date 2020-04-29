import React, { useState } from 'react';
import { LanguageSwitcher } from '../Routing';
import { useIntl, FormattedMessage } from 'react-intl';
import { AppRoute, AppRouteTitles } from '../../const/app-routes';
import { Link } from 'react-router-dom';
import BurgerIcon from './MobileMenu/BurgerIcon';
import MobileMenu from './MobileMenu/MobileMenu';

export const Navigation = () => {
  const { formatMessage, locale } = useIntl();
  const [open, setOpen] = useState(false);

  const links = {
    phone: (
      <a className="link dim" href="tel:+358192461658">
        <i className="fa fa-phone"></i>
        <p className="ma0">
          <FormattedMessage id="contact.phone" />
        </p>
      </a>
    ),
    instagram: (
      <a
        className="link dim"
        href="https://www.instagram.com/backers_baker/"
        target="_blank"
        rel="noopener"
      >
        <i className="fa fa-instagram"></i>
        <p className="ma0 ">Instagram</p>
      </a>
    ),
    facebook: (
      <a
        className="link dim"
        href="https://www.facebook.com/backersbaker/"
        target="_blank"
        rel="noopener"
      >
        <i className="fa fa-facebook-f"></i>
        <p className="ma0">Facebook</p>
      </a>
    ),
  };

  return (
    <header className="bg-white w-100 pb3 pb0-l shadow-5 fixed z-5 h4 flex">
      <BurgerIcon open={open} setOpen={setOpen} />
      <MobileMenu className="ba-brown tc ttc" open={open}>
        <LanguageSwitcher className="ba-brown"/>
        {links.phone}
        {links.instagram}
        {links.facebook}
      </MobileMenu>

      <div className="h2 absolute ph6-l top-0 right-0 pt2 db-l dn">
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
              className="w3"
              alt="Backers Baker"
              src="https://res.cloudinary.com/babiluskus/image/upload/v1586975703/backers-simple-front/Backers_logo_b.png"
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
          <div className="mt3 mt0-ns db-l dn">
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
