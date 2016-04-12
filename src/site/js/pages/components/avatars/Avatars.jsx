import React from 'react';
import PageTitle from '~/components/PageTitle';
import BasicAvatars from '~/pages/components/avatars/BasicAvatars';
import AvatarSizes from '~/pages/components/avatars/AvatarSizes';
import AvatarsWithIcons from '~/pages/components/avatars/AvatarsWithIcons';
import CustomAvatarSizes from '~/pages/components/avatars/CustomAvatarSizes';

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
