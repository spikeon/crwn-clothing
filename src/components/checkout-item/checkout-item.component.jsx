import React from 'react';
import "./checkout-item.styles.scss";
import {connect} from "react-redux";
import {addItem, clearItem, removeItem} from "../../redux/cart/cart.actions";

const CheckoutItem = ({item, clearItem, removeItem, addItem}) => {
    const {name, quantity, price, imageUrl} = item;
    return (
        <div className='checkout-item'>
            <div className='image-container'>
                <img src={imageUrl} alt='item'/>
            </div>
            <span className='name'>
                {name}
            </span>
            <div className='quantity'>
                <div className='arrow'  onClick={() => removeItem(item)}>
                    &#10094;
                </div>
                <span className='value'>{quantity}</span>
                <div className='arrow' onClick={() => addItem(item)}>
                    &#10095;
                </div>
            </div>
            <span className='price'>
                ${quantity * price}
            </span>
            <div className='remove-button' onClick={() => clearItem(item)}>
                &#10005;
            </div>
        </div>
    );
};

const mapDispatchToProps = (dispatch) => ({
    clearItem: (item) => dispatch(clearItem(item)),
    removeItem: (item) => dispatch(removeItem(item)),
    addItem: (item) => dispatch(addItem(item)),
});


export default connect(null, mapDispatchToProps)(CheckoutItem);