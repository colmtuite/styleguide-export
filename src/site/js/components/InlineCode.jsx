import React from 'react';

export default function InlineCode({ children }) {
    InlineCode.propTypes = {
        children: React.PropTypes.string.isRequired,
    };

    return (
        <code
            className="hljs-string paddingLeftRight-xs paddingTopBottom-xxs borderRadius-s verticalAlign-middle fontSize-xxs bg-snow--d"
            style={{ lineHeight: 0, marginLeft: '3px', marginRight: '2px' }}>
            { children }
        </code>
    );
}
