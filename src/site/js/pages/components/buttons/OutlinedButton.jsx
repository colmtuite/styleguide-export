import React from 'react';
import SectionTitle from '~/components/SectionTitle';
import SectionDescription from '~/components/SectionDescription';
import SectionExample from '~/components/SectionExample';
import SectionCode from '~/components/SectionCode';
import InlineCode from '~/components/InlineCode';
import { outlinedButtonCode } from '~/components/CodeSnippets.js';

export default function OutlinedButton() {
    return (
        <section className="marginBottom-xl">
            <div className="marginBottom-l">
                <SectionTitle sectionTitle={ "Outlined button" } />

                <SectionDescription>
                    Outlined buttons should be used to signify optional, infrequent or subtle actions. There are three color options, specified with an additional class <InlineCode>.bg--marvel--hover</InlineCode>, <InlineCode>.bg--orange--hover</InlineCode> or <InlineCode>.bg--negative--hover</InlineCode>.
                </SectionDescription>
            </div>

            <SectionExample>
                <div className="padding-m inline bg-snow borderRadiusTop-m">
                    <div className="marginRight-m">
                        <a className="button button--m button--outlined bg-white bg-marvel--hover" href="#" role="button">Default</a>
                    </div>

                    <div className="marginRight-m">
                        <a className="button button--m button--outlined bg-white bg-orange--hover" href="#" role="button">Orange</a>
                    </div>

                    <div>
                        <a className="button button--m button--outlined bg-white bg-negative--hover" href="#" role="button">Negative</a>
                    </div>
                </div>
            </SectionExample>

            <SectionCode code={ outlinedButtonCode } />
        </section>
    );
}
