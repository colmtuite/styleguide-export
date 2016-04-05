import React from 'react';

export default function PageTitle({ title }) {
    return (
        <div className="marginTop-l marginBottom-xl">
            <h2 className="fontSize-xxxl">{ title }</h2>
        </div>
    );
}

PageTitle.propTypes = {
    title: React.PropTypes.string.isRequired,
};
