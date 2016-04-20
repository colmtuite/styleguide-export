import React from 'react';
import PageTitle from '~/components/PageTitle';
import ProjectCard from '~/pages/components/cards/ProjectCard.react';

export default function Buttons() {
    return (
        <div>
            <PageTitle title="Cards" />
            <ProjectCard />
        </div>
    );
}
