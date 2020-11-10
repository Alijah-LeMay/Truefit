import React from 'react';
import classes from './TestimonialsScreen.module.css';

import { Col, Row } from 'react-bootstrap';

// My Components
import CenterContainer from '../../components/utils/CenterContainer';

// Assets
import BeforeAfter1 from '../../assets/Testimonials/BeforeAfter1.jpg';

const TestimonialsScreen = () => {
  return (
    <div className={classes.testimonialsScreen_container}>
      <CenterContainer bgPadding='25px 0'>
        <Row>
          <Col lg={5}>
            <img src={BeforeAfter1} alt={BeforeAfter1} />
          </Col>
          <Col lg={7}>
            <h3>TRUE FIT Client Comments</h3>
            <p style={{ padding: '5px' }}>
              “Since working with Hannah, I’ve gone from 263 lbs. to 190 lbs.,
              my blood pressure has dropped from 165/89 to 106/68 and my waist
              size has gone from 46 inches to 33 inches. My stamina has
              increased. I’ve found less pressure on both my replaced knee
              joints. I’ve changed my diet to include those foods that are
              healthy for me. I’ve seen less illness and quicker recovery.
            </p>
          </Col>
        </Row>
        <p>
          The most enjoyable part of this health gain is the clothing choices I
          now have and the new attitude one gains when looking in the mirror.
          You feel good about how you look. I also should be able to watch the
          grand babies grow up. I picked Hannah, because she is gracious, she
          has an up personality, and has a great attitude toward fitness.”{' '}
          <span>– Dave P. 75 pounds lost in nine months</span>
        </p>
        <p>
          “Hannah has been one of my best decisions! She is a true professional
          and extremely knowledgeable in her field. I had lost weight, was down
          to about 100lbs and was struggling to put the weight back on. With
          Hannah’s expertise, I’ve gained muscle mass, refined my diet and, as a
          result, I feel healthier and have more energy. And the workouts are
          great! Hannah targets each person’s individual trouble areas to meet
          their specific needs. I could never have done this on my own. I would
          recommend Hannah for both weight training and her food program without
          hesitation. Hannah, you’re the best!” <span>– Ann F.</span>
        </p>
        <p>
          “I have been training with Hannah for three years. Fitness is her
          passion. She is very knowledgeable in physiology and nutrition and
          keeps one motivated with her effective program that she crafts just
          for you. She pays attention to my own personal goals so I have gained
          muscle and lost inches around my middle. Hannah is a very qualified
          trainer and is very motivated to help one succeed in their fitness
          goals.” <span>– Marsha W.</span>
        </p>
        <p>
          “I met Hannah about 4 years ago at a gym after my then current trainer
          relocated. Looking at that very young woman then, I thought I could be
          lazy during my training sessions. As they say, “Looks can be very
          deceiving”. Hannah turned out to be a very mature person, a
          powerhouse, comprehensive in the planning and coordination of my
          exercise plan, making sure that every muscle is exercised every minute
          of the time allocated. She has pushed me to do things I did not think
          I could ever do. Although I am sore for 2 days after each session, I
          would not want to miss any session as overall I feel much better. When
          she moved to another gym, I right away moved along with her. She
          always takes the time to check on my eating habits regularly. I hate
          that she does not take “I am too tired to do that exercise” as an
          answer, but at the end it turns out to be good for me. I am glad she
          does not let me slide. She seems to care a lot about my progress and 4
          years later I am still using her and will most likely for many more
          years to come. She is a True Trainer.” <span>– Ralph G.</span>
        </p>
      </CenterContainer>
    </div>
  );
};

export default TestimonialsScreen;
