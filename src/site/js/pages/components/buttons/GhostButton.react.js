import React from 'react';

import InlineCode from '~/components/InlineCode';
import SectionCode from '~/components/SectionCode';
import SectionDescription from '~/components/SectionDescription';
import SectionExample from '~/components/SectionExample';
import SectionTitle from '~/components/SectionTitle';

import { ghostButtonCode } from '~/components/CodeSnippets.js';

export default function FlatButton() {
    return (
        <section className="marginBottom-xl">
            <div className="marginBottom-l">
                <SectionTitle sectionTitle={"Ghost button"} />

                <SectionDescription>
                    Ghost buttons should be used to signify optional, infrequent
                    or subtle actions. There are three color options, specified
                    with an additional class <InlineCode>.bg--marvel--hover</InlineCode>,
                    <InlineCode>.bg--orange--hover</InlineCode> or
                    <InlineCode>.bg--negative--hover</InlineCode>.
                </SectionDescription>
            </div>

            <SectionExample>
                <div className="padding-m inline">
                    <div className="marginRight-m">
                        <a
                            className="button button--m button--ghost bg-marvel--hover"
                            href="#"
                            role="button">
                            Default
                        </a>
                    </div>

                    <div className="marginRight-m">
                        <a
                            className="button button--m button--ghost bg-orange--hover"
                            href="#"
                            role="button">
                            Orange
                        </a>
                    </div>

                    <div>
                        <a
                            className="button button--m button--ghost bg-negative--hover"
                            href="#"
                            role="button">
                            Negative
                        </a>
                    </div>
                </div>
            </SectionExample>

            <SectionCode code={ghostButtonCode} />
        </section>
    );
}
