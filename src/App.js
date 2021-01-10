import React from 'react';
import './App.scss';
import {HomePage} from "./pages/homepage/homepage.component";
import {Route, Switch} from 'react-router-dom';

function App() {
    return (
        <Switch>
            <Route exact path="/" component={HomePage}/>
        </Switch>
    );
}

export default App;
