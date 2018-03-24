import { Component } from 'react';
import dva from 'dva';
import createLoading from 'dva-loading';

const app = dva({
  history: window.g_history,
});
window.g_app = app;
app.use(createLoading());
app.use(require('../../plugins/onError.js').default);
app.model({ ...(require('F:/dva-umi/src/models/global.js').default) });
app.model({ ...(require('F:/dva-umi/src/pages/content/example/models/example.js').default) });
app.model({ ...(require('F:/dva-umi/src/pages/example/models/example.js').default) });

class DvaContainer extends Component {
  render() {
    app.router(() => this.props.children);
    return app.start()();
  }
}

export default DvaContainer;
