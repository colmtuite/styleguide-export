import React from 'react';

import SectionCode from '~/components/SectionCode.react';
import SectionDescription from '~/components/SectionDescription.react';
import SectionExample from '~/components/SectionExample.react';
import SectionTitle from '~/components/SectionTitle.react';
import InlineCode from '~/components/InlineCode.react';

import { inputWithIconCode } from '~/components/CodeSnippets.js';

export default function InputSizes() {
    return (
        <section className="marginBottom-xl">
            <div className="marginBottom-m breakPointM-marginBottom-l">
                <SectionTitle sectionTitle={"Input with icon"} />

                <SectionDescription>
                    Inputs with icons are wrapped in a parent component{' '}
                    <InlineCode>.uiIcon</InlineCode> which has to have the input
                    size applied to with an additional class. For example,{' '}
                    <InlineCode>.input--m</InlineCode> will have a parent
                    element with a class <InlineCode>.uiIcon--m</InlineCode>.
                    The icon has to be placed straight after the input and
                    should be an inline SVG.
                </SectionDescription>
            </div>

            <SectionExample>
                <div className="padding-m">
                    <div className="uiIcon uiIcon--m">
                        <input
                            className="input input--m input--default"
                            type="text"
                            placeholder="Placeholder text"
                        />

                        <svg
                            className="svgIcon fill-smoke--d"
                            width="24"
                            height="24"
                            viewBox="3 -3 24 24">
                            <path d="M15 11.9c-.9 0-1.7-.2-2.3-.7l-5.7-4.4v8.1c0 .1 0 .3.1.4.1.1.2.2.3.2 2.5.4 5 .5 7.5.5s5-.2 7.5-.5c.1 0 .3-.1.4-.2.2-.1.2-.3.2-.4v-8.1l-5.7 4.4c-.6.5-1.4.7-2.3.7zm-1.3-2.3c.3.3.8.4 1.3.4s1-.1 1.3-.4l6.1-4.7c.3-.3.5-.6.6-1v-.8c0-.1 0-.3-.1-.4-.1-.1-.2-.2-.4-.2-2.5-.3-5-.5-7.5-.5s-5 .2-7.5.5c-.1 0-.2.1-.3.2-.2.1-.2.3-.2.4v.9c.1.3.3.6.6 1l6.1 4.6z"></path>
                        </svg>
                    </div>
                </div>
            </SectionExample>

            <SectionCode codeType="language-html" code={inputWithIconCode} />
        </section>
    );
}
