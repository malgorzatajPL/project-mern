import React from 'react';
import { BrowserRouter as Ruter, Route, Redirect, Switch } from 'react-router-dom/cjs/react-router-dom.min';

import Users from './user/pages/Users'
import NewPlace from './places/pages/NewPlace';
import MainNavigation from './shared/components/Navigation/MainNavigation';
import UserPlaces from './places/pages/UserPlaces';

function App() {
  return (
  <Ruter>
    <MainNavigation/>
    <main>
    <Switch>
    <Route path="/" exact>
    <Users />
    </Route>
    <Route path="/:userId/places" exact>
    <UserPlaces />
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
