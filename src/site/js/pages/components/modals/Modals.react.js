import React from 'react';

import InlineCode from '~/components/InlineCode.react';
import ModalStandardButton from '~/pages/components/modals/ModalStandardButton.react';
import ModalWithSubtextButton from '~/pages/components/modals/ModalWithSubtextButton.react';
import ModalWithTitleButton from '~/pages/components/modals/ModalWithTitleButton.react';
import PageTitle from '~/components/PageTitle.react';
import SectionCode from '~/components/SectionCode.react';
import SectionDescription from '~/components/SectionDescription.react';
import SectionExample from '~/components/SectionExample.react';
import SectionTitle from '~/components/SectionTitle.react';

import { modalsCode } from '~/components/CodeSnippets.js';

export default function Modals() {
    return (
        <div>
            <PageTitle title="Modals" />

            <section className="marginBottom-m">
                <div className="marginBottom-m breakPointM-marginBottom-l">
                    <SectionTitle sectionTitle={"Default modal"} />

                    <SectionDescription>
                        There are two modal sizes which can be triggered with
                        classes <InlineCode>.modal--s</InlineCode> and{' '}
                        <InlineCode>.modal--m</InlineCode>. All modals should
                        be placed in a wrapper component that has classes{' '}
                        <InlineCode>.modal-overlay</InlineCode> and{' '}
                        <InlineCode>.zi-overlay</InlineCode>.
                    </SectionDescription>
                </div>

                <SectionExample>
                    <div className="grid grid--1 breakPointM-grid--3">
                        <div className="padding-m textAlign-center borderStyle-solid borderColor-smoke borderWidth-0 borderBottomWidth-1 breakPointM-borderBottomWidth-0">
                            <div className="marginTop-xs marginBottom-s">
                                <ModalStandardButton />
                            </div>

                            <p className="lineHeight-s fontSize-s fontWeight-3 c-silver">Default modal</p>
                        </div>

                        <div className="padding-m textAlign-center borderStyle-solid borderColor-smoke borderWidth-0 borderBottomWidth-1 breakPointM-borderBottomWidth-0 breakPointM-borderLeftWidth-1 breakPointM-borderRightWidth-1">
                            <div className="marginTop-xs marginBottom-s">
                                <ModalWithSubtextButton />
                            </div>

                            <p className="lineHeight-s fontSize-s fontWeight-3 c-silver">Modal with subtext</p>
                        </div>

                        <div className="padding-m textAlign-center">
                            <div className="marginTop-xs marginBottom-s">
                                <ModalWithTitleButton />
                            </div>

                            <p className="lineHeight-s fontSize-s fontWeight-3 c-silver">Modal with title</p>
                        </div>
                    </div>
                </SectionExample>

                <SectionCode codeType="language-html" code={modalsCode} />
            </section>
        </div>
    );
}
