import React from 'react';

import BrandColors from '~/pages/design/colors/BrandColors.react';
import GreyColors from '~/pages/design/colors/GreyColors.react';
import PageTitle from '~/components/PageTitle.react';
import ReversibleGreys from '~/pages/design/colors/ReversibleGreys.react';
import UIColors from '~/pages/design/colors/UIColors.react';

export default function Colors() {
    return (
        <div>
            <PageTitle title="Color Scheme" />
            <BrandColors />
            <GreyColors />
            <UIColors />
            <ReversibleGreys />
        </div>
    );
}
