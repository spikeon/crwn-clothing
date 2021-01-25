import React from 'react';
import CollectionsOverviewPage from '../collections-overview/collections-overview.component';
import {Route, Switch} from 'react-router-dom';
import CollectionPage from '../collection/collection.component';
import {ShopPageContainer} from './shop.styles';

const ShopPage = ({match}) => (
    <ShopPageContainer>
        <Switch>
            <Route
                exact
                path={`${match.path}`}
                component={CollectionsOverviewPage}
            />

            <Route
                path={`${match.path}/:collectionName`}
                component={CollectionPage}
            />
        </Switch>
    </ShopPageContainer>
);

export default ShopPage;