import React from 'react';
import classNames from 'classnames';

export default function Popover(props) {
    const classes = {
        'bg-white': true,
        'boxShadow-subtle': true,
        'borderRadius-m': true,
        // 'position-absolute': true,
        'zi-chrome': true,
        'borderTopWidth-2': props.borderTop,
        hidden: props.hidden,
    };

    return (
        <div className={classNames(classes)} >
            <p>Please work.</p>
        </div>
    );

    // const sizeDependentStyles = {
    //     small: ['padding-s', 'fontSize-s'],
    //     medium: ['padding-m', 'fontSize-m'],
    //     large: ['padding-l', 'fontSize-l'],
    // };
    //
    // return (
    //     <div className={classNames(classes, sizeDependentStyles[props.size])} style={
    //         Object.assign(props.style, {
    //             background: props.hello ? 'pink' : 'red',
    //         }),
    //         Object.assign(props.style, {
    //             background: props.size ? '200px' : '400px',
    //         })
    //     }>
    //
    //         <p>Please work.</p>
    //     </div>
    // );
}

Popover.propTypes = {
    borderTop: React.PropTypes.bool,
    hidden: React.PropTypes.bool,
    background: React.PropTypes.string,
    size: React.PropTypes.string,
    // style: React.PropTypes.object,
    // size: React.PropTypes.oneOf(['small', 'medium', 'large']),
};

Popover.defaultProps = {
    borderTop: true,
    hidden: false,
    padded: false,
    style: {},
};
