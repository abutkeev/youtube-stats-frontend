import React from 'react';
import { Route, Switch } from 'react-router';

import Layout from './components/Layout/Layout';
import Channels from './components/Channels/Channels';

function App() {
  return (
    <Layout>
      <Switch>
        <Route path='/' component={Channels} exact />
        <Route path='/channels' component={Channels}/>
      </Switch>
    </Layout>
  );
}

export default App;
