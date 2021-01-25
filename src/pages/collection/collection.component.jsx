import React from 'react';
import {selectCollection} from '../../redux/shop/shop.selector';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import CollectionItem from '../../components/collection-item/collection-item.component';
import {CollectionContainer, CollectionItemsContainer, CollectionTitle} from './collection.styles';

const CollectionPage = ({collection}) => {
    const {title, items} = collection;
    return (
        <CollectionContainer>
            <CollectionTitle>{title}</CollectionTitle>
            <CollectionItemsContainer>
                {
                    items.map(item => <CollectionItem key={item.id} item={item} />)
                }
            </CollectionItemsContainer>
        </CollectionContainer>
    );
};

const mapStateToProps = (state, ownProps) => createStructuredSelector({
    collection: selectCollection(ownProps.match.params.collectionName)
});

export default connect(mapStateToProps)(CollectionPage);