import React from 'react';

import InlineCode from '~/components/InlineCode.react';
import SectionCode from '~/components/SectionCode.react';
import SectionDescription from '~/components/SectionDescription.react';
import SectionExample from '~/components/SectionExample.react';
import SectionTitle from '~/components/SectionTitle.react';

import { buttonWaitingCode } from '~/components/CodeSnippets.js';

export default function WaitingButton() {
    return (
        <section className="marginBottom-xl">
            <div className="marginBottom-m breakPointM-marginBottom-l">
                <SectionTitle sectionTitle={"Waiting button"} />

                <SectionDescription>
                    Waiting buttons receive an <InlineCode>.is-loading</InlineCode> class.
                </SectionDescription>
            </div>

            <SectionExample>
                <div className="padding-m textAlign-center breakPointM-textAlign-left">
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
