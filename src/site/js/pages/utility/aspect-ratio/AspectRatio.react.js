import React from 'react';

import Ratio100 from '~/pages/utility/aspect-ratio/Ratio100.react';
import Ratio75 from '~/pages/utility/aspect-ratio/Ratio75.react';
import Ratio60 from '~/pages/utility/aspect-ratio/Ratio60.react';
import Ratio169 from '~/pages/utility/aspect-ratio/Ratio169.react';
import PageTitle from '~/components/PageTitle.react';

export default function AspectRatio() {
    return (
        <div>
            <PageTitle title="Aspect Ratio" />
            <Ratio100 />
            <Ratio75 />
            <Ratio60 />
            <Ratio169 />
        </div>
    );
}
