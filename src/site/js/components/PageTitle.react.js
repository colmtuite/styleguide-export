import React from 'react';
import classNames from 'classnames';

export default function PageTitle({ title }) {
    PageTitle.propTypes = {
        title: React.PropTypes.string.isRequired,
    };

    return (
        <div className={classNames(
                'marginTopBottom-l',
                'textAlign-center',
                'breakPointM-marginTop-m ',
                'breakPointM-textAlign-left',
                'breakPointS-marginTopBottom-xl',
            )}>
            <h2 className="fontSize-xxxl">
                {title}
            </h2>
        </div>
    );
}
