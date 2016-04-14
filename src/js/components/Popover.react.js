import React from 'react';
import classNames from 'classnames';

export default function Popover(props) {
    const classes = {
        'bg-white': true,
        'boxShadow-subtle': true,
        'borderRadius-m': true,
        'borderWidth-1': true,
        'borderStyle-solid': true,
        'borderColor-smoke': true,
        'borderTopWidth-2': props.borderTop,
        'padding-s': props.padded,
        hidden: props.hidden,
    };

    return (
        <div className={classNames(classes)} style={
            Object.assign(props.style, {
                background: props.hello ? 'pink' : 'red',
            })
        }>

            <p>Please work.</p>
        </div>
    );
}

Popover.propTypes = {
    borderTop: React.PropTypes.bool,
    hidden: React.PropTypes.bool,
    padded: React.PropTypes.bool,
    hello: React.PropTypes.bool,
    style: React.PropTypes.object,
};

Popover.defaultProps = {
    borderTop: true,
    hidden: false,
    padded: false,
    style: {},
};
