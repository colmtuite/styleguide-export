import React from 'react';
import SectionTitle from '~/components/SectionTitle';
import SectionDescription from '~/components/SectionDescription';
import InlineCode from '~/components/InlineCode';
import SectionExample from '~/components/SectionExample';
import SectionCode from '~/components/SectionCode';
import { disabledInputCode } from '~/components/CodeSnippets.js';

export default function DisabledInput() {
    return (
        <section className="marginBottom-xl">
            <div className="marginBottom-l">
                <SectionTitle sectionTitle={ "Disabled input" } />

                <SectionDescription>
                    Disabled inputs recieve an <InlineCode>is-disabled</InlineCode> class and a <InlineCode>disabled</InlineCode> attribute.
                </SectionDescription>
            </div>

            <SectionExample>
                <div className="padding-m">
                    <input className="input input--m input--default is-disabled" type="text" disabled placeholder="Disabled input" />
                </div>
            </SectionExample>

            <SectionCode code={ disabledInputCode } />
        </section>
    );
}
