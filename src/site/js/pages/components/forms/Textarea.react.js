import React from 'react';

import InlineCode from '~/components/InlineCode.react';
import SectionCode from '~/components/SectionCode.react';
import SectionDescription from '~/components/SectionDescription.react';
import SectionExample from '~/components/SectionExample.react';
import SectionTitle from '~/components/SectionTitle.react';

import { textareaCode } from '~/components/CodeSnippets.js';

export default function Textarea() {
    return (
        <section className="marginBottom-xl">
            <div className="marginBottom-m breakPointM-marginBottom-l">
                <SectionTitle sectionTitle={"Textarea"} />

                <SectionDescription>
                    Textareas come in four sizes which can be applied with
                    <InlineCode>.textarea--xl</InlineCode>,
                    <InlineCode>.textarea--l</InlineCode>,
                    <InlineCode>.textarea--m</InlineCode> and
                    <InlineCode>.textarea--s</InlineCode> on the
                    <InlineCode>.textarea</InlineCode> component itself.
                    There is currently only one style which can be applied with
                    <InlineCode>.textarea--default</InlineCode>.
                </SectionDescription>
            </div>

            <SectionExample>
                <div className="padding-m">
                    <div className="width-100 breakPointM-width-50">
                        <textarea
                            className="textarea textarea--m textarea--default"
                            placeholder="Write a comment...">
                        </textarea>
                    </div>
                </div>
            </SectionExample>

            <SectionCode code={textareaCode} />
        </section>
    );
}
