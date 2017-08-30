import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => (

    <div className="section">
        <div className="row">
            <div className="col s12">
                <ul className="tabs">
                    <li className="tab col s3"><Link to="/portfolio">Portfolio</Link></li>
                    <li className="tab col s3"><Link to="/balances">Balances</Link></li>
                    <li className="tab col s3"><Link to="/trading">Trading</Link></li>
                </ul>
            </div>
        </div>
    </div>
);

export default Nav;