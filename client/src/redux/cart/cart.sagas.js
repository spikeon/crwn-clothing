import {all, call, put, takeLatest} from 'redux-saga/effects';
import {clearAllItems} from './cart.actions';
import {UserActionTypes} from '../user/user.types';

export function* clearCart() {
    yield put(clearAllItems());
}

export function* onClearCart() {
    yield takeLatest(UserActionTypes.SIGN_OUT_SUCCESS, clearCart);
}

export function* cartSagas() {
    yield(all([
        call(onClearCart)
    ]));
}