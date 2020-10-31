import React from 'react';
import classes from './Landing.module.css';
// fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Container, Col, Row } from 'react-bootstrap';

// My Components
import ImageBanner from '../../components/utils/ImageBanner';
import CenterContainer from '../../components/utils/CenterContainer';

// Assets
import TrueFit from '../../assets/TrueFit.png';
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
                <h2>hello</h2>
              </Col>
            </Row>
          </Container>
        </div>
      </CenterContainer>
    </div>
  );
};

export default Landing;
