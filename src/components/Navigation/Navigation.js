import React from 'react';
import { LanguageSwitcher } from '../Routing';
import { useIntl } from 'react-intl';
import { AppRoute, AppRouteTitles } from '../../const/app-routes';
import { Link } from 'react-router-dom';

export const Navigation = () => {
  const { formatMessage, locale } = useIntl();

  return (
    <header className="w-100 pv3 pv4-ns ph4-m shadow-5 relative mb4">
      <nav className="db dt-l w-100 border-box ph6-l">
        <a className="db dtc-l v-mid mid-gray link dim w-100 w-25-l tc tl-l mb2 mb0-l" href="#" title="Home">
          <img className="dib w3 h3" alt="Site Name" src="https://res.cloudinary.com/babiluskus/image/upload/v1586975703/backers-simple-front/Backers_logo_ekologiskt_luomu.jpg" />
        </a>
        <div className="db dtc-l v-mid w-100 w-50-l tc tr-l">
        {Object.keys(AppRoute).map((elem, key) => (
          <Link className="link dim dark-gray f6 f5-l dib mr3 mr4-l" key={key} to={localizeRouteKey(AppRoute[elem])}>
            {formatMessage({
              id: `${AppRouteTitles.get(AppRoute[elem])}` || '',
            })}
          </Link>
        ))}
        </div>
        <div className="db dtc-l v-mid w-100 w-25-l tc tr-l mt3">
        <LanguageSwitcher />
        </div>
      </nav>
    </header>
  );

  function localizeRouteKey(path) {
    return `/${locale}` + formatMessage({ id: path });
  }
};
