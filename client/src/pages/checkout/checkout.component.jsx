import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectCartItems, selectCartTotal} from '../../redux/cart/cart.selectors';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';
import {CheckoutContainer, CheckoutHeader, CheckoutHeaderContainer, CheckoutTotal, EmptyCartMessage, TestWarning} from './checkout.styles';

const CheckoutPage = ({cartItems, total}) => (
    cartItems.length ?
        <CheckoutContainer>
            <CheckoutHeaderContainer>
                <CheckoutHeader>Product</CheckoutHeader>
                <CheckoutHeader>Description</CheckoutHeader>
                <CheckoutHeader className='header-block'>Quantity</CheckoutHeader>
                <CheckoutHeader>Price</CheckoutHeader>
                <CheckoutHeader>Remove</CheckoutHeader>
            </CheckoutHeaderContainer>
            {
                cartItems.map(cartItem => <CheckoutItem key={cartItem.id} item={cartItem} />)
            }
            <CheckoutTotal>TOTAL: ${total}</CheckoutTotal>
            <TestWarning>
                <p>*Please use the following test credit card for payments*</p>
                <p>4242 4242 4242 4242 - EXP: 1/23 - CW: 123</p>
            </TestWarning>
            <StripeCheckoutButton price={total} />
        </CheckoutContainer>
        :
        <EmptyCartMessage>
            There are no items in the cart
        </EmptyCartMessage>
);

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
});

export default connect(mapStateToProps)(CheckoutPage);