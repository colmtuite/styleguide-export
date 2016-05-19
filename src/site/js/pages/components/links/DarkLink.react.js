import React from 'react';

import SectionCode from '~/components/SectionCode.react';
import SectionDescription from '~/components/SectionDescription.react';
import SectionExample from '~/components/SectionExample.react';
import SectionTitle from '~/components/SectionTitle.react';

import { darkLinkCode } from '~/components/CodeSnippets.js';

export default function DarkLink() {
    return (
        <section className="marginBottom-xl">
            <div className="marginBottom-m breakPointM-marginBottom-l">
                <SectionTitle sectionTitle={"Dark link"} />

                <SectionDescription>
                    For links that have to match the main body text. To be used on light backgrounds.
                </SectionDescription>
            </div>

            <SectionExample>
                <div className="padding-m textAlign-center breakPointM-textAlign-left">
                    <a
                        className="link link--dark"
                        href="#">
                        Dark link
                    </a>
                </div>
            </SectionExample>

            <SectionCode codeType="language-html" code={darkLinkCode} />
        </section>
    );
}
