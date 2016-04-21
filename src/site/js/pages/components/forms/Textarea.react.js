import React from 'react';

import SectionCode from '~/components/SectionCode.react';
import SectionDescription from '~/components/SectionDescription.react';
import SectionExample from '~/components/SectionExample.react';
import SectionTitle from '~/components/SectionTitle.react';

import { textareaCode } from '~/components/CodeSnippets.js';

export default function Textarea() {
    return (
        <section className="marginBottom-xl">
            <div className="marginBottom-l">
                <SectionTitle sectionTitle={"Textarea"} />

                <SectionDescription>
                    Straight up textarea yo.
                </SectionDescription>
            </div>

            <SectionExample>
                <div className="padding-m">
                    <textarea
                        className="textarea textarea--m textarea--default"
                        placeholder="Write a comment...">
                    </textarea>
                </div>
            </SectionExample>

            <SectionCode code={textareaCode} />
        </section>
    );
}
