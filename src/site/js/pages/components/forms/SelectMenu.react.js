import React from 'react';

import InlineCode from '~/components/InlineCode.react';
import SectionCode from '~/components/SectionCode.react';
import SectionDescription from '~/components/SectionDescription.react';
import SectionExample from '~/components/SectionExample.react';
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

            <SectionExample>
                <div className="grid grid--2">
                    <div className="padding-m textAlign-center borderWidth-0 borderRightWidth-1 borderBottomWidth-1 borderStyle-solid borderColor-smoke">
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

                    <div className="padding-m textAlign-center borderWidth-0 borderBottomWidth-1 borderStyle-solid borderColor-smoke">
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

                    <div className="padding-m textAlign-center borderWidth-0 borderRightWidth-1 borderStyle-solid borderColor-smoke">
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

                    <div className="padding-m textAlign-center">
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
            </SectionExample>

            <SectionCode code={selectMenuCode} />
        </section>
    );
}
