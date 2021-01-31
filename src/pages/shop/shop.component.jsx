import React from 'react';
import {Route, Switch} from 'react-router-dom';
import {ShopPageContainer} from './shop.styles';
import {connect} from 'react-redux';
import CollectionsOverviewPageContainer from '../collections-overview/collections-overview.container';
import CollectionPageContainer from '../collection/collection.container';
import {fetchCollectionsStart} from '../../redux/shop/shop.actions';

class ShopPage extends React.Component {

    componentDidMount() {
        const {fetchCollectionsStart} = this.props;
        fetchCollectionsStart();
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
    fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
});

export default connect(null, mapDispatchToProps)(ShopPage);