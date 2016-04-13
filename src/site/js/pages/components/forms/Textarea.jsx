import React from 'react';
import SectionTitle from '~/components/SectionTitle';
import SectionDescription from '~/components/SectionDescription';
import SectionExample from '~/components/SectionExample';
import SectionCode from '~/components/SectionCode';
import { textareaCode } from '~/components/CodeSnippets.js';

export default function Textarea() {
    return (
        <section className="marginBottom-xl">
            <div className="marginBottom-l">
                <SectionTitle sectionTitle={ "Textarea" } />

                <SectionDescription>
                    Straight up textarea yo.
                </SectionDescription>
            </div>

            <SectionExample>
                <div className="padding-m">
                    <textarea className="textarea textarea--m textarea--default" placeholder="Write a comment..."></textarea>
                </div>
            </SectionExample>

            <SectionCode code={ textareaCode } />
        </section>
    );
}
