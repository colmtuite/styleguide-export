import React from 'react';
import SectionTitle from '~/components/SectionTitle.react';
import SectionDescription from '~/components/SectionDescription.react';
import SectionExample from '~/components/SectionExample.react';
import SectionCode from '~/components/SectionCode.react';
import InlineCode from '~/components/InlineCode.react';
import { customAvatarSizesCode } from '~/components/CodeSnippets.js';

export default function CustomAvatarSizes() {
    return (
        <section className="marginBottom-m">
            <div className="marginBottom-l">
                <SectionTitle sectionTitle={"Custom avatar sizes"} />

                <SectionDescription>
                    Certain situations demand a custom avatar size. To handle
                    this, add <InlineCode>.avatar--custom</InlineCode> and set
                    the width and height on the parent container. Due to the
                    variable height, you also need some extra elements to
                    vertically center the initials.
                </SectionDescription>
            </div>

            <SectionExample>
                <div className="padding-m">
                    <div className="textAlign-center breakPointM-inline breakPointM-textAlign-left">
                        <div className="marginBottom-m breakPointM-marginBottom-0 breakPointM-marginRight-m">
                            <div
                                style={{
                                    width: '200px',
                                    height: '200px',
                                    margin: '0 auto',
                                }}>
                                <div
                                    className="avatar avatar--custom"
                                    title="Dean Blacc"
                                    style={{ backgroundColor: '#776FB3' }}>
                                    <div
                                        className="avatar-img"
                                        style={{ backgroundImage: 'url(https://res.cloudinary.com/marvel-content/image/fetch/s--Z3QEVGWe--/t_profile_image_200/https://marvelapp-live.storage.googleapis.com/serve/1435759062.46_6862311.gif)' }}>
                                    </div>

                                    <div className="display-table posPinTL height-100 width-100">
                                        <div className="display-tableCell verticalAlign-middle">
                                            <div className="avatar-initials">DB</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div
                                style={{
                                    width: '200px',
                                    height: '200px',
                                    margin: '0 auto',
                                }}>
                                <div
                                    className="avatar avatar--custom"
                                    title="Dean Blacc"
                                    style={{ backgroundColor: '#776FB3' }}>
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
                </div>
            </SectionExample>

            <SectionCode code={customAvatarSizesCode} />
        </section>
    );
}
