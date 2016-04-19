import React from 'react';
import SectionTitle from '~/components/SectionTitle';
import SectionDescription from '~/components/SectionDescription';
import SectionExample from '~/components/SectionExample';
import SectionCode from '~/components/SectionCode';
import { hideElementsVisuallyCode } from '~/components/CodeSnippets.js';

export default function HideElementsVisually() {
    return (
        <section className="marginBottom-xl">
            <div className="marginBottom-l">
                <SectionTitle sectionTitle={ "Hide elements visually" } />

                <SectionDescription>
                    Hide an element visually but keep it available to screenreaders. The element's space will not be respected.
                </SectionDescription>
            </div>

            <SectionExample>
                <div className="padding-m">
                    <div className="bg-smoke visuallyHidden" style={{ height: '100px', width: '100px' }}></div>
                </div>
            </SectionExample>

            <SectionCode code={ hideElementsVisuallyCode } />
        </section>
    );
}
