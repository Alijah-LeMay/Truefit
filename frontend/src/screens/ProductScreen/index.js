import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { PayPalButton } from 'react-paypal-button-v2'
// Redux

import { useDispatch, useSelector } from 'react-redux'
// My Components

import Loader from '../../components/utils/Loader'
import { getProductDetails } from '../../store/actions/productActions'
// Assets
import classes from './ProductScreen.module.css'

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

    const addPayPalScript = async () => {
      const { data: clientId } = await axios.get('/api/config/paypal')
      const script = document.createElement('script')
      script.type = 'text/javascript'
      script.src = `https://www.paypal.com/sdk/js?client-id=${clientId}`
      script.async = true
      script.onload = () => {
        setSdkReady(true)
      }
      document.body.appendChild(script)
      console.log(clientId)
    }
    if (!window.paypal) {
      addPayPalScript()
    } else {
      setSdkReady(true)
    }
    console.log(product)
  }, [dispatch, product, productId])

  const successPaymentHandler = (paymentResult) => {
    console.log(paymentResult)
  }
  return (
    <div className={classes.buttonContainer}>
      {!sdkReady ? (
        <Loader />
      ) : !product ? (
        <Loader />
      ) : (
        <PayPalButton amount={180} onSuccess={successPaymentHandler} />
      )}
    </div>
  )
}

export default ProductScreen
