import React, {useEffect} from 'react';
import {HomePage} from './pages/homepage/homepage.component';
import {Redirect, Route, Switch} from 'react-router-dom';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import {connect} from 'react-redux';
import {selectCurrentUser} from './redux/user/user.selector';
import {createStructuredSelector} from 'reselect';
import CheckoutPage from './pages/checkout/checkout.component';
import {checkUserSession} from './redux/user/user.actions';

const App = ({checkUserSession, currentUser}) => {

    useEffect(() => {
        checkUserSession();
    }, [checkUserSession]);

    return (
        <div>
            <Header />
            <Switch>
                <Route
                    exact
                    path='/'
                    component={HomePage}
                />

                <Route
                    exact
                    path='/checkout'
                    component={CheckoutPage}
                />

                <Route
                    path='/shop'
                    component={ShopPage}
                />

                <Route
                    exact
                    path='/signIn'
                    render={() =>
                        currentUser ? <Redirect to='/' /> : <SignInAndSignUp />
                    }
                />

            </Switch>
        </div>
    );
};

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
    checkUserSession: () => dispatch(checkUserSession())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
