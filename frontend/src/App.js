import React, { Fragment } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { StyleRoot } from 'radium';

import classes from './App.module.css';
// Redux
import { Provider } from 'react-redux';
import store from './store';

import TrueFit from './assets/TrueFit.png';

// My Components
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import ImageBanner from './components/utils/ImageBanner';
import CenterContainer from './components/utils/CenterContainer';
import { useTracking } from './components/utils/useTracking';
import ScrollToTop from './components/utils/ScrollToTop';

// My Screens
import LoginScreen from './screens/LoginScreen';

import LandingScreen from './screens/LandingScreen';
import TrainingScreen from './screens/TrainingScreen';
import MealScreen from './screens/MealScreen';
import TestimonialsScreen from './screens/TestimonialsScreen';
import ContactScreen from './screens/ContactScreen';

export const App = () => {
  useTracking('');
  // input tracking key (G-########)
  // to track analytics
  return (
    <Fragment>
      <CenterContainer bgColor='black' bgPadding='50px 0 0 0' width='1370px'>
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
        <Route exact path='/training' component={TrainingScreen} />
        <Route exact path='/meals' component={MealScreen} />
        <Route exact path='/testimonials' component={TestimonialsScreen} />
        <Route exact path='/contact' component={ContactScreen} />
        <Route exact path='/login' component={LoginScreen} />
      </Switch>
      <Footer bgColor='black' fontColor='white' />
    </Fragment>
  );
};

export default () => (
  <Provider store={store}>
    <BrowserRouter>
      <ScrollToTop />
      <StyleRoot>
        <App />
      </StyleRoot>
    </BrowserRouter>
  </Provider>
);
