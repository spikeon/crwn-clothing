import React from "react";
import CollectionPreview from "../collection-preview/collection-preview.component";
import {createStructuredSelector} from "reselect";
import {selectCollections} from "../../redux/shop/shop.selector";
import {connect} from "react-redux";

const CollectionsOverview = ({collections}) => (
    <div className='collections-overview'>
        {
            collections.map(({id, ...otherCollectionProps}) => (
                <CollectionPreview key={id} {...otherCollectionProps} />
            ))
        }
    </div>
);

const mapStateToProps = createStructuredSelector({
    collections : selectCollections
})

export default connect(mapStateToProps)(CollectionsOverview);