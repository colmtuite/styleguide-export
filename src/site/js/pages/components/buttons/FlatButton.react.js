import React from 'react';

import InlineCode from '~/components/InlineCode.react';
import SectionCode from '~/components/SectionCode.react';
import SectionDescription from '~/components/SectionDescription.react';
import SectionExample from '~/components/SectionExample.react';
import SectionTitle from '~/components/SectionTitle.react';

import { flatButtonCode } from '~/components/CodeSnippets.js';

export default function FlatButton() {
    return (
        <section className="marginBottom-xl">
            <div className="marginBottom-m breakPointM-marginBottom-l">
                <SectionTitle sectionTitle={"Flat button"} />

                <SectionDescription>
                    Flat buttons should be used to signify necessary or mandatory
                    actions. There are two color options, specified with an
                    additional class <InlineCode>.bg--marvel</InlineCode> or{' '}
                    <InlineCode>.bg--positive</InlineCode>.
                </SectionDescription>
            </div>

            <SectionExample>
                <div className="padding-m textAlign-center breakPointM-inline breakPointM-textAlign-left">
                    <div className="marginBottom-m breakPointM-marginBottom-0 breakPointM-marginRight-m">
                        <a
                            className="button button--m button--flat bg-marvel"
                            href="#"
                            role="button">
                            Default
                        </a>
                    </div>

                    <div>
                        <a
                            className="button button--m button--flat bg-positive"
                            href="#"
                            role="button">
                            Positive
                        </a>
                    </div>
                </div>
            </SectionExample>

            <SectionCode codeType="language-html" code={flatButtonCode} />
        </section>
    );
}
