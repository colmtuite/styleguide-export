import React from 'react';

export default function InlineCode({ children }) {
    InlineCode.propTypes = {
        children: React.PropTypes.string.isRequired,
    };

    return (
        <code className="paddingLeftRight-xs paddingTopBottom-xxs borderRadius-s verticalAlign-middle fontSize-xxs bg-snow--d hljs-string" style={{ lineHeight: 0 }}>
            { children }
        </code>
    );
}
