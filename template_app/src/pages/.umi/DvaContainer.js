import { Component } from 'react';
import dva from 'dva';
import createLoading from 'dva-loading';

const app = dva({
  history: window.g_history,
});
window.g_app = app;
app.use(createLoading());
app.use(require('../../plugins/onError.js').default);
app.model({ ...(require('F:/dva-umi-app/src/models/global.js').default) });
app.model({ ...(require('F:/dva-umi-app/src/pages/list/models/list.js').default) });
app.model({ ...(require('F:/dva-umi-app/src/pages/login/models/login.js').default) });
app.model({ ...(require('F:/dva-umi-app/src/pages/main/models/main.js').default) });

class DvaContainer extends Component {
  render() {
    app.router(() => this.props.children);
    return app.start()();
  }
}

export default DvaContainer;
