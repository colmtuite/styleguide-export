import React from 'react';
import SectionTitle from '~/components/SectionTitle.react';
import SectionDescription from '~/components/SectionDescription.react';
import SectionExample from '~/components/SectionExample.react';
import SectionCode from '~/components/SectionCode.react';
import { negativeLinkCode } from '~/components/CodeSnippets.js';

export default function NegativeLink() {
    return (
        <section className="marginBottom-xl">
            <div className="marginBottom-m breakPointM-marginBottom-l">
                <SectionTitle sectionTitle={ "Negative link" } />

                <SectionDescription>
                    Some links need a visual warning to prevent harmful, unintentional actions.
                </SectionDescription>
            </div>

            <SectionExample>
                <div className="padding-m textAlign-center breakPointM-textAlign-left">
                    <a className="link link--negative" href="#">Negative link</a>
                </div>
            </SectionExample>

            <SectionCode codeType="language-html" code={ negativeLinkCode } />
        </section>
    );
}
