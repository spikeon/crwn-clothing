import {UserActionTypes} from './user.types';
import {signInFailure, signInSuccess, signOutFailure, signOutSuccess, signUpFailure, signUpSuccess} from './user.actions';
import {all, call, put, takeLatest} from 'redux-saga/effects';
import {auth, createUserProfileDocument, getCurrentUser, googleProvider} from '../../firebase/firebase.utils';

function* getSnapshotFromUserAuth(userAuth, additionalData = {}) {
    try {
        const userRef = yield call(createUserProfileDocument, userAuth, additionalData);
        const snapshot = yield userRef.get();
        yield put(signInSuccess(
            {
                id: snapshot.id,
                ...snapshot.data()
            }
        ));
    } catch (e) {
        yield put(signInFailure(e.message));
    }
}

function* signInWithGoogle() {
    try {
        const {user} = yield auth.signInWithPopup(googleProvider);
        yield getSnapshotFromUserAuth(user);
    } catch (e) {
        yield put(signInFailure(e.message));
    }
}

function* signInWithEmail({payload: {email, password}}) {
    try {
        const {user} = yield auth.signInWithEmailAndPassword(email, password);
        yield getSnapshotFromUserAuth(user);
    } catch (e) {
        yield put(signInFailure(e.message));
    }
}

function* isUserAuthenticated() {
    try {
        const userAuth = yield getCurrentUser();
        if (!userAuth) return;
        yield getSnapshotFromUserAuth(userAuth);
    } catch (e) {
        put(signInFailure(e.message));
    }
}

function* signOut() {
    try {
        yield auth.signOut();
        yield put(signOutSuccess());
    } catch (e) {
        yield put(signOutFailure(e.message));
    }
}

function* signUp({payload: {email, password, displayName}}) {
    try {
        const {user} = yield auth.createUserWithEmailAndPassword(email, password);
        yield put(signUpSuccess(
            {
                user,
                additionalData: {displayName}
            }
        ));
    } catch (e) {
        yield put(signUpFailure(e.message));
    }
}

function* signInAfterSignUp({payload: {user, additionalData}}) {
    try {
        yield getSnapshotFromUserAuth(user, additionalData);
    } catch (e) {
        yield put(signInFailure(e.message));
    }
}

export function* onGoogleSignInStart() {
    yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle);
}

export function* onEmailSignInStart() {
    yield takeLatest(UserActionTypes.EMAIL_SIGN_IN_START, signInWithEmail);
}

export function* onCheckUserSession() {
    yield takeLatest(UserActionTypes.CHECK_USER_SESSION, isUserAuthenticated);
}

export function* onSignOutStart() {
    yield takeLatest(UserActionTypes.SIGN_OUT_START, signOut);
}

export function* onSignUpStart() {
    yield takeLatest(UserActionTypes.SIGN_UP_START, signUp);
}

export function* onSignUpSuccess() {
    yield takeLatest(UserActionTypes.SIGN_UP_SUCCESS, signInAfterSignUp);
}

export function* userSagas() {
    yield all([
        call(onGoogleSignInStart),
        call(onEmailSignInStart),
        call(onCheckUserSession),
        call(onSignOutStart),
        call(onSignUpStart),
        call(onSignUpSuccess)
    ]);
}
