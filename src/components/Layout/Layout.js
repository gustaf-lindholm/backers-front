import React from "react";
import {Navigation} from "../Navigation/Navigation";
export default function Layout({children}) {
  return (
    <div>
      <div as="header">
        <Navigation />
      </div>
      <div as="main">{children}</div>
    </div>
  );
}
