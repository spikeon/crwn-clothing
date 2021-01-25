import React from 'react';
import {connect} from 'react-redux';
import {addItem, clearItem, removeItem} from '../../redux/cart/cart.actions';
import {CheckoutItemContainer, CheckoutItemImage, CheckoutItemImageContainer, CheckoutItemNameContainer, CheckoutItemPriceContainer, CheckoutItemQuantityArrow, CheckoutItemQuantityContainer, CheckoutItemQuantityValue, CheckoutItemRemoveButton} from './checkout-item.styles';

const CheckoutItem = ({item, clearItem, removeItem, addItem}) => {
    const {name, quantity, price, imageUrl} = item;
    return (
        <CheckoutItemContainer>

            <CheckoutItemImageContainer>
                <CheckoutItemImage src={imageUrl} alt='item' />
            </CheckoutItemImageContainer>

            <CheckoutItemNameContainer>
                {name}
            </CheckoutItemNameContainer>

            <CheckoutItemQuantityContainer>
                <CheckoutItemQuantityArrow
                    onClick={() => removeItem(item)}
                >
                    &#10094;
                </CheckoutItemQuantityArrow>

                <CheckoutItemQuantityValue>
                    {quantity}
                </CheckoutItemQuantityValue>

                <CheckoutItemQuantityArrow
                    onClick={() => addItem(item)}
                >
                    &#10095;
                </CheckoutItemQuantityArrow>
            </CheckoutItemQuantityContainer>

            <CheckoutItemPriceContainer>${price}</CheckoutItemPriceContainer>

            <CheckoutItemRemoveButton
                onClick={() => clearItem(item)}
            >
                &#10005;
            </CheckoutItemRemoveButton>
        </CheckoutItemContainer>
    );
};

const mapDispatchToProps = (dispatch) => ({
    clearItem: (item) => dispatch(clearItem(item)),
    removeItem: (item) => dispatch(removeItem(item)),
    addItem: (item) => dispatch(addItem(item))
});


export default connect(null, mapDispatchToProps)(CheckoutItem);