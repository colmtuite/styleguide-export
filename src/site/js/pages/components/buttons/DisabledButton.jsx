import React from 'react';
import SectionTitle from '~/components/SectionTitle';
import InlineCode from '~/components/InlineCode';
import SectionDescription from '~/components/SectionDescription';
import SectionExample from '~/components/SectionExample';
import SectionCode from '~/components/SectionCode';
import { disabledButtonCode } from '~/components/CodeSnippets.js';

export default function DisabledButton() {
    return (
        <section className="marginBottom-xl">
            <div className="marginBottom-l">
                <SectionTitle sectionTitle={ "Disabled button" } />

                <SectionDescription>
                    Disabled buttons receive an <InlineCode>.is-disabled</InlineCode> class and a <InlineCode>disabled</InlineCode> attribute.
                </SectionDescription>
            </div>

            <SectionExample>
                <div className="padding-m">
                    <button className="button button--m button--flat bg-marvel is-disabled" type="button" disabled>Disabled</button>
                </div>
            </SectionExample>

            <SectionCode code={ disabledButtonCode } />
        </section>
    );
}
