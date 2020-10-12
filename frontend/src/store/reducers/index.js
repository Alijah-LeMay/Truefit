import { combineReducers } from 'redux';
import { siteReducer } from './siteReducers';

export default combineReducers({
  site: siteReducer,
});
