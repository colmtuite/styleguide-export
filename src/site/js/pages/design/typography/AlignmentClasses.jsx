import React from 'react';

import { alignmentClassesCode } from '~/components/CodeSnippets.js';
import SectionCode from '~/components/SectionCode';
import SectionDescription from '~/components/SectionDescription';
import SectionExample from '~/components/SectionExample';
import SectionTitle from '~/components/SectionTitle';

export default function AlignmentClasses() {
    return (
        <section className="marginBottom-xl">
            <div className="marginBottom-l">
                <SectionTitle sectionTitle={ "Alignment classes" } />

                <SectionDescription>
                    Left, right or center align text with text alignment classes.
                </SectionDescription>
            </div>

            <SectionExample>
                <div className="padding-m">
                    <div className="padding-xxs">
                        <div className="grid grid--3">
                            <div className="textAlign-left">Left aligned text</div>
                            <div className="textAlign-center">Center aligned text</div>
                            <div className="textAlign-right">Right aligned text</div>
                        </div>
                    </div>
                </div>
            </SectionExample>

            <SectionCode code={ alignmentClassesCode } />
        </section>
    );
}
