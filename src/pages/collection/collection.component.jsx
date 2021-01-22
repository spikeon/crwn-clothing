import React from 'react';
import './collection.styles.scss';
import {selectCollection} from '../../redux/shop/shop.selector';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import CollectionItem from '../../components/collection-item/collection-item.component';

const CollectionPage = ({collection}) => {
    const {title, items} = collection;
    return (
        <div className='collection-page'>
            <h2 className='title'>{title}</h2>
            <div className='items'>
                {
                    items.map(item => <CollectionItem key={item.id} item={item} />)
                }
            </div>
        </div>
    );
};

const mapStateToProps = (state, ownProps) => createStructuredSelector({
    collection: selectCollection(ownProps.match.params.collectionName)
});

export default connect(mapStateToProps)(CollectionPage);