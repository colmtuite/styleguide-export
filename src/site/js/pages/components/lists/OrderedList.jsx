import React from 'react';
import SectionTitle from '~/components/SectionTitle';
import SectionDescription from '~/components/SectionDescription';
import SectionExample from '~/components/SectionExample';
import SectionCode from '~/components/SectionCode';
import InlineCode from '~/components/InlineCode';
import { orderedListCode } from '~/components/CodeSnippets.js';

export default function OrderedList() {
    return (
        <section className="marginBottom-xl">
            <div className="marginBottom-l">
                <SectionTitle sectionTitle={ "Ordered list" } />

                <SectionDescription>
                    Use <InlineCode>&lt;ol&gt;</InlineCode> with <InlineCode>list--ordered</InlineCode> when the list order is irrelevant.
                </SectionDescription>
            </div>

            <SectionExample>
                <ol className="list list--ordered lineHeight-m">
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
            </SectionExample>

            <SectionCode code={ orderedListCode } />
        </section>
    );
}
