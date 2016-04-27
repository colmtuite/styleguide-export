import React from 'react';

import SectionCode from '~/components/SectionCode.react';
import SectionDescription from '~/components/SectionDescription.react';
import SectionExample from '~/components/SectionExample.react';
import SectionTitle from '~/components/SectionTitle.react';

import { blueLinkCode } from '~/components/CodeSnippets.js';

export default function BlueLink() {
    return (
        <section className="marginBottom-xl">
            <div className="marginBottom-l">
                <SectionTitle sectionTitle={"Blue link"} />

                <SectionDescription>
                    This is the default, most common link style.
                </SectionDescription>
            </div>

            <SectionExample>
                <div className="padding-m textAlign-center breakPointM-textAlign-left">
                    <a
                        className="link link--blue"
                        href="#">
                        Default blue link
                    </a>
                </div>
            </SectionExample>

            <SectionCode code={blueLinkCode} />
        </section>
    );
}
