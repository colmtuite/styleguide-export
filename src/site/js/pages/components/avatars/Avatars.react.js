import React from 'react';

import AvatarSizes from '~/pages/components/avatars/AvatarSizes.react';
import AvatarsWithIcons from '~/pages/components/avatars/AvatarsWithIcons.react';
import BasicAvatars from '~/pages/components/avatars/BasicAvatars.react';
import CustomAvatarSizes from '~/pages/components/avatars/CustomAvatarSizes.react';
import PageTitle from '~/components/PageTitle.react';

export default function Avatars() {
    return (
        <div>
            <PageTitle title="Avatars" />
            <BasicAvatars />
            <AvatarSizes />
            <AvatarsWithIcons />
            <CustomAvatarSizes />
        </div>
    );
}
