import React from 'react';

import HorizontallyCenter from '~/pages/utility/center-elements/HorizontallyCenter.react';
import PageTitle from '~/components/PageTitle.react';
import VerticallyCenter from '~/pages/utility/center-elements/VerticallyCenter.react';

export default function CenterElements() {
    return (
        <div>
            <PageTitle title="Center Elements" />
            <HorizontallyCenter />
            <VerticallyCenter />
        </div>
    );
}
