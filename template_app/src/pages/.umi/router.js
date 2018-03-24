import React from 'react';
import { Router as DefaultRouter, Route, Switch } from 'react-router-dom';
import dynamic from 'umi/dynamic';
import renderRoutes from 'umi/_renderRoutes';
import('F:/dva-umi-app/src/global.less');
import { routerRedux } from 'dva/router';



let Router = DefaultRouter;
const { ConnectedRouter } = routerRedux;
Router = ConnectedRouter;


const routes = [
  {
    "component": require('../../layouts/index.js').default,
    "routes": [
      {
        "path": "/404",
        "exact": true,
        "component": () => React.createElement(require('F:/dva-umi-app/node_modules/umi-build-dev/lib/Compiling.js').default, { route: '/404' })
      },
      {
        "path": "/",
        "exact": true,
        "component": require('../index.js').default
      },
      {
        "path": "/list",
        "exact": true,
        "component": require('../list/page.js').default
      },
      {
        "path": "/login",
        "exact": true,
        "component": require('../login/page.js').default
      },
      {
        "path": "/main",
        "exact": true,
        "component": require('../main/page.js').default
      },
      {
        "path": "/index.html",
        "exact": true,
        "component": () => React.createElement(require('F:/dva-umi-app/node_modules/umi-build-dev/lib/Compiling.js').default, { route: '/index.html' })
      }
    ]
  }
];

export default function() {
  return (
<Router history={window.g_history}>
  { renderRoutes(routes) }
</Router>
  );
}
