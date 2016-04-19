import React from 'react';
import PageTitle from '~/components/PageTitle';
import HorizontallyCenter from '~/pages/utility/center-elements/HorizontallyCenter';
import VerticallyCenter from '~/pages/utility/center-elements/VerticallyCenter';

export default function CenterElements() {
    return (
        <div>
            <PageTitle title="Center Elements" />
            <HorizontallyCenter />
            <VerticallyCenter />
        </div>
    );
}
