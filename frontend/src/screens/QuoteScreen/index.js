import React, { Component } from 'react';

// Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelopeOpen, faPhone } from '@fortawesome/free-solid-svg-icons';
// Assets

import classes from './QuoteScreen.module.css';
import quote_bck from '../../assets/quote_bck.jpg';

// My Components

import ImageBanner from '../../components/utils/ImageBanner';
import CenterContainer from '../../components/utils/CenterContainer';
import Card from '../../components/utils/Card';
import MyButton from '../../components/utils/Button';
import FormField from '../../components/utils/FormField';

class QuoteScreen extends Component {
  state = {
    quoteForm: {
      name: {
        type: 'input',
        config: {
          type: 'text',
          placeholder: 'Name',
        },
        value: '',
      },
      email: {
        type: 'input',
        config: {
          type: 'email',
          placeholder: 'Email',
        },
        value: '',
      },
      phone: {
        type: 'input',
        config: {
          type: 'text',
          placeholder: 'Phone Number',
        },
        value: '',
      },
      address: {
        type: 'input',
        config: {
          type: 'text',
          placeholder: 'Address',
        },
        value: '',
      },
      typeOfBusiness: {
        type: 'input',
        config: {
          type: 'text',
          placeholder: 'Type of Business',
        },
        value: '',
      },
    },
  };
  submitFormHandler = (event) => {
    event.preventDefault();
    const formData = {};
    for (let formElementIdentifier in this.state.quoteForm) {
      formData[formElementIdentifier] = this.state.quoteForm[
        formElementIdentifier
      ].value;
    }
    console.log(formData);
  };
  updateFormHandler = (event, inputIdentifier) => {
    const updatedForm = {
      ...this.state.quoteForm,
    };
    const updatedFormElement = { ...updatedForm[inputIdentifier] };
    updatedFormElement.value = event.target.value;
    updatedForm[inputIdentifier] = updatedFormElement;
    this.setState({
      quoteForm: updatedForm,
    });
  };
  render() {
    const formElementsArray = [];
    for (let key in this.state.quoteForm) {
      formElementsArray.push({
        id: key,
        setup: this.state.quoteForm[key],
      });
    }
    return (
      <div className={classes.quoteScreen_container}>
        <ImageBanner
          imageLOC={quote_bck}
          label='Time To Grow'
          altText='Quote Screen Banner'
          bgOpacity
          opacity={0.5}
        />
        <CenterContainer Horizontal>
          <div className={classes.quote_left}>
            <h2 className={classes.label}>Get In Touch </h2>
            <h1>Contact Details</h1>
            <div className={classes.icon_container}>
              <FontAwesomeIcon
                className={classes.icon}
                icon={faEnvelopeOpen}
                size='lg'
              />
              <p>info@thewebdev.net</p>
            </div>
            <div className={classes.icon_container}>
              <FontAwesomeIcon
                className={classes.icon}
                icon={faPhone}
                size='lg'
              />
              <p>{'(239)-671-7373'}</p>
            </div>
          </div>
          <Card align='left'>
            <h2 className={classes.label}>Free Estimation</h2>
            <h1>Request A Quote</h1>
            <form onSubmit={this.submitFormHandler}>
              {formElementsArray.map((formElement) => (
                <FormField
                  key={formElement.id}
                  type={formElement.setup.type}
                  config={formElement.setup.config}
                  value={formElement.setup.value}
                  changed={(event) =>
                    this.updateFormHandler(event, formElement.id)
                  }
                />
              ))}
              <MyButton
                content='SUBMIT'
                type='submit'
                style={{ margin: '10px 0' }}
                styleVariant='clear'
                hoverColor='#4bb781'
                fontSize='1rem'
              />
            </form>
          </Card>
        </CenterContainer>
      </div>
    );
  }
}

export default QuoteScreen;
