import React from "react";

export default function Home(props) {
  const background = {
    backgroundImage: "url(https://dummyimage.com/1000x1000.jpg)"
  };
  return (
    <article className="bg-white">
      <div className="vh-75 cover bg-center" style={background}></div>
    </article>
  );
}
