import React from 'react';
import SectionTitle from '~/components/SectionTitle';
import SectionDescription from '~/components/SectionDescription';
import SectionExample from '~/components/SectionExample';
import SectionCode from '~/components/SectionCode';
import { projectCardCode } from '~/components/CodeSnippets.js';

export default function ProjectCard() {
    return (
        <section className="marginBottom-xl">
            <div className="marginBottom-l">
                <SectionTitle sectionTitle={ "Project card" } />

                <SectionDescription>
                    This is just a regular card like any other card that's supposed to card.
                </SectionDescription>
            </div>

            <SectionExample>
                <div className="padding-m">
                    <div className="padding-xs">
                        <div className="position-relative borderWidth-1 borderStyle-solid borderColor-smoke borderRadius-m bg-snow hideChildren" style={{ width: '260px' }}>
                            <div className="display-table textAlign-center" style={{ height: '200px' }}>
                                <div className="display-tableCell verticalAlign-middle">
                                    <a className="button button--m button--flat bg-marvel hideChildren-child" href="#">View project</a>
                                </div>
                            </div>

                            <div className="bg-white padding-s textAlign-center borderWidth-0 borderTopWidth-1 borderStyle-solid borderColor-smoke borderRadiusBottom-m">
                                <span className="display-block fontSize-m lineHeight-s">Project name</span>

                                <span className="display-block fontSize-xs lineHeight-xs c-silver">6 screens</span>

                                <a className="link link--light">
                                    <svg className="posPinBR padding-s fill-silver verticalAlign-middle hideChildren-child" width="14" height="14" viewBox="0 0 14 14">
                                        <path d="M12 5h-3v-3c0-1.1-.9-2-2-2s-2 .9-2 2v3h-3c-1.1 0-2 .9-2 2s.9 2 2 2h3v3c0 1.1.9 2 2 2s2-.9 2-2v-3h3c1.1 0 2-.9 2-2s-.9-2-2-2z"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </SectionExample>

            <SectionCode code={ projectCardCode } />
        </section>
    );
}
