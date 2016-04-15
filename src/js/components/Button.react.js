import React, { PropTypes } from 'react';
import classNames from 'classnames';

const baseButtonClasses = [
    'display-inlineBlock',
    'borderWidth-0',
    'outlineStyle-none',
    'verticalAlign-middle',
    'appearance-none',
    'whiteSpace-nowrap',
    'cursor-pointer',
    'userSelect-none',
    'textDecoration-none',
    'fontWeight-4',
    'textAlign-center',
    'transitionProperty-all',
    'transitionDuration-s',
    'transitionTimingFunction-linear',
    'tp-none--active',
];

const size = {
    small: ['fontSize-s', 'paddingLeft-s', 'paddingRight-s', 'borderRadius-s'],
    medium: ['fontSize-m', 'paddingLeft-m', 'paddingRight-m', 'borderRadius-m'],
    large: ['fontSize-l', 'paddingLeft-l', 'paddingRight-l', 'borderRadius-m'],
};

const styleDefinitions = {
    small: {
        lineHeight: '30px',
        minWidth: '30px',
    },
    medium: {
        lineHeight: '40px',
        minWidth: '40px',
    },
    large: {
        lineHeight: '50px',
        minWidth: '50px',
    },
};

const kind = {
    flat: ['c-white', 'boxShadow-emboss--hover', 'boxShadow-deboss--active'],
    ghost: ['bg-none', 'c-slate', 'c-white--hover', 'boxShadow-smoke', 'boxShadow-emboss--hover', 'boxShadow-deboss--active'],
    outline: ['bg-green'],
};

const colorSet1 = {
    red: ['bg-red'],
    blue: ['bg-blue'],
    green: ['bg-green'],
    pink: ['bg-pink'],
};

const colorSet2 = {
    red: ['bg-red--hover'],
    blue: ['bg-blue--hover'],
    green: ['bg-green--hover'],
    pink: ['bg-pink--hover'],
};

const buttonColorMap = {
    flat: colorSet1,
    ghost: colorSet2,
    outline: colorSet2,
};

export default function Button(props) {
    let value = '';

    if (props.type === 'submit') {
        value = props.children;
    }

    const color = buttonColorMap[props.kind][props.color];

    return (
        <button
            style={
                Object.assign(styleDefinitions[props.size], props.style)
            }
            type={props.type}
            className={classNames(baseButtonClasses, size[props.size], kind[props.kind], color)}
            disabled={props.disabled}
            value={value}>
            {props.children}
        </button>
    );
}

Button.propTypes = {
    kind: PropTypes.oneOf(['flat', 'ghost', 'outline']).isRequired,
    color: PropTypes.oneOf(['red', 'blue', 'green', 'pink', 'gray']).isRequired,
    size: PropTypes.oneOf(['small', 'medium', 'large']).isRequired,
    type: PropTypes.oneOf(['submit', 'reset', 'button']).isRequired,

    disabled: PropTypes.bool,

    children: PropTypes.node.isRequired,
    style: PropTypes.object,
};

Button.defaultProps = {
    color: 'pink',
    kind: 'ghost',
    size: 'medium',
    type: 'submit',
};
