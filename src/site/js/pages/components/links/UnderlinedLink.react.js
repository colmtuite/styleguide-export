import React from 'react';

import SectionCode from '~/components/SectionCode.react';
import SectionDescription from '~/components/SectionDescription.react';
import SectionExample from '~/components/SectionExample.react';
import SectionTitle from '~/components/SectionTitle.react';
import InlineCode from '~/components/InlineCode.react';

import { underlinedLinkCode } from '~/components/CodeSnippets.js';

export default function UnderlinedLink() {
    return (
        <section className="marginBottom-xl">
            <div className="marginBottom-m breakPointM-marginBottom-l">
                <SectionTitle sectionTitle={"Underlined link"} />

                <SectionDescription>
                    For links that have to match the main body text. Mainly used on the blog
                    for long posts where links need to be subtler. Needs to be combined with
                    one of the other link styles <InlineCode>.link--light</InlineCode>,{' '}
                    <InlineCode>.link--dark</InlineCode> or <InlineCode>.link--lightReversed</InlineCode>.
                </SectionDescription>
            </div>

            <SectionExample>
                <div className="padding-m textAlign-center breakPointM-textAlign-left">
                    <div className="inline">
                        <div className="marginRight-m">
                            <a
                                className="link link--light link--underline fontSize-m display-inlineBlock"
                                href="#">
                                Light underlined link
                            </a>
                        </div>

                        <div className="marginRight-m">
                            <a
                                className="link link--dark link--underline fontSize-m display-inlineBlock"
                                href="#">
                                Dark underlined link
                            </a>
                        </div>
                    </div>
                </div>
            </SectionExample>

            <SectionCode codeType="language-html" code={underlinedLinkCode} />
        </section>
    );
}
