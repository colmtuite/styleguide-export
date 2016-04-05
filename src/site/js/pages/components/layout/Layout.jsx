import React from 'react';
import PageTitle from '~/components/PageTitle';

import PageWrap from '~/pages/components/layout/PageWrap';
import Grid from '~/pages/components/layout/Grid';
import GridSize from '~/pages/components/layout/GridSize';

export default function Layout() {
    return (
        <div>
            <PageTitle title="Layout" />
            <PageWrap />
            <Grid />
            <GridSize />
        </div>
    );
}
