import React from "react";
import Layout from "./components/Layout/Layout";
import { BrowserRouter, Route } from "react-router-dom";
import { AppLanguage, AppRoute } from "./const";
import { HelmetProvider } from "react-helmet-async";
import Home from "./containers/Home/Home";
import Cafe from "./containers/Cafe/Cafe";
import Error from "./components/Error";
import {
  LocalizedRouter,
  LocalizedSwitch,
  appStrings
} from "./components/Routing";
import Bakery from "./components/Bakery/Bakery";
import Products from "./components/Products/Products";

function App() {
  return (
    <>
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
            <Route exact path={AppRoute.Products}>
              {Products}
            </Route>
            <Route path="*">{Error}</Route>
          </LocalizedSwitch>
        </Layout>
      </LocalizedRouter>
    </>
  );
}

export default App;
