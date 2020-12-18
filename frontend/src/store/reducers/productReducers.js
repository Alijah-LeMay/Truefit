import {
  GET_PRODUCT_DETAILS_FAIL,
  GET_PRODUCT_DETAILS_SUCCESS,
  GET_PRODUCT_DETAILS_REQUEST,
} from '../../constants/productConstants'

export const productDetailsReducer = (state = { product: {} }, action) => {
  switch (action.type) {
    case GET_PRODUCT_DETAILS_REQUEST:
      return { loading: true, ...state }
    case GET_PRODUCT_DETAILS_SUCCESS:
      return { loading: false, product: action.payload }
    case GET_PRODUCT_DETAILS_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}
