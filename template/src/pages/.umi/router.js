import React from 'react';
import { Router as DefaultRouter, Route, Switch } from 'react-router-dom';
import dynamic from 'umi/dynamic';
import('E:/risk/src/global.css');
import Layout from 'E:/risk/src/layouts/index.js';
import { routerRedux } from 'dva/router';


let Router = DefaultRouter;
const { ConnectedRouter } = routerRedux;
Router = ConnectedRouter;


export default function() {
  return (
<Router history={window.g_history}>
  <Layout><Switch>
    <Route exact path="/404" component={() => React.createElement(require('E:/risk/node_modules/umi-build-dev/lib/Compiling.js').default, { route: '/404' })} />
    <Route exact path="/example" component={require('../example/page.js').default} />
    <Route exact path="/" component={require('../index.js').default} />
    <Route component={require('E:/risk/src/pages/404.js').default} />
  </Switch></Layout>
</Router>
  );
}
