import React from 'react';

import SectionCode from '~/components/SectionCode.react';
import SectionDescription from '~/components/SectionDescription.react';
import SectionExample from '~/components/SectionExample.react';
import SectionTitle from '~/components/SectionTitle.react';
import PopoverSelect from '~/pages/components/popovers/PopoverSelect.react';

import { popoverWithLinks } from '~/components/CodeSnippets.js';

export default function PopoverWithSelect() {
    return (
        <section className="marginBottom-xl">
            <div className="marginBottom-l">
                <SectionTitle sectionTitle={"Popover with select menu"} />

                <SectionDescription>
                    Popover with a select menu has a few options with checkboxes
                    to toggle from.
                </SectionDescription>
            </div>

            <SectionExample>
                <div className="padding-m">
                    <PopoverSelect />
                </div>
            </SectionExample>

            <SectionCode code={popoverWithLinks} />
        </section>
    );
}
