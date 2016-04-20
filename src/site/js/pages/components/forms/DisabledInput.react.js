import React from 'react';

import InlineCode from '~/components/InlineCode';
import SectionCode from '~/components/SectionCode';
import SectionDescription from '~/components/SectionDescription';
import SectionExample from '~/components/SectionExample';
import SectionTitle from '~/components/SectionTitle';

import { disabledInputCode } from '~/components/CodeSnippets.js';

export default function DisabledInput() {
    return (
        <section className="marginBottom-xl">
            <div className="marginBottom-l">
                <SectionTitle sectionTitle={"Disabled input"} />

                <SectionDescription>
                    Disabled inputs recieve an <InlineCode>is-disabled</InlineCode>
                    class and a <InlineCode>disabled</InlineCode> attribute.
                </SectionDescription>
            </div>

            <SectionExample>
                <div className="padding-m">
                    <input
                        className="input input--m input--default is-disabled"
                        type="text"
                        placeholder="Disabled input"
                        disabled
                    />
                </div>
            </SectionExample>

            <SectionCode code={disabledInputCode} />
        </section>
    );
}
