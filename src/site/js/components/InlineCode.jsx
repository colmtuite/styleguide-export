import React from 'react';

export default function InlineCode({ children }) {
    return (
        <code className="paddingLeftRight-xs paddingTopBottom-xxs fontSize-xxs c-marvel borderRadius-s bg-snow">
            { children }
        </code>
    );
}

InlineCode.propTypes = {
    children: React.PropTypes.string.isRequired,
};
