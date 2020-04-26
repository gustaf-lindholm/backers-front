import React from "react";
import ArticleComponent from '../ArticleComponent/ArticleComponent';

export default function Cafe(props) {
  console.log("[CAFE]",props)
  return (
    <ArticleComponent subject="cafe" quote={false}/>
  )
}