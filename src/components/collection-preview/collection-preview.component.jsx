import React from 'react';
import "./collection-preview.styles.scss";
import {CollectionItem} from "../collection-item/collection-item.component";

export const CollectionPreview = ({title, items}) => (
    <div className="collection-preview">
        <h1 className="title">{title.toUpperCase()}</h1>
        <div className="preview">
            {
                items.filter((item, idx) => idx < 4).map(({id, ...itemProps}) => (
                    <CollectionItem
                        key={id}
                        name={itemProps.name}
                        price={itemProps.price}
                        imageUrl={itemProps.imageUrl}/>
                ))
            }
        </div>
    </div>
)

