import React from 'react';

import AlignmentClasses from '~/pages/design/typography/AlignmentClasses.react';
import FontSizes from '~/pages/design/typography/FontSizes.react';
import FontWeight from '~/pages/design/typography/FontWeight.react';
import PageTitle from '~/components/PageTitle.react';
import TransformationClasses from '~/pages/design/typography/TransformationClasses.react';
import Typefaces from '~/pages/design/typography/Typefaces.react';
import TypeTags from '~/pages/design/typography/TypeTags.react';

export default function Typography() {
    return (
        <div>
            <PageTitle title="Typography" />
            <Typefaces />
            <FontSizes />
            <FontWeight />
            <TypeTags />
            <AlignmentClasses />
            <TransformationClasses />
        </div>
    );
}
