import React from 'react';

import SectionCode from '~/components/SectionCode.react';
import SectionDescription from '~/components/SectionDescription.react';
import SectionExample from '~/components/SectionExample.react';
import SectionTitle from '~/components/SectionTitle.react';

import { alignmentClassesCode } from '~/components/CodeSnippets.js';

export default function AlignmentClasses() {
    return (
        <section className="marginBottom-xl">
            <div className="marginBottom-m breakPointM-marginBottom-l">
                <SectionTitle sectionTitle={"Alignment classes"} />

                <SectionDescription>
                    Left, right or center align text with text alignment classes.
                </SectionDescription>
            </div>

            <SectionExample>
                <div className="padding-m">
                    <div className="padding-xxs">
                        <div className="grid grid--m grid--1 breakPointM-grid--3">
                            <div className="textAlign-left">
                                Left aligned text
                            </div>

                            <div className="textAlign-center">
                                Center aligned text
                            </div>

                            <div className="textAlign-right">
                                Right aligned text
                            </div>
                        </div>
                    </div>
                </div>
            </SectionExample>

            <SectionCode code={alignmentClassesCode} />
        </section>
    );
}
