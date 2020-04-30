import React from 'react';
import AspectRatioImage from '../AspectRatioImage/AspectRatioImage';
import { FormattedMessage, FormattedHTMLMessage } from 'react-intl';


const FrontPageArticel = ({ image, introTextId, headerId, children }) => {
  return (
    <article className="pv4 bt bb b--black-10 ph3 ph0-l">
      <div className="flex flex-column flex-row-ns">
        <div className="w-100 w-60-ns pr3-ns order-2 order-1-ns">
          <h1 className="f3 mt0 lh-title"><FormattedMessage id={headerId} /></h1>
          <p className="f5 f4-l lh-copy">
            <FormattedHTMLMessage id={introTextId} />
          </p>
          {children}
        </div>
        <div className="pl3-ns order-1 order-2-ns mb4 mb0-ns w-100 w-40-ns">
          <AspectRatioImage image={image} messageId={headerId} />
        </div>
      </div>
    </article>
  );
};

export default FrontPageArticel;
