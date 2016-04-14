import React from 'react';

export default function Popover(props) {
    const classes = [
        'borderWidth-1',
        'borderStyle-solid',
        'borderColor-smoke',
    ];

    if (props.borderTop) classes.push('borderTopWidth-2');
    if (props.padded) classes.push('padding-s');
    if (props.hidden) classes.push('hidden');

    return (
        <div className={classes.join(' ')} style={props.style}>
            <p>Please work.</p>
        </div>
    );
}

Popover.propTypes = {
    borderTop: React.PropTypes.bool,
    hidden: React.PropTypes.bool,
    padded: React.PropTypes.bool,
    style: React.PropTypes.object,
};

Popover.defaultProps = {
    borderTop: true,
    hidden: false,
    padded: false,
    style: {},
};
