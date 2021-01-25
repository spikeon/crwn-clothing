import React from 'react';
import {CartItemContainer, CartItemDetails, CartItemImage, CartItemName, CartItemPrice} from './cart-item.styles';

const CartItem = ({item: {imageUrl, price, name, quantity}}) => (
    <CartItemContainer>
        <CartItemImage src={imageUrl} alt='item' />
        <CartItemDetails>
            <CartItemName>
                {name}
            </CartItemName>
            <CartItemPrice>
                {quantity} x ${price}
            </CartItemPrice>
        </CartItemDetails>
    </CartItemContainer>
);

export default CartItem;