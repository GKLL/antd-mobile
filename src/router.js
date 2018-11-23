import React from 'react';
import { Router, Route, Switch, routerRedux  } from 'dva/router';
import PropTypes from 'prop-types';
import dynamic from 'dva/dynamic';
import { routes } from '@/common/common';

const {ConnectedRouter} = routerRedux;

const Routers = ({ history, app }) => {
  return (
    <ConnectedRouter history={history}>
     <Router history={history}>
        <Switch>
          {
            routes.map(({ path, ...dynamics}, key) => (
              <Route key={key}
                exact
                path={path}
                component={dynamic({
                  app,
                  ...dynamics,
                })}
              />
            ))
          }
        </Switch>
      </Router>
    </ConnectedRouter>
  )
}

Routers.propTypes = {
  history: PropTypes.object,
  app: PropTypes.object,
};

export default Routers;
