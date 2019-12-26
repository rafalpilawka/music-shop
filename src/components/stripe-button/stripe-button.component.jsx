import React from 'react';
import StripeCheckout from 'react-stripe-checkout'


const StripeCheckoutButton = ({price}) => {
  const priceForStripe = price * 100
  const publishableKey = 'pk_test_il7t20zszJzBFA2LtbGaZ61C00AhGH8yco'
  const onToken = token => (
    console.log(token),
    alert('Payment successful')
  )

  return (
    <StripeCheckout 
      label="Pay Now"
      name="Music Shop Payments"
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      descrpition={`Your totl is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  )
}

export default StripeCheckoutButton
