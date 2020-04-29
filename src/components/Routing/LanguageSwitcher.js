import React from "react";
import { AppLanguage } from "../../const/app-languages";
import { NavLink, useLocation } from "react-router-dom";
import { useIntl } from "react-intl";
import { appStrings } from "./";
export function LanguageSwitcher() {
  const { pathname } = useLocation();
  const { locale, messages } = useIntl();

  // vilket språk aktivt?
  // visa länk på motsatt språk
  // byt till motsatt vid klick

  return (
        Object.keys(AppLanguage).map((lang, key) => {
          return (
              <NavLink key={key} className="link dim black" to={getMatchingRoute(AppLanguage[lang].locale)}>
                {AppLanguage[lang].name}
              </NavLink>
          );
        })
  );

  function getMatchingRoute(language) {
    /**
     * Get the key of the route the user is currently on
     */
    const [, route] = pathname.split(locale);
    const routeKey = Object.keys(messages).find(key => messages[key] === route);

    /**
     * Find the matching route for the new language
     */
    const matchingRoute = appStrings[language][routeKey];

    /**
     * Return localized route
     */
    return `/${language}` + matchingRoute;
  }
}
