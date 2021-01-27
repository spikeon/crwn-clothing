import React from 'react';
import CollectionsOverviewPage from '../collections-overview/collections-overview.component';
import {Route, Switch} from 'react-router-dom';
import CollectionPage from '../collection/collection.component';
import {ShopPageContainer} from './shop.styles';
import {convertCollectionsSnapshotToMap, firestore} from '../../firebase/firebase.utils';
import {connect} from 'react-redux';
import {updateCollections} from '../../redux/shop/shop.actions';
import WithSpinner from '../../components/with-spinner/with-spinner.component';

const ShopPageContainerWithSpinner = WithSpinner(ShopPageContainer);

class ShopPage extends React.Component {

    state = {
        loading: true
    };

    unsubscribeFromSnapshot = null;

    componentDidMount() {
        const {updateCollections} = this.props;
        const collectionRef = firestore.collection('collections');
        collectionRef.onSnapshot(async snapshot => {
            const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
            updateCollections(collectionsMap);
            this.setState({loading: false});
        });
    }

    render() {
        let {match} = this.props;
        return (
            <ShopPageContainerWithSpinner isLoading={this.state.loading}>
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
            </ShopPageContainerWithSpinner>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap))
});

export default connect(null, mapDispatchToProps)(ShopPage);