import React from 'react';
import classNames from 'classnames';

export default function Onboard(props) {
    const classes = [
        'padding-m',
        'bg-blue',
        'c-white',
        'fontSize-s',
    ];

    return (
        <div
            className={classes.join(' ')}>
            <span>Onboarding message goes here</span>
        </div>
    );
}

Onboard.propTypes = {
    className: React.PropTypes.string,
    callback: React.PropTypes.func,
};
