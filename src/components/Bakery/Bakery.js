import React from "react";
import { FormattedMessage } from "react-intl";
import { Helmet } from "react-helmet-async";

export default function Bakery(props) {
  const background = {
    backgroundImage: "url(https://dummyimage.com/1500x1000.jpg)"
  };

  return (
    <>
      <Helmet>
        <title>asdf</title>
      </Helmet>
      <article className="bg-white">
        <div className="vh-25 cover bg-center" style={background}></div>
        <div className="ph4 ph5-m ph6-l">
          <div className="pv5 f4 f2-ns measure center">
            <h1 className="f2 lh-copy">
              <FormattedMessage id="bakery.maintitle" />
            </h1>
            <p className="db lh-copy black-70 serif fw1 mv0 f4 f3-m f2-l measure baskerville">
              <FormattedMessage id="bakery.maincontent" />
            </p>
          </div>
        </div>
        <div className="measure center mv5">
          <h1 className="fw6 f3">
            <FormattedMessage id="bakery.subtitle.one" />
          </h1>
          <p className="lh-copy measure f4 f3-ns baskerville">
            <FormattedMessage id="bakery.subcontent.one" />
          </p>
        </div>
        <div className="measure center mv5">
          <h1 className="fw6 f3">
            <FormattedMessage id="bakery.subtitle.two" />
          </h1>
          <p className="lh-copy measure f4 f3-ns baskerville">
            <FormattedMessage id="bakery.subcontent.two" />
          </p>
        </div>
        <div className="measure center mv5">
          <blockquote className="ml0 mt0 pl4 bl bw2 b--yellow">
            <p className="lh-copy measure f4 f3-ns">
              <FormattedMessage id="bakery.obs"/>
            </p>
          </blockquote>
        </div>
      </article>
    </>
  );
}
