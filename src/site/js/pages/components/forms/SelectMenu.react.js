import React from 'react';

import SectionCode from '~/components/SectionCode';
import SectionDescription from '~/components/SectionDescription';
import SectionExample from '~/components/SectionExample';
import SectionTitle from '~/components/SectionTitle';

import { selectMenuCode } from '~/components/CodeSnippets.js';

export default function SelectMenu() {
    return (
        <section className="marginBottom-xl">
            <div className="marginBottom-l">
                <SectionTitle sectionTitle={"Select menu"} />

                <SectionDescription>
                    Use a single class to define a size for your button.
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
                            <div className="select select--default select--legible">
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
