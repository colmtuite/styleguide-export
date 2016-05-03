import React from 'react';
import SectionTitle from '~/components/SectionTitle.react';
import SectionDescription from '~/components/SectionDescription.react';
import SectionExample from '~/components/SectionExample.react';
import SectionCode from '~/components/SectionCode.react';
import { hideElementsVisuallyCode } from '~/components/CodeSnippets.js';

export default function HideElementsVisually() {
    return (
        <section className="marginBottom-xl">
            <div className="marginBottom-m breakPointM-marginBottom-l">
                <SectionTitle sectionTitle={"Hide elements visually"} />

                <SectionDescription>
                    Hide an element visually but keep it available to
                    screenreaders. The element's space will not be respected.
                </SectionDescription>
            </div>

            <SectionExample>
                <div className="padding-m">
                    <div
                        className="bg-smoke visuallyHidden"
                        style={{ height: '100px', width: '100px' }}>
                    </div>
                </div>
            </SectionExample>

            <SectionCode codeType="language-html" code={hideElementsVisuallyCode} />
        </section>
    );
}
