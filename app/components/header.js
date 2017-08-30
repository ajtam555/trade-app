import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
    <div style={ {border: '1px Solid black'} }>
        <Link to="/">Login</Link>
        <Link to="/dashboard">Dashboard</Link>
    </div>
);

export default Header;