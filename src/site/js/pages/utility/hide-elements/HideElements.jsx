import React from 'react';
import PageTitle from '~/components/PageTitle';
import HideElementsCompletely from '~/pages/utility/hide-elements/HideElementsCompletely';
import HideElementsVisually from '~/pages/utility/hide-elements/HideElementsVisually';
import HideChildren from '~/pages/utility/hide-elements/HideChildren';

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
