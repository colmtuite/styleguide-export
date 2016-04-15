import React from 'react';
import SectionTitle from '~/components/SectionTitle';
import SectionDescription from '~/components/SectionDescription';
import SectionExample from '~/components/SectionExample';
import SectionCode from '~/components/SectionCode';
import { negativeLinkCode } from '~/components/CodeSnippets.js';

export default function NegativeLink() {
    return (
        <section className="marginBottom-xl">
            <div className="marginBottom-l">
                <SectionTitle sectionTitle={ "Negative link" } />

                <SectionDescription>
                    Some links need a visual warning to prevent harmful, unintentional actions.
                </SectionDescription>
            </div>

            <SectionExample>
                <div className="padding-m">
                    <a className="link link--negative" href="#">Negative link</a>
                </div>
            </SectionExample>

            <SectionCode code={ negativeLinkCode } />
        </section>
    );
}
