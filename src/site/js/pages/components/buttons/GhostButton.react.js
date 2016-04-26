import React from 'react';

import InlineCode from '~/components/InlineCode.react';
import SectionCode from '~/components/SectionCode.react';
import SectionDescription from '~/components/SectionDescription.react';
import SectionExample from '~/components/SectionExample.react';
import SectionTitle from '~/components/SectionTitle.react';

import { ghostButtonCode } from '~/components/CodeSnippets.js';

export default function FlatButton() {
    return (
        <section className="marginBottom-xl">
            <div className="marginBottom-l">
                <SectionTitle sectionTitle={"Ghost button"} />

                <SectionDescription>
                    Ghost buttons should be used to signify optional, infrequent
                    or subtle actions. The color options are specified
                    with an additional class <InlineCode>.bg--marvel--hover</InlineCode>,
                    <InlineCode>.bg--orange--hover</InlineCode>,
                    <InlineCode>.bg--negative--hover</InlineCode>, etc.
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

                    <div className="marginRight-m">
                        <a
                            className="button button--m button--ghost bg-positive--hover"
                            href="#"
                            role="button">
                            Positive
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
