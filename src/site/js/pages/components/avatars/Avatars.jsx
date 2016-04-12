import React from 'react';
import PageTitle from '~/components/PageTitle';
import BasicAvatars from '~/pages/components/avatars/BasicAvatars';

export default function Avatars() {
    return (
        <div>
            <PageTitle title="Avatars" />
            <BasicAvatars />
        </div>
    );
}
