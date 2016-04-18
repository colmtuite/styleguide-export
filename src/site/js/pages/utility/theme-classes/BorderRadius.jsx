import React from 'react';
import SectionTitle from '~/components/SectionTitle';
import SectionDescription from '~/components/SectionDescription';
import SectionExample from '~/components/SectionExample';
import SectionCode from '~/components/SectionCode';

export default function BorderRadius() {
    return (
        <section className="marginBottom-xl">
            <div className="marginBottom-l">
                <SectionTitle sectionTitle={ "Border radius" } />

                <SectionDescription>
                    Hello
                </SectionDescription>
            </div>

            <SectionExample>
                <div className="padding-m">
                    Hello
                </div>
            </SectionExample>

            <SectionCode code="Hello" />
        </section>
    );
}
