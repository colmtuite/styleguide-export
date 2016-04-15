import React from 'react';

export default function PageTitle({ title }) {
    PageTitle.propTypes = {
        title: React.PropTypes.string.isRequired,
    };

    return (
        <div className="marginTop-m marginBottom-xl">
            <h2 className="fontSize-xxxl">{ title }</h2>
        </div>
    );
}
