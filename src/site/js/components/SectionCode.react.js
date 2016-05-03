import React from 'react';
import Highlight from 'react-highlight';
import classNames from 'classNames';

export default function SectionCode({ code, codeType, topBorder }) {
    SectionCode.propTypes = {
        code: React.PropTypes.string.isRequired,
        codeType: React.PropTypes.string.isRequired,
        topBorder: React.PropTypes.bool,
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
                'overflow-auto', {
                    ['borderTopWidth-1 borderRadius-m']: topBorder,
                    ['borderRadiusBottom-m']: !topBorder,
                }
            )}>
            <div
                style={{
                    minWidth: '770px',
                }}>
                <Highlight className={codeType}>
                    {code}
                </Highlight>
            </div>
        </div>
    );
}
