import React from 'react';

import InlineCode from '~/components/InlineCode.react';
import SectionCode from '~/components/SectionCode.react';
import SectionDescription from '~/components/SectionDescription.react';
import SectionTitle from '~/components/SectionTitle.react';

import { selectMenuCode } from '~/components/CodeSnippets.js';

export default function SelectMenu() {
    return (
        <section className="marginBottom-xl">
            <div className="marginBottom-l">
                <SectionTitle sectionTitle={"Select menu"} />

                <SectionDescription>
                    Select menus come in fours sizes which are applied with
                    <InlineCode>.select--xl</InlineCode>,
                    <InlineCode>.select--l</InlineCode>,
                    <InlineCode>.select--m</InlineCode> and
                    <InlineCode>.select--s</InlineCode> on the
                    <InlineCode>.select</InlineCode> wrapper component.
                </SectionDescription>
            </div>

            <div className="grid grid--1 breakPointL-grid--2">
                <div
                    className="padding-m textAlign-center boxShadow-smoke borderRadiusTop-m breakPointL-borderRadiusTopLeft-m"
                    style={{ marginTop: '-1px', marginRight: '-1px' }}>
                    <div className="width-80 display-inlineBlock marginTop-xs marginBottom-s">
                        <div className="select select--default select--xl">
                            <select>
                                <option>Placeholder text</option>
                                <option>Option 1</option>
                                <option>Option 2</option>
                                <option>Option 3</option>
                                <option>Option 4</option>
                                <option>Option 5</option>
                            </select>
                        </div>
                    </div>

                    <p className="lineHeight-s fontSize-s fontWeight-3 c-silver">Extra Large Select Menu</p>
                </div>

                <div
                    className="padding-m textAlign-center boxShadow-smoke borderRadius-0 breakPointL-borderRadiusTopRight-m"
                    style={{ marginTop: '-1px' }}>
                    <div className="width-80 display-inlineBlock marginTop-xs marginBottom-s paddingTopBottom-xxs">
                        <div className="select select--default select--l">
                            <select>
                                <option>Placeholder text</option>
                                <option>Option 1</option>
                                <option>Option 2</option>
                                <option>Option 3</option>
                                <option>Option 4</option>
                                <option>Option 5</option>
                            </select>
                        </div>
                    </div>

                    <p className="lineHeight-s fontSize-s fontWeight-3 c-silver">Large Select Menu</p>
                </div>

                <div
                    className="padding-m textAlign-center boxShadow-smoke"
                    style={{ marginTop: '-1px', marginRight: '-1px' }}>
                    <div className="width-80 display-inlineBlock marginTop-xs marginBottom-s paddingTopBottom-xs">
                        <div className="select select--default select--m">
                            <select>
                                <option>Placeholder text</option>
                                <option>Option 1</option>
                                <option>Option 2</option>
                                <option>Option 3</option>
                                <option>Option 4</option>
                                <option>Option 5</option>
                            </select>
                        </div>
                    </div>

                    <p className="lineHeight-s fontSize-s fontWeight-3 c-silver">Medium Select Menu</p>
                </div>

                <div
                    className="padding-m textAlign-center boxShadow-smoke"
                    style={{ marginTop: '-1px' }}>
                    <div className="width-80 display-inlineBlock marginTop-xs marginBottom-s paddingTopBottom-s">
                        <div className="select select--default select--s">
                            <select>
                                <option>Placeholder text</option>
                                <option>Option 1</option>
                                <option>Option 2</option>
                                <option>Option 3</option>
                                <option>Option 4</option>
                                <option>Option 5</option>
                            </select>
                        </div>
                    </div>

                    <p className="lineHeight-s fontSize-s fontWeight-3 c-silver">Small Select Menu</p>
                </div>
            </div>

            <div style={{ marginRight: '1px' }}>
                <SectionCode code={selectMenuCode} />
            </div>
        </section>
    );
}
