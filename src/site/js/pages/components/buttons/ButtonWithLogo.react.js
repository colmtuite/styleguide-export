import React from 'react';

import SectionCode from '~/components/SectionCode';
import SectionDescription from '~/components/SectionDescription';
import SectionExample from '~/components/SectionExample';
import SectionTitle from '~/components/SectionTitle';

import { buttonWithLogoCode } from '~/components/CodeSnippets.js';

export default function ButtonWithLogo() {
    return (
        <section className="marginBottom-xl">
            <div className="marginBottom-l">
                <SectionTitle sectionTitle={"Button with logo"} />

                <SectionDescription>
                    Use a single class to define a size for your button.
                </SectionDescription>
            </div>

            <SectionExample>
                <div className="padding-m">
                    <div className="grid grid--2 grid--m">
                        <div>
                            <button className="asana import width-100 button button--l button--ghost bg-marvel--hover">
                                <span
                                    className="logoWrap"
                                    style={{ paddingLeft: '34px' }}>
                                    <svg
                                        className="svgIcon posPinTL"
                                        width="34"
                                        height="50"
                                        viewBox="0 0 34 50">
                                        <circle cx="10" cy="20" r="4" fill="#f95353"></circle>
                                        <circle cx="4" cy="30" r="4" fill="#f95353"></circle>
                                        <circle cx="16" cy="30" r="4" fill="#f95353"></circle>
                                    </svg>

                                    <span>Asana</span>
                                </span>
                            </button>
                        </div>

                        <div>
                            <button className="slack import width-100 button button--l button--ghost bg-marvel--hover">
                                <span
                                    className="logoWrap"
                                    style={{ paddingLeft: '34px' }}>
                                    <svg
                                        className="svgIcon posPinTL"
                                        width="38" height="50"
                                        viewBox="0 0 38 50">
                                        <path fill="#e8a723" d="M13.9,15.76A2,2,0,1,0,10.2,17l5,15.48a2,2,0,0,0,3.7-1.2Z"></path>
                                        <path fill="#3eb890" d="M6.11,18.3a2,2,0,0,0-3.7,1.2L7.44,35a2,2,0,0,0,3.7-1.2Z"></path>
                                        <path fill="#e01765" d="M20.24,28.59a2,2,0,1,0-1.2-3.7l-15.49,5a2,2,0,0,0,1.2,3.7Z"></path>
                                        <path fill="#472a49" d="M6.77,33l3.7-1.2-1.2-3.7-3.7,1.2Z"></path>
                                        <path fill="#cc2027" d="M14.57,30.43l3.7-1.2-1.2-3.7-3.7,1.2Z"></path>
                                        <path fill="#70cadb" d="M17.7,20.79a2,2,0,0,0-1.2-3.7L1,22.12a2,2,0,0,0,1.2,3.7Z"></path>
                                        <path fill="#1a937d" d="M4.24,25.16L7.95,24l-1.2-3.7L3,21.46Z"></path>
                                        <path fill="#65863a" d="M12,22.63l3.7-1.2-1.2-3.7-3.7,1.2Z"></path>
                                    </svg>

                                    <span>Slack</span>
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </SectionExample>

            <SectionCode code={buttonWithLogoCode} />
        </section>
    );
}
