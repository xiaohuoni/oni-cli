import React from 'react';
import { Router as DefaultRouter, Route, Switch } from 'react-router-dom';
import dynamic from 'umi/dynamic';
import renderRoutes from 'umi/_renderRoutes';
import('F:/dva-umi/src/global.css');
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
        "component": () => React.createElement(require('F:/dva-umi/node_modules/umi-build-dev/lib/Compiling.js').default, { route: '/404' })
      },
      {
        "path": "/content",
        "exact": false,
        "component": require('../content/_layout.js').default,
        "routes": [
          {
            "path": "/content/example",
            "exact": true,
            "component": require('../content/example/page.js').default
          },
          {
            "path": "/content/",
            "exact": true,
            "component": require('../content/index.js').default
          },
          {
            "path": "/content/list",
            "exact": true,
            "component": require('../content/list.js').default
          }
        ]
      },
      {
        "path": "/example",
        "exact": true,
        "component": require('../example/page.js').default
      },
      {
        "path": "/",
        "exact": true,
        "component": require('../index.js').default
      },
      {
        "path": "/index.html",
        "exact": true,
        "component": () => React.createElement(require('F:/dva-umi/node_modules/umi-build-dev/lib/Compiling.js').default, { route: '/index.html' })
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
