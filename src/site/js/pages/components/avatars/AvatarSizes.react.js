import React from 'react';

import InlineCode from '~/components/InlineCode.react';
import SectionCode from '~/components/SectionCode.react';
import SectionDescription from '~/components/SectionDescription.react';
import SectionExample from '~/components/SectionExample.react';
import SectionTitle from '~/components/SectionTitle.react';

import { avatarSizesCode } from '~/components/CodeSnippets.js';

export default function AvatarSizes() {
    return (
        <section className="marginBottom-xl">
            <div className="marginBottom-l">
                <SectionTitle sectionTitle={"Avatar sizes"} />

                <SectionDescription>
                    Use size classes <InlineCode>.avatar--xs</InlineCode>,
                    <InlineCode>.avatar--s</InlineCode>,
                    <InlineCode>.avatar--m</InlineCode>,
                    <InlineCode>.avatar--l</InlineCode>, or
                    <InlineCode>.avatar--xl</InlineCode> to set the
                    appropriate size. The default size is medium.
                </SectionDescription>
            </div>

            <SectionExample>
                <div className="padding-m">
                    <div className="textAlign-center breakPointM-inline breakPointM-textAlign-left">
                        <div className="marginBottom-m breakPointM-marginBottom-0 breakPointM-marginRight-xs breakPointL-marginRight-m verticalAlign-middle">
                            <div
                                className="avatar avatar--xl"
                                title="Dean Blacc"
                                style={{ margin: '0 auto' }}>
                                <div
                                    className="avatar-img"
                                    style={{ backgroundImage: 'url(https://res.cloudinary.com/marvel-content/image/fetch/s--Z3QEVGWe--/t_profile_image_200/https://marvelapp-live.storage.googleapis.com/serve/1435759062.46_6862311.gif)' }}>
                                </div>

                                <div className="avatar-initials">DB</div>
                            </div>
                        </div>

                        <div className="marginBottom-m breakPointM-marginBottom-0 breakPointM-marginRight-xs breakPointL-marginRight-m verticalAlign-middle">
                            <div
                                className="avatar avatar--l"
                                title="Dean Blacc"
                                style={{ margin: '0 auto' }}>
                                <div
                                    className="avatar-img"
                                    style={{ backgroundImage: 'url(https://res.cloudinary.com/marvel-content/image/fetch/s--Z3QEVGWe--/t_profile_image_200/https://marvelapp-live.storage.googleapis.com/serve/1435759062.46_6862311.gif)' }}>
                                </div>

                                <div className="avatar-initials">DB</div>
                            </div>
                        </div>

                        <div className="marginBottom-m breakPointM-marginBottom-0 breakPointM-marginRight-xs breakPointL-marginRight-m verticalAlign-middle">
                            <div
                                className="avatar avatar--m"
                                title="Dean Blacc"
                                style={{ margin: '0 auto' }}>
                                <div
                                    className="avatar-img"
                                    style={{ backgroundImage: 'url(https://res.cloudinary.com/marvel-content/image/fetch/s--Z3QEVGWe--/t_profile_image_200/https://marvelapp-live.storage.googleapis.com/serve/1435759062.46_6862311.gif)' }}>
                                </div>

                                <div className="avatar-initials">DB</div>
                            </div>
                        </div>

                        <div className="marginBottom-m breakPointM-marginBottom-0 breakPointM-marginRight-xs breakPointL-marginRight-m verticalAlign-middle">
                            <div
                                className="avatar avatar--s"
                                title="Dean Blacc"
                                style={{ margin: '0 auto' }}>
                                <div
                                    className="avatar-img"
                                    style={{ backgroundImage: 'url(https://res.cloudinary.com/marvel-content/image/fetch/s--Z3QEVGWe--/t_profile_image_200/https://marvelapp-live.storage.googleapis.com/serve/1435759062.46_6862311.gif)' }}>
                                </div>

                                <div className="avatar-initials">DB</div>
                            </div>
                        </div>

                        <div className="marginBottom-m breakPointM-marginBottom-0 verticalAlign-middle">
                            <div
                                className="avatar avatar--xs"
                                title="Dean Blacc"
                                style={{ margin: '0 auto' }}>
                                <div
                                    className="avatar-img"
                                    style={{ backgroundImage: 'url(https://res.cloudinary.com/marvel-content/image/fetch/s--Z3QEVGWe--/t_profile_image_200/https://marvelapp-live.storage.googleapis.com/serve/1435759062.46_6862311.gif)' }}>
                                </div>

                                <div className="avatar-initials">DB</div>
                            </div>
                        </div>
                    </div>
                </div>
            </SectionExample>

            <SectionCode code={avatarSizesCode} />
        </section>
    );
}
