import React from 'react';

import SectionCode from '~/components/SectionCode.react';
import SectionDescription from '~/components/SectionDescription.react';
import SectionExample from '~/components/SectionExample.react';
import SectionTitle from '~/components/SectionTitle.react';

import { growingTextarea } from '~/components/CodeSnippets.js';

export default function GrowingTextarea() {
    return (
        <section className="marginBottom-xl">
            <div className="marginBottom-l">
                <SectionTitle sectionTitle={"Growing textarea"} />

                <SectionDescription>
                    This textarea looks like an input intially, but grows when
                    focused. It is not resizeable. It usually works best with
                    invisible input styling, though can be used with other
                    input styling if necessary.
                </SectionDescription>
            </div>

            <SectionExample>
                <div className="padding-m">
                    <textarea
                        className="textarea textarea--growing textarea--invisible"
                        placeholder="Write a comment...">
                    </textarea>
                </div>
            </SectionExample>

            <SectionCode code={growingTextarea} />
        </section>
    );
}
