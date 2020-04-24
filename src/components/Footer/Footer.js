import React from 'react';
import { FormattedMessage } from 'react-intl';

const Footer = () => {
  const background =
    'https://res.cloudinary.com/babiluskus/image/upload/v1586975703/backers-simple-front/ax_luomu_ekologiskt.jpg';
  return (
    <>
      <footer className="tc ph3 mt5 w-100 flex flex-wrap ph6-l items-center">
        <div className="w-50-ns w-100 h5">
          <h3 className="f4 measure-wide ba-yellow tracked">
            <FormattedMessage id="footer.title" />
          </h3>
          <p>
            <FormattedMessage id="footer.companyName" />
          </p>
          <p>
            <FormattedMessage id="footer.address" />
          </p>
          <p>
            <FormattedMessage id="footer.phonePrefix" />
            <FormattedMessage id="footer.phone" />
          </p>
          <a href="mailto:" className="link dim black-70 lh-solid">
            <FormattedMessage id="footer.email" />
          </a>
        </div>
        <div className="w-50-ns w-100 h5">
          <h3 className="f4 measure-wide ba-yellow tracked">
            <FormattedMessage id="footer.socialMedia" />
          </h3>
          <div className="">
            <a
              class="link near-black hover-silver dib mh3 tc"
              href="https://facebook.com"
              title="Facebook"
            >
              <i class="fab fa-instagram fa-3x"></i>
              <span class="f6 db">Instagram</span>
            </a>
            <a
              class="link near-black hover-silver dib mh3 tc"
              href="https://facebook.com"
              title="Facebook"
            >
              <i class="fab fa-facebook-f fa-3x"></i>
              <span class="f6 db">Facebook</span>
            </a>
          </div>
        </div>

      </footer>
      <div
        style={{ background: `url(${background}) repeat-x`, backgroundPosition: 'center bottom' }}
        className="ph3 pv5 w-100 h5 flex ph6-l items-center"
      ></div>
    </>
  );
};

export default Footer;
