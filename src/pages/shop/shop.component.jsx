import React from 'react';
import CollectionsOverviewPage from '../collections-overview/collections-overview.component';
import {Route, Switch} from 'react-router-dom';
import CollectionPage from '../collection/collection.component';
import {ShopPageContainer} from './shop.styles';
import {connect} from 'react-redux';
import WithSpinner from '../../components/with-spinner/with-spinner.component';
import {createStructuredSelector} from 'reselect';
import {selectIsCollectionFetching} from '../../redux/shop/shop.selector';
import {fetchCollectionsStartAsync} from '../../redux/shop/shop.actions';

const ShopPageContainerWithSpinner = WithSpinner(ShopPageContainer);

class ShopPage extends React.Component {

    componentDidMount() {
        const {fetchCollectionsStartAsync} = this.props;
        fetchCollectionsStartAsync();
    }

    render() {
        let {isFetching, match: {path}} = this.props;
        return (
            <ShopPageContainerWithSpinner isLoading={isFetching}>
                <Switch>
                    <Route
                        exact
                        path={`${path}`}
                        component={CollectionsOverviewPage}
                    />

                    <Route
                        path={`${path}/:collectionName`}
                        component={CollectionPage}
                    />
                </Switch>
            </ShopPageContainerWithSpinner>
        );
    }
}

const mapStateToProps = createStructuredSelector({
    isFetching: selectIsCollectionFetching
});

const mapDispatchToProps = dispatch => ({
    fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
});

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);