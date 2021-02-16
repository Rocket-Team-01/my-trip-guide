import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import pages from './data/pages'
import {Context} from './context/LanguageContext'
function App() {
  const routeMaps = pages.map((item, index) => (
    <Route
      key={index}
      exact={item.isExact}
      path={item.link}
      component={item.component}
    />
  ));
  return (
    <Context>
      <BrowserRouter>
        <Switch>
        {routeMaps}
        </Switch>
      </BrowserRouter>
    </Context>
  );
}

export default App;
