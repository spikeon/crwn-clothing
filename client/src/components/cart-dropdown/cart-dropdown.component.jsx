import React from 'react';
import CustomButton from '../custom-button/custom-button.component';
import {connect} from 'react-redux';
import CartItem from '../cart-item/cart-item.component';
import {selectCartItems} from '../../redux/cart/cart.selectors';
import {createStructuredSelector} from 'reselect';
import {withRouter} from 'react-router-dom';
import {toggleCartHidden} from '../../redux/cart/cart.actions';
import {CartDropdownContainer, CartItemsContainer, EmptyMessageContainer} from './cart-dropdown.styles';

const CartDropdown = ({cartItems, history, dispatch}) => {

    const onClick = () => {
        history.push('/checkout');
        dispatch(toggleCartHidden());
    };

    return (
        <CartDropdownContainer>
            <CartItemsContainer>
                {
                    cartItems.length ?
                        cartItems.map((cartItem) => (<CartItem key={cartItem.id} item={cartItem} />))
                        :
                        <EmptyMessageContainer>Your cart is empty</EmptyMessageContainer>
                }
            </CartItemsContainer>
            <CustomButton onClick={onClick}>GO TO CHECKOUT</CustomButton>
        </CartDropdownContainer>
    );
};

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProps)(CartDropdown));