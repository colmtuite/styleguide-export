import React from 'react';
import PageTitle from '~/components/PageTitle';

import Colors from '~/pages/design/colors/Colors';

export default function ColorScheme() {
    return (
        <div>
            <PageTitle title="Color Scheme" />
            <Colors />
        </div>
    );
}
