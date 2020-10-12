import {
  GET_SITES_REQUEST,
  GET_SITES_SUCCESS,
  GET_SITES_FAIL,
} from '../../constants/siteConstants';

export const siteReducer = (state = { sites: [] }, action) => {
  switch (action.type) {
    case GET_SITES_REQUEST:
      return { loading: true, sites: [] };
    case GET_SITES_SUCCESS:
      return { loading: false, sites: action.payload };
    case GET_SITES_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
