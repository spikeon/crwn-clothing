import React from 'react';
import "./shop.styles.scss";
import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
import {Route, Switch} from "react-router-dom";

const ShopPage = ({match}) => (
    <div className="shop-page">
        <Switch>
            <Route exact path={`${match.path}`} component={CollectionsOverview}/>
        </Switch>
    </div>
);

export default ShopPage;