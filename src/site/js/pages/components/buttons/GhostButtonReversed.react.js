import React from 'react';

import InlineCode from '~/components/InlineCode.react';
import SectionCode from '~/components/SectionCode.react';
import SectionDescription from '~/components/SectionDescription.react';
import SectionTitle from '~/components/SectionTitle.react';

import { ghostButtonReversedCode } from '~/components/CodeSnippets.js';

export default function GhostButtonReversed() {
    return (
        <section className="marginBottom-xl">
            <div className="marginBottom-m breakPointM-marginBottom-l">
                <SectionTitle sectionTitle={"Ghost button on dark background"} />

                <SectionDescription>
                    This is the reversed version of ghost buttons which is meant
                    to be used on dark backgrounds or reversed themes. The color
                    options are specified with an additional class
                    <InlineCode>.bg--marvel--hover</InlineCode>,
                    <InlineCode>.bg--orange--hover</InlineCode>,
                    <InlineCode>.bg--negative--hover</InlineCode>, etc.
                </SectionDescription>
            </div>

            <div className="padding-m textAlign-center bg-steel borderRadiusTop-m breakPointM-inline breakPointM-textAlign-left">
                <div>
                    <a
                        className="button button--m button--ghost bg-white--hover is-reversed"
                        href="#"
                        role="button">
                        Default
                    </a>
                </div>
            </div>

            <SectionCode codeType="language-html" code={ghostButtonReversedCode} />
        </section>
    );
}
