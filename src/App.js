import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { AppLanguage, AppRoute } from "./const";
import { HelmetProvider } from "react-helmet-async";
import {
  LocalizedRouter,
  LocalizedSwitch,
  appStrings
} from "./components/Routing";

import Layout from "./components/Layout/Layout";
import Home from "./containers/Home/Home";
import Cafe from "./components/Cafe/Cafe";
import Error from "./components/Error";
import Bakery from "./components/Bakery/Bakery";
import StoreFinder from "./containers/StoreFinder/StoreFinder";


function App() {
  return (
      <LocalizedRouter
        RouterComponent={BrowserRouter}
        languages={AppLanguage}
        appStrings={appStrings}
      >
        <Layout>
          <LocalizedSwitch>
            <Route exact path={AppRoute.Home}>
              {Home}
            </Route>
            <Route exact path={AppRoute.Cafe}>
              {Cafe}
            </Route>
            <Route exact path={AppRoute.Bakery}>
              {Bakery}
            </Route>
            <Route exact path={AppRoute.Stores}>
              {StoreFinder}
            </Route>
            <Route path="*">{Error}</Route>
          </LocalizedSwitch>
        </Layout>
      </LocalizedRouter>
  );
}

export default App;
