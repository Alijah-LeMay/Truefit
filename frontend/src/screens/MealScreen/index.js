import React from 'react';
import classes from './MealScreen.module.css';

import { Container, Col, Row } from 'react-bootstrap';

// My Components
import CenterContainer from '../../components/utils/CenterContainer';
import MyButton from '../../components/utils/Button';

// Assets
import TrueFitFuel from '../../assets/MealPlans/TrueFitFuel.jpg';

const MealScreen = () => {
  return (
    <div className={classes.mealScreen_container}>
      <CenterContainer bgPadding='25px 0'>
        <div className={classes.landingScreen_container}>
          <Container>
            <Row>
              <Col md={10}></Col>
              <Col md={2}>
                <img src={TrueFitFuel} style={{ maxWidth: '100%' }} />
              </Col>
            </Row>
          </Container>
        </div>
      </CenterContainer>
    </div>
  );
};

export default MealScreen;
