import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios'

const StripeCheckoutButton = ({price}) => {
  const priceForStripe = price * 100
  const publishableKey = 'pk_test_il7t20zszJzBFA2LtbGaZ61C00AhGH8yco'

  const onToken = token => {
    alert('Payment successful')
    axios({
      url: 'payment',
      method: 'post',
      data: {
        amount:priceForStripe,
        token
      }
    }).then(res=>{
      alert('Payment succesfull')
    }).catch(error=>{
      console.log('Payment error: ', error);
      alert('Problem with payment, Please sure provide valid credit card');
    });
  };

  return (
    <StripeCheckout 
      label="Pay Now"
      name="Music Shop Payments"
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      descrpition={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  )
}

export default StripeCheckoutButton
