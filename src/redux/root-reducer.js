import {combineReducers} from "redux";
import userReducer from "./user/user.reducer";

const reducers = {
    user: userReducer
};

export default combineReducers(reducers);