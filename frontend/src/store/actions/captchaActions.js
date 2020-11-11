import {
  SET_CAPTCHA_SUCCESS,
  SET_CAPTCHA_FAIL,
} from '../../constants/captchaConstants';

export const setCaptcha = (value) => async (dispatch) => {
  try {
    const data = value;

    dispatch({
      type: SET_CAPTCHA_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: SET_CAPTCHA_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
