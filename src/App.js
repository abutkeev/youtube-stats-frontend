import React from 'react';
import { Route, Switch } from 'react-router';

import Layout from './Layout/Layout';
import Channels from './Channels/Channels';

function App() {
  return (
    <Layout>
      <Switch>
        <Route path='/' component={Channels} />
      </Switch>
    </Layout>
  );
}

export default App;
