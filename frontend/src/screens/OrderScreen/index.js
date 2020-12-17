import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { PayPalButton } from 'react-paypal-button-v2'
import Loader from '../../components/utils/Loader'

const OrderScreen = () => {
  const [sdkReady, setSdkReady] = useState(false)
  useEffect(() => {
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
  }, [])

  const successPaymentHandler = (paymentResult) => {
    console.log(paymentResult)
  }
  return (
    <div>
      {!sdkReady ? (
        <Loader />
      ) : (
        <PayPalButton amount={} onSuccess={successPaymentHandler} />
      )}
    </div>
  )
}

export default OrderScreen
