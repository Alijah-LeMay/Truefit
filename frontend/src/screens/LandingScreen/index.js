import React from 'react';
import classes from './Landing.module.css';

import { Container, Col, Row } from 'react-bootstrap';

// My Components
import CenterContainer from '../../components/utils/CenterContainer';
import Card from '../../components/utils/Card';
import MyButton from '../../components/utils/Button';

// Assets
import Hannah_true from '../../assets/Hannah_true.jpeg';

const Landing = () => {
  return (
    <div className={classes.landing_Container}>
      <CenterContainer bgPadding='25px 0'>
        <div className={classes.landingScreen_container}>
          <Container>
            <Row>
              <Col md={4}>
                <img src={Hannah_true} style={{ width: '100%' }} />
              </Col>
              <Col md={8}>
                <h4>Hannah True</h4>
                <h4>NSCA - Certified Strength and Conditioning Coach</h4>
                <div>
                  Enjoy meeting Trainer Hannah through a video chat and let us
                  know how we can help YOU!
                </div>
              </Col>
            </Row>
          </Container>
          <div>
            <h4>At TRUE FIT,</h4>
            <p>
              We believe in efficient training and sustainable nutrition for
              results you can keep. With customized workouts and nutrition plans
              to fit your needs and your abilities, we can have you reaching
              your goals in no time! Not only do we want you to reach your goals
              and keep your results, we want to educate you along the way!
            </p>
          </div>
          <div>
            <Card>
              <div style={{ display: 'flex', flexDirection: 'row' }}>
                <h4>3 Workouts a Week</h4>
                <p>$150 / Month</p>
                <MyButton
                  content='purchase'
                  to='/'
                  styleVariant='clear'
                  hoverColor='red'
                />
              </div>
            </Card>
          </div>
          <div>
            <h4>What All Programs Include</h4>
            <ul>
              <li>
                Introductory video chat with Trainer Hannah to discuss your
                goals
              </li>
              <li>
                Weekly scheduled workout plan tailored to you, with videos and
                descriptions of all exercises (at home or in the gym)
              </li>
              <li>Nutrition plan and coaching suited to your needs</li>
              <li>RESULTS!</li>
            </ul>
            <h4>How It Works:</h4>
            <ul>
              <li>Choose the plan that suits you.</li>
              <li>
                Complete checkout process, including your personal information.
              </li>
              <li>
                You will receive an email with an invite to create an account.
                Once you have done that you will schedule a video chat session
                with Trainer Hannah.
              </li>
              <li>
                Download our app so you can have your plan and workouts right on
                your phone.
              </li>
              <li>
                You will start receiving your workouts and nutrition plan!
              </li>
            </ul>
          </div>
          <div>login field/ api</div>
          <div>
            <h4>Our Clients</h4>
            <p>
              I work with children, adults, athletes, and the elderly, those who
              are looking for weight loss, muscle gain, rehabilitation, relief
              from osteoporosis, and everything in between.
            </p>
          </div>
        </div>
      </CenterContainer>
    </div>
  );
};

export default Landing;
