import React from 'react';
import classes from './Landing.module.css';
// fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faKeyboard,
  faShoppingCart,
  faDolly,
} from '@fortawesome/free-solid-svg-icons';

// My Components
import ImageBanner from '../../components/utils/ImageBanner';
import CenterContainer from '../../components/utils/CenterContainer';
import Card from '../../components/utils/Card';

import MyButton from '../../components/utils/Button';
// Assets
import landing_bck from '../../assets/landing_bck.jpg';
import home_analytics from '../../assets/home_analytics.png';

const Landing = () => {
  return (
    <div className={classes.landing_Container}>
      <ImageBanner
        imageLOC={landing_bck}
        label='Professional Website Design'
        altText='Home page Banner'
        bgOpacity
        opacity={0.2}
        bgColor='#f2f2f2'
      />
      <CenterContainer bgColor='#f2f2f2' bgPadding='25px 0'>
        <div className={classes.landing_featuredContainer}>
          <h1 className={classes.textBanner}>Why Choose Us?</h1>
          <div className={classes.firstCards_container}>
            <Card height='300px'>
              <FontAwesomeIcon
                icon={faKeyboard}
                className={classes.icon}
                color={'#CEB302'}
              />
              <h2>Intuitive, Creative, Professional</h2>
              <p>
                You get the best experience when choosing us for your design and
                development
              </p>
            </Card>
            <Card>
              <FontAwesomeIcon
                icon={faShoppingCart}
                className={classes.icon}
                color={'#3D5AAF'}
              />
              <h2>One Stop Shop</h2>
              <p>
                Need a website? No problem. Search Engine Optimization? We've
                got you covered. App Development? Yep, that too​
              </p>
            </Card>
            <Card>
              <FontAwesomeIcon
                icon={faDolly}
                className={classes.icon}
                color={'#4BB781'}
              />
              <h2>Hard Working</h2>
              <p>
                We strive to provide our customers quick and professional
                support​​
              </p>
            </Card>
          </div>
        </div>
      </CenterContainer>
      <CenterContainer bgPadding='40px 0'>
        <div className={classes.infoSection_container}>
          <Card height='100%'>
            <img src={home_analytics} alt='website analytics' />
          </Card>
          <div className={classes.infoSection_right}>
            <h2>Website Development</h2>
            <h3>Intuitive Design</h3>
            <p>
              Desire something special? We create intuitive and stunning
              websites that feature aesthetic designs and clean modern branding.
              For us, every project starts with a goal and gets completed with
              outstanding outcomes.
            </p>
            <h3>Worry Free</h3>
            <p>
              We are your full-service website development partner, and we take
              care of everything when it comes to web design. The Web Developers
              specialize in creating exceptional and outstanding website
              applications for all clients. We understand your demands and
              intend to help you achieve them.
            </p>
            <MyButton content='LEARN MORE' to='/services' />
          </div>
        </div>
      </CenterContainer>
      <CenterContainer bgColor='#f2f2f2' bgPadding='40px 0'>
        <div>
          <h1 className={classes.textBanner}>Additional Services</h1>
          <div className={classes.firstCards_container}>
            <Card variant='outline'>
              <h2>Logo Design</h2>

              <p>
                Take your business a step forward with a website to showcase
                your products and services.
              </p>
            </Card>
            <Card variant='outline'>
              <h2>SEO</h2>
              <p>
                Drive more Organic traffic to your site by increasing your rank
                in search results
              </p>
            </Card>
            <Card variant='outline'>
              <h2>Marketing</h2>
              <p>
                Get noticed by the customers that matter. Start a Marketing
                Campaign today.
              </p>
            </Card>
          </div>
          <MyButton content='Quote' />
        </div>
      </CenterContainer>
    </div>
  );
};

export default Landing;
