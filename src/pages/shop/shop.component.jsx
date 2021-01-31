import React, {useEffect} from 'react';
import {Route, Switch} from 'react-router-dom';
import {ShopPageContainer} from './shop.styles';
import {connect} from 'react-redux';
import CollectionsOverviewPageContainer from '../collections-overview/collections-overview.container';
import CollectionPageContainer from '../collection/collection.container';
import {fetchCollectionsStart} from '../../redux/shop/shop.actions';

const ShopPage = ({fetchCollectionsStart, match: {path}}) => {

    useEffect(() => {
        fetchCollectionsStart();
    }, []);

    return (
        <ShopPageContainer>
            <Switch>
                <Route
                    exact
                    path={`${path}`}
                    component={CollectionsOverviewPageContainer}
                />

                <Route
                    path={`${path}/:collectionName`}
                    component={CollectionPageContainer}
                />
            </Switch>
        </ShopPageContainer>
    );
};

const mapDispatchToProps = dispatch => ({
    fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
});

export default connect(null, mapDispatchToProps)(ShopPage);