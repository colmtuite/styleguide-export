import React from 'react';
import ColorRow from '~/pages/design/colors/ColorRow.react';

export default function ColorBlock({ color, textColor, border, lightColor }) {
    let lightColorRow = '';
    let extraDarkColorRow = '';

    ColorBlock.propTypes = {
        border: React.PropTypes.node,
        color: React.PropTypes.string.isRequired,
        textColor: React.PropTypes.string.isRequired,
        lightColor: React.PropTypes.string,
    };

    if (lightColor === '1') {
        extraDarkColorRow = <ColorRow color={`${color}--xd`} title={`Extra Dark ${color}`} textColor={textColor} />;
    } else {
        lightColorRow = <ColorRow color={`${color}--l`} title={`Light ${color}`} textColor={textColor} />;
    }

    return (
        <div>
            <div
                className={`position-relative bg-${color} borderRadius-m overflow-hidden`}
                style={{ height: '240px' }}>
                {lightColorRow}

                <ColorRow
                    color={color}
                    title={color}
                    textColor={textColor}
                />

                <ColorRow
                    color={`${color}--d`}
                    title={`Dark ${color}`}
                    textColor={textColor}
                />

                {extraDarkColorRow}

                {border}
            </div>
        </div>
    );
}
