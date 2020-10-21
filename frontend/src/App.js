import React, { Fragment } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// Redux
import { Provider } from 'react-redux';
import store from './store';

// My Components
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

// My Screens
import LoginScreen from './screens/LoginScreen';

import LandingScreen from './screens/LandingScreen';

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Fragment>
        <Navbar />
        <Switch>
          <Route exact path='/' component={LandingScreen} />
          <Route exact path='/login' component={LoginScreen} />
        </Switch>
        <Footer />
      </Fragment>
    </BrowserRouter>
  </Provider>
);

export default App;
