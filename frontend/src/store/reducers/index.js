import { combineReducers } from 'redux'
import { captchaReducer } from './captchaReducers'
import { productDetailsReducer } from './productReducers'

export default combineReducers({
  captcha: captchaReducer,
  productDetails: productDetailsReducer,
})
