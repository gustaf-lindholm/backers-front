import React from "react";
import { LanguageSwitcher } from "../Routing";
import { useIntl } from "react-intl";
import { AppRoute, AppRouteTitles } from "../../const/app-routes";
import { Link } from "react-router-dom";

export const Navigation = () =>  {
  const { formatMessage, locale } = useIntl();

  return (
    <header className="bg-black-90 w-100 ph3 pv3 pv4-ns ph4-m ph5-l">
      <nav className="f6 fw6 ttu tracked">
          {Object.keys(AppRoute).map((elem, key) => (
              <Link className="link dim white dib mr3" key={key} to={localizeRouteKey(AppRoute[elem])}>
                {formatMessage({
                  id: `${AppRouteTitles.get(AppRoute[elem])}` || ""
                })}
              </Link>
          ))}
          <LanguageSwitcher />
      </nav>
    </header>

  );

  function localizeRouteKey(path) {
    return `/${locale}` + formatMessage({ id: path });
  }
}