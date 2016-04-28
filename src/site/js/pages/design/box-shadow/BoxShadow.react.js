import React from 'react';

import DistantBoxShadow from '~/pages/design/box-shadow/DistantBoxShadow.react';
import RaiseBoxShadow from '~/pages/design/box-shadow/RaiseBoxShadow.react';
import EmbossBoxShadow from '~/pages/design/box-shadow/EmbossBoxShadow.react';
import BevelBoxShadow from '~/pages/design/box-shadow/BevelBoxShadow.react';
import HoverBoxShadow from '~/pages/design/box-shadow/HoverBoxShadow.react';
import PageTitle from '~/components/PageTitle.react';

export default function Buttons() {
    return (
        <div>
            <PageTitle title="Box Shadow" />
            <DistantBoxShadow />
            <RaiseBoxShadow />
            <EmbossBoxShadow />
            <BevelBoxShadow />
            <HoverBoxShadow />
        </div>
    );
}
