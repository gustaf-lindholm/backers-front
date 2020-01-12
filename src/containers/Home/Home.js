import React from "react";
// import { Helmet } from "react-helmet-async";
import { FormattedMessage } from "react-intl";
// import { ReactComponent as LocalCafeIcon } from "../../assets/icons/local_cafe-24px.svg";
// import { ReactComponent as ClockIcon } from "../../assets/icons/access_time-24px.svg";
// import { ReactComponent as MapIcon } from "../../assets/icons/map-24px.svg";
// import { ReactComponent as InfoIcon } from "../../assets/icons/info-24px.svg";
import styled from "styled-components";
import InfoCard from "../../components/Cards/InfoCard";

export default function Home(props) {
  const background = {
    backgroundImage: "url(https://dummyimage.com/1000x1000.jpg)"
  };

  const FlexContainer = styled.div.attrs({
    className: "flex flex-wrap items-center"
  })``;

  return (
    <>
      {/* <Helmet>
        <title>Backers Baker - Ekologiskt bröd</title>
      </Helmet> */}
      <article className="bg-white">
        <div className="vh-25 cover bg-center" style={background}></div>
        <section className="cf mt5 pv5 ph6-l">
          <InfoCard messageId="home.cafe.info"/>
          <InfoCard messageId="home.slogan"/>
        </section>
        <FlexContainer className="flex flex-wrap items-center">
          <div className="w-50-ns w-100-m pa3 flex justify-center">

            <div className="w-75">
              <h3 className="f3 lh-copy measure">
                <FormattedMessage id="home.cafe.info" />
              </h3>
            </div>
          </div>
          <div className="w-50-ns w-100-m pa3 flex justify-center">
            <div className="w-25 flex justify-center items-center">
            </div>
            <div className="w-75">
              <h3 className="f3 lh-copy measure">
                <FormattedMessage id="home.cafe.hours.weekdays" />
              </h3>
              <h3 className="f3 lh-copy measure">
                <FormattedMessage id="home.cafe.hours.saturday" />
              </h3>
            </div>
          </div>
          <div className="w-50-ns w-100-m pa3 flex justify-center">
            <div className="w-75">
              <h3 className="f3 lh-copy measure">
                <FormattedMessage id="home.slogan" />
              </h3>
            </div>
          </div>
          <div className="w-50-ns w-100-m pa3 flex justify-center">
            <div className="w-25 flex justify-center items-center">
            </div>
            <div className="w-75">
              <h3 className="f3 lh-copy measure">
                <FormattedMessage id="home.contactinfo" />
              </h3>
            </div>
          </div>
        </FlexContainer>
      </article>
    </>
  );
}
