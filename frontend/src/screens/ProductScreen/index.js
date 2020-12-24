import React, { useState, useEffect } from 'react'
import axios from 'axios'
// Redux

import { useDispatch, useSelector } from 'react-redux'
// My Components

import Loader from '../../components/utils/Loader'
import { getProductDetails } from '../../store/actions/productActions'
// Assets
import classes from './ProductScreen.module.css'
import PayPalButton from '../../components/PayPalButton'

const ProductScreen = ({ match }) => {
  const dispatch = useDispatch()
  const productId = match.params.id

  const productDetails = useSelector((state) => state.productDetails)
  const { product } = productDetails

  const [sdkReady, setSdkReady] = useState(false)

  useEffect(() => {
    if (!product || product._id !== productId) {
      dispatch(getProductDetails(productId))
    }

    console.log(product)
  }, [dispatch, product, productId])

  const successPaymentHandler = (paymentResult) => {
    console.log(paymentResult)
  }
  return (
    <div className={classes.buttonContainer}>
      {!product ? (
        <Loader />
      ) : (
        <PayPalButton amount={product.price} planId={product.planId} />
      )}
    </div>
  )
}

export default ProductScreen
