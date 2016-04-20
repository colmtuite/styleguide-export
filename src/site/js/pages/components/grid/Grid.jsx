import React from 'react';
import PageTitle from '~/components/PageTitle';

import PageWrap from '~/pages/components/grid/PageWrap';
import BasicGrid from '~/pages/components/grid/BasicGrid';
import GridSize from '~/pages/components/grid/GridSize';

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
