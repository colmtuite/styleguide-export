import React from 'react';
import PageTitle from '~/components/PageTitle';
import Clearfix from '~/pages/utility/layout/Clearfix';
import Inline from '~/pages/utility/layout/Inline';
import Positioning from '~/pages/utility/layout/Positioning';

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
