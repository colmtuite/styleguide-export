import React from 'react';
import SectionTitle from '~/components/SectionTitle';
import SectionDescription from '~/components/SectionDescription';
import SectionCode from '~/components/SectionCode';
import InlineCode from '~/components/InlineCode';
import { ghostButtonReversedCode } from '~/components/CodeSnippets.js';

export default function GhostButtonReversed() {
    return (
        <section className="marginBottom-xl">
            <div className="marginBottom-l">
                <SectionTitle sectionTitle={ "Ghost button on dark background" } />

                <SectionDescription>
                    Ghost buttons should be used to signify optional, infrequent or subtle actions. There are three color options, specified with an additional class <InlineCode>.bg--marvel--hover</InlineCode>, <InlineCode>.bg--orange--hover</InlineCode> or <InlineCode>.bg--negative--hover</InlineCode>.
                </SectionDescription>
            </div>

            <div className="padding-m inline bg-steel borderRadiusTop-m">
                <div>
                    <a className="button button--m button--ghost bg-white--hover is-reversed" href="#" role="button">Default</a>
                </div>
            </div>

            <SectionCode code={ ghostButtonReversedCode } />
        </section>
    );
}
