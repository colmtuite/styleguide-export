import React from 'react';

import SectionCode from '~/components/SectionCode.react';
import SectionDescription from '~/components/SectionDescription.react';
import SectionExample from '~/components/SectionExample.react';
import SectionTitle from '~/components/SectionTitle.react';

import { spacingCode } from '~/components/CodeSnippets.js';

export default function Spacing() {
    return (
        <section className="marginBottom-xl">
            <div className="marginBottom-m breakPointM-marginBottom-l">
                <SectionTitle sectionTitle={"Spacing"} />

                <SectionDescription>
                    These are the available values for spacing.
                </SectionDescription>
            </div>

            <SectionExample>
                <div className="padding-m">
                    <div className="inline">
                        <div className="marginRight-m">
                            <div
                                className="bg-marvel--l borderRadius-m textAlign-center"
                                style={{ height: '300px', width: '300px' }}>
                                <div className="display-table height-100">
                                    <div className="display-tableCell verticalAlign-middle">
                                        <div
                                            className="bg-marvel borderRadius-m centered"
                                            style={{ height: '200px', width: '200px' }}>Margin</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="marginRight-m">
                            <div
                                className="bg-marvel--l borderRadius-m textAlign-center"
                                style={{ height: '300px', width: '300px' }}>
                                <div className="display-table height-100">
                                    <div className="display-tableCell verticalAlign-middle">
                                        <div
                                            className="bg-marvel borderRadius-m centered"
                                            style={{ height: '200px', width: '200px' }}>Padding</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </SectionExample>

            <SectionCode code={spacingCode} />
        </section>
    );
}
