import React, { Fragment } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { StyleRoot } from 'radium';

// Redux
import { Provider } from 'react-redux';
import store from './store';

import TrueFit from './assets/TrueFit.png';

// My Components
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import ImageBanner from './components/utils/ImageBanner';
import CenterContainer from './components/utils/CenterContainer';

// My Screens
import LoginScreen from './screens/LoginScreen';

import LandingScreen from './screens/LandingScreen';

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <StyleRoot>
        <Fragment>
          <CenterContainer bgColor='black' bgPadding='50px 0 0 0'>
            <ImageBanner
              imageLOC={TrueFit}
              altText='Home page Banner'
              bgColor='black'
              height='100%'
            />
          </CenterContainer>

          <Navbar />
          <Switch>
            <Route exact path='/' component={LandingScreen} />
            <Route exact path='/login' component={LoginScreen} />
          </Switch>
          <Footer />
        </Fragment>
      </StyleRoot>
    </BrowserRouter>
  </Provider>
);

export default App;
