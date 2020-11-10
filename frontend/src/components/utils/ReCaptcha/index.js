import React, { Component } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
// Redux
import { connect } from 'react-redux';
import { setCaptcha } from '../../../store/actions/captchaActions';

const SITE_KEY = '6LfjTuAZAAAAAODtU1CfMXETuWYjrWks0atG91fv';
const DELAY = 1500;

class MyReCaptcha extends Component {
  constructor(props, ...args) {
    super(props, ...args);
    this.state = {
      callback: 'not fired',
      value: '[empty]',
      load: false,
      expired: 'false',
    };
    this._reCaptchaRef = React.createRef();
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ load: true });
    }, DELAY);
    console.log('didMount - reCaptcha Ref-', this._reCaptchaRef);
  }

  handleChange = (value) => {
    console.log('Captcha value:', value);
    // console.log(this.state);
    this.props.setCaptcha(this.state);

    // if value is null recaptcha expired
    if (value === null) this.setState({ expired: 'true' });
    this.props.setCaptcha(this.state);
  };
  asyncScriptOnLoad = () => {
    this.setState({ callback: 'called!' });
    console.log('scriptLoad - reCaptcha Ref-', this._reCaptchaRef);
  };

  render() {
    const { load } = this.state || {};
    return (
      <div>
        {load && (
          <ReCAPTCHA
            style={{ display: 'inline-block' }}
            theme='dark'
            ref={this._reCaptchaRef}
            sitekey={SITE_KEY}
            onChange={this.handleChange}
            asyncScriptOnLoad={this.asyncScriptOnLoad}
          />
        )}
      </div>
    );
  }
}

export default connect(null, { setCaptcha })(MyReCaptcha);
