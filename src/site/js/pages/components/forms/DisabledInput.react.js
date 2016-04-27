import React from 'react';

import InlineCode from '~/components/InlineCode.react';
import SectionCode from '~/components/SectionCode.react';
import SectionDescription from '~/components/SectionDescription.react';
import SectionExample from '~/components/SectionExample.react';
import SectionTitle from '~/components/SectionTitle.react';

import { disabledInputCode } from '~/components/CodeSnippets.js';

export default function DisabledInput() {
    return (
        <section className="marginBottom-xl">
            <div className="marginBottom-m breakPointM-marginBottom-l">
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
