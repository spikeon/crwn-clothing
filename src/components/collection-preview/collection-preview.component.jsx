import React from 'react';
import CollectionItem from '../collection-item/collection-item.component';
import {withRouter} from 'react-router-dom';
import {CollectionPreviewContainer, CollectionPreviewItemsContainer, CollectionPreviewTitle} from './collection-preview.styles';

const CollectionPreview = ({title, items, routeName, history, match}) => (
    <CollectionPreviewContainer>
            <CollectionPreviewTitle
                onClick={() => history.push(`${match.path}/${routeName}`)}
            >
                    {title.toUpperCase()}
            </CollectionPreviewTitle>

            <CollectionPreviewItemsContainer>
                    {
                            items.filter((item, idx) => idx < 4).map((item) => (
                                <CollectionItem
                                    key={item.id}
                                    item={item}
                                />
                            ))
                    }
            </CollectionPreviewItemsContainer>
    </CollectionPreviewContainer>
);

export default withRouter(CollectionPreview);