import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishablekry = 'pk_test_51JD3ETSCQjOBfp90g27BMQo1NmCwgh9xGzFTeV5TWZDnT9rozyGNEnbT7bW9JQIOFkdedYJq9A261QpxR9gypwWp002yARqtLn';

    const onToken = token => {
        console.log(token);
        alert('Payment Successful');
    }

    return (
        <StripeCheckout 
            label='Pay Now'
            name='TRENDY Clothing Ltd.'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishablekry}
        />
    );
};

export default StripeCheckoutButton;