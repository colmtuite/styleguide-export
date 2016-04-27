import React from 'react';

import InlineCode from '~/components/InlineCode.react';
import SectionCode from '~/components/SectionCode.react';
import SectionDescription from '~/components/SectionDescription.react';
import SectionExample from '~/components/SectionExample.react';
import SectionTitle from '~/components/SectionTitle.react';

import { buttonWithLoneIconCode } from '~/components/CodeSnippets.js';

export default function ButtonWithLoneIcon() {
    return (
        <section className="marginBottom-xl">
            <div className="marginBottom-l">
                <SectionTitle sectionTitle={"Button with lone icon"} />

                <SectionDescription>
                    Unlike the button with icon, the button with lone icon doesn't
                    have a parent componet but instead has the
                    <InlineCode>.uiIcon</InlineCode> class added alongside
                    <InlineCode>.uiIcon--m</InlineCode> and
                    <InlineCode>.button--m</InlineCode> classes.
                </SectionDescription>
            </div>

            <SectionExample>
                <div className="padding-m textAlign-center breakPointM-textAlign-left">
                    <a
                        className="uiIcon uiIcon--m button button--m button--ghost bg-marvel--hover"
                        href="#"
                        role="button">
                        <svg
                            className="svgIcon fill-positive"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24">
                            <path d="M17 10h-3v-3c0-1.1-.9-2-2-2s-2 .9-2 2v3h-3c-1.1 0-2 .9-2 2s.9 2 2 2h3v3c0 1.1.9 2 2 2s2-.9 2-2v-3h3c1.1 0 2-.9 2-2s-.9-2-2-2z" />
                        </svg>
                    </a>
                </div>
            </SectionExample>

            <SectionCode code={buttonWithLoneIconCode} />
        </section>
    );
}
