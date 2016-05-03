import React from 'react';

import ColorRow from '~/pages/design/colors/ColorRow.react';
import SectionDescription from '~/components/SectionDescription.react';
import SectionTitle from '~/components/SectionTitle.react';

export default function UIColors() {
    return (
        <section className="marginBottom-xl">
            <div className="marginBottom-m breakPointM-marginBottom-l">
                <SectionTitle sectionTitle={"UI Colors"} />

                <SectionDescription>
                    The main UI colors are used for action buttons, alert messages,
                    and form elements. Input fields, for example, can get positive
                    and negative feedback, whereas alert messages can have warning
                    feedback.
                </SectionDescription>
            </div>

            <div className="grid grid--m grid--1 breakPointS-grid--2 breakPointM-grid--3 breakPointL-grid--4">
                <div>
                    <div className="position-relative bg-black borderRadius-m overflow-hidden">
                        <ColorRow
                            color="blue"
                            title="blue"
                            textColor="white"
                            hexValue="#1FB6FF"
                        />
                    </div>
                </div>

                <div>
                    <div className="position-relative bg-black borderRadius-m overflow-hidden">
                        <ColorRow
                            color="positive"
                            title="Positive"
                            textColor="white"
                            hexValue="#13CE66"
                        />
                    </div>
                </div>

                <div>
                    <div className="position-relative bg-black borderRadius-m overflow-hidden">
                        <ColorRow
                            color="negative"
                            title="negative"
                            textColor="white"
                            hexValue="#FF4949"
                        />
                    </div>
                </div>

                <div>
                    <div className="position-relative bg-black borderRadius-m overflow-hidden">
                        <ColorRow
                            color="warning"
                            title="warning"
                            textColor="white"
                            hexValue="#FFC82C"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
