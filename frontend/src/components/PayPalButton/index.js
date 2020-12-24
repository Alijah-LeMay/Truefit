import React, { useState, useEffect } from 'react'
import axios from 'axios'

// My Components
import PayPalBtn from './PayPalBtn'
import Loader from '../utils/Loader'

const PayPalButton = (props) => {
  const [sdkReady, setSdkReady] = useState()
  const [payKey, setPayKey] = useState()
  const { planId, amount, currency } = props
  const paypalSubscribe = (data, actions) => {
    return actions.subscription.create({
      plan_id: planId,
    })
  }

  const paypalOnError = (err) => {
    console.log(`Error paykey value: ${payKey}`)
    console.log(err)
  }

  const paypalOnApprove = (data, detail) => {
    //   Store data in backend
    console.log('Payapl approved')
    console.log(`SubId: ${data.subscriptionID}`)
    console.log(data)
    console.log(detail)
  }
  useEffect(() => {
    const addPayPalScript = async () => {
      const { data: clientId } = await axios.get('/api/config/paypal')

      console.log(`Client ID: ${clientId}`)
      setPayKey(clientId)
      setSdkReady(true)
    }
    if (!window.paypal) {
      addPayPalScript()
    } else {
      setSdkReady(true)
    }
  }, [])

  return (
    <>
      {!sdkReady || !payKey ? (
        <Loader />
      ) : (
        <PayPalBtn
          amount={amount}
          currency={currency}
          createSubscription={paypalSubscribe}
          onApprove={paypalOnApprove}
          catchError={paypalOnError}
          onCancel={paypalOnError}
          paypalKey={payKey}
        />
      )}
    </>
  )
}

export default PayPalButton
