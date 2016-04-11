import React from 'react';

export default function SectionExample({ children }) {
    SectionExample.propTypes = {
        children: React.PropTypes.string.isRequired,
    };

    return (
        <div className="borderWidth-1 borderStyle-solid borderColor-smoke borderRadiusTop-m">
            { children }
        </div>
    );
}
