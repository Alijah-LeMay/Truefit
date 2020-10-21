import React, { useState, Fragment } from 'react';
// Assets
import landing_bck from '../../assets/landing_bck.jpg';
// My Components
import ImageBanner from '../../components/utils/ImageBanner';
import CenterContainer from '../../components/utils/CenterContainer';
import FormField from '../../components/utils/FormField';
import e from 'express';

const LoginScreen = () => {
  const [formState, setFormState] = useState({
    email: { value: '' },
    password: { value: '' },
  });
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // state = {
  //   loginForm: {
  //     email: {
  //       type: 'input',
  //       config: {
  //         type: 'email',
  //         placeholder: 'Your email',
  //       },
  //       value: '',
  //     },
  //     password: {
  //       type: 'input',
  //       config: {
  //         type: 'text',
  //         placeholder: 'Your password',
  //       },
  //       value: '',
  //     },
  //   },
  // };
  // const inputChangedHandler = (event, inputIdentifier) => {
  //   if (inputIdentifier === 'email') {
  //     setFormState({ email: '' });
  //   }
  // };
  // inputChangedHandler = (event, inputIdentifier) => {
  //   const updatedForm = {
  //     ...this.state.loginForm,
  //   };
  //   const updatedFormElement = { ...updatedForm[inputIdentifier] };
  //   updatedFormElement.value = event.target.value;
  //   updatedForm[inputIdentifier] = updatedFormElement;
  //   this.setState({
  //     loginForm: updatedForm,
  //   });
  // };

  const submitHandler = () => {};

  // const formElementsArray = [];
  // for (let key in this.state.loginForm) {
  //   formElementsArray.push({
  //     id: key,
  //     setup: this.state.loginForm[key],
  //   });
  // }
  const formConfig = {
    email: {
      type: 'input',
      config: { type: 'email', placeholder: 'Your Email' },
    },
    password: {
      type: 'input',
      config: { type: 'text', placeholder: 'Your password' },
    },
  };
  const formElementsArray = [];
  for (let key in formState) {
    formElementsArray.push({ id: key, setup: formConfig[key] });
  }
  return (
    <Fragment>
      <ImageBanner
        imageLOC={landing_bck}
        bgOpacity
        opacity={0.3}
        label='Admin'
      />
      <CenterContainer>
        <form onSubmit={submitHandler}>
          <h2>Administrator Login</h2>
          {/* {formElementsArray.map((formElement) => (
            <FormField
              key={formElement.id}
              type={formElement.setup.type}
              config={formElement.setup.config}
              value={formState.formElement}
              changed={(event) => inputChangedHandler(event, formElement.id)}
            />
          ))} */}
        </form>
      </CenterContainer>
    </Fragment>
  );
};

export default LoginScreen;
