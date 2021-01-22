import {combineReducers} from "redux";
import userReducer from "./user/user.reducer";
import cartReducer from "./cart/cart.reducer";
import storage from "redux-persist/lib/storage"
import {persistReducer} from "redux-persist";
import directoryReducer from "./directory/directory.reducer";

const reducers = {
    user: userReducer,
    cart: cartReducer,
    directory : directoryReducer
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