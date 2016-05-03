import React from 'react';

import SectionCode from '~/components/SectionCode.react';
import SectionDescription from '~/components/SectionDescription.react';
import SectionExample from '~/components/SectionExample.react';
import SectionTitle from '~/components/SectionTitle.react';

import { horizontallyCenterElementsCode } from '~/components/CodeSnippets.js';

export default function HorizontallyCenter() {
    return (
        <section className="marginBottom-xl">
            <div className="marginBottom-m breakPointM-marginBottom-l">
                <SectionTitle sectionTitle={"Horizontally center"} />

                <SectionDescription>
                    Center an element horizontally. The element must have a width declared.
                </SectionDescription>
            </div>

            <SectionExample>
                <div className="padding-m">
                    <div
                        className="bg-smoke borderRadius-m centered"
                        style={{ height: '100px', width: '100px' }}>
                    </div>
                </div>
            </SectionExample>

            <SectionCode codeType="language-html" code={horizontallyCenterElementsCode} />
        </section>
    );
}
