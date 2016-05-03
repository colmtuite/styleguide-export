import React from 'react';

import SectionCode from '~/components/SectionCode.react';
import SectionDescription from '~/components/SectionDescription.react';
import SectionExample from '~/components/SectionExample.react';
import SectionTitle from '~/components/SectionTitle.react';
import InlineCode from '~/components/InlineCode.react';
import PopoverWithLinks from '~/pages/components/popovers/PopoverWithLinks.react';
import PopoverWithSeparator from '~/pages/components/popovers/PopoverWithSeparator.react';

import { popoverWithLinks } from '~/components/CodeSnippets.js';

export default function PopoverList() {
    return (
        <section className="marginBottom-xl">
            <div className="marginBottom-m breakPointM-marginBottom-l">
                <SectionTitle sectionTitle={"Popover with links"} />

                <SectionDescription>
                    A simple popout menu with links, possibly used for header
                    nav menus, filters etc. Add an optional element
                    <InlineCode>.popover-separator</InlineCode> as a separator
                    between popover list elements.
                </SectionDescription>
            </div>

            <SectionExample>
                <div className="grid grid--1 breakPointM-grid--2">
                    <div className="padding-m textAlign-center borderStyle-solid borderColor-smoke borderWidth-0 borderBottomWidth-1 breakPointM-borderBottomWidth-0 breakPointM-borderRightWidth-1">
                        <div className="marginTop-xs marginBottom-s">
                            <PopoverWithLinks />
                        </div>

                        <p className="lineHeight-s fontSize-s fontWeight-3 c-silver">Popover with links</p>
                    </div>

                    <div className="padding-m textAlign-center">
                        <div className="marginTop-xs marginBottom-s">
                            <PopoverWithSeparator />
                        </div>

                        <p className="lineHeight-s fontSize-s fontWeight-3 c-silver">Popover with separator</p>
                    </div>
                </div>
            </SectionExample>

            <SectionCode codeType="language-html" code={popoverWithLinks} />
        </section>
    );
}
