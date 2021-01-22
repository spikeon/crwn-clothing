import {createSelector} from "reselect";
import memoize from "lodash.memoize";
const selectShop = state => state.shop;
export const selectCollections = createSelector(
    [selectShop],
    shop => shop.collections
);

export const selectCollection = memoize((collectionId) => createSelector(
    [selectCollections],
    (collections) => collections.find(collection => collection.routeName === collectionId)
));