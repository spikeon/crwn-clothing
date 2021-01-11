import React from 'react';
import './App.scss';
import {HomePage} from "./pages/homepage/homepage.component";
import {Route, Switch} from 'react-router-dom';
import ShopPage from "./pages/shop/shop.component";

function App() {
    return (
        <Switch>
            <Route exact path="/" component={HomePage}/>
            <Route exact path="/shop" component={ShopPage}/>
        </Switch>
    );
}

export default App;
