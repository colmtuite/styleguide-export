import React from 'react';

import SectionCode from '~/components/SectionCode';
import SectionDescription from '~/components/SectionDescription';
import SectionTitle from '~/components/SectionTitle';

import { lightLinkReversedCode } from '~/components/CodeSnippets.js';

export default function LightLinkReversed() {
    return (
        <section className="marginBottom-xl">
            <div className="marginBottom-l">
                <SectionTitle sectionTitle={ "Light link (Reversed)" } />

                <SectionDescription>
                    For subtle or infrequently used links. To be used
                    on dark backgrounds.
                </SectionDescription>
            </div>

            <div className="padding-m bg-steel borderRadiusTop-m">
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
