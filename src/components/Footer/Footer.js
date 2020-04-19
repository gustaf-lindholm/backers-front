import React from 'react';
import {FormattedMessage} from 'react-intl';

const Footer = () => {
  const background =
    'https://res.cloudinary.com/babiluskus/image/upload/v1586975703/backers-simple-front/ax_luomu_ekologiskt.jpg';
  return (
    <footer
      style={{ background: `url(${background})`, backgroundOrigin: "border-box", backgroundRepeat: "no-repeat" }}
      className="ph3 black-70 contain mt5 w-100 flex flex-wrap justify-around"
    >
      <div className="bg-white w-25 tl o-80">
        <div className="pa5">
        <p><FormattedMessage id="footer.title"/></p>
        <p><FormattedMessage id="footer.companyName"/></p>
        <p><FormattedMessage id="footer.address"/></p>
        <p><FormattedMessage id="footer.phonePrefix"/><FormattedMessage id="footer.phone"/></p>
        <a href="mailto:" className="link dim black-70 lh-solid">
          <FormattedMessage id="footer.email" />
        </a>
        </div>
      </div>
      <div className="outline w-25">2</div>
    </footer>
  );
};

export default Footer;
