import React from 'react';

import SectionCode from '~/components/SectionCode';
import SectionDescription from '~/components/SectionDescription';
import SectionExample from '~/components/SectionExample';
import SectionTitle from '~/components/SectionTitle';

import { hideElementsCompletelyCode } from '~/components/CodeSnippets.js';

export default function HideElementsCompletely() {
    return (
        <section className="marginBottom-xl">
            <div className="marginBottom-l">
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
