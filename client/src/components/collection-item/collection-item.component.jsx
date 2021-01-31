import React from 'react';
import {connect} from 'react-redux';
import {addItem} from '../../redux/cart/cart.actions';
import {CollectionItemContainer, CollectionItemCustomButton, CollectionItemFooterContainer, CollectionItemImage, CollectionItemName, CollectionItemPrice} from './collection-item.styles';

const CollectionItem = ({item, addItem}) => {
    const {name, price, imageUrl} = item;
    return (
        <CollectionItemContainer>
            <CollectionItemImage
                style={{backgroundImage: `url(${imageUrl})`}}
            />
            <CollectionItemFooterContainer>
                <CollectionItemName>
                    {name}
                </CollectionItemName>
                <CollectionItemPrice>
                    ${price}
                </CollectionItemPrice>
            </CollectionItemFooterContainer>
            <CollectionItemCustomButton
                onClick={() => addItem(item)}
                inverted
            >
                Add To Cart
            </CollectionItemCustomButton>
        </CollectionItemContainer>
    );
};

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
});

export default connect(null, mapDispatchToProps)(CollectionItem);