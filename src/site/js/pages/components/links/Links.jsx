import React from 'react';
import PageTitle from '~/components/PageTitle';
import BlueLink from '~/pages/components/links/BlueLink';
import LightLink from '~/pages/components/links/LightLink';
import LightLinkReversed from '~/pages/components/links/LightLinkReversed';
import NegativeLink from '~/pages/components/links/NegativeLink';
import SnowBackgroundLink from '~/pages/components/links/SnowBackgroundLink';
import ColourfulLinks from '~/pages/components/links/ColourfulLinks';

export default function Links() {
    return (
        <div>
            <PageTitle title="Links" />
            <BlueLink />
            <LightLink />
            <LightLinkReversed />
            <NegativeLink />
            <SnowBackgroundLink />
            <ColourfulLinks />
        </div>
    );
}
