import React from 'react';

import SectionCode from '~/components/SectionCode';
import SectionDescription from '~/components/SectionDescription';
import SectionExample from '~/components/SectionExample';
import SectionTitle from '~/components/SectionTitle';

import { snowBackgroundLinkCode } from '~/components/CodeSnippets.js';

export default function SnowBackgroundLink() {
    return (
        <section className="marginBottom-xl">
            <div className="marginBottom-l">
                <SectionTitle sectionTitle={"Snow background link"} />

                <SectionDescription>
                    This link receives a light gray background on hover.
                    This link style is commonly used in popovers, modals and
                    navigation menus to provide a larger click area.
                </SectionDescription>
            </div>

            <SectionExample>
                <div className="padding-m">
                    <a
                        className="link link--snowBg paddingTopBottom-xxs paddingLeftRight-s borderRadius-s"
                        href="#">
                        Light background on hover
                    </a>
                </div>
            </SectionExample>

            <SectionCode code={snowBackgroundLinkCode} />
        </section>
    );
}
