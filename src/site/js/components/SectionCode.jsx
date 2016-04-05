import React from 'react';

export default function SectionCode({ code }) {
    return (
        <div className="padding-m bg-snow borderWidth-0 borderRightWidth-1 borderBottomWidth-1 borderLeftWidth-1 borderStyle-solid borderColor-smoke borderRadiusBottom-m">
            <pre>
                <code>{ code }</code>
            </pre>
        </div>
    );
}

SectionCode.propTypes = {
    code: React.PropTypes.string.isRequired,
};
