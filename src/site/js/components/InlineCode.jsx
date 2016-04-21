import React from 'react';

export default function InlineCode({ children }) {
    InlineCode.propTypes = {
        children: React.PropTypes.string.isRequired,
    };

    return (
        <code
            className="hljs-string display-inlineBlock paddingLeftRight-xs borderRadius-s verticalAlign-middle fontSize-xxs bg-snow--d"
            style={{ lineHeight: '21px', marginLeft: '3px', marginRight: '2px' }}>
            { children }
        </code>
    );
}
