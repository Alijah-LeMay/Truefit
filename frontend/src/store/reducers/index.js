import { combineReducers } from 'redux';
import { captchaReducer } from './captchaReducers';

export default combineReducers({ captcha: captchaReducer });
