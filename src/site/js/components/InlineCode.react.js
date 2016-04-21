import React from 'react';
import classNames from 'classnames';

export default function InlineCode({ children }) {
    InlineCode.propTypes = {
        children: React.PropTypes.string.isRequired,
    };

    return (
        <code
            className={classNames(
                'bg-snow--d',
                'borderRadius-s',
                'display-inlineBlock',
                'fontSize-xxs',
                'hljs-string',
                'paddingLeftRight-xs',
                'verticalAlign-middle',
            )}
            style={{
                lineHeight: '21px',
                marginLeft: '3px',
                marginRight: '2px',
            }}>
                {children}
        </code>
    );
}
