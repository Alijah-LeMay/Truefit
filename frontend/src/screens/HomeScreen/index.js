import React from 'react'
import classes from './HomeScreen.module.css'

import { Container, Col, Row } from 'react-bootstrap'

// My Components
import CenterContainer from '../../components/utils/CenterContainer'
import Card from '../../components/utils/Card'
import MyButton from '../../components/utils/Button'
import Footer from '../../components/layout/Footer'
import PayPalButton from '../../components/PayPalButton'

// Assets
import Hannah_true from '../../assets/Hannah_true.jpeg'

const HomeScreen = () => {
  return (
    <>
      <CenterContainer bgPadding='25px 0'>
        <div className={classes.homeScreen_container}>
          <Container>
            <Row>
              <Col md={4}>
                <img
                  src={Hannah_true}
                  style={{ width: '100%' }}
                  alt='Hannah True'
                />
              </Col>
              <Col md={8}>
                <div className={classes.title_container}>
                  <h3>Hannah True</h3>
                  <h3>NSCA - Certified Strength and Conditioning Coach</h3>
                  <p style={{ textAlign: 'center' }}>
                    Enjoy meeting Trainer Hannah through a video chat and let us
                    know how we can help YOU!
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
          <div className={classes.description_container}>
            <h3>At TRUE FIT,</h3>
            <p>
              We believe in efficient training and sustainable nutrition for
              results you can keep. With customized workouts and nutrition plans
              to fit your needs and your abilities, we can have you reaching
              your goals in no time! Not only do we want you to reach your goals
              and keep your results, we want to educate you along the way!
            </p>
          </div>
          <div className={classes.cards_container}>
            <Card bgColor='#7a7a7a' padding='7px 0'>
              <div style={{ display: 'flex', flexDirection: 'row' }}>
                <div>
                  <h3>3 Workouts a Week</h3>
                </div>
                <div>
                  <p>$150 / Month</p>
                </div>

                <div>
                  <MyButton
                    content='Purchase'
                    to='/product/5fdcd72ffad37c21e04c8d90'
                    styleVariant='clear'
                    color='#6ec1e4'
                    hoverColor='white'
                    fontSize='1.6rem'
                  />
                </div>
              </div>
            </Card>
            <Card bgColor='#7a7a7a' padding='7px 0'>
              <div style={{ display: 'flex', flexDirection: 'row' }}>
                <div>
                  <h3>3 Workouts A Week + Monthly Video-Chat Sessions</h3>
                </div>
                <div>
                  <p>$180 / Month</p>
                </div>

                <div>
                  <MyButton
                    content='Purchase'
                    to='/product/5fdcda84ce115834dc0518f7'
                    styleVariant='clear'
                    color='#6ec1e4'
                    hoverColor='white'
                    fontSize='1.6rem'
                  />
                </div>
              </div>
            </Card>
            <Card bgColor='#7a7a7a' padding='7px 0'>
              <div style={{ display: 'flex', flexDirection: 'row' }}>
                <div>
                  <h3>4 Workouts A Week</h3>
                </div>
                <div>
                  <p>$200 / Month</p>
                </div>

                <div>
                  <MyButton
                    content='Purchase'
                    to='/product/5fe508dc6517c71d786b34d5'
                    styleVariant='clear'
                    color='#6ec1e4'
                    hoverColor='white'
                    fontSize='1.6rem'
                  />
                </div>
              </div>
            </Card>
            <Card bgColor='#7a7a7a' padding='7px 0'>
              <div style={{ display: 'flex', flexDirection: 'row' }}>
                <div>
                  <h3>4 Workouts A Week + Monthly Video-Chat Sessions</h3>
                </div>
                <div>
                  <p>$230 / Month</p>
                </div>

                <div>
                  <MyButton
                    content='Purchase'
                    to='/product/5fe5091c6517c71d786b34d6'
                    styleVariant='clear'
                    color='#6ec1e4'
                    hoverColor='white'
                    fontSize='1.6rem'
                  />
                </div>
              </div>
            </Card>
          </div>
          <div className={classes.programs_container}>
            <h3>What All Programs Include</h3>
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
            <h3>How It Works:</h3>
            <ul style={{ listStyleType: 'decimal' }}>
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
          <div>login field/ api</div>
          <div>login field/ api</div>
          <div className={classes.clients_container}>
            <h3>Our Clients</h3>
            <p>
              I work with children, adults, athletes, and the elderly, those who
              are looking for weight loss, muscle gain, rehabilitation, relief
              from osteoporosis, and everything in between.
            </p>
          </div>
        </div>
      </CenterContainer>
      <Footer bgColor='black' fontColor='white' />
    </>
  )
}

export default HomeScreen
