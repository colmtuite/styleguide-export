import React from 'react';

import SectionCode from '~/components/SectionCode.react';
import SectionDescription from '~/components/SectionDescription.react';
import SectionTitle from '~/components/SectionTitle.react';

import { opaqueLinksUnderlined } from '~/components/CodeSnippets.js';

export default function OpaqueLinksUnderlined() {
    return (
        <section className="marginBottom-xl">
            <div className="marginBottom-m breakPointM-marginBottom-l">
                <SectionTitle sectionTitle={ "Opaque link" } />

                <SectionDescription>
                    To be used on dark backgrounds that are not part of the
                    Marvel color scheme.
                </SectionDescription>
            </div>

            <div className="inline padding-m textAlign-center breakPointM-textAlign-left bg-steel borderRadiusTop-m">
                <div className="marginRight-m">
                    <a
                        className="link link--opaque link--underline fontSize-m"
                        href="#">
                        Opaque link
                    </a>
                </div>

                <div>
                    <a
                        className="link link--opaqueReversed link--underline fontSize-m"
                        href="#">
                        Opaque link reversed
                    </a>
                </div>
            </div>

            <SectionCode codeType="language-html" code={ opaqueLinksUnderlined } />
        </section>
    );
}
