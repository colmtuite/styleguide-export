import React from 'react';

import Spacing from '~/pages/design/layout/Spacing.react';
import IndividualSpacing from '~/pages/design/layout/IndividualSpacing.react';
import PageTitle from '~/components/PageTitle.react';

export default function LayoutSpacing() {
    return (
        <div>
            <PageTitle title="Layout" />
            <Spacing />
            <IndividualSpacing />
        </div>
    );
}
