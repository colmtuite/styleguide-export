import React from 'react';
import Highlight from 'react-highlight';
import classNames from 'classNames';

export default function SectionCode({ code }) {
    SectionCode.propTypes = {
        code: React.PropTypes.string.isRequired,
    };

    return (
        <div
            className={classNames(
                'padding-m',
                'bg-snow',
                'borderWidth-0',
                'borderRightWidth-1',
                'borderBottomWidth-1',
                'borderLeftWidth-1',
                'borderStyle-solid',
                'borderColor-smoke',
                'borderRadiusBottom-m',
                'overflow-auto',
            )}>
            <div
                style={{
                    minWidth: '770px',
                }}>
                <Highlight className="language-html">
                    {code}
                </Highlight>
            </div>
        </div>
    );
}
