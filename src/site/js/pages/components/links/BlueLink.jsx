import React from 'react';
import SectionTitle from '~/components/SectionTitle';
import SectionDescription from '~/components/SectionDescription';
import SectionExample from '~/components/SectionExample';
import SectionCode from '~/components/SectionCode';
import { blueLinkCode } from '~/components/CodeSnippets.js';

export default function BlueLink() {
    return (
        <section className="marginBottom-xl">
            <div className="marginBottom-l">
                <SectionTitle sectionTitle={ "Blue link" } />

                <SectionDescription>
                    This is your go-to link. To be used on light backgrounds.
                </SectionDescription>
            </div>

            <SectionExample>
                <div className="padding-m">
                    <a className="link link--blue" href="#">Default blue link</a>
                </div>
            </SectionExample>

            <SectionCode code={ blueLinkCode } />
        </section>
    );
}
