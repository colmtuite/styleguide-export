import React from 'react';
import PageTitle from '~/components/PageTitle.react';
import ProjectCard from '~/pages/components/cards/ProjectCard.react';

export default function Buttons() {
    return (
        <div>
            <PageTitle title="Cards" />
            <ProjectCard />
        </div>
    );
}
