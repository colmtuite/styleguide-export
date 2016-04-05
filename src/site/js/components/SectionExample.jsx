import React from 'react';

export default function SectionExample({ children }) {
    return (
        <div className="padding-m borderWidth-1 borderStyle-solid borderColor-smoke borderRadiusTop-m">
            { children }
        </div>
    );
}

SectionExample.propTypes = {
    children: React.PropTypes.string.isRequired,
};
