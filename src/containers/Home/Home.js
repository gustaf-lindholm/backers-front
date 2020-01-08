import React from "react";
import { Helmet } from "react-helmet-async";
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
        <div className="fl w-100 w-25-ns pa2">1</div>
        <div className="fl w-100 w-25-ns pa2">2</div>
        <div className="fl w-100 w-25-ns pa2">3</div>
        <div className="fl w-100 w-25-ns pa2">4</div>
      </article>
    </>
  );
}
