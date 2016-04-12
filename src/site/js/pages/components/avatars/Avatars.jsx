import React from 'react';
import PageTitle from '~/components/PageTitle';
import BasicAvatars from '~/pages/components/avatars/BasicAvatars';
import AvatarSizes from '~/pages/components/avatars/AvatarSizes';

export default function Avatars() {
    return (
        <div>
            <PageTitle title="Avatars" />
            <BasicAvatars />
            <AvatarSizes />
        </div>
    );
}
