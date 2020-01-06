import React from "react";
import { Route } from "react-router-dom";

export default function AppliedRoute({ component: C, appProps, ...rest }) {
  const childComponent = props => {
    return <C {...props} {...appProps} />;
  };
  return <Route {...rest}>{childComponent()}</Route>;
}
