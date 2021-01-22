import React from "react";
import "./collection.styles.scss";
import {selectCollection} from "../../redux/shop/shop.selector";
import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";

const CollectionPage = ({collection}) => {
    return (
        <div className='collection'>
            <h2>{collection.title}</h2>
        </div>
    );
};

const mapStateToProps = (state, ownProps) => createStructuredSelector({
    collection: selectCollection(ownProps.match.params.collectionId)
})

export default connect(mapStateToProps)(CollectionPage);