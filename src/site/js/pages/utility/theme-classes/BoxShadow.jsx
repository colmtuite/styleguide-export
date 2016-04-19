import React from 'react';
import SectionTitle from '~/components/SectionTitle';
import SectionDescription from '~/components/SectionDescription';
import SectionExample from '~/components/SectionExample';
import SectionCode from '~/components/SectionCode';
import { boxShadowCode } from '~/components/CodeSnippets.js';

export default function BoxShadow() {
    return (
        <section className="marginBottom-xl">
            <div className="marginBottom-l">
                <SectionTitle sectionTitle={ "Box shadow" } />

                <SectionDescription>
                    These are the available values for box shadow.
                </SectionDescription>
            </div>

            <SectionExample>
                <div className="padding-m">
                    <div className="inline">
                        <div className="marginRight-m">
                            <div className="bg-white borderRadius-m borderWidth-1 borderStyle-solid borderColor-smoke boxShadow-distant" style={{ height: '100px', width: '100px' }}></div>
                        </div>

                        <div className="marginRight-m">
                            <div className="bg-white borderRadius-m borderWidth-1 borderStyle-solid borderColor-smoke boxShadow-deboss--hover" style={{ height: '100px', width: '100px' }}></div>
                        </div>

                        <div className="marginRight-m">
                            <div className="bg-white borderRadius-m borderWidth-1 borderStyle-solid borderColor-smoke boxShadow-emboss--hover" style={{ height: '100px', width: '100px' }}></div>
                        </div>

                        <div>
                            <div className="bg-white borderRadius-m borderWidth-1 borderStyle-solid borderColor-smoke boxShadow-raise--hover" style={{ height: '100px', width: '100px' }}></div>
                        </div>
                    </div>
                </div>
            </SectionExample>

            <SectionCode code={ boxShadowCode } />
        </section>
    );
}
