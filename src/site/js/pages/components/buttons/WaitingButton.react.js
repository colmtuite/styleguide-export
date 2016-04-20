import React from 'react';

import InlineCode from '~/components/InlineCode';
import SectionCode from '~/components/SectionCode';
import SectionDescription from '~/components/SectionDescription';
import SectionExample from '~/components/SectionExample';
import SectionTitle from '~/components/SectionTitle';

import { buttonWaitingCode } from '~/components/CodeSnippets.js';

export default function WaitingButton() {
    return (
        <section className="marginBottom-xl">
            <div className="marginBottom-l">
                <SectionTitle sectionTitle={"Waiting button"} />

                <SectionDescription>
                    Waiting buttons receive an <InlineCode>.is-loading</InlineCode> class.
                </SectionDescription>
            </div>

            <SectionExample>
                <div className="padding-m">
                    <div className="uiIcon uiIcon--m is-loading">
                        <button
                            className="button button--m button--flat bg-marvel is-disabled"
                            type="button"
                            disabled>
                            Loading...
                        </button>

                        <svg
                            className="svgIcon fill-silver"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24">
                            <path d="M17 10h-3v-3c0-1.1-.9-2-2-2s-2 .9-2 2v3h-3c-1.1 0-2 .9-2 2s.9 2 2 2h3v3c0 1.1.9 2 2 2s2-.9 2-2v-3h3c1.1 0 2-.9 2-2s-.9-2-2-2z" />
                        </svg>
                    </div>
                </div>
            </SectionExample>

            <SectionCode code={buttonWaitingCode} />
        </section>
    );
}
