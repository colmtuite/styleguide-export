import React from 'react';

import SectionCode from '~/components/SectionCode.react';
import SectionDescription from '~/components/SectionDescription.react';
import SectionExample from '~/components/SectionExample.react';
import SectionTitle from '~/components/SectionTitle.react';

import { transformationClassesCode } from '~/components/CodeSnippets.js';

export default function TransformationClasses() {
    return (
        <section className="marginBottom-m">
            <div className="marginBottom-l">
                <SectionTitle sectionTitle={"Transformation classes"} />

                <SectionDescription>
                    Transform text with text transformation classes.
                </SectionDescription>
            </div>

            <SectionExample>
                <div className="padding-m">
                    <div className="padding-xxs">
                        <div className="grid grid--3">
                            <div className="textTransform-lowercase textAlign-left">
                                Lowercased text
                            </div>

                            <div className="textTransform-uppercase textAlign-center">
                                Uppercased text
                            </div>

                            <div className="textTransform-capitalize textAlign-right">
                                Capitalized text
                            </div>
                        </div>
                    </div>
                </div>
            </SectionExample>

            <SectionCode code={transformationClassesCode} />
        </section>
    );
}
