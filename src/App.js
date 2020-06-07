import React from 'react';
import { HashRouter } from 'react-router-dom';
import { Route, Switch } from 'react-router';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import rootReducer from './redux/rootReducer';
import Layout from './components/Layout/Layout';
import Channels from './components/Channels/Channels';
import Channel from './components/Channel/Channel';

function App() {
  const store = createStore(rootReducer)
  return (
    <Provider store={store}>
      <HashRouter>
        <Layout>
          <Switch>
            <Route path='/' component={Channels} exact />
            <Route path='/channels' component={Channels} />
            <Route path='/channel/:id/' component={Channel} />
          </Switch>
        </Layout>
      </HashRouter>
    </Provider>
  );
}

export default App;
