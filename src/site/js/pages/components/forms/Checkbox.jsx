import React from 'react';
import SectionTitle from '~/components/SectionTitle';
import SectionDescription from '~/components/SectionDescription';
import SectionExample from '~/components/SectionExample';
import SectionCode from '~/components/SectionCode';
import { checkboxCode } from '~/components/CodeSnippets.js';

export default function Checkbox() {
    return (
        <section className="marginBottom-xl">
            <div className="marginBottom-l">
                <SectionTitle sectionTitle={ "Checkbox" } />

                <SectionDescription>
                    Use a single class to define a size for your button.
                </SectionDescription>
            </div>

            <SectionExample>
                <div className="padding-m">
                    <label className="form-control checkbox c-silver c-slate--hover userSelect-none">
                        <input type="checkbox" />

                        <span className="form-control-indicator">
                            <svg className="checkbox-tick" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30">
                                <path d="M13.08,16.53l-2.08-2a1.7,1.7,0,0,0-2.48,0,1.88,1.88,0,0,0,0,2.59L12,20.46a1.71,1.71,0,0,0,1.27.54,1.75,1.75,0,0,0,1.3-.55l6.91-8.23a2,2,0,0,0,0-2.66,1.73,1.73,0,0,0-2.54,0l-5.85,7h0Z" />
                            </svg>
                        </span>

                        <span className="link fontWeight-3 fontSize-m">Check this custom checkbox</span>
                    </label>
                </div>
            </SectionExample>

            <SectionCode code={ checkboxCode } />
        </section>
    );
}
