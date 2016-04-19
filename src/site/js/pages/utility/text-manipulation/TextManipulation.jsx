import React from 'react';
import PageTitle from '~/components/PageTitle';
import SectionTitle from '~/components/SectionTitle';
import SectionDescription from '~/components/SectionDescription';
import SectionExample from '~/components/SectionExample';
import SectionCode from '~/components/SectionCode';
import { truncateTextCode } from '~/components/CodeSnippets.js';

export default function TextManipulation() {
    return (
        <div>
            <PageTitle title="Text manipulation" />

            <section className="marginBottom-m">
                <div className="marginBottom-l">
                    <SectionTitle sectionTitle={ "Truncate text" } />

                    <SectionDescription>
                        When text overflows its container, truncate the text and append 3 dots.
                    </SectionDescription>
                </div>

                <SectionExample>
                    <div className="padding-m">
                        <p className="fontSize-m lineHeight-m c-slate truncateText">This text overflows its parent element and therefore will be truncated and three dots will be appended. This text overflows its parent element and therefore will be truncated and three dots will be appended.</p>
                    </div>
                </SectionExample>

                <SectionCode code={ truncateTextCode } />
            </section>
        </div>
    );
}
