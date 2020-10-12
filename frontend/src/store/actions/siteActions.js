import axios from 'axios';
import {
  GET_SITES_REQUEST,
  GET_SITES_SUCCESS,
  GET_SITES_FAIL,
} from '../../constants/siteConstants';

export const getSites = () => async (dispatch) => {
  try {
    dispatch({ type: GET_SITES_REQUEST });

    const { data } = await axios.get('/api/our_work');

    dispatch({
      type: GET_SITES_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_SITES_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
