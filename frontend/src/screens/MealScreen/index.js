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
        <div className={classes.landingScreen_container}>
          <Row>
            <Col md={10}>
              <h3>Want A Meal Plan?</h3>
              <p>
                If you’re in the Central Florida area, check out our sister
                company TRUE FIT FUEL at{' '}
                <a href='//www.truefitfuel.com'>www.truefitfuel.com</a>
              </p>
              <p>
                You can get prepared meals that will help you reach your goals
                faster!
              </p>
              <div>
                <img src={Barbeque_Chicken} alt={Barbeque_Chicken} />
                <img src={Cilantro_Lime_Shrimp} alt={Cilantro_Lime_Shrimp} />
                <img src={Salmon_Burgers} alt={Salmon_Burgers} />
                <img src={Turkey_Kale_Stew} alt={Turkey_Kale_Stew} />
              </div>
            </Col>
            <Col md={2}>
              <img src={TrueFitFuel} style={{ maxWidth: '100%' }} />
            </Col>
          </Row>
        </div>
      </CenterContainer>
    </div>
  );
};

export default MealScreen;
