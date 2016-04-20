import React from 'react';
import SectionTitle from '~/components/SectionTitle';
import SectionDescription from '~/components/SectionDescription';
import SectionExample from '~/components/SectionExample';
import SectionCode from '~/components/SectionCode';
import InlineCode from '~/components/InlineCode';
import { clearfixCode } from '~/components/CodeSnippets.js';

export default function Clearfix() {
    return (
        <section className="marginBottom-xl">
            <div className="marginBottom-l">
                <SectionTitle sectionTitle={ "Clearfix" } />

                <SectionDescription>
                    When child elements are floated, their parent element will collapse. To expand the parent again, you must clear those floats with a clearfix. Open dev tools and remove the <InlineCode>.cf</InlineCode> class from the parent to see how the layout collapses.
                </SectionDescription>
            </div>

            <SectionExample>
                <div className="padding-m">
                    <div className="cf">
                        <div className="bg-smoke borderRadius-m float-left" style={{ height: '100px', width: '100px' }}></div>
                        <div className="bg-smoke borderRadius-m float-right" style={{ height: '100px', width: '100px' }}></div>
                    </div>
                </div>
            </SectionExample>

            <SectionCode code={ clearfixCode } />
        </section>
    );
}
