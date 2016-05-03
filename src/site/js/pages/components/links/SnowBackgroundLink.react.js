import React from 'react';

import SectionCode from '~/components/SectionCode.react';
import SectionDescription from '~/components/SectionDescription.react';
import SectionExample from '~/components/SectionExample.react';
import SectionTitle from '~/components/SectionTitle.react';

import { snowBackgroundLinkCode } from '~/components/CodeSnippets.js';

export default function SnowBackgroundLink() {
    return (
        <section className="marginBottom-xl">
            <div className="marginBottom-m breakPointM-marginBottom-l">
                <SectionTitle sectionTitle={"Snow background link"} />

                <SectionDescription>
                    This link receives a light gray background on hover.
                    This link style is commonly used in popovers, modals and
                    navigation menus to provide a larger click area.
                </SectionDescription>
            </div>

            <SectionExample>
                <div className="padding-m textAlign-center breakPointM-textAlign-left">
                    <a
                        className="link link--snowBg paddingTopBottom-xxs paddingLeftRight-s borderRadius-s"
                        href="#">
                        Light background on hover
                    </a>
                </div>
            </SectionExample>

            <SectionCode codeType="language-html" code={snowBackgroundLinkCode} />
        </section>
    );
}
