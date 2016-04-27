import React from 'react';

import InlineCode from '~/components/InlineCode.react';
import SectionCode from '~/components/SectionCode.react';
import SectionDescription from '~/components/SectionDescription.react';
import SectionExample from '~/components/SectionExample.react';
import SectionTitle from '~/components/SectionTitle.react';

import { disabledButtonCode } from '~/components/CodeSnippets.js';

export default function DisabledButton() {
    return (
        <section className="marginBottom-xl">
            <div className="marginBottom-m breakPointM-marginBottom-l">
                <SectionTitle sectionTitle={"Disabled button"} />

                <SectionDescription>
                    Disabled buttons receive an <InlineCode>.is-disabled</InlineCode>
                    class and a <InlineCode>disabled</InlineCode> attribute.
                </SectionDescription>
            </div>

            <SectionExample>
                <div className="padding-m textAlign-center breakPointM-textAlign-left">
                    <button
                        className="button button--m button--flat bg-marvel is-disabled"
                        type="button"
                        disabled>
                        Disabled
                    </button>
                </div>
            </SectionExample>

            <SectionCode code={disabledButtonCode} />
        </section>
    );
}
