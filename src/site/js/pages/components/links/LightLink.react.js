import React from 'react';

import SectionCode from '~/components/SectionCode.react';
import SectionDescription from '~/components/SectionDescription.react';
import SectionExample from '~/components/SectionExample.react';
import SectionTitle from '~/components/SectionTitle.react';

import { lightLinkCode } from '~/components/CodeSnippets.js';

export default function LightLink() {
    return (
        <section className="marginBottom-xl">
            <div className="marginBottom-m breakPointM-marginBottom-l">
                <SectionTitle sectionTitle={"Light link"} />

                <SectionDescription>
                    For subtle or infrequently used links. To be used on light backgrounds.
                </SectionDescription>
            </div>

            <SectionExample>
                <div className="padding-m textAlign-center breakPointM-textAlign-left">
                    <a
                        className="link link--light"
                        href="#">
                        Light link
                    </a>
                </div>
            </SectionExample>

            <SectionCode code={lightLinkCode} />
        </section>
    );
}
