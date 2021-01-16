import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Badges from '../pages/Badges';
import BadgesNew from '../pages/BadgeNew';
import Error from '../pages/Error';
import Layout from './Layout';
import NotFound from '../pages/NotFound';
import BadgeEdit from '../pages/BadgeEdit';
function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/badges" component={Badges}></Route>
          <Route exact path="/badges/new" component={BadgesNew}></Route>
          <Route exact path="/error" component={Error}></Route>
          <Route exact path="/badges/:badgeId/edit" component={BadgeEdit}></Route>
          <Route  component={NotFound}></Route>
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
