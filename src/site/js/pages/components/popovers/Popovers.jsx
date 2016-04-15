import React from 'react';
import Popover from '~/../../js/components/Popover.react';

export default function Popovers() {
    return (
        <div className="marginTop-l marginBottom-xl">
            <h2 className="fontSize-xxxl marginBottom-xl">Popovers</h2>

            <div className="marginBottom-m">
                <Popover Small />
            </div>

            <div className="marginBottom-m">
                <Popover Medium />
            </div>

            <div className="marginBottom-m">
                <Popover size="large" />
            </div>
        </div>
    );
}
