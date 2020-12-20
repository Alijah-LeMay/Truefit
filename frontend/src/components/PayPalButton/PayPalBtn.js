import { PayPalButton } from 'react-paypal-button-v2'
import React from 'react'

const PayPalBtn = (props) => {
  const {
    amount,
    currency,
    createSubscription,
    onApprove,
    catchError,
    onError,
    onCancel,
    paypalKey,
  } = props

  return (
    <PayPalButton
      amount={amount}
      currency={currency}
      createSubscription={(data, details) => createSubscription(data, details)}
      onApprove={(data, details) => onApprove(data, details)}
      onError={(err) => onError(err)}
      catchError={(err) => catchError(err)}
      onCancel={(err) => onCancel(err)}
      options={{ clientId: paypalKey, vault: true, intent: 'subscription' }}
      style={{
        shape: 'rect',
        color: 'blue',
        layout: 'horizontal',
        label: 'subscribe',
      }}
    />
  )
}

export default PayPalBtn
