import React from 'react';

import InlineCode from '~/components/InlineCode.react';
import SectionCode from '~/components/SectionCode.react';
import SectionDescription from '~/components/SectionDescription.react';
import SectionExample from '~/components/SectionExample.react';
import SectionTitle from '~/components/SectionTitle.react';

import { outlinedButtonCode } from '~/components/CodeSnippets.js';

export default function OutlinedButton() {
    return (
        <section className="marginBottom-xl">
            <div className="marginBottom-l">
                <SectionTitle sectionTitle={"Outlined button"} />

                <SectionDescription>
                    Outlined buttons are very similar to ghost buttons and are used on
                    light grey backgrounds where a button background has to be applied.
                    The color options are specified with an additional class
                    <InlineCode>.bg--marvel--hover</InlineCode>,
                    <InlineCode>.bg--orange--hover</InlineCode>,
                    <InlineCode>.bg--negative--hover</InlineCode>, etc.
                </SectionDescription>
            </div>

            <SectionExample>
                <div className="padding-m inline bg-snow borderRadiusTop-m">
                    <div className="marginRight-m">
                        <a
                            className="button button--m button--outlined bg-white bg-marvel--hover"
                            href="#"
                            role="button">
                            Default
                        </a>
                    </div>

                    <div className="marginRight-m">
                        <a
                            className="button button--m button--outlined bg-white bg-orange--hover"
                            href="#"
                            role="button">
                            Orange
                        </a>
                    </div>

                    <div className="marginRight-m">
                        <a
                            className="button button--m button--outlined bg-orange--hover"
                            href="#"
                            role="button">
                            Orange
                        </a>
                    </div>

                    <div>
                        <a
                            className="button button--m button--outlined bg-white bg-negative--hover"
                            href="#"
                            role="button">
                            Negative
                        </a>
                    </div>
                </div>
            </SectionExample>

            <SectionCode code={outlinedButtonCode} />
        </section>
    );
}
