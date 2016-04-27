import React from 'react';

import InlineCode from '~/components/InlineCode.react';
import SectionCode from '~/components/SectionCode.react';
import SectionDescription from '~/components/SectionDescription.react';
import SectionExample from '~/components/SectionExample.react';
import SectionTitle from '~/components/SectionTitle.react';

import { typeTagsCode } from '~/components/CodeSnippets.js';

export default function TypeTags() {
    return (
        <section className="marginBottom-xl">
            <div className="marginBottom-m breakPointM-marginBottom-l">
                <SectionTitle sectionTitle={"Type tags"} />

                <SectionDescription>
                    Text can be set in a number of different html tags &mdash;
                    <InlineCode>&lt;p&gt;</InlineCode>, <InlineCode>&lt;small&gt;</InlineCode>,
                    <InlineCode>&lt;strong&gt;</InlineCode>, <InlineCode>&lt;time&gt;</InlineCode>,
                    etc. Each tag communicates a different semantic meaning but
                    tags don't carry any aesthetic value. To order the appearance
                    of a string of text, add additional classes for font size or
                    font weight.
                </SectionDescription>
            </div>

            <SectionExample>
                <div className="padding-m">
                    <div className="padding-xxs">
                        <div className="marginBottom-m">
                            <strong className="fontSize-l lineHeight-l fontWeight-5">
                                This is semantically emphasized text which is also bold.
                            </strong>
                        </div>

                        <small className="fontSize-s lineHeight-s fontWeight-3">
                            This is semantically de-emphasized text which is also small.
                        </small>
                    </div>
                </div>
            </SectionExample>

            <SectionCode code={typeTagsCode} />
        </section>
    );
}
