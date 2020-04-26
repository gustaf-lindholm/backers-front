import React from 'react';
import ArticleComponent from '../ArticleComponent/ArticleComponent';
// import { Helmet } from "react-helmet-async";

export default function Bakery(props) {
  return (
   <ArticleComponent subject="bakery" image="bageriet" quote={true} />
  );
}
