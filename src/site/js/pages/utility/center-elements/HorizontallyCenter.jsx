import React from 'react';
import SectionTitle from '~/components/SectionTitle';
import SectionDescription from '~/components/SectionDescription';
import SectionExample from '~/components/SectionExample';
import SectionCode from '~/components/SectionCode';
import { horizontallyCenterElementsCode } from '~/components/CodeSnippets.js';

export default function HorizontallyCenter() {
    return (
        <section className="marginBottom-m">
            <div className="marginBottom-l">
                <SectionTitle sectionTitle={ "Horizontally center" } />

                <SectionDescription>
                    Center an element horizontally. The element must have a width declared.
                </SectionDescription>
            </div>

            <SectionExample>
                <div className="padding-m">
                    <div className="bg-smoke borderRadius-m centered" style={{ height: '100px', width: '100px' }}></div>
                </div>
            </SectionExample>

            <SectionCode code={ horizontallyCenterElementsCode } />
        </section>
    );
}
