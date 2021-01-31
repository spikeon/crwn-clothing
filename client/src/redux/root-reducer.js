import {combineReducers} from 'redux';
import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';
import storage from 'redux-persist/lib/storage';
import {persistReducer} from 'redux-persist';
import directoryReducer from './directory/directory.reducer';
import shopReducer from './shop/shop.reducer';

const reducers = {
    user: userReducer,
    cart: cartReducer,
    directory: directoryReducer,
    shop: shopReducer
};

const persistConfig = {
    key: 'root',
    storage: storage,
    whitelist: [
        'cart'
    ]
};

const rootReducer = combineReducers(reducers);

export default persistReducer(persistConfig, rootReducer);