import React from 'react';
import "./shop.styles.scss";
import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
import {Route, Switch} from "react-router-dom";
import CollectionPage from "../collection/collection.component";

const ShopPage = ({match}) => (
    <div className="shop-page">
        <Switch>
            <Route exact path={`${match.path}`} component={CollectionsOverview}/>
            <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
        </Switch>
    </div>
);

export default ShopPage;