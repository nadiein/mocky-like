import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
} from "react-router-dom";

import './App.css';

import { Mocks } from './components/Mocks';
import { MockSinglePage } from './components/MockSinglePage';


function App() {
    return (
        <div>
            <Switch>
                <Redirect exact from="/" to="/mocks" />
                <Route exact path="/mocks" component={Mocks} />
                <Route exact path="/mocks/:id" component={MockSinglePage} />
            </Switch>
        </div>
    );
}

export default App;
