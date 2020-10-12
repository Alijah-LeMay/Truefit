import React, { Component, Fragment } from 'react';
// Assets
import landing_bck from '../../assets/landing_bck.jpg';
// My Components
import ImageBanner from '../utils/ImageBanner';
import CenterContainer from '../utils/CenterContainer';
import FormField from '../utils/FormField';

class Login extends Component {
  state = {
    loginForm: {
      email: {
        type: 'input',
        config: {
          type: 'email',
          placeholder: 'Your email',
        },
        value: '',
      },
      password: {
        type: 'input',
        config: {
          type: 'text',
          placeholder: 'Your password',
        },
        value: '',
      },
    },
  };
  inputChangedHandler = (event, inputIdentifier) => {
    const updatedForm = {
      ...this.state.loginForm,
    };
    const updatedFormElement = { ...updatedForm[inputIdentifier] };
    updatedFormElement.value = event.target.value;
    updatedForm[inputIdentifier] = updatedFormElement;
    this.setState({
      loginForm: updatedForm,
    });
  };
  render() {
    const formElementsArray = [];
    for (let key in this.state.loginForm) {
      formElementsArray.push({
        id: key,
        setup: this.state.loginForm[key],
      });
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
          <form>
            <h2>Administrator Login</h2>
            {formElementsArray.map((formElement) => (
              <FormField
                key={formElement.id}
                type={formElement.setup.type}
                config={formElement.setup.config}
                value={formElement.setup.value}
                changed={(event) =>
                  this.inputChangedHandler(event, formElement.id)
                }
              />
            ))}
          </form>
        </CenterContainer>
      </Fragment>
    );
  }
}

export default Login;
