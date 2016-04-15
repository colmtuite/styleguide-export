import React from 'react';
import SectionTitle from '~/components/SectionTitle';
import SectionDescription from '~/components/SectionDescription';
import SectionExample from '~/components/SectionExample';
import SectionCode from '~/components/SectionCode';
import { lightLinkCode } from '~/components/CodeSnippets.js';

export default function LightLink() {
    return (
        <section className="marginBottom-xl">
            <div className="marginBottom-l">
                <SectionTitle sectionTitle={ "Light link" } />

                <SectionDescription>
                    For subtle or infrequently used links. To be used on light backgrounds.
                </SectionDescription>
            </div>

            <SectionExample>
                <div className="padding-m">
                    <a className="link link--light" href="#">Light link</a>
                </div>
            </SectionExample>

            <SectionCode code={ lightLinkCode } />
        </section>
    );
}
