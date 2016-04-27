import React from 'react';

import UniformBorderRadius from '~/pages/design/border-radius/UniformBorderRadius.react';
import UnequalBorderRadius from '~/pages/design/border-radius/UnequalBorderRadius.react';
import PageTitle from '~/components/PageTitle.react';

export default function Buttons() {
    return (
        <div>
            <PageTitle title="Border Radius" />
            <UniformBorderRadius />
            <UnequalBorderRadius />
        </div>
    );
}
