import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';

import setupStore from './store.js';

import 'normalize.css';

import pagesConfig from '../scenes';

import './app.styl';


function prepareReducers (config) {
  const reducers = {};

  for (const page in config) {
    const reducer = config[page].reducer;

    if (reducer) {
      reducers[page] = reducer;
    }
  }

  return reducers;
}

function prepareNavigationConfig (config) {
  const navigationConfig = [];

  for (const page in config) {
    const title = config[page].title;
    const path = config[page].path;

    if (path && title) {
      navigationConfig.push({
        path,
        title,
      });
    }
  }

  return navigationConfig;
}

function renderRoutes (routesConfig, navigationConfig) {
  const routes = [];

  for (const page in routesConfig) {
    const Component = routesConfig[page].component;
    const routeProps = {
      key: routesConfig[page].path,
      path: routesConfig[page].path,
      component: (props) => (
        <Component
          {...props}
          navigationConfig={navigationConfig}
        />
      ),
    };

    routes.push(<Route {...routeProps} />);
  }

  return routes;
}

const reducers = prepareReducers(pagesConfig);
const store = setupStore(reducers);

const App = () => {
  const navigationConfig = prepareNavigationConfig(pagesConfig);
  const routes = renderRoutes(pagesConfig, navigationConfig);

  return (
    <Provider store={store}>
      <Router>
        <Switch>
          {routes}
          <Redirect exact from="/" to="/home" />
          <Route render={() => <div>404 Not found</div>} />
        </Switch>
      </Router>
    </Provider>
  );
};

export default App;
