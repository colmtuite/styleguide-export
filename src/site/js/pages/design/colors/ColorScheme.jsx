import React from 'react';

import BrandColors from '~/pages/design/colors/BrandColors';
import GreyColors from '~/pages/design/colors/GreyColors';
import PageTitle from '~/components/PageTitle';
import ReversibleGreys from '~/pages/design/colors/ReversibleGreys';
import UIColors from '~/pages/design/colors/UIColors';

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
