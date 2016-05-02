import React from 'react';

import SectionCode from '~/components/SectionCode.react';
import SectionDescription from '~/components/SectionDescription.react';
import SectionExample from '~/components/SectionExample.react';
import SectionTitle from '~/components/SectionTitle.react';

import { individualSpacingCode } from '~/components/CodeSnippets.js';

export default function individualSpacing() {
    return (
        <section className="marginBottom-xl">
            <div className="marginBottom-m breakPointM-marginBottom-l">
                <SectionTitle sectionTitle={"Individual spacing"} />

                <SectionDescription>
                    Individual spacing can be applied to a single side of an element
                    using either margin or padding. Again, both margin and padding
                    share the same predefined scale. The same 6 sizes are available.
                </SectionDescription>
            </div>

            <SectionExample>
                <div className="grid grid--1 breakPointS-grid--2 breakPointL-grid--4">
                    <div className="padding-m textAlign-center borderStyle-solid borderColor-smoke borderWidth-0 borderBottomWidth-1 breakPointS-borderRightWidth-1 breakPointL-borderBottomWidth-0">
                        <div className="aspectRatio aspectRatio--100">
                            <div className="aspectRatio-content">
                                <div
                                    className="position-relative height-100 bg-blue--transparent borderRadius-m paddingTop-m">
                                    <div className="width-100 height-100 bg-marvel"></div>
                                    <div
                                        className="posPinTL borderWidth-0 borderTopWidth-1 borderStyle-dashed borderColor-blue--d width-100 marginTop-m"
                                        style={{ height: '1px' }}>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="padding-m textAlign-center borderStyle-solid borderColor-smoke borderWidth-0 borderBottomWidth-1 breakPointL-borderBottomWidth-0 breakPointL-borderRightWidth-1 breakPointL-borderBottomWidth-0">
                        <div className="aspectRatio aspectRatio--100">
                            <div className="aspectRatio-content">
                                <div
                                    className="position-relative height-100 bg-blue--transparent borderRadius-m paddingRight-m">
                                    <div className="width-100 height-100 bg-marvel"></div>
                                    <div
                                        className="posPinTR borderWidth-0 borderRightWidth-1 borderStyle-dashed borderColor-blue--d height-100 marginRight-m"
                                        style={{ width: '1px' }}>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="padding-m textAlign-center borderStyle-solid borderColor-smoke borderWidth-0 borderBottomWidth-1 breakPointS-borderBottomWidth-0 breakPointS-borderRightWidth-1 breakPointL-borderBottomWidth-0">
                        <div className="aspectRatio aspectRatio--100">
                            <div className="aspectRatio-content">
                                <div
                                    className="position-relative height-100 bg-blue--transparent borderRadius-m paddingBottom-m">
                                    <div className="width-100 height-100 bg-marvel"></div>
                                    <div
                                        className="posPinBL borderWidth-0 borderBottomWidth-1 borderStyle-dashed borderColor-blue--d width-100 marginBottom-m"
                                        style={{ height: '1px' }}>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="padding-m">
                        <div className="aspectRatio aspectRatio--100">
                            <div className="aspectRatio-content">
                                <div
                                    className="position-relative height-100 bg-blue--transparent borderRadius-m paddingLeft-m">
                                    <div className="width-100 height-100 bg-marvel"></div>
                                    <div
                                        className="posPinTL borderWidth-0 borderLeftWidth-1 borderStyle-dashed borderColor-blue--d height-100 marginLeft-m"
                                        style={{ width: '1px' }}>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </SectionExample>

            <SectionCode code={individualSpacingCode} />
        </section>
    );
}
