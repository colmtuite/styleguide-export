import React from 'react';
import PageTitle from '~/components/PageTitle.react';
import SectionDescription from '~/components/SectionDescription.react';

export default function Introduction() {
    return (
        <div>
            <PageTitle title="Introduction" />

            <div className="marginBottom-l">
                    <p className="c-slate lineHeight-xl fontSize-xl fontWeight-3">After I joined Marvel in August last year, the first project I worked on was Marvel’s new styleguide. At that time, Marvel was doing a lot of things well. The brand was fun, the UI was simple, colors were bright and animations were snappy. There was a lot to love. But for all its playfulness, Marvel was missing one important factor; consistency.</p>
            </div>
            <div className="marginBottom-l">
                <SectionDescription>
                    After I joined Marvel in August last year, the first project I worked on was Marvel’s new styleguide. At that time, Marvel was doing a lot of things well. The brand was fun, the UI was simple, colors were bright and animations were snappy. There was a lot to love. But for all its playfulness, Marvel was missing one important factor; consistency.

                    As we combed through the site in detail, we began noticing minor inconsistencies all over the place. Colors were not balanced properly. There were many almost identical shades of the same hues. At one point we counted 92 slightly different shades of the same gray. Transition timing was incohesive. The same transition was set slightly differently in various parts of the site. We had almost 100 different font sizes across the site.

                    These inconsistencies carried over into the codebase too: identical UI components were duplicated in code, almost identical colors were defined multiple times. All of this duplication had a negative impact on performance.

                    Before we set out to, we set ourselves some goals:

                    Normalise all styles down to a limited set of options.
                    Abstract reusable components into a documented library.
                    Rewrite the front-end using a system based architecture.
                    Improve internal communication between teams.
                </SectionDescription>
            </div>
        </div>
    );
}
