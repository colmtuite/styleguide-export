import React from 'react';
import { IndexLink, Link } from 'react-router';

export default function Navigation() {
    return (
        <div className="posFixBL padding-l">
            <div className="bg-smoke"
                style={{
                    height: 2,
                    width: 50,
                    marginBottom: 28,
                }}
            />
            <IndexLink className="display-block fontSize-xl link link--blue marginTopBottom-m js-styleguideNavLink" to="/">
                Color Scheme
            </IndexLink>
            <Link className="display-block fontSize-xl link link--blue marginTopBottom-m js-styleguideNavLink" to="/typography">
                Typography
            </Link>
        </div>
    );
}
