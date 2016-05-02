import React from 'react';

import Transitions from '~/pages/design/animation/Transitions.react';
import Timing from '~/pages/design/animation/Timing.react';
import Easing from '~/pages/design/animation/Easing.react';
import PageTitle from '~/components/PageTitle.react';

export default function Animation() {
    return (
        <div>
            <PageTitle title="Animation" />
            <Timing />
            <Easing />
            <Transitions />
        </div>
    );
}
