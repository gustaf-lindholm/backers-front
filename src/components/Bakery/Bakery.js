import React from 'react';
import { FormattedMessage } from 'react-intl';
import ArticleComponent from '../ArticleComponent/ArticleComponent';
// import { Helmet } from "react-helmet-async";

export default function Bakery(props) {
  const background = {
    backgroundImage: 'url(https://dummyimage.com/1500x1000.jpg)',
  };

  return (
   <ArticleComponent subject="bakery" quote={true} />
  );
}
