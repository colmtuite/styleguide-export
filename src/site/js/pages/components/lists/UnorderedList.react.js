import React from 'react';

import InlineCode from '~/components/InlineCode.react';
import SectionCode from '~/components/SectionCode.react';
import SectionDescription from '~/components/SectionDescription.react';
import SectionExample from '~/components/SectionExample.react';
import SectionTitle from '~/components/SectionTitle.react';

import { unorderedListCode } from '~/components/CodeSnippets.js';

export default function UnorderedList() {
    return (
        <section className="marginBottom-m">
            <div className="marginBottom-l">
                <SectionTitle sectionTitle={"Unordered list"} />

                <SectionDescription>
                    Use <InlineCode>&lt;ul&gt;</InlineCode> with
                    <InlineCode>list--unordered</InlineCode> when the list
                    order is irrelevant.
                </SectionDescription>
            </div>

            <SectionExample>
                <div className="padding-m">
                    <ul className="list list--unordered lineHeight-m">
                        <li>This is a list item</li>
                        <li>This is another list item</li>
                        <li>Yep, another list item</li>
                        <li>This is a list item</li>
                        <li>This is another list item</li>
                        <li>Yep, another list item</li>
                        <li>This is a list item</li>
                        <li>This is another list item</li>
                        <li>Yep, another list item</li>
                        <li>This is a list item</li>
                    </ul>
                </div>
            </SectionExample>

            <SectionCode code={unorderedListCode} />
        </section>
    );
}
