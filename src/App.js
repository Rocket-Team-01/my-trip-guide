import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import pages from './data/pages'
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
    <div>
      <BrowserRouter>
        <Switch>
        {routeMaps}
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
