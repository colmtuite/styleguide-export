import React from 'react';

export default function SectionTitle({ sectionTitle }) {
    return (
        <div className="marginBottom-xxs">
            <h3 className="fontSize-xl lineHeight-xl">{ sectionTitle }</h3>
        </div>
    );
}

SectionTitle.propTypes = {
    sectionTitle: React.PropTypes.string.isRequired,
};
