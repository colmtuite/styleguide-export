import React from 'react';

import SectionCode from '~/components/SectionCode.react';
import SectionDescription from '~/components/SectionDescription.react';
import SectionExample from '~/components/SectionExample.react';
import SectionTitle from '~/components/SectionTitle.react';
import InlineCode from '~/components/InlineCode.react';

import { popoverWithLinks } from '~/components/CodeSnippets.js';

export default function PopoverOnHover() {
    return (
        <section className="marginBottom-m">
            <div className="marginBottom-m breakPointM-marginBottom-l">
                <SectionTitle sectionTitle={"Popover that appears on hover"} />

                <SectionDescription>
                    Add an optional element <InlineCode>.popover-separator</InlineCode>
                    as a separator between popover list elements.
                </SectionDescription>
            </div>

            <SectionExample>
                <div className="padding-m textAlign-center breakPointM-textAlign-left">
                    <div className="popover-trigger position-relative display-inlineBlock">
                        <div className="popover popover--s popover--top has-caret">
                            <div className="popover-list">
                                <a href="#">Facebook</a>
                                <a href="#">Twitter</a>
                                <a href="#">Google+</a>
                                <div className="popover-separator"></div>
                                <a href="#">Write a Medium post</a>
                            </div>
                        </div>

                        <button className="button button--flat button--m bg-positive">
                            Hover over me!
                        </button>
                    </div>
                </div>
            </SectionExample>

            <SectionCode codeType="language-html" code={popoverWithLinks} />
        </section>
    );
}
