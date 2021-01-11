import React from 'react';
import "./shop.styles.scss";
import SHOP_DATA from "./shop.data";
import {CollectionPreview} from "../../components/collection-preview/collection-preview.component";

export default class ShopPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            collections : SHOP_DATA
        }
    }

    render () {
        const {collections} = this.state;
        return (
            <div className="shop-page">
                {
                    collections.map(({id, title, items}) => (
                        <CollectionPreview key={id} title={title} items={items} />
                    ))
                }
            </div>
        )
    }

}