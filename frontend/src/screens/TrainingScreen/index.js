import React from 'react';
import classes from './TrainingScreen.module.css';

import { Container, Col, Row } from 'react-bootstrap';

// My Components
import CenterContainer from '../../components/utils/CenterContainer';
import Card from '../../components/utils/Card';
import MyButton from '../../components/utils/Button';
import Location from '../../components/utils/Location';

import MiniForm from './MiniForm';

// Assets
import mini_profile from '../../assets/mini_profile.jpeg';
import session1 from '../../assets/InPersonTraining/session1.png';
import session2 from '../../assets/InPersonTraining/session2.png';
import session3 from '../../assets/InPersonTraining/session3.png';

const TrainingScreen = () => {
  return (
    <div className={classes.training_container}>
      <CenterContainer bgPadding='25px 0'>
        <div className={classes.landingScreen_container}>
          <Row>
            <Col md={10}>
              <h2>Are you local and need the in-person accountability?</h2>
              <h3>
                Come visit Trainer Hannah in person for a free assessment
                workout! Call and schedule one today!
              </h3>
              <h2>407-923-9330</h2>
              <div>
                <Row>
                  <Col>
                    <MyButton content='Get Directions' styleVariant='clear' />
                    <p>Fitness Xperts</p>
                    <p>224 W. Central Parkway Unit 1010</p>
                    <p>Altamonte Springs, FL 32714</p>
                  </Col>
                  <Col>
                    <Location src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3500.577888452477!2d-81.39420124851154!3d28.67235508231573!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e7717b9b4e0a89%3A0xa7bc3d1f48251639!2sFitness%20Xperts!5e0!3m2!1sen!2sus!4v1604347525661!5m2!1sen!2sus' />
                  </Col>
                </Row>
                <div>
                  <img src={session1} className={classes.session_image} />
                  <img src={session2} className={classes.session_image} />
                  <img src={session3} className={classes.session_image} />
                </div>
              </div>
            </Col>
            <Col md={2}>
              <h5>Call Today!</h5>
              <h5>407-923-9330</h5>
              <h5>Hannah True</h5>
              <h5> Personal Trainer </h5>
              <h5>NSCA - CSCS Certified</h5>
              <img src={mini_profile} style={{ maxWidth: '100%' }} />
              <MiniForm />
            </Col>
          </Row>
        </div>
      </CenterContainer>
    </div>
  );
};

export default TrainingScreen;
