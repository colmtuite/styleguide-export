import React from 'react';

export default function InlineCode({ children }) {
    InlineCode.propTypes = {
        children: React.PropTypes.string.isRequired,
    };

    return (
        <code className="paddingLeftRight-xs paddingTopBottom-xxs fontSize-xxs borderRadius-s bg-snow--d hljs-string">
            { children }
        </code>
    );
}
