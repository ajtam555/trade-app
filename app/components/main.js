import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
//import { Router, Route, Switch } from 'react-router-dom';

import Header from './header.js';
import Login from './login.js';
import Dashboard from './dashboard.js';

const Main = () => (
    <div style={ {border: '1px Solid black'} }>
        <Header />
        <h1>Mike's React App</h1>
        <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/dashboard" component={Dashboard} />
        </Switch>
    </div>
);

export default Main;