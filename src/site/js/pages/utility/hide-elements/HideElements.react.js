import React from 'react';

import HideChildren from '~/pages/utility/hide-elements/HideChildren.react';
import HideElementsCompletely from '~/pages/utility/hide-elements/HideElementsCompletely.react';
import HideElementsVisually from '~/pages/utility/hide-elements/HideElementsVisually.react';
import PageTitle from '~/components/PageTitle.react';

export default function HideElements() {
    return (
        <div>
            <PageTitle title="Hide Elements" />
            <HideElementsCompletely />
            <HideElementsVisually />
            <HideChildren />
        </div>
    );
}
