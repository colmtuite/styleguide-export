import React from 'react';
import Popover from '~/../../js/components/Popover.react';

export default function Popovers() {
    return (
        <div className="marginTop-l marginBottom-xl">
            <h2 className="fontSize-xxxl marginBottom-xl">Popovers</h2>

            <div className="marginBottom-m">
                <Popover />
            </div>

            <div className="marginBottom-m">
                <Popover padded/>
            </div>
        </div>
    );
}
