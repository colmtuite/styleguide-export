import React from 'react';
import PageTitle from '~/components/PageTitle';
import BorderRadius from '~/pages/utility/theme-classes/BorderRadius';
import BoxShadow from '~/pages/utility/theme-classes/BoxShadow';
import Transitions from '~/pages/utility/theme-classes/Transitions';

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
