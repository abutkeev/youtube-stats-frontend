import React from 'react';
import { HashRouter } from 'react-router-dom';
import { Route, Switch } from 'react-router';

import Layout from './components/Layout/Layout';
import Channels from './components/Channels/Channels';
import Channel from './components/Channel/Channel';
import Video from './components/Video';

function App() {
  return (
    <HashRouter>
      <Layout>
        <Switch>
          <Route path='/' component={Channels} exact />
          <Route path='/channels' component={Channels} />
          <Route path='/channel/:id/' component={Channel} />
          <Route path='/video/:id/' component={Video} />
        </Switch>
      </Layout>
    </HashRouter>
  );
}

export default App;
