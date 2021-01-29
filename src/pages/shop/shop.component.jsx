import React from 'react';
import {Route, Switch} from 'react-router-dom';
import {ShopPageContainer} from './shop.styles';
import {connect} from 'react-redux';
import {fetchCollectionsStartAsync} from '../../redux/shop/shop.actions';
import CollectionsOverviewPageContainer from '../collections-overview/collections-overview.container';
import CollectionPageContainer from '../collection/collection.container';

class ShopPage extends React.Component {

    componentDidMount() {
        const {fetchCollectionsStartAsync} = this.props;
        fetchCollectionsStartAsync();
    }

    render() {
        let {match: {path}} = this.props;
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
    }
}

const mapDispatchToProps = dispatch => ({
    fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
});

export default connect(null, mapDispatchToProps)(ShopPage);