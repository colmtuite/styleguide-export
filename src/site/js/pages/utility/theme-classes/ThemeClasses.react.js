import React from 'react';

import BorderRadius from '~/pages/utility/theme-classes/BorderRadius.react';
import BoxShadow from '~/pages/utility/theme-classes/BoxShadow.react';
import PageTitle from '~/components/PageTitle.react';
import Transitions from '~/pages/utility/theme-classes/Transitions.react';

export default function ThemeClasses() {
    return (
        <div>
            <PageTitle title="Theme Classes" />
            <BorderRadius />
            <BoxShadow />
            <Transitions />
        </div>
    );
}
