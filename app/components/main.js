import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
//import { Router, Route, Switch } from 'react-router-dom';

import Header from './header.js';
import Login from './login.js';
import Portfolio from './portfolio.js';
import Balances from './balances.js';
import Trading from './trading.js';

const Main = () => (
    <div style={ {border: '1px Solid black'} }>
        <Header />
        <h1>The Trading App</h1>
        <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/portfolio" component={Portfolio} />
            <Route exact path="/balances" component={Balances} />
            <Route exact path="/trading" component={Trading} />
        </Switch>
    </div>
);

export default Main;