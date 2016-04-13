import React from 'react';
import SectionTitle from '~/components/SectionTitle';
import SectionDescription from '~/components/SectionDescription';
import SectionExample from '~/components/SectionExample';
import SectionCode from '~/components/SectionCode';
import { buttonWithLogoCode } from '~/components/CodeSnippets.js';

export default function ButtonWithLogo() {
    return (
        <section className="marginBottom-xl">
            <div className="marginBottom-l">
                <SectionTitle sectionTitle={ "Button with logo" } />

                <SectionDescription>
                    Use a single class to define a size for your button.
                </SectionDescription>
            </div>

            <SectionExample>
                <div className="padding-m">
                    <div className="grid grid--2 grid--m">
                        <div>
                            <button className="asana import width-100 button button--l button--ghost bg-marvel--hover">
                                <span className="logoWrap" style={{ paddingLeft: '34px' }}>
                                    <svg className="svgIcon posPinTL" xmlns="http://www.w3.org/2000/svg" width="34" height="50" viewBox="0 0 34 50"><circle cx="10" cy="20" r="4" fill="#f95353"></circle><circle cx="4" cy="30" r="4" fill="#f95353"></circle><circle cx="16" cy="30" r="4" fill="#f95353"></circle></svg>
                                    <span>Asana</span>
                                </span>
                            </button>
                        </div>

                        <div>
                            <button className="slack import width-100 button button--l button--ghost bg-marvel--hover">
                                <span className="logoWrap" style={{ paddingLeft: '34px' }}>
                                    <svg className="svgIcon posPinTL" xmlns="http://www.w3.org/2000/svg" width="38" height="50" viewBox="0 0 38 50"><path d="M13.9,15.76A2,2,0,1,0,10.2,17l5,15.48a2,2,0,0,0,3.7-1.2Z" fill="#e8a723"></path><path d="M6.11,18.3a2,2,0,0,0-3.7,1.2L7.44,35a2,2,0,0,0,3.7-1.2Z" fill="#3eb890"></path><path d="M20.24,28.59a2,2,0,1,0-1.2-3.7l-15.49,5a2,2,0,0,0,1.2,3.7Z" fill="#e01765"></path><path d="M6.77,33l3.7-1.2-1.2-3.7-3.7,1.2Z" fill="#472a49"></path><path d="M14.57,30.43l3.7-1.2-1.2-3.7-3.7,1.2Z" fill="#cc2027"></path><path d="M17.7,20.79a2,2,0,0,0-1.2-3.7L1,22.12a2,2,0,0,0,1.2,3.7Z" fill="#70cadb"></path><path d="M4.24,25.16L7.95,24l-1.2-3.7L3,21.46Z" fill="#1a937d"></path><path d="M12,22.63l3.7-1.2-1.2-3.7-3.7,1.2Z" fill="#65863a"></path></svg>
                                    <span>Slack</span>
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </SectionExample>

            <SectionCode code={ buttonWithLogoCode } />
        </section>
    );
}
