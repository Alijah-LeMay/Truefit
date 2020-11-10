import React, { Fragment, useState, useEffect } from 'react';
// Assets
import classes from './ContactScreen.module.css';
// Redux
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../store/actions/userActions';
// My Components

import CenterContainer from '../../components/utils/CenterContainer';
import FormField from '../../components/utils/FormField';
import MyButton from '../../components/utils/Button';

const ContactScreen = ({ history }) => {
  const dispatch = useDispatch();
  const [formState, setFormState] = useState({
    name: { value: '' },
    email: { value: '' },
    phone: { value: '' },
    message: { value: '' },
  });

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
  };
  // Prepare formState objects
  const formElements = [];
  for (let key in formState) {
    formElements.push({ id: key, setup: formConfig[key] });
  }

  const inputChangedHandler = (event, inputIdentifier) => {
    formElements.forEach((formElement) => {
      if (inputIdentifier === formElement.id) {
        setFormState({
          ...formState,
          [inputIdentifier]: event.target.value,
        });
      }
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(formState.email, formState.password);
    dispatch(login(formState.email, formState.password));
  };

  return (
    <CenterContainer>
      <div className={classes.contactScreen_container}>
        <h3>Telephone Number</h3>
        <h3>407-923-9330</h3>
        <p>Or complete the form below.</p>
        <p>Your information is secure with us and not sold to anyone. </p>
        <form onSubmit={submitHandler}>
          {formElements.map((formElement) => (
            <FormField
              key={formElement.id}
              type={formElement.setup.type}
              config={formElement.setup.config}
              value={formElement.setup.value}
              changed={(event) => inputChangedHandler(event, formElement.id)}
            />
          ))}
          <MyButton
            content='Submit'
            variant='submit'
            styleVariant='clear'
            horMargin='0 0 0 2%'
            radius='7px'
            padding='10px'
            color='white'
            bgColor='#7a7a7a'
            hoverColor='#6ec1e4'
          />
        </form>
      </div>
    </CenterContainer>
  );
};

export default ContactScreen;
