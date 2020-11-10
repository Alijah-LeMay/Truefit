import React from 'react';
import classes from './MealScreen.module.css';

import { Container, Col, Row } from 'react-bootstrap';

// My Components
import CenterContainer from '../../components/utils/CenterContainer';
import MyButton from '../../components/utils/Button';

// Assets
import TrueFitFuel from '../../assets/MealPlans/TrueFitFuel.jpg';
import Barbeque_Chicken from '../../assets/MealPlans/Barbeque_Chicken.jpg';
import Cilantro_Lime_Shrimp from '../../assets/MealPlans/Cilantro_Lime_Shrimp.jpg';
import Salmon_Burgers from '../../assets/MealPlans/Salmon_Burgers.jpg';
import Turkey_Kale_Stew from '../../assets/MealPlans/Turkey_Kale_Stew.jpg';

const MealScreen = () => {
  return (
    <div className={classes.mealScreen_container}>
      <CenterContainer bgPadding='25px 0'>
        <Row>
          <Col md={10}>
            <h3>Want A Meal Plan?</h3>
            <p>
              If you’re in the Central Florida area, check out our sister
              company TRUE FIT FUEL at{' '}
            </p>
            <a href='//www.truefitfuel.com'>www.truefitfuel.com</a>
            <p>
              You can get prepared meals that will help you reach your goals
              faster!
            </p>
            <div>
              <img
                src={Barbeque_Chicken}
                alt={Barbeque_Chicken}
                className={classes.image_thmb}
              />
              <img
                src={Cilantro_Lime_Shrimp}
                alt={Cilantro_Lime_Shrimp}
                className={classes.image_thmb}
              />
              <img
                src={Salmon_Burgers}
                alt={Salmon_Burgers}
                className={classes.image_thmb}
              />
              <img
                src={Turkey_Kale_Stew}
                alt={Turkey_Kale_Stew}
                className={classes.image_thmb}
              />
            </div>
          </Col>
          <Col md={2}>
            <img src={TrueFitFuel} style={{ maxWidth: '100%' }} />
          </Col>
        </Row>
      </CenterContainer>
    </div>
  );
};

export default MealScreen;
