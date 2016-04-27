import React from 'react';

import SectionCode from '~/components/SectionCode.react';
import SectionDescription from '~/components/SectionDescription.react';
import SectionExample from '~/components/SectionExample.react';
import SectionTitle from '~/components/SectionTitle.react';

import { hideElementsCompletelyCode } from '~/components/CodeSnippets.js';

export default function HideElementsCompletely() {
    return (
        <section className="marginBottom-xl">
            <div className="marginBottom-m breakPointM-marginBottom-l">
                <SectionTitle sectionTitle={"Hide elements completely"} />

                <SectionDescription>
                    Hide an element from both screenreaders and browsers.
                    The element's space will be collapsed, which explains why
                    you can't see it below.
                </SectionDescription>
            </div>

            <SectionExample>
                <div className="padding-m">
                    <div
                        className="bg-smoke hidden"
                        style={{ height: '100px', width: '100px' }}>
                    </div>
                </div>
            </SectionExample>

            <SectionCode code={hideElementsCompletelyCode} />
        </section>
    );
}
