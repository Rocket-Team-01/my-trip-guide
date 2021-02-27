import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import pages from "./data/pages";
import { Context } from "./context/LanguageContext";
import { GlobalProvider } from "./context/GlobalState";
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
      <GlobalProvider>
        <BrowserRouter>

          <Switch>
            {routeMaps}
            <Route>
              <Redirect to="/404" />
            </Route>
          </Switch>
        </BrowserRouter>
      </GlobalProvider>
    </Context>
  );
}

export default App;
