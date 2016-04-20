import React from 'react';

import SectionCode from '~/components/SectionCode';
import SectionDescription from '~/components/SectionDescription';
import SectionExample from '~/components/SectionExample';
import SectionTitle from '~/components/SectionTitle';

import { inputStyleCode } from '~/components/CodeSnippets.js';

export default function InputSizes() {
    return (
        <section className="marginBottom-xl">
            <div className="marginBottom-l">
                <SectionTitle sectionTitle={"Input styles"} />

                <SectionDescription>
                    Use a single class to define an input style.
                </SectionDescription>
            </div>

            <SectionExample>
                <div className="padding-m">
                    <input
                        className="input input--m input--default"
                        type="text"
                        placeholder="Placeholder text"
                    />
                </div>
            </SectionExample>

            <SectionCode code={inputStyleCode} />
        </section>
    );
}
