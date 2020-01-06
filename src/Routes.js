import React from "react";
import AppliedRoute from "./components/AppliedRoute";
import Home from "./containers/Home/Home";
import Cafe from "./containers/Cafe/Cafe";
import Error from "./components/Error";
export default function Routes({ appProps }) {
  const paths = {appProps}
  return (
    <>
      <AppliedRoute
        path={paths.home}
        exact
        component={Home}
        appProps={appProps}
      />
      <AppliedRoute
        path={paths.cafe}
        exact
        component={Cafe}
        appProps={appProps}
      />
      <AppliedRoute path="*" component={Error} appProps={appProps} />
    </>
  );
}
