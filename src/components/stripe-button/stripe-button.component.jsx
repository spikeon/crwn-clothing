import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import {connect} from 'react-redux';
import {clearAllItems} from '../../redux/cart/cart.actions';

const StripeCheckoutButton = ({price, clearAllItems}) => {
    const fullPrice = price * 100;
    const publishableKey = 'pk_test_51ICW2FJrnzuV116D4nqTLA1dhvfmZvC3csY9HOCkc2OAOAWfnEnhJrXhdVM1MaD6u1eMb3v2PjCXkHcNx394uzQJ00SvX49PIT';

    const onToken = token => {
        console.log(token);
        alert('Payment Successful');
        clearAllItems();
    }

    return (
        <div className='stripe-button'>
            <StripeCheckout
                label='Pay Now'
                name='CRWN Clothing'
                amount={fullPrice}
                stripeKey={publishableKey}
                image='https://svgshare.com/i/CUz.svg'
                description={`Your total is: $${price}`}
                panelLabel='Pay Now'
                token={onToken}
            />
        </div>
    );
};


const mapDispatchToProps = (dispatch) => ({
    clearAllItems: () => dispatch(clearAllItems())
});

export default connect(null, mapDispatchToProps)(StripeCheckoutButton);