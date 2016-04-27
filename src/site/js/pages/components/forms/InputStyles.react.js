import React from 'react';

import InlineCode from '~/components/InlineCode.react';
import SectionCode from '~/components/SectionCode.react';
import SectionDescription from '~/components/SectionDescription.react';
import SectionExample from '~/components/SectionExample.react';
import SectionTitle from '~/components/SectionTitle.react';

import { inputStyleCode } from '~/components/CodeSnippets.js';

export default function InputSizes() {
    return (
        <section className="marginBottom-xl">
            <div className="marginBottom-m breakPointM-marginBottom-l">
                <SectionTitle sectionTitle={"Input styles"} />

                <SectionDescription>
                    There is currently one input style, which can be applied with
                    a <InlineCode>.input--default</InlineCode> class.
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
