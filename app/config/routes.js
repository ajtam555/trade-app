import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Main from '../components/main.js'

const TradeApp = () => (
    <BrowserRouter>
        <Main />
    </BrowserRouter>
);

export default TradeApp;