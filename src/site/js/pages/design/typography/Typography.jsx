import React from 'react';

import PageTitle from '~/components/PageTitle';
import Typefaces from '~/pages/design/typography/Typefaces';
import FontSizes from '~/pages/design/typography/FontSizes';

export default function Typography() {
    return (
        <div>
            <PageTitle title="Typography" />
            <Typefaces />
            <FontSizes />
        </div>
    );
}
