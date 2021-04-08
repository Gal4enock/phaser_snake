import React, {Suspense, Component} from 'react';
import { Route, Switch } from 'react-router-dom';

import LoginPage from '../Login/Login.jsx';


function App() {
  return (
    <div className="App">
   <Suspense fallback={<h1>Loading...</h1>}>
          <Switch>
            <Route path="/" exact component={LoginPage} />
            {/* <Route path="/login"  component={} />
             <Route path="/register"  exact component={} />
            <Route path='/contacts' exact component={ContactsPage}/> */}
          </Switch>
        </Suspense>
    </div>
  );
}

export default App;
