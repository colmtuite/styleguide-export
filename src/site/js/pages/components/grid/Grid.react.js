import React from 'react';
import PageTitle from '~/components/PageTitle.react';

import PageWrap from '~/pages/components/grid/PageWrap.react';
import BasicGrid from '~/pages/components/grid/BasicGrid.react';
import GridSize from '~/pages/components/grid/GridSize.react';

export default function Grid() {
    return (
        <div>
            <PageTitle title="Grid" />
            <PageWrap />
            <BasicGrid />
            <GridSize />
        </div>
    );
}
