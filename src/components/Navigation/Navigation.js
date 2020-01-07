import React from "react";
import { LanguageSwitcher } from "../Routing";
import { useIntl } from "react-intl";
import { AppRoute, AppRouteTitles } from "../../const/app-routes";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const Navigation = () =>  {
  const { formatMessage, locale } = useIntl();

  return (
    <header>
      <nav>
          {Object.keys(AppRoute).map((elem, key) => (
              <Link key={key} to={localizeRouteKey(AppRoute[elem])}>
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


// const Header = styled.main.attrs({
//   className: "bg-black-90 fixed w-100 ph3 pv3 pv4-ns ph4-m ph5-l"
// })

// const Nav = styled.nav.attrs({
//   className: "f6 fw6 ttu tracked"
// })

// // const A = ({className, children}) => {<Link className={className}>{children}</Link>}
// const StyledLink = styled(Link).attrs({className: "link dim white dib mr3"})