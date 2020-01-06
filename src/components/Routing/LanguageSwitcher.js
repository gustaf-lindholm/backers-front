import React from "react";
import { AppLanguage } from "../../const/app-languages";
import { NavLink, useLocation } from "react-router-dom";
import { useIntl } from "react-intl";
import { ToggleButton, ToggleButtonGroup, NavDropdown } from "react-bootstrap";
import { appStrings } from "./";
export function LanguageSwitcher() {
  const { pathname } = useLocation();
  const { locale, messages } = useIntl();
  return (
    <NavDropdown title="Language">
      <ToggleButtonGroup name="language" type="radio" vertical>
        {Object.keys(AppLanguage).map(lang => {
          return (
            <ToggleButton key={lang}>
              <NavLink to={getMatchingRoute(AppLanguage[lang])}>
                {AppLanguage[lang]}
              </NavLink>
            </ToggleButton>
          );
        })}
      </ToggleButtonGroup>
    </NavDropdown>
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
