import React from "react"
import { Switch } from "react-router-dom";
import AppliedRoute from "./components/AppliedRoute";
import Home from "./containers/Home/Home";
import Cafe from "./containers/Cafe/Cafe";
import { Se } from  "./localization/se.js";
import { Fi } from "./localization/fi.js";

export default function Routes({ appProps }) {
  console.log(appProps.lang)
  let cafe, home;
  switch (appProps.lang) {
    case "se":
      home = Se.home
      cafe = Se.cafe
      break;
    case "fi":
      home = Fi.home
      cafe = Fi.cafe
      break;
    default:
      break;
  }
  console.log(cafe)
  return (
    <Switch>
      <AppliedRoute path="/" exact component={Home} appProps={appProps} />
      <AppliedRoute path={cafe} exact component={Cafe} appProps={appProps} />
    </Switch>
  )
}