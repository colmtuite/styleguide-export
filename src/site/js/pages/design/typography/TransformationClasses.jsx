import React from 'react';

import { transformationClassesCode } from '~/components/CodeSnippets.js';
import SectionCode from '~/components/SectionCode';
import SectionDescription from '~/components/SectionDescription';
import SectionExample from '~/components/SectionExample';
import SectionTitle from '~/components/SectionTitle';

export default function TransformationClasses() {
    return (
        <section className="marginBottom-m">
            <div className="marginBottom-l">
                <SectionTitle sectionTitle={ "Transformation classes" } />

                <SectionDescription>
                    Transform text with text transformation classes.
                </SectionDescription>
            </div>

            <SectionExample>
                <div className="padding-m">
                    <div className="padding-xxs">
                        <div className="grid grid--3">
                            <div className="textTransform-lowercase textAlign-left">Lowercased text</div>
                            <div className="textTransform-uppercase textAlign-center">Uppercased text</div>
                            <div className="textTransform-capitalize textAlign-right">Capitalized text</div>
                        </div>
                    </div>
                </div>
            </SectionExample>

            <SectionCode code={ transformationClassesCode } />
        </section>
    );
}
