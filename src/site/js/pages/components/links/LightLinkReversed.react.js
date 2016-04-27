import React from 'react';

import SectionCode from '~/components/SectionCode.react';
import SectionDescription from '~/components/SectionDescription.react';
import SectionTitle from '~/components/SectionTitle.react';

import { lightLinkReversedCode } from '~/components/CodeSnippets.js';

export default function LightLinkReversed() {
    return (
        <section className="marginBottom-xl">
            <div className="marginBottom-m breakPointM-marginBottom-l">
                <SectionTitle sectionTitle={ "Light link (Reversed)" } />

                <SectionDescription>
                    For subtle or infrequently used links. To be used
                    on dark backgrounds.
                </SectionDescription>
            </div>

            <div className="padding-m textAlign-center breakPointM-textAlign-left bg-steel borderRadiusTop-m">
                <a
                    className="link link--lightReversed"
                    href="#">
                    Light link reversed
                </a>
            </div>

            <SectionCode code={ lightLinkReversedCode } />
        </section>
    );
}
