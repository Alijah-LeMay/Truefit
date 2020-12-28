import React, { useState } from 'react'
import classes from './TrainingScreen.module.css'
import axios from 'axios'

import { Col, Row } from 'react-bootstrap'

// Redux
// My Components
import CenterContainer from '../../components/utils/CenterContainer'
import MyButton from '../../components/utils/Button'
import Location from '../../components/utils/Location'
import FormField from '../../components/utils/FormField'
import Footer from '../../components/layout/Footer'

// Assets
import mini_profile from '../../assets/mini_profile.jpeg'
import session1 from '../../assets/InPersonTraining/session1.png'
import session2 from '../../assets/InPersonTraining/session2.png'
import session3 from '../../assets/InPersonTraining/session3.png'

const TrainingScreen = () => {
  const [formState, setFormState] = useState({
    name: { value: '' },
    email: { value: '' },
    phone: { value: '' },
    message: { value: '' },
  })
  const [setLoadingSubmit] = useState(false)

  const formConfig = {
    name: {
      type: 'input',
      config: { type: 'text', placeholder: 'Name' },
    },
    email: {
      type: 'input',
      config: { type: 'email', placeholder: 'Email' },
    },
    phone: {
      type: 'input',
      config: { type: 'text', placeholder: 'Phone' },
    },
    message: {
      type: 'input',
      config: { type: 'text', placeholder: 'Message' },
    },
  }
  // Prepare formState objects
  const formElements = []
  for (let key in formState) {
    formElements.push({ id: key, setup: formConfig[key] })
  }
  const inputChangedHandler = (event, inputIdentifier) => {
    formElements.forEach((formElement) => {
      if (inputIdentifier === formElement.id) {
        setFormState({
          ...formState,
          [inputIdentifier]: event.target.value,
        })
      }
    })
  }

  const submitHandler = async (e) => {
    e.preventDefault()
    setLoadingSubmit(true)
    const { name, email, phone, message } = formState
    try {
      await axios.post('/api/send', {
        name,
        email,
        phone,
        message,
      })
      console.log('Message Sent')
    } catch (error) {
      console.log('Message failed to send')
    }
    setLoadingSubmit(false)
  }

  return (
    <>
      <div className={classes.training_container}>
        <CenterContainer bgPadding='25px 0'>
          <Row>
            <Col md={9}>
              <div className={classes.action_container}>
                <h2>Are you local and need the in-person accountability?</h2>
                <h3>
                  Come visit Trainer Hannah in person for a free assessment
                  workout! Call and schedule one today!
                </h3>
                <h2>407-923-9330</h2>
              </div>
              <div className={classes.addressInfo_container}>
                <Row>
                  <Col md>
                    <MyButton
                      content='Get Directions'
                      variant='a'
                      to='//www.google.com/maps?ll=28.672355,-81.392007&z=15&t=m&hl=en&gl=US&mapclient=embed&cid=12086602704519239225'
                      styleVariant='clear'
                      color='#7a7a7a'
                      fontSize='1.5rem'
                      decoration='underline'
                      hoverColor='#6ec1e4'
                    />
                    <p>Fitness Xperts</p>
                    <p>224 W. Central Parkway Unit 1010</p>
                    <p>Altamonte Springs, FL 32714</p>
                  </Col>
                  <Col md>
                    <Location src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3500.577888452477!2d-81.39420124851154!3d28.67235508231573!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e7717b9b4e0a89%3A0xa7bc3d1f48251639!2sFitness%20Xperts!5e0!3m2!1sen!2sus!4v1604347525661!5m2!1sen!2sus' />
                  </Col>
                </Row>
                <div className={classes.featuredImages_container}>
                  <img
                    src={session1}
                    className={classes.session_image}
                    alt='session-1'
                  />
                  <img
                    src={session2}
                    className={classes.session_image}
                    alt='session-2'
                  />
                  <img
                    src={session3}
                    className={classes.session_image}
                    alt='session-3'
                  />
                </div>
              </div>
            </Col>
            <Col md={3}>
              <h5>Call Today!</h5>
              <h5>407-923-9330</h5>
              <h5>Hannah True</h5>
              <h5> Personal Trainer </h5>
              <h5>NSCA - CSCS Certified</h5>
              <img
                src={mini_profile}
                style={{ maxWidth: '100%' }}
                alt='Hannah True'
              />
              <div>
                <form onSubmit={submitHandler}>
                  {formElements.map((formElement) => (
                    <FormField
                      key={formElement.id}
                      type={formElement.setup.type}
                      config={formElement.setup.config}
                      value={formElement.setup.value}
                      changed={(event) =>
                        inputChangedHandler(event, formElement.id)
                      }
                    />
                  ))}
                  <MyButton
                    content='Send'
                    horMargin='0 0 0 2%'
                    variant='submit'
                    padding='7px'
                    radius='7px'
                    color='white'
                    bgColor='#7a7a7a'
                    hoverColor='#6ec1e4'
                  />
                </form>
              </div>
            </Col>
          </Row>
        </CenterContainer>
      </div>
      <Footer bgColor='black' fontColor='white' />
    </>
  )
}

export default TrainingScreen
