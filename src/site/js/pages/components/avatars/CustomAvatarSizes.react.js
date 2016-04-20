import React from 'react';
import SectionTitle from '~/components/SectionTitle';
import SectionDescription from '~/components/SectionDescription';
import SectionExample from '~/components/SectionExample';
import SectionCode from '~/components/SectionCode';
import InlineCode from '~/components/InlineCode';
import { customAvatarSizesCode } from '~/components/CodeSnippets.js';

export default function CustomAvatarSizes() {
    return (
        <section className="marginBottom-m">
            <div className="marginBottom-l">
                <SectionTitle sectionTitle={ "Custom avatar sizes" } />

                <SectionDescription>
                    Certain situations demand a custom avatar size. To handle this, add <InlineCode>.avatar--custom</InlineCode> and set the width and height on the parent container. Due to the variable height, you also need some extra elements to vertically center the initials.
                </SectionDescription>
            </div>

            <SectionExample>
                <div className="padding-m">
                    <div className="inline">
                        <div className="marginRight-m verticalAlign-middle" style={{ width: '200px', height: '200px' }}>
                            <div className="avatar avatar--custom" title="Dean Blacc" style={{ backgroundColor: '#776FB3' }}>
                                <div className="avatar-img" style={{ backgroundImage: 'url(https://res.cloudinary.com/marvel-content/image/fetch/s--Z3QEVGWe--/t_profile_image_200/https://marvelapp-live.storage.googleapis.com/serve/1435759062.46_6862311.gif)' }}></div>

                                <div className="display-table posPinTL height-100 width-100">
                                    <div className="display-tableCell verticalAlign-middle">
                                        <div className="avatar-initials">DB</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="verticalAlign-middle" style={{ width: '200px', height: '200px' }}>
                            <div className="avatar avatar--custom" title="Dean Blacc" style={{ backgroundColor: '#776FB3' }}>
                                <div className="avatar-img"></div>

                                <div className="display-table posPinTL width-100 height-100">
                                    <div className="display-tableCell verticalAlign-middle">
                                        <div className="avatar-initials">DB</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </SectionExample>

            <SectionCode code={ customAvatarSizesCode } />
        </section>
    );
}
