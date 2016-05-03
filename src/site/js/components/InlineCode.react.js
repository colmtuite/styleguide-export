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
                'fontSize-xs',
                'hljs-string',
                'paddingLeftRight-xxs',
                'verticalAlign-middle',
            )}
            style={{
                lineHeight: '24px',
                marginLeft: '4px',
                marginTop: '-1px',
            }}>
                {children}
        </code>
    );
}
