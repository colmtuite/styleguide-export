import React from 'react';

import ColorRow from '~/pages/design/colors/ColorRow.react';
import SectionDescription from '~/components/SectionDescription.react';
import SectionTitle from '~/components/SectionTitle.react';

export default function UIColors() {
    return (
        <section className="marginBottom-xl">
            <div className="marginBottom-l">
                <SectionTitle sectionTitle={"UI Colors"} />

                <SectionDescription>
                    UI colors are used for action buttons and alert messages.
                </SectionDescription>
            </div>

            <div className="grid grid--m grid--2 breakPointM-grid--3 breakPointL-grid--4">
                <div>
                    <div className="position-relative bg-black borderRadius-m overflow-hidden">
                        <ColorRow
                            color="blue"
                            title="blue"
                            textColor="white"
                        />
                    </div>
                </div>

                <div>
                    <div className="position-relative bg-black borderRadius-m overflow-hidden">
                        <ColorRow
                            color="positive"
                            title="Positive"
                            textColor="white"
                        />
                    </div>
                </div>

                <div>
                    <div className="position-relative bg-black borderRadius-m overflow-hidden">
                        <ColorRow
                            color="negative"
                            title="negative"
                            textColor="white"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
