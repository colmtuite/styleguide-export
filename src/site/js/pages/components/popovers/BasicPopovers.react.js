import React from 'react';

import InlineCode from '~/components/InlineCode.react';
import SectionCode from '~/components/SectionCode.react';
import SectionDescription from '~/components/SectionDescription.react';
import SectionExample from '~/components/SectionExample.react';
import SectionTitle from '~/components/SectionTitle.react';

import PopoverTop from '~/pages/components/popovers/PopoverTop.react';
import PopoverRight from '~/pages/components/popovers/PopoverRight.react';
import PopoverBottom from '~/pages/components/popovers/PopoverBottom.react';
import PopoverLeft from '~/pages/components/popovers/PopoverLeft.react';

import { basicPopoversCode } from '~/components/CodeSnippets.js';

export default function BasicPopovers() {
    return (
        <section className="marginBottom-xl">
            <div className="marginBottom-m breakPointM-marginBottom-l">
                <SectionTitle sectionTitle={"Basic popover structure"} />

                <SectionDescription>
                    Popovers are used for any contextual content that shouldn't
                    block the the user. Some common uses are dropdown link menus,
                    hovercards, complex tooltips etc. Below are some guidelines
                    for usage and structure:

                    <ul className="list list--unordered marginTop-m lineHeight-l fontSize-l fontWeight-3 c-silver">
                        <li>
                            Only shared styles are componentised globally.
                            Variable styles are applied with additional classes.
                        </li>

                        <li>
                            Padding size can vary. Padding can either be applied
                            to a <InlineCode>&lt;div&gt;</InlineCode> inside the
                            popover element or can be applied directly to children
                            of the popover element. The best approach depends on
                            the structure of the content inside the popover component.
                        </li>

                        <li>Popover content can vary, there are no strict dos and don'ts.</li>

                        <li>
                            Popover max-widths and max-heights usually vary on a
                            case-by-case basis. These properties are not shared
                            globally, therefore, we set the max-width and
                            max-height inline.
                        </li>

                        <li>
                            The caret is optional.
                        </li>
                    </ul>
                </SectionDescription>
            </div>

            <SectionExample>
                <div className="grid grid--1 breakPointM-grid--2 breakPointL-grid--4">
                    <div className="padding-m textAlign-center borderStyle-solid borderColor-smoke borderWidth-0 borderBottomWidth-1 breakPointM-borderRightWidth-1 breakPointL-borderBottomWidth-0">
                        <div className="marginTop-xs marginBottom-s">
                            <PopoverTop />
                        </div>

                        <p className="lineHeight-s fontSize-s fontWeight-3 c-silver">Top popover</p>
                    </div>

                    <div className="padding-m textAlign-center borderStyle-solid borderColor-smoke borderWidth-0 borderBottomWidth-1 breakPointL-borderBottomWidth-0 breakPointL-borderRightWidth-1">
                        <div className="marginTop-xs marginBottom-s">
                            <PopoverRight />
                        </div>

                        <p className="lineHeight-s fontSize-s fontWeight-3 c-silver">Right popover</p>
                    </div>

                    <div className="padding-m textAlign-center borderStyle-solid borderColor-smoke borderWidth-0 borderBottomWidth-1 breakPointM-borderBottomWidth-0 breakPointM-borderRightWidth-1">
                        <div className="marginTop-xs marginBottom-s">
                            <PopoverBottom />
                        </div>

                        <p className="lineHeight-s fontSize-s fontWeight-3 c-silver">Bottom popover</p>
                    </div>

                    <div className="padding-m textAlign-center">
                        <div className="marginTop-xs marginBottom-s">
                            <PopoverLeft />
                        </div>

                        <p className="lineHeight-s fontSize-s fontWeight-3 c-silver">Left popover</p>
                    </div>
                </div>
            </SectionExample>

            <SectionCode code={basicPopoversCode} />
        </section>
    );
}
