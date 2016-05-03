import React from 'react';
import PageTitle from '~/components/PageTitle.react';
import BasicPopovers from '~/pages/components/popovers/BasicPopovers.react';
import PopoverList from '~/pages/components/popovers/PopoverList.react';
import PopoverWithSelect from '~/pages/components/popovers/PopoverWithSelect.react';
import PopoverOnHover from '~/pages/components/popovers/PopoverOnHover.react';

export default function Layout() {
    return (
        <div>
            <PageTitle title="Popovers" />
            <BasicPopovers />
            <PopoverList />
            <PopoverWithSelect />
            <PopoverOnHover />
        </div>
    );
}
