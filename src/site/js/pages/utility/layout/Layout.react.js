import React from 'react';

import Clearfix from '~/pages/utility/layout/Clearfix.react';
import Inline from '~/pages/utility/layout/Inline.react';
import PageTitle from '~/components/PageTitle.react';
import Positioning from '~/pages/utility/layout/Positioning.react';

export default function Layout() {
    return (
        <div>
            <PageTitle title="Layout" />
            <Clearfix />
            <Inline />
            <Positioning />
        </div>
    );
}
