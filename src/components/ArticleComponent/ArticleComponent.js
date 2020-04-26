import React from 'react';
import { FormattedMessage } from 'react-intl';

const ArticleComponent = (props) => {
  const { subject, image, quote } = props;

  const background = {
    backgroundImage: `url(https://res.cloudinary.com/babiluskus/image/upload/v1586975703/backers-simple-front/${image}.jpg)`,
  };
  return (
    <article className="bg-white pb5">
      <div className="vh-50 cover bg-center" style={background}></div>
      <div className="ph4 ph5-m ph6-l">
        <div className="pv5 f4 f2-ns measure center">
          <h1 className="f2 lh-copy">
            <FormattedMessage id={`${subject}.maintitle`} />
          </h1>
          <p className="db lh-copy black-70 serif fw1 mv0 f4 f3-m f2-l measure baskerville">
            <FormattedMessage id={`${subject}.maincontent`} />
          </p>
        </div>
      </div>
      <div className="measure center mt5">
        <h1 className="fw6 f3">
          <FormattedMessage id={`${subject}.subtitle.one`} />
        </h1>
        <p className="lh-copy measure f4 f3-ns baskerville">
          <FormattedMessage id={`${subject}.subcontent.one`} />
        </p>
      </div>
      <div className="measure center mt5">
        <h1 className="fw6 f3">
          <FormattedMessage id={`${subject}.subtitle.two`} />
        </h1>
        <p className="lh-copy measure f4 f3-ns baskerville">
          <FormattedMessage id={`${subject}.subcontent.two`} />
        </p>
      </div>
      {quote && (
        <div className="measure center mv5">
          <blockquote className="ml0 mt0 pl4 bl bw2 b--yellow">
            <p className="lh-copy measure f4 f3-ns">
              <FormattedMessage id={`${subject}.obs`} />
            </p>
          </blockquote>
        </div>
      )}
    </article>
  );
};

export default ArticleComponent;
