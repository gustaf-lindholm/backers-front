import React from "react";
import { Helmet } from "react-helmet-async";
import { FormattedMessage, useIntl } from "react-intl";
import { ReactComponent as LocalCafeIcon } from "../../assets/icons/local_cafe-24px.svg";
import { ReactComponent as ClockIcon } from "../../assets/icons/access_time-24px.svg";
import { ReactComponent as MapIcon } from "../../assets/icons/map-24px.svg";
import { ReactComponent as InfoIcon } from "../../assets/icons/info-24px.svg";

export default function Home(props) {
  const background = {
    backgroundImage: "url(https://dummyimage.com/1000x1000.jpg)"
  };
  return (
    <>
      <Helmet>
        <title>Backers Baker - Ekologiskt bröd</title>
      </Helmet>
      <article className="bg-white">
        <div className="vh-25 cover bg-center" style={background}></div>
        <div className="flex flex-wrap items-center">
          <div className="outline w-25-ns w-100 pa3 tc h5-ns">
            <LocalCafeIcon width="2.5rem" height="2.5rem" />
            <p className="ma1">
              <FormattedMessage id="home.cafe.info" />
            </p>
          </div>
          <div className="outline w-25-ns w-100 pa3 tc h5-ns">
            <ClockIcon className="" width="2.5rem" height="2.5rem" />
            <p className="ma0">
              <FormattedMessage id="home.cafe.hours.weekdays" />
            </p>
            <p className="ma0">
              <FormattedMessage id="home.cafe.hours.saturday" />
            </p>
          </div>
          <div className="outline w-25-ns w-100 pa3 tc h5-ns">
            <InfoIcon width="2.5rem" height="2.5rem" />
            <p className="ma1">
              <FormattedMessage id="home.slogan" />
            </p>
          </div>
          <div className="outline w-25-ns w-100 pa3 tc h5-ns">
            <MapIcon width="2.5rem" height="2.5rem" />
            <p className="ma1">
              <FormattedMessage id="home.contactinfo" />
            </p>
          </div>
        </div>
      </article>
    </>
  );
}
