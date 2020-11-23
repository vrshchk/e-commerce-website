import React from 'react';
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price* 100;
    const publishableKey = 'pk_test_51HqfZNFTOnCQy6YUjOwnl21XRFGfMd9cZ6zU2C4YcALllDoAjIdNTHVR8GlNiXKYM9xCJ66QaawMpv8wI1SO39PK00OY9YF1xr';

    const onToken = token => {
        console.log(token);
        alert('Payment Successful')
    }

    return (
        <StripeCheckout
            label='PayNow'
            name='This Shop'
            billingAddress
            shippingAddress
            image='https://sendeyo.com/up/d/f3eb2117da'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token = {onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton;
