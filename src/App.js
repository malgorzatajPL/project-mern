import React from 'react';
import { BrowserRouter as Ruter, Route, Redirect, Switch } from 'react-router-dom/cjs/react-router-dom.min';

import Users from './user/pages/Users'
import NewPlace from './places/pages/NewPlace';
import MainNavigation from './shared/components/Navigation/MainNavigation';

function App() {
  return (
  <Ruter>
    <MainNavigation/>
    <main>
    <Switch>
    <Route path="/" exact>
    <Users />
    </Route>
    <Route path="/places/new" exact>
    <NewPlace />
    </Route>
    <Redirect to="/"/>
    </Switch>
    </main>
  </Ruter>
  );
}

export default App;
