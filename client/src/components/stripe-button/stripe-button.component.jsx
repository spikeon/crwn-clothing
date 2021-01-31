import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import {connect} from 'react-redux';
import {clearAllItems} from '../../redux/cart/cart.actions';
import {StripeButtonContainer} from './stripe-button.styles';
import axios from 'axios';
import {STRIPE_PUBLISHABLE_KEY} from '../../stripe/stripe.config';
import {stripeCurrencyConversion} from '../../stripe/stripe.utils';

const StripeCheckoutButton = ({price, clearAllItems}) => {
    const fullPrice = stripeCurrencyConversion(price);

    const onToken = token => {

        axios({
            url: 'payment',
            method: 'post',
            data: {
                amount: fullPrice,
                token: token
            }
        }).then(response => {
            alert('Payment successful');
        }).catch(error => {
            console.log('Payment Error: ', JSON.parse(error));
            alert(
                'There was an issue with your payment.  Please make sure you use the provided test credit card number.'
            );
        });

        clearAllItems();
    };

    return (
        <StripeButtonContainer>
            <StripeCheckout
                label='Pay Now'
                name='CRWN Clothing'
                amount={fullPrice}
                stripeKey={STRIPE_PUBLISHABLE_KEY}
                image='https://svgshare.com/i/CUz.svg'
                description={`Your total is: $${price}`}
                panelLabel='Pay Now'
                token={onToken}
            />
        </StripeButtonContainer>
    );
};


const mapDispatchToProps = (dispatch) => ({
    clearAllItems: () => dispatch(clearAllItems())
});

export default connect(null, mapDispatchToProps)(StripeCheckoutButton);