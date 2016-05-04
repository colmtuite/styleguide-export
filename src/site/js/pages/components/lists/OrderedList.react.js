import React from 'react';

import InlineCode from '~/components/InlineCode.react';
import SectionCode from '~/components/SectionCode.react';
import SectionDescription from '~/components/SectionDescription.react';
import SectionExample from '~/components/SectionExample.react';
import SectionTitle from '~/components/SectionTitle.react';

import { orderedListCode } from '~/components/CodeSnippets.js';

export default function OrderedList() {
    return (
        <section className="marginBottom-xl">
            <div className="marginBottom-m breakPointM-marginBottom-l">
                <SectionTitle sectionTitle={"Ordered list"} />

                <SectionDescription>
                    Use <InlineCode>&lt;ol&gt;</InlineCode> with{' '}
                    <InlineCode>list--ordered</InlineCode> when the list order
                    is relevant.
                </SectionDescription>
            </div>

            <SectionExample>
                <div className="padding-m">
                    <ol className="list list--ordered marginTopBottom-xs lineHeight-m">
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
                    </ol>
                </div>
            </SectionExample>

            <SectionCode codeType="language-html" code={orderedListCode} />
        </section>
    );
}
