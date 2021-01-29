import {createStructuredSelector} from 'reselect';
import {selectIsCollectionFetching} from '../../redux/shop/shop.selector';
import {connect} from 'react-redux';
import CollectionsOverviewPage from './collections-overview.component';
import WithSpinner from '../../components/with-spinner/with-spinner.component';
import {compose} from 'redux';

const mapStateToProps = createStructuredSelector({
    isLoading: selectIsCollectionFetching
});

const CollectionsOverviewPageContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(CollectionsOverviewPage);

export default CollectionsOverviewPageContainer;